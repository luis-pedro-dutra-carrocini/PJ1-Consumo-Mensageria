const express = require('express');
const { PrismaClient } = require('./prisma/generated/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const PubSubPublisher = require('./publisher');
require('dotenv').config();

const { mapPedido, mapItem } = require('./pedidoMapper');

const app = express();
app.use(express.json());

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});
const prisma = new PrismaClient({ adapter });

// Lista todos os pedidos
app.get('/api/orders', async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit) || 10, 1), 100);
    const skip = (page - 1) * limit;

    // ---- Filtros ----
    const customerIdRaw = req.query['customer.id'];
    const sellerIdRaw   = req.query['seller.id'];
    const statusRaw     = req.query['status'];
    const productIdRaw  = req.query['product.id'];

    const hasProductFilter = productIdRaw !== undefined && productIdRaw !== '';
    const productId = hasProductFilter ? String(productIdRaw) : null;

    const where = {};

    // Filtro: id do cliente
    if (customerIdRaw !== undefined) {
      const customerId = Number(customerIdRaw);
      if (!Number.isInteger(customerId)) {
        return res.status(400).json({ error: 'customer.id inválido' });
      }
      where.ClienteId = customerId;
    }

    // Filtro: id do vendedor
    if (sellerIdRaw !== undefined) {
      const sellerId = Number(sellerIdRaw);
      if (!Number.isInteger(sellerId)) {
        return res.status(400).json({ error: 'seller.id inválido' });
      }
      where.VendedorId = sellerId;
    }

    // Filtro: status do pedido
    if (statusRaw !== undefined && statusRaw !== '') {
      where.PedidoStatus = String(statusRaw);
    }

    // Filtro: id do produto (quais PEDIDOS retornam)
    if (hasProductFilter) {
      where.ItemPedido = {
        some: {
          Produto: {
            ProdutoId: productId
          }
        }
      };
    }

    const [pedidos, total] = await Promise.all([
      prisma.pedido.findMany({
        where,
        skip,
        take: limit,
        orderBy: { PedidoDtCriacao: 'asc' },
        include: {
          Cliente: true,
          Vendedor: true,
          PagamentoPedido: true,
          CarregamentoPedido: true,
          MetadadosPedido: true,
          ItemPedido: {
            // 🔽 Filtra quais ITENS vêm dentro de cada pedido
            where: hasProductFilter
              ? { Produto: { ProdutoId: productId } }
              : undefined,
            include: {
              Produto: true,
              SubCategoria: {
                include: {
                  Categoria: true
                }
              }
            }
          },
          _count: { select: { ItemPedido: true } }
        }
      }),
      prisma.pedido.count({ where })
    ]);

    const data = pedidos.map(mapPedido);

    return res.json({
      data,
      pagination: {
        totalRecords: total,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        pageSize: limit
      }
    });
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    return res.status(500).json({ error: 'Erro ao consultar pedidos no banco de dados.' });
  }
});

