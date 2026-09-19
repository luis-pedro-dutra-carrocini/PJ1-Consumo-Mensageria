# PJ1-Consumo-Mensageria

## 📦 API de Pedidos — Consumo de Mensageria + Persistência

Documentação dos dois processos que compõem a solução:

1. **API REST** (`server.js`) — expõe os dados de pedidos já persistidos no PostgreSQL.
2. **Consumer Pub/Sub** (`consumer.js`) — consome mensagens de pedidos, transforma e persiste no banco.

---

## 🏗️ Arquitetura geral

```
┌────────────────────┐      publica       ┌──────────────────┐
│   Produtor (fora)  │ ─────────────────► │  Google Pub/Sub  │
└────────────────────┘                    └────────┬─────────┘
                                                   │ subscribe
                                                   ▼
                                          ┌──────────────────┐
                                          │   consumer.js    │
                                          │  (PubSubConsumer)│
                                          └────────┬─────────┘
                                                   │ prisma.$transaction
                                                   ▼
                                          ┌──────────────────┐
                                          │   PostgreSQL     │
                                          └────────┬─────────┘
                                                   │ prisma
                                                   ▼
                                          ┌──────────────────┐
                                          │    server.js     │
                                          │   (Express API)  │
                                          └────────┬─────────┘
                                                   │ HTTP
                                                   ▼
                                             Cliente / Front
```

- **Mensageria:** Google Cloud Pub/Sub → subscription configurada via `.env`.
- **Banco:** PostgreSQL, acessado via Prisma ORM.
- **API:** Express, retorna JSON no formato de saída padronizado (`uuid`, `customer`, `items`, etc.).

DER do Banco de Dados:
<img src="/DOCS/DER.png">

---

## 🔧 Variáveis de ambiente (`.env`)

```env
# Banco de dados
DATABASE_URL="postgresql://usuario:senha@host:5432/banco?schema=public"

# Google Cloud Pub/Sub (apenas para o consumer)
PROJECT_ID="seu-projeto-gcp"
SUBSCRIPTION_NAME="sua-subscription"
KEY_FILENAME="./caminho/para/service-account.json"   # opcional se usar ADC

# API
PORT=3000
```

---

# 🖥️ API REST — `server.js`

## Como rodar

```bash
node server.js
```

A API sobe em `http://localhost:${PORT}` (default `3000`).

## Formato de saída (mapper)

Todos os endpoints que retornam pedido usam `mapPedido`/`mapItem` (em `pedidoMapper.js`), que converte o formato do banco (PascalCase, relações Prisma) no formato de contrato:

```json
{
  "uuid": "...",
  "created_at": "...",
  "channel": "...",
  "total": 0,
  "status": "...",
  "customer": { "id": 0, "name": "", "email": "", "document": "" },
  "seller":   { "id": 0, "name": "", "city": "", "state": "" },
  "items": [
    {
      "id": 0,
      "product": { "id": "", "title": "" },
      "unit_price": 0,
      "quantity": 0,
      "category": {
        "id": "", "name": "",
        "sub_category": { "id": "", "name": "" }
      },
      "total": 0
    }
  ],
  "shipment": { "carrier": "", "service": "", "status": "", "tracking_code": "" },
  "payment":  { "method": "", "status": "", "transaction_id": "" },
  "metadata": { "source": "", "user_agent": "", "ip_address": "" }
}
```

## Endpoints

### `GET /health`
Health check simples.

**Resposta:**
```json
{ "status": "OK", "uptime": 12.34, "timestamp": "2026-09-16T12:00:00.000Z" }
```

---

### `GET /api/orders`
Lista pedidos com **paginação** e **filtros**.

**Query params:**

| Param | Tipo | Exemplo | Descrição |
|---|---|---|---|
| `page` | int | `2` | Página (default `1`, mínimo `1`) |
| `limit` | int | `20` | Itens por página (default `10`, máx `100`) |
| `customer.id` | int | `49494` | Filtra por cliente |
| `seller.id` | int | `55` | Filtra por vendedor |
| `status` | string | `shipped` | Filtra por status do pedido |
| `product.id` | string | `abc-1344` | Filtra pedidos que tenham esse produto |

**Comportamento do filtro de produto:**
- Retorna apenas **pedidos que contenham** o produto (`some`).
- Dentro de cada pedido, o array `items` traz **apenas o item desse produto**.

**Resposta:**
```json
{
  "data": [ /* pedidos no formato do mapper */ ],
  "pagination": {
    "totalRecords": 200,
    "currentPage": 1,
    "totalPages": 20,
    "pageSize": 10
  }
}
```

**Erros:**
- `400` — `customer.id`/`seller.id` inválidos.
- `500` — erro no banco.

**Exemplo:**
```
GET /api/orders?customer.id=49494&seller.id=55&status=shipped&product.id=abc-1344&page=2&limit=20
```

