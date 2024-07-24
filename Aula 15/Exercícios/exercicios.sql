-- 3.1 INNER JOIN
-- Exibir os nomes dos clientes e os produtos que eles pediram:

    SELECT clientes.nome AS cliente, pedidos.produto
    FROM clientes
    INNER JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;

-- 3.2 LEFT JOIN
-- Exibir todos os clientes e os produtos que eles pediram, incluindo os clientes que não fizeram pedidos:

    SELECT clientes.nome AS cliente, pedidos.produto
    FROM clientes
    LEFT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;

-- 3.3 RIGHT JOIN
-- Exibir todos os produtos do estoque e os fornecedores correspondentes:

    SELECT estoque.produto, fornecedores.nome AS fornecedor
    FROM estoque
    RIGHT JOIN fornecedores ON estoque.id_fornecedor = fornecedores.id_fornecedor;

-- 3.4 JOIN Múltiplo
-- Exibir o nome dos clientes, o produto que eles pediram, o fornecedor desse produto e a quantidade disponível no estoque:

    SELECT clientes.nome AS cliente, pedidos.produto, fornecedores.nome AS fornecedor, estoque.quantidade
    FROM clientes
    INNER JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente
    INNER JOIN estoque ON pedidos.produto = estoque.produto
    INNER JOIN fornecedores ON estoque.id_fornecedor = fornecedores.id_fornecedor;

-- 3.5 LEFT JOIN com Condição
-- Exibir todos os produtos do estoque, mesmo aqueles que não têm pedidos correspondentes, e a quantidade disponível:

    SELECT estoque.produto, estoque.quantidade, pedidos.id_pedido
    FROM estoque
    LEFT JOIN pedidos ON estoque.produto = pedidos.produto;

-- 3.6 RIGHT JOIN com Condição
-- Exibir todos os fornecedores e os produtos que eles fornecem, incluindo fornecedores que não têm produtos no estoque:

    SELECT fornecedores.nome AS fornecedor, estoque.produto
    FROM fornecedores
    RIGHT JOIN estoque ON fornecedores.id_fornecedor = estoque.id_fornecedor;
