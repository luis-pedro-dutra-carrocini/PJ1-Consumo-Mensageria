select * from "Cliente" where "ClienteId" = 1014;

select * from "Vendedor" where "VendedorId" = 116;

select * from "Categoria" where "CategoriaId" = 'HOME';

select * from "SubCategoria" where "SubCategoriaId" = 'APPLIANCE';

select * from "Produto" where "ProdutoId" = 'GAME-003';

select * from "Pedido" where "PedidoId" = 'f2251cd7-c173-41f2-b654-c2387504fb49';

select * from "Pedido";

select * from "ItemPedido" where "PedidoId" = 'f2251cd7-c173-41f2-b654-c2387504fb49';

select * from "MetadadosPedido" where "PedidoId" = 'f2251cd7-c173-41f2-b654-c2387504fb49';

select * from "PagamentoPedido" where "PedidoId" = 'f2251cd7-c173-41f2-b654-c2387504fb49';

select * from "CarregamentoPedido" where "PedidoId" = 'f2251cd7-c173-41f2-b654-c2387504fb49';


-- Delete para reprocessar

-- delete from "CarregamentoPedido";

-- delete from "PagamentoPedido";

-- delete from "MetadadosPedido";

-- delete from "ItemPedido";

-- delete from "Pedido";

-- delete from "Produto";

-- delete from "SubCategoria";

-- delete from "Categoria";

-- delete from "Vendedor";

-- delete from "Cliente";







