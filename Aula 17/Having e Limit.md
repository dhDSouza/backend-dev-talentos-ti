
# Aula: Usando a Cláusula HAVING e LIMIT no MySQL

## Objetivos:
- Compreender a diferença entre as cláusulas `WHERE` e `HAVING`.
- Aprender a usar a cláusula `HAVING` para filtrar resultados agregados.
- Aprender a usar a cláusula `LIMIT` para restringir o número de registros retornados.
- Praticar exemplos práticos com `HAVING` e `LIMIT`.

## Conteúdo:

### 1. Introdução às cláusulas `WHERE` e `HAVING`
- `WHERE`: Filtra registros antes de qualquer agregação.
- `HAVING`: Filtra registros após a agregação.

### 2. Sintaxe da cláusula `HAVING`
```sql
SELECT coluna1, função_agregação(coluna2)
FROM tabela
WHERE condição
GROUP BY coluna1
HAVING condição_agregação;
```

### 3. Diferença entre `WHERE` e `HAVING`
- `WHERE` é usado para filtrar linhas antes de agrupar.
- `HAVING` é usado para filtrar grupos após aplicar funções de agregação.

### 4. Introdução à cláusula `LIMIT`
- A cláusula `LIMIT` é usada para especificar o número máximo de registros que a consulta deve retornar.

### 5. Sintaxe da cláusula `LIMIT`
```sql
SELECT colunas
FROM tabela
LIMIT número;
```

### 6. Exemplos Práticos

#### a) Exemplo Simples com `HAVING`:
Vamos supor que temos uma tabela `vendas` com as colunas `vendedor`, `produto` e `quantidade`.

```sql
SELECT vendedor, SUM(quantidade) as total_vendas
FROM vendas
GROUP BY vendedor
HAVING SUM(quantidade) > 100;
```

Neste exemplo, estamos selecionando todos os vendedores que venderam mais de 100 unidades no total.

#### b) Exemplo com múltiplas condições:
```sql
SELECT produto, AVG(preco) as preco_medio
FROM vendas
WHERE categoria = 'eletronicos'
GROUP BY produto
HAVING AVG(preco) < 500 AND COUNT(*) > 10;
```

Aqui estamos selecionando produtos na categoria 'eletrônicos' que têm um preço médio menor que 500 e foram vendidos mais de 10 vezes.

#### c) Exemplo com `LIMIT`:
```sql
SELECT vendedor, SUM(quantidade) as total_vendas
FROM vendas
GROUP BY vendedor
HAVING SUM(quantidade) > 100
LIMIT 3;
```

Aqui estamos limitando o resultado a três vendedores que venderam mais de 100 unidades no total.

### 7. Atividade Prática

#### a) Crie uma tabela `vendas`:
```sql
CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vendedor VARCHAR(50),
    produto VARCHAR(50),
    quantidade INT,
    preco DECIMAL(10, 2),
    categoria VARCHAR(50)
);
```

#### b) Insira alguns dados:
```sql
INSERT INTO vendas (vendedor, produto, quantidade, preco, categoria)
VALUES
('Carlos', 'TV', 50, 300.00, 'eletronicos'),
('Ana', 'Laptop', 20, 1500.00, 'eletronicos'),
('Carlos', 'Mouse', 150, 20.00, 'perifericos'),
('Bruna', 'Teclado', 100, 50.00, 'perifericos'),
('Ana', 'Tablet', 30, 250.00, 'eletronicos'),
('Carlos', 'TV', 75, 300.00, 'eletronicos');
```

#### c) Use as cláusulas `HAVING` e `LIMIT` para responder às seguintes perguntas:
- Quais vendedores venderam mais de 100 unidades no total?
- Quais produtos da categoria 'perifericos' têm uma quantidade média vendida maior que 50?
- Quais são os três primeiros vendedores que venderam mais de 100 unidades?

## Conclusão:
A cláusula `HAVING` é uma ferramenta poderosa para filtrar resultados de consultas que envolvem funções de agregação. A cláusula `LIMIT` permite restringir o número de registros retornados, o que é útil para consultas que retornam muitos resultados ou para paginação.