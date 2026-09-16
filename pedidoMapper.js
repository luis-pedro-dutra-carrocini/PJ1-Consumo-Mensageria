// mappers/pedidoMapper.js

function mapPagamento(p) {
  if (!p) return null;
  return {
    method: p.PagamentoMetodo,
    status: p.PagamentoStatus,
    transaction_id: p.PagamentoTransacao,
  };
}

function mapCarregamento(c) {
  if (!c) return null;
  return {
    carrier: c.CarregamentoOperadora,
    service: c.CarregamentoServico,
    status: c.CarregamentoStatus,
    tracking_code: c.CarregamentoCodigoRastreio,
  };
}

function mapMetadados(m) {
  if (!m) return null;
  return {
    source: m.MetadadosSource,
    user_agent: m.MetadadosUserAgent,
    ip_address: m.MetadadosIP,
  };
}

function mapItem(i) {
  const unit_price = Number(i.ItemPedidoPrecoUnitario ?? 0);
  const quantity = Number(i.ItemPedidoQuantidade ?? 0);

  return {
    id: i.ItemPedidoId,
    product: {
      id: i.Produto?.ProdutoId ?? null,
      title: i.Produto?.ProdutoNome ?? null,
    },
    unit_price,
    quantity,
    category: {
      id: i.SubCategoria?.Categoria?.CategoriaId ?? null,
      name: i.SubCategoria?.Categoria?.CategoriaNome ?? null,
      sub_category: {
        id: i.SubCategoria?.SubCategoriaId ?? null,
        name: i.SubCategoria?.SubCategoriaNome ?? null,
      },
    },
    total: i.ItemPedidoValorTotal,
  };
}

function mapPedido(pedido) {
  const pagamento = pedido.PagamentoPedido?.[0] ?? null;
  const carregamento = pedido.CarregamentoPedido?.[0] ?? null;
  const metadados = pedido.MetadadosPedido?.[0] ?? null;

  const items = (pedido.ItemPedido ?? []).map(mapItem);

  const total = Number(pedido.PedidoValorTotal ?? 0);

  return {
    uuid: pedido.PedidoId,
    created_at: pedido.PedidoDtCriacao,
    channel: pedido.PedidoTipoCriacao,
    total,
    status: pedido.PedidoStatus,

    customer: {
      id: pedido.Cliente?.ClienteId ?? pedido.ClienteId ?? null,
      name: pedido.Cliente?.ClienteNome ?? null,
      email: pedido.Cliente?.ClienteEmail ?? null,
      document: pedido.Cliente?.ClienteDocumento ?? null,
    },

    seller: {
      id: pedido.Vendedor?.VendedorId ?? null,
      name: pedido.Vendedor?.VendedorNome ?? null,
      city: pedido.Vendedor?.VendedorCidade ?? null,
      state: pedido.Vendedor?.VendedorUF ?? null,
    },

    items,

    shipment: mapCarregamento(carregamento),
    payment: mapPagamento(pagamento),

    metadata: mapMetadados(metadados),
  };
}

module.exports = { mapPedido, mapItem };