---

### `GET /api/orders/financial-summary`
Resumo financeiro agregado.

**Query params:**

| Param | Tipo | Exemplo | Descrição |
|---|---|---|---|
| `seller.id` | int | `55` | Filtra por vendedor |
| `start_date` | ISO 8601 | `2026-09-01` | Data inicial (inclusiva) de `PedidoDtCriacao` |
| `end_date` | ISO 8601 | `2026-09-30` | Data final (inclusiva) de `PedidoDtCriacao` |

**Resposta:**
```json
{
  "total_orders": 150,
  "total_revenue": 750000.00,
  "average_order_value": 5000.00,
  "by_status": {
    "pending": 10,
    "approved": 120,
    "shipped": 15,
    "delivered": 5
  },
  "by_payment_method": {
    "pix":         { "count": 80, "total": 400000.00 },
    "credit_card": { "count": 50, "total": 250000.00 },
    "boleto":      { "count": 20, "total": 100000.00 }
  }
}
```

**Notas de implementação:**
- `by_status` conta pedidos por `PedidoStatus`.
- `by_payment_method` usa o **primeiro pagamento** do pedido (`PagamentoPedido[0]`).
- `total_revenue` é a soma dos `PedidoValorTotal` dos pedidos filtrados.


**Exemplo:**
```
GET /api/orders/financial-summary?seller.id=116&start_date=2026-01-01&end_date=2026-01-31
```

---

### `GET /api/orders/:uuid`
Detalhes de **um pedido** no formato do mapper.

**Path param:** `uuid` — `PedidoId`.

**Resposta:** objeto do mapper (sem envelope).

**Erros:**
- `404` — pedido não encontrado.
- `500` — erro no banco.

---

### `GET /api/orders/:uuid/items`
**Somente os itens** de um pedido, cada um no formato do `mapItem`.

**Resposta:**
```json
{ "data": [ /* itens */ ] }
```

**Erros:**
- `404` — pedido não encontrado.
- `500` — erro no banco.

---

# 📥 Consumer Pub/Sub — `consumer.js`

## Como rodar

```bash
node consumer.js
```

Requer `PROJECT_ID` e `SUBSCRIPTION_NAME` no `.env`. Encerra com `Ctrl+C` (SIGINT), fechando Prisma e removendo listeners.

## Fluxo de processamento

1. **Conexão** com a subscription (`initialize`).
2. **Recepção** de mensagens: entram numa fila interna (`messageQueue`) e são processadas **uma a uma** (`flowControl.maxMessages: 1`).
3. **Persistência** transacional (`persistOrder`).
4. **Ack/Nack**:
   - Sucesso e **fora do modo validação** → `ack()`.
   - Erro (ou modo validação) → `nack()` → mensagem volta para a fila do Pub/Sub.
5. **Modo validação** (`testeValidacao = true`): não faz `ack`, imprime payload, salva arquivo em `./processados/` e aguarda 5s entre mensagens — útil para inspecionar.

## Idempotência

Antes de qualquer escrita, o consumer checa se o pedido já existe:

```js
const pedidoExistente = await tx.pedido.findUnique({ where: { PedidoId: order.uuid } });
if (pedidoExistente) return { jaExistia: true, ... };
```

Isso evita duplicar `ItemPedido`, `MetadadosPedido`, `PagamentoPedido` e `CarregamentoPedido` em caso de **redelivery** do Pub/Sub.

## Transação (`prisma.$transaction`)

Tudo dentro de **uma transação atômica**. Ordem:

| # | Entidade | Regra |
|---|---|---|
| 0 | **Pedido** | Se já existe → aborta e retorna cedo |
| 1 | **Cliente** | `findUnique` por `ClienteId`; cria só se não existir |
| 2 | **Vendedor** | idem |
| 3 | **Categoria** | `findUnique` por `CategoriaId`; cria se não existir |
| 3 | **SubCategoria** | PK composta `[SubCategoriaId, CategoriaId]`; `findUnique` com `SubCategoriaId_CategoriaId` |
| 3 | **Produto** | `findUnique` por `ProdutoId`; cria se não existir |
| 4 | **Pedido** | cria com `PedidoValorTotal` calculado (`sum(unit_price * quantity)`) |
| 5 | **ItemPedido** | cria cada item, com FKs `ProdutoId`, `SubCategoriaId`, `CategoriaId` |
| 6 | **MetadadosPedido** | cria |
| 7 | **PagamentoPedido** | cria |
| 8 | **CarregamentoPedido** | cria |
| 9 | *(opcional)* | Salva JSON processado em `./processados/` se `testeValidacao` |

## Payload esperado (entrada)

O consumer espera o **formato transformado** (mesmo contrato do mapper da API):

```json
{
  "uuid": "ORD-2025-0001",
  "created_at": "2025-10-01T10:15:00Z",
  "channel": "mobile_app",
  "status": "separated",
  "customer": { "id": 7788, "name": "...", "email": "...", "document": "..." },
  "seller":   { "id": 55, "name": "...", "city": "...", "state": "..." },
  "items": [
    {
      "id": 1,
      "product": { "id": "abc-1344", "title": "..." },
      "unit_price": 2500.00,
      "quantity": 2,
      "category": {
        "id": "ELEC", "name": "Eletrônicos",
        "sub_category": { "id": "PHONE", "name": "Smartphones" }
      }
    }
  ],
  "shipment": { "carrier": "...", "service": "...", "status": "...", "tracking_code": "..." },
  "payment":  { "method": "...", "status": "...", "transaction_id": "..." },
  "metadata": { "source": "...", "user_agent": "...", "ip_address": "..." }
}
```

> `unit_price` e `quantity` são usados para calcular `ItemPedidoValorTotal` e `PedidoValorTotal`.

## Tratamento de erros

- Erros de parse/DB são capturados no `try/catch` do `processQueue`, logados, e a mensagem é **nackada** (volta para a fila).
- O `errorHandler` externo é chamado com `(error, message)`.

---

## 🗄️ Banco de Dados — Schema Prisma

Provider: **PostgreSQL** (`datasource db`) + client gerado em `./prisma/generated`.

### Modelos

| Model | PK | Observações |
|---|---|---|
| `Cliente` | `ClienteId` (Int) | 1:N `Pedido` |
| `Vendedor` | `VendedorId` (Int) | 1:N `Pedido` |
| `Categoria` | `CategoriaId` (String) | 1:N `SubCategoria` |
| `SubCategoria` | `[SubCategoriaId, CategoriaId]` | PK composta; pertence a `Categoria` |
| `Produto` | `ProdutoId` (String) | 1:N `ItemPedido` |
| `Pedido` | `PedidoId` (String, UUID) | raiz; N:1 `Cliente`/`Vendedor`; 1:N `ItemPedido`, `MetadadosPedido`, `PagamentoPedido`, `CarregamentoPedido` |
| `ItemPedido` | `[ItemPedidoId, PedidoId]` | PK composta; FKs `ProdutoId`, `[SubCategoriaId, CategoriaId]` |
| `MetadadosPedido` | `MetadadosPedidoId` (UUID gerado) | 1:1 lógica com `Pedido` |
| `PagamentoPedido` | `PagamentoPedidoId` (UUID gerado) | 1:N `Pedido` (na prática 1) |
| `CarregamentoPedido` | `CarregamentoPedidoId` (UUID gerado) | 1:N `Pedido` (na prática 1) |

### Tipos monetários

Valores usam `Decimal(14, 4)` no banco:
- `Pedido.PedidoValorTotal`
- `ItemPedido.ItemPedidoPrecoUnitario`
- `ItemPedido.ItemPedidoValorTotal`

No código, são convertidos com `Number(...)` para agregações e `new Prisma.Decimal(...)` para escrita.

### Campos `*DtImportacao`

Todos os modelos têm `*DtImportacao` (`@default(now())`) para auditoria da indexação — **não vêm do payload** e não aparecem na resposta da API.

---

## 🧪 4) Fluxo completo (ponta a ponta)

1. Um produtor publica no tópico do Pub/Sub uma mensagem no formato do **payload esperado** (seção 2).
2. O `consumer.js` recebe, faz o parse e chama `persistOrder`.
3. Em transação, cria/atualiza as entidades e grava o pedido (idempotente por `PedidoId`).
4. `ack()` confirma o processamento (fora do modo validação).
5. A API (`server.js`) já consulta o PostgreSQL via Prisma e expõe os dados nos endpoints documentados na seção 1.

---

## ✅ Checklist de execução

```bash
# 1. instalar dependências
npm install

# 2. gerar client Prisma
npx prisma generate

# 3. aplicar migrations (se houver)
npx prisma migrate deploy

# 4. subir API
node server.js

# 5. (em outro terminal) subir consumer
node consumer.js
```

---

## 📁 Estrutura de arquivos

```
.
├── server.js              # API Express
├── consumer.js            # Consumer Pub/Sub
├── pedidoMapper.js        # mapPedido + mapItem
├── publisher.js           # (opcional) publicação no tópico
├── .env                   # variáveis de ambiente
├── prisma/
│   └── schema.prisma      # schema do banco
│   └── generated/         # client gerado
└── processados/           # (consumer, modo validação) JSONs salvos
```

## ✒️ Desenvolvido por:

* **[Cláudio de Melo Júnior](https://github.com/Claudio-Fatec)**
* **[João Vitor Nicolau](https://github.com/Joao-Vitor-Nicolau-dos-Santos)**
* **[Luís Pedro Dutra Carrocini](https://github.com/luis-pedro-dutra-carrocini)**
