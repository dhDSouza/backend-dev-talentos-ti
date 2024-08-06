-- # Exercícios de MySQL

CREATE DATABASE Store;

USE Store;

-- 1. Crie a tabela `CLIENTS` com as seguintes colunas:
--    - `id`: inteiro, chave primária, auto incrementável
--    - `name`: texto, não nulo
--    - `email`: texto, não nulo

    CREATE TABLE CLIENTS (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL
    );

-- 2. Crie a tabela `PRODUCTS` com as seguintes colunas:
--    - `id`: inteiro, chave primária, auto incrementável
--    - `name`: texto, não nulo
--    - `price`: decimal, não nulo

    CREATE TABLE PRODUCTS (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
    );

-- 3. Crie a tabela `ORDERS` com as seguintes colunas:
--    - `id`: inteiro, chave primária, auto incrementável
--    - `client_id`: inteiro, chave estrangeira referenciando `CLIENTS(id)`
--    - `order_date`: data, não nulo
--    - `total`: decimal, não nulo

    CREATE TABLE ORDERS (
        id INT AUTO_INCREMENT PRIMARY KEY,
        client_id INT,
        order_date DATE NOT NULL,
        total DECIMAL(10, 2) NOT NULL,
        FOREIGN KEY (client_id) REFERENCES CLIENTS(id)
    );

-- 4. Crie a tabela `ORDER_ITEMS` com as seguintes colunas:
--    - `order_id`: inteiro, chave estrangeira referenciando `ORDERS(id)`
--    - `product_id`: inteiro, chave estrangeira referenciando `PRODUCTS(id)`
--    - `quantity`: inteiro, não nulo
--    - `price`: decimal, não nulo

    CREATE TABLE ORDER_ITEMS (
        order_id INT,
        product_id INT,
        quantity INT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        PRIMARY KEY (order_id, product_id),
        FOREIGN KEY (order_id) REFERENCES ORDERS(id),
        FOREIGN KEY (product_id) REFERENCES PRODUCTS(id)
    );

-- 5. Insira dados nas tabelas `CLIENTS` e `PRODUCTS`.

    INSERT INTO CLIENTS (name, email) VALUES 
    ('Alice', 'alice@teste.com'), 
    ('Bob', 'bob@teste.com'),
    ('Patrick', 'patrick@teste.com'),
    ('Robert', 'robert@teste.com');

    INSERT INTO PRODUCTS (name, price) VALUES 
    ('Product A', 10.00), 
    ('Product B', 20.00), 
    ('Product C', 30.00),
    ('Product D', 15.00);

-- 6. Insira dados na tabela `ORDERS`.

    INSERT INTO ORDERS (client_id, order_date, total) VALUES 
    (1, '2024-07-01', 60.00), 
    (2, '2024-07-02', 20.00),
    (3, '2024-08-02', 20.00);

-- 7. Insira dados na tabela `ORDER_ITEMS`.

    INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, price) VALUES 
    (1, 1, 1, 10.00), 
    (1, 2, 1, 20.00),
    (1, 3, 1, 30.00),
    (2, 2, 1, 20.00),
    (3, 2, 1, 20.00);

-- 8. Atualize o preço de um produto na tabela `PRODUCTS` e todos os registros relacionados na tabela `ORDER_ITEMS`.

    UPDATE PRODUCTS SET price = 15.00 WHERE id = 1;
    UPDATE ORDER_ITEMS SET price = 15.00 WHERE product_id = 1;

-- 9. Delete um cliente e todos os pedidos relacionados.

    DELETE FROM ORDER_ITEMS WHERE order_id IN (SELECT id FROM ORDERS WHERE client_id = 1);
    DELETE FROM ORDERS WHERE client_id = 1;
    DELETE FROM CLIENTS WHERE id = 1;

-- 10. Altere a tabela `CLIENTS` para adicionar uma coluna de data de nascimento (`birthdate`).

    ALTER TABLE CLIENTS ADD birthdate DATE;

-- 11. Faça uma consulta usando JOIN para listar todos os pedidos com os nomes dos clientes e os nomes dos produtos.

    SELECT o.id AS order_id, c.name AS client_name, p.name AS product_name, oi.quantity, oi.price
    FROM ORDERS o
    INNER JOIN CLIENTS c ON o.client_id = c.id
    INNER JOIN ORDER_ITEMS oi ON o.id = oi.order_id
    INNER JOIN PRODUCTS p ON oi.product_id = p.id;

-- 12. Faça uma consulta usando LEFT JOIN para listar todos os clientes e seus pedidos, incluindo clientes sem pedidos.

    SELECT c.name AS client_name, o.id AS order_id, o.order_date, o.total
    FROM CLIENTS c
    LEFT JOIN ORDERS o ON c.id = o.client_id;

-- 13. Faça uma consulta usando RIGHT JOIN para listar todos os produtos e os pedidos que os contêm, incluindo produtos que não foram pedidos.

    SELECT p.name AS product_name, oi.order_id, oi.quantity, oi.price
    FROM ORDER_ITEMS oi
    RIGHT JOIN PRODUCTS p ON p.id = oi.product_id;

-- 14. Utilize funções de agregação para obter o total de vendas e a quantidade total de itens vendidos.

    SELECT SUM(total) AS total_sales, SUM(quantity) AS total_items
    FROM ORDERS o
    INNER JOIN ORDER_ITEMS oi ON o.id = oi.order_id;

