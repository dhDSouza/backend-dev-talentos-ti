
# Aula: Joins em MySQL

## Objetivo:

Compreender os conceitos e a aplicação prática de `INNER JOIN`, `LEFT JOIN` e `RIGHT JOIN` em consultas `MySQL`.

## Introdução:

Os joins são usados para combinar registros de duas ou mais tabelas em um banco de dados. Eles permitem que você relacione dados de diferentes tabelas com base em uma condição comum.

## 1. INNER JOIN

O `INNER JOIN` retorna apenas os registros que têm correspondência em ambas as tabelas.

### Sintaxe:

```sql
SELECT coluna1, coluna2
FROM tabela1
INNER JOIN tabela2
ON tabela1.coluna_comum = tabela2.coluna_comum;
```

### Exemplo:
Temos duas tabelas: `clientes` e `pedidos`.

**Tabela `clientes`:**

|  id_cliente  |  nome      |
|:------------:|:----------:|
|  1           |  Ana       |
|  2           |  Bruno     |
|  3           |  Carlos    |


**Tabela `pedidos`:**

|  id_pedido  |  id_cliente  |  produto   |
|:-----------:|:------------:|:----------:|
|  101        |  1           |  Livro     |
|  102        |  2           |  Caneta    |
|  103        |  4           |  Caderno   |


**Consulta:**

```sql
SELECT clientes.nome, pedidos.produto
FROM clientes
INNER JOIN pedidos
ON clientes.id_cliente = pedidos.id_cliente;
```

**Resultado:**

|  nome   |  produto  |
|:-------:|:---------:|
|  Ana    |  Livro    |
|  Bruno  |  Caneta   |

## 2. LEFT JOIN
O `LEFT JOIN` retorna todos os registros da tabela à esquerda *`(tabela1)`*, e os registros correspondentes da tabela à direita *`(tabela2)`*. Se não houver correspondência, os resultados conterão **`NULL`** para a tabela à direita.

### Sintaxe:

```sql
SELECT coluna1, coluna2
FROM tabela1
LEFT JOIN tabela2
ON tabela1.coluna_comum = tabela2.coluna_comum;
```

### Exemplo:

**Consulta:**

```sql
SELECT clientes.nome, pedidos.produto
FROM clientes
LEFT JOIN pedidos
ON clientes.id_cliente = pedidos.id_cliente;
```

**Resultado:**

|  nome    |  produto  |
|:--------:|:---------:|
|  Ana     |  Livro    |
|  Bruno   |  Caneta   |
|  Carlos  |  NULL     |

## 3. RIGHT JOIN
O `RIGHT JOIN` retorna todos os registros da tabela à direita *`(tabela2)`*, e os registros correspondentes da tabela à esquerda *`(tabela1)`*. Se não houver correspondência, os resultados conterão **`NULL`** para a tabela à esquerda.

### Sintaxe:

```sql
SELECT coluna1, coluna2
FROM tabela1
RIGHT JOIN tabela2
ON tabela1.coluna_comum = tabela2.coluna_comum;
```

### Exemplo:

**Consulta:**

```sql
SELECT clientes.nome, pedidos.produto
FROM clientes
RIGHT JOIN pedidos
ON clientes.id_cliente = pedidos.id_cliente;
```

**Resultado:**

|  nome   |  produto  |
|:-------:|:---------:|
|  Ana    |  Livro    |
|  Bruno  |  Caneta   |
|  NULL   |  Caderno  |
