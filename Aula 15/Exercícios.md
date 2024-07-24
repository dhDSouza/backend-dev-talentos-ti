# Exercícios: Joins em MySQL

## Objetivo:

Praticar a criação de banco de dados e tabelas, inserção de dados e utilização de `INNER JOIN`, `LEFT JOIN` e `RIGHT JOIN` em consultas `MySQL`.

## Exercício 1: Criar o Banco de Dados e Tabelas

### 1.1 Criar o Banco de Dados:

```sql
CREATE DATABASE loja;
USE loja;
```

### 1.2 Criar as Tabelas:

**Tabela `clientes`:**

```sql
CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY,
    nome VARCHAR(50)
);
```

**Tabela `pedidos`:**

```sql
CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY,
    id_cliente INT,
    produto VARCHAR(50),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);
```

**Tabela `fornecedores`:**

```sql
CREATE TABLE fornecedores (
    id_fornecedor INT PRIMARY KEY,
    nome VARCHAR(50)
);
```

**Tabela `estoque`:**

```sql
CREATE TABLE estoque (
    id_produto INT PRIMARY KEY,
    id_fornecedor INT,
    produto VARCHAR(50),
    quantidade INT,
    FOREIGN KEY (id_fornecedor) REFERENCES fornecedores(id_fornecedor)
);
```

## Exercício 2: Inserir Dados nas Tabelas

### 2.1 Inserir Dados na Tabela `clientes`:

```sql
INSERT INTO clientes (id_cliente, nome) VALUES
(1, 'Ana'),
(2, 'Bruno'),
(3, 'Carlos');
```

### 2.2 Inserir Dados na Tabela `pedidos`:

```sql
INSERT INTO pedidos (id_pedido, id_cliente, produto) VALUES
(101, 1, 'Livro'),
(102, 2, 'Caneta'),
(103, 2, 'Caderno');
```

### 2.3 Inserir Dados na Tabela `fornecedores`:

```sql
INSERT INTO fornecedores (id_fornecedor, nome) VALUES
(1, 'Fornecedor A'),
(2, 'Fornecedor B');
```

### 2.4 Inserir Dados na Tabela `estoque`:

```sql
INSERT INTO estoque (id_produto, id_fornecedor, produto, quantidade) VALUES
(201, 1, 'Livro', 50),
(202, 1, 'Caneta', 100),
(203, 2, 'Caderno', 30);
```

## Exercício 3: Realizar Consultas com Joins

### 3.1 INNER JOIN

- Exibir os nomes dos clientes e os produtos que eles pediram.

### 3.2 LEFT JOIN

- Exibir todos os clientes e os produtos que eles pediram, incluindo os clientes que não fizeram pedidos.

### 3.3 RIGHT JOIN

- Exibir todos os produtos do estoque e os fornecedores correspondentes.

### 3.4 JOIN Múltiplo

- Exibir o nome dos clientes, o produto que eles pediram, o fornecedor desse produto e a quantidade disponível no estoque.

### 3.5 LEFT JOIN com Condição

- Exibir todos os produtos do estoque, mesmo aqueles que não têm pedidos correspondentes, e a quantidade disponível.

### 3.6 RIGHT JOIN com Condição

- Exibir todos os fornecedores e os produtos que eles fornecem, incluindo fornecedores que não têm produtos no estoque.
