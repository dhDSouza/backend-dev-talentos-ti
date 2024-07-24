# Aula: Funções de Agregação e Ordenação em MySQL

## Objetivos

- Compreender as funções de **agregação** em `MySQL`.

- Aprender a **ordenar** resultados de consultas.

- Criar e manipular um banco de dados para praticar as funções de **agregação** e **ordenação**.

## 1. Introdução

Funções de agregação são usadas para realizar cálculos em um conjunto de valores e retornar um único valor. Ordenação é usada para organizar os resultados de uma consulta em uma ordem específica.

## 2. Preparação do Ambiente

### 2.1 Criação do Banco de Dados

```sql
CREATE DATABASE company;
USE company;
```

### 2.2 Criação das Tabelas

Vamos criar duas tabelas: `departments` e `employees`.

#### Tabela `departments`

```sql
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
```

#### Tabela `employees`

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);
```

### 2.3 Inserção de Dados

#### Inserir dados na tabela `departments`

```sql
INSERT INTO departments (name) VALUES 
('Engineering'), 
('Human Resources'), 
('Marketing'), 
('Sales');
```

#### Inserir dados na tabela `employees`

```sql
INSERT INTO employees (name, salary, department_id) VALUES 
('Alice', 60000, 1), 
('Bob', 70000, 1), 
('Charlie', 55000, 2), 
('David', 45000, 2), 
('Eve', 50000, 3), 
('Frank', 65000, 4), 
('Grace', 75000, 4), 
('Heidi', 80000, 1);
```

## 3. Funções de Agregação

As funções de agregação em MySQL incluem:

- `COUNT()`: Conta o número de linhas.
- `SUM()`: Calcula a soma dos valores.
- `AVG()`: Calcula a média dos valores.
- `MIN()`: Retorna o menor valor.
- `MAX()`: Retorna o maior valor.

### 3.1 COUNT()

```sql
SELECT COUNT(*) FROM employees;
```
Conta o número total de linhas na tabela `employees`.

### 3.2 SUM()

```sql
SELECT SUM(salary) FROM employees;
```
Calcula a soma dos salários dos empregados.

### 3.3 AVG()

```sql
SELECT AVG(salary) FROM employees;
```
Calcula a média dos salários dos empregados.

### 3.4 MIN()

```sql
SELECT MIN(salary) FROM employees;
```
Retorna o menor salário entre os empregados.

### 3.5 MAX()

```sql
SELECT MAX(salary) FROM employees;
```
Retorna o maior salário entre os empregados.

## 4. Ordenação de Resultados

Para ordenar os resultados de uma consulta, usamos a cláusula `ORDER BY`. Podemos ordenar em ordem ascendente (`ASC`) ou descendente (`DESC`).

### 4.1 Ordenação Ascendente

```sql
SELECT * FROM employees ORDER BY salary ASC;
```
Ordena os empregados pelo salário em ordem ascendente.

### 4.2 Ordenação Descendente

```sql
SELECT * FROM employees ORDER BY salary DESC;
```
Ordena os empregados pelo salário em ordem descendente.

### 4.3 Ordenação Múltipla

Podemos ordenar por múltiplas colunas, especificando a ordem para cada coluna.

```sql
SELECT * FROM employees ORDER BY department_id ASC, salary DESC;
```
Ordena os empregados primeiro pelo departamento em ordem ascendente e, dentro de cada departamento, pelo salário em ordem descendente.

## 5. Combinação de Funções de Agregação e Ordenação

É possível combinar funções de agregação com ordenação. Por exemplo, podemos calcular a soma dos salários por departamento e ordenar os resultados.

```sql
SELECT department_id, SUM(salary) as total_salary
FROM employees
GROUP BY department_id
ORDER BY total_salary DESC;
```
Agrupa os empregados por departamento, calcula a soma dos salários em cada departamento e ordena os resultados pela soma dos salários em ordem descendente.

## 6. Exercícios

1. Contar o número de empregados em cada departamento.

2. Encontrar o salário médio em cada departamento e ordenar os resultados em ordem ascendente de salário médio.

3. Identificar o maior salário em cada departamento e ordenar os resultados pelo nome do departamento em ordem alfabética.

## Referências

- [Documentação Oficial do MySQL](https://dev.mysql.com/doc/)
- [W3Schools MySQL Aggregate Functions](https://www.w3schools.com/sql/sql_func_avg.asp)