// Resumo de vendas
app.get('/api/orders/financial-summary', async (req, res) => {
  try {
    // ---- Filtros ----
    const sellerIdRaw  = req.query['seller.id'];
    const startDateRaw = req.query['start_date'];
    const endDateRaw   = req.query['end_date'];

    const where = {};

    // Filtro: id do vendedor
    if (sellerIdRaw !== undefined && sellerIdRaw !== '') {
      const sellerId = Number(sellerIdRaw);
      if (!Number.isInteger(sellerId)) {
        return res.status(400).json({ error: 'seller.id inválido' });
      }
      where.VendedorId = sellerId;
    }

    // Filtro: intervalo de datas (por data de criação do pedido)
    if (startDateRaw || endDateRaw) {
      where.PedidoDtCriacao = {};

      if (startDateRaw) {
        const start = new Date(startDateRaw);
        if (isNaN(start.getTime())) {
          return res.status(400).json({ error: 'start_date inválido (use ISO 8601)' });
        }
        where.PedidoDtCriacao.gte = start;
      }

      if (endDateRaw) {
        const end = new Date(endDateRaw);
        if (isNaN(end.getTime())) {
          return res.status(400).json({ error: 'end_date inválido (use ISO 8601)' });
        }
        where.PedidoDtCriacao.lte = end;
      }
    }

    // ---- Busca os pedidos que entram no resumo ----
    const pedidos = await prisma.pedido.findMany({
      where,
      select: {
        PedidoId: true,
        PedidoStatus: true,
        PedidoValorTotal: true,
        PagamentoPedido: {
          select: {
            PagamentoMetodo: true,
            PagamentoStatus: true
          }
        }
      }
    });

    // ---- Agregações em memória ----
    const total_orders = pedidos.length;

    let total_revenue = 0;
    const by_status = {};
    const by_payment_method = {};

    for (const p of pedidos) {
      const valor = Number(p.PedidoValorTotal ?? 0);
      total_revenue += valor;

      // Por status do pedido
      const status = p.PedidoStatus ?? 'unknown';
      by_status[status] = (by_status[status] ?? 0) + 1;

      // Por método de pagamento (usa o primeiro pagamento do pedido)
      const pagamento = p.PagamentoPedido?.[0];
      if (pagamento?.PagamentoMetodo) {
        const metodo = pagamento.PagamentoMetodo;
        if (!by_payment_method[metodo]) {
          by_payment_method[metodo] = { count: 0, total: 0 };
        }
        by_payment_method[metodo].count += 1;
        by_payment_method[metodo].total += valor;
      }
    }

    const average_order_value =
      total_orders > 0 ? Number((total_revenue / total_orders).toFixed(2)) : 0;

    // Arredonda totais para 2 casas
    total_revenue = Number(total_revenue.toFixed(2));
    for (const m of Object.keys(by_payment_method)) {
      by_payment_method[m].total = Number(by_payment_method[m].total.toFixed(2));
    }

    return res.json({
      total_orders,
      total_revenue,
      average_order_value,
      by_status,
      by_payment_method
    });
  } catch (error) {
    console.error('Erro ao gerar resumo financeiro:', error);
    return res.status(500).json({ error: 'Erro interno ao gerar o resumo financeiro.' });
  }
});

// Apresenta pedido específico
app.get('/api/orders/:uuid', async (req, res) => {
  try {
    const { uuid } = req.params;

    const pedido = await prisma.pedido.findUnique({
      where: { PedidoId: uuid },
      include: {
        Cliente: true,
        Vendedor: true,
        PagamentoPedido: true,
        CarregamentoPedido: true,
        MetadadosPedido: true,
        ItemPedido: {
          include: {
            Produto: true,
            SubCategoria: {
              include: {
                Categoria: true
              }
            }
          }
        },
        _count: { select: { ItemPedido: true } }
      }
    });

    if (!pedido) {
      return res.status(404).json({ error: 'Pedido não encontrado.' });
    }

    return res.json(mapPedido(pedido));
  } catch (error) {
    console.error('Erro ao buscar detalhes do pedido:', error);
    return res.status(500).json({ error: 'Erro interno ao buscar o pedido.' });
  }
});

// Apresenta itens do pedido
app.get('/api/orders/:uuid/items', async (req, res) => {
  try {
    const { uuid } = req.params;

    // Confirma se o pedido existe (para diferenciar 404 de "pedido sem itens")
    const pedido = await prisma.pedido.findUnique({
      where: { PedidoId: uuid },
      select: { PedidoId: true }
    });

    if (!pedido) {
      return res.status(404).json({ error: 'Pedido não encontrado.' });
    }

    const itens = await prisma.itemPedido.findMany({
      where: { PedidoId: uuid },
      include: {
        Produto: true,
        SubCategoria: {
          include: {
            Categoria: true
          }
        }
      }
    });

    const data = itens.map(mapItem);

    return res.json({ data });
  } catch (error) {
    console.error('Erro ao buscar itens do pedido:', error);
    return res.status(500).json({ error: 'Erro interno ao buscar os itens do pedido.' });
  }
});

// Cosultar status da API
app.get('/health', (req, res) => {
    return res.json({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`🔗 Endpoint para consulta de pedidos: GET http://localhost:${PORT}/api/pedidos`);
    console.log(`🔗 Endpoint para consulta de pedidos (Filtros / Paginação): GET http://localhost:${PORT}/api/orders?customer.id=49494&seller.id=55&status=shipped&product.id=abc-1344&page=2&limit=20`);
    console.log(`🔗 Endpoint para consulta de um pedido específico: GET http://localhost:${PORT}/api/orders/:uuid`);
    console.log(`🔗 Endpoint para consulta de itens de um pedido específico: GET http://localhost:${PORT}/api/orders/:uuid/items`);
    console.log(`🔗 Endpoint para consulta de resumo de vendas (Filtros): GET http://localhost:3000/api/orders/financial-summary?seller.id=116&start_date=2026-01-01&end_date=2026-01-31`);
});

