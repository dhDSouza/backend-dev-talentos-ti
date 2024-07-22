
# Aula: Comandos Básicos de MySQL

## Objetivo:

Compreender e aplicar os comandos básicos de `DDL` e `DML` em `MySQL`.

## Introdução:

O `MySQL` é um sistema de gerenciamento de banco de dados relacional que utiliza `SQL` *`(Structured Query Language)`* para gerenciar e manipular dados. Os comandos SQL são divididos principalmente em `DDL` *`(Data Definition Language)`* e `DML` *`(Data Manipulation Language)`*.

## 1. DDL *(Data Definition Language)*

Os comandos `DDL` são usados para definir e gerenciar a estrutura do banco de dados.

### 1.1 CREATE

O `CREATE` é usado para **criar** uma nova tabela, banco de dados, índice ou outro objeto no banco de dados.

#### Sintaxe:

```sql
CREATE TABLE nome_tabela (
    coluna1 tipo_dado /*[constraint]: Regras do campo, por exemplo, NULL, NOT NULL, PRIMARY KEY, UNIQUE*/,
    coluna2 tipo_dado /*[constraint]: Regras do campo, por exemplo, NULL, NOT NULL, PRIMARY KEY, UNIQUE*/,
    ...
);
```

#### Exemplo:

```sql
CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);
```

### 1.2 ALTER

O `ALTER` é usado para **modificar** uma tabela existente.

#### Sintaxe:

```sql
ALTER TABLE nome_tabela ADD COLUMN nova_coluna tipo_dado;

ALTER TABLE nome_tabela ADD CONSTRAINT constraint;

ALTER TABLE nome_tabela RENAME TO novo_nome_tabela;

ALTER TABLE nome_tabela MODIFY COLUMN coluna tipo_dado;
```

#### Exemplos:

**Adicionar uma coluna:**

```sql
ALTER TABLE clientes 
ADD COLUMN telefone VARCHAR(15);
```

**Adicionar uma restrição:**

```sql
ALTER TABLE clientes 
ADD CONSTRAINT chk_email CHECK (email LIKE '%@%');
```

**Renomear uma tabela:**

```sql
ALTER TABLE clientes 
RENAME TO usuarios;
```

**Modificar uma coluna:**

```sql
ALTER TABLE clientes 
MODIFY COLUMN nome VARCHAR(150);
```

### 1.3 DROP

O `DROP` é usado para **excluir** uma tabela, banco de dados, índice ou outro objeto do banco de dados.

#### Sintaxe:

```sql
DROP TABLE nome_tabela;
```

#### Exemplo:

```sql
DROP TABLE clientes;
```

### 1.4 USE

O `USE` é usado para **selecionar** um banco de dados para operações subsequentes.

#### Sintaxe:

```sql
USE nome_banco_dados;
```

#### Exemplo:

```sql
USE meu_banco;
```

## 2. DML *(Data Manipulation Language)*

Os comandos `DML` são usados para gerenciar os dados dentro das estruturas definidas pelo `DDL`.

### 2.1 INSERT

O `INSERT` é usado para **adicionar** novos registros em uma tabela.

#### Sintaxe:

```sql
INSERT INTO nome_tabela (coluna1, coluna2, ...)
VALUES (valor1, valor2, ...);
```

#### Exemplo:

```sql
INSERT INTO clientes (id_cliente, nome, email)
VALUES (1, 'Ana', 'ana@example.com');
```

### 2.2 UPDATE

O `UPDATE` é usado para **modificar** registros existentes em uma tabela.

#### Sintaxe:

```sql
UPDATE nome_tabela SET coluna1 = valor1, coluna2 = valor2, ... WHERE condição;
```

#### Exemplo:

```sql
UPDATE clientes SET email = 'novoemail@example.com' WHERE id_cliente = 1;
```

### 2.3 DELETE

O `DELETE` é usado para **excluir** registros de uma tabela.

#### Sintaxe:

```sql
DELETE FROM nome_tabela WHERE condição;
```

#### Exemplo:

```sql
DELETE FROM clientes WHERE id_cliente = 1;
```

### 2.4 SELECT

O `SELECT` é usado para **consultar** dados em uma tabela.

#### Sintaxe:

```sql
SELECT coluna1, coluna2, ... FROM nome_tabela WHERE condição;
```

#### Exemplo:

```sql
SELECT nome, email FROM clientes WHERE id_cliente = 1;
```
