-- Quais vendedores venderam mais de 100 unidades no total?

SELECT vendedor, SUM(quantidade) as total_vendas
FROM vendas
GROUP BY vendedor
HAVING SUM(quantidade) > 100;

-- Quais produtos da categoria 'perifericos' têm uma quantidade média vendida maior que 50?

SELECT produto, AVG(quantidade) as quantidade_media
FROM vendas
WHERE categoria = 'perifericos'
GROUP BY produto
HAVING AVG(quantidade) > 50;

-- Quais são os três primeiros vendedores que venderam mais de 100 unidades?

SELECT vendedor, SUM(quantidade) as total_vendas
FROM vendas
GROUP BY vendedor
HAVING SUM(quantidade) > 100
LIMIT 3;