-- 15. Faça uma consulta para listar todos os clientes e a quantidade total de pedidos realizados por cada um, ordenados pela quantidade de pedidos em ordem decrescente.

    SELECT c.name, COUNT(o.id) AS total_orders
    FROM CLIENTS c
    LEFT JOIN ORDERS o ON c.id = o.client_id
    GROUP BY c.name
    ORDER BY total_orders DESC;

-- 16. Faça uma consulta para listar todos os produtos e a quantidade total de cada produto vendido, ordenados pela quantidade em ordem decrescente.

    SELECT p.name AS product_name, SUM(oi.quantity) AS total_quantity
    FROM PRODUCTS p
    LEFT JOIN ORDER_ITEMS oi ON p.id = oi.product_id
    GROUP BY p.name
    ORDER BY total_quantity DESC;

-- 17. Faça uma consulta para listar todos os clientes e o valor total gasto por cada um, ordenados pelo valor gasto em ordem decrescente.

    SELECT c.name AS client_name, SUM(o.total) AS total_spent
    FROM CLIENTS c
    LEFT JOIN ORDERS o ON c.id = o.client_id
    GROUP BY c.name
    ORDER BY total_spent DESC;

-- 18. Faça uma consulta para listar os 3 produtos mais vendidos (em quantidade) e o total de vendas de cada um.

    SELECT p.name AS product_name, SUM(oi.quantity) AS total_quantity, SUM(o.total) AS total_sales
    FROM PRODUCTS p
    INNER JOIN ORDER_ITEMS oi ON p.id = oi.product_id
    INNER JOIN ORDERS o ON o.id = oi.order_id
    GROUP BY p.name
    ORDER BY total_quantity DESC
    LIMIT 3;

-- OU

    SELECT p.name AS product_name, SUM(oi.quantity) AS total_quantity, SUM(oi.price * oi.quantity) AS total_sales
    FROM PRODUCTS p
    INNER JOIN ORDER_ITEMS oi ON p.id = oi.product_id
    GROUP BY p.name
    ORDER BY total_quantity DESC
    LIMIT 3;

-- 19. Faça uma consulta para listar os 3 clientes que mais gastaram e o total gasto por cada um.

    SELECT c.name AS client_name, SUM(o.total) AS total_spent
    FROM CLIENTS c
    INNER JOIN ORDERS o ON c.id = o.client_id
    GROUP BY c.name
    ORDER BY total_spent DESC
    LIMIT 3;

-- 20. Faça uma consulta para listar a média de quantidade de produtos por pedido para cada cliente.

    SELECT c.name AS client_name, AVG(oi.quantity) AS avg_quantity_per_order
    FROM CLIENTS c
    INNER JOIN ORDERS o ON c.id = o.client_id
    INNER JOIN ORDER_ITEMS oi ON o.id = oi.order_id
    GROUP BY c.name;

-- 21. Faça uma consulta para listar o total de pedidos e o total de clientes por mês.

    SELECT MONTH(order_date) AS month, COUNT(DISTINCT o.id) AS total_orders, COUNT(DISTINCT o.client_id) AS total_clients
    FROM ORDERS o
    GROUP BY month
    ORDER BY month;

-- OU

    SELECT DATE_FORMAT(order_date, '%Y-%m') AS month, COUNT(DISTINCT o.id) AS total_orders, COUNT(DISTINCT o.client_id) AS total_clients
    FROM ORDERS o
    GROUP BY month
    ORDER BY month;

-- 22. Faça uma consulta para listar os produtos que nunca foram vendidos.

    SELECT p.name AS product_name
    FROM PRODUCTS p
    LEFT JOIN ORDER_ITEMS oi ON p.id = oi.product_id
    WHERE oi.product_id IS NULL;

-- 23. Faça uma consulta para listar os pedidos que contêm mais de 2 itens diferentes.

    SELECT o.id AS order_id, COUNT(DISTINCT oi.product_id) AS product_count
    FROM ORDERS o
    INNER JOIN ORDER_ITEMS oi ON o.id = oi.order_id
    GROUP BY o.id
    HAVING product_count > 2;

-- 24. Faça uma consulta para listar os clientes que fizeram pedidos no último mês.

    SELECT DISTINCT c.name AS client_name, o.order_date
    FROM CLIENTS c
    INNER JOIN ORDERS o ON c.id = o.client_id
    WHERE o.order_date >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH);

-- OU

    SELECT DISTINCT c.name AS client_name, o.order_date
    FROM CLIENTS c
    INNER JOIN ORDERS o ON c.id = o.client_id
    WHERE MONTH(o.order_date) = MONTH(NOW());
    
-- OU

    SELECT DISTINCT c.name AS client_name, o.order_date
    FROM CLIENTS c
    INNER JOIN ORDERS o ON c.id = o.client_id
    WHERE MONTH(o.order_date) IN (SELECT MAX(MONTH(o.order_date)) FROM ORDERS o);
    
-- OU

	WITH ULTIMO_MES AS (SELECT MAX(MONTH(order_date)) AS Mes FROM ORDERS)
    SELECT c.name AS client_name, o.order_date
    FROM CLIENTS c
    INNER JOIN ORDERS o ON c.id = o.client_id
	INNER JOIN ULTIMO_MES um ON MONTH(o.order_date) = um.Mes
	GROUP BY client_name, o.order_date;

-- 25. Faça uma consulta para listar os clientes com o maior valor médio por pedido.

    SELECT c.name AS client_name, AVG(o.total) AS avg_order_value
    FROM CLIENTS c
    INNER JOIN ORDERS o ON c.id = o.client_id
    GROUP BY c.name
    ORDER BY avg_order_value DESC;