# Aula de Banco de Dados MySQL

## Introdução ao MySQL

`MySQL` é um sistema de gerenciamento de banco de dados relacional `(SGBD)` baseado em `SQL` *`(Structured Query Language)`*. É uma escolha popular para aplicativos web devido à sua performance, confiabilidade e facilidade de uso.

### Objetivos da Aula

1. Compreender os conceitos básicos de bancos de dados relacionais.
2. Conhecer os comandos básicos do `MySQL`.
4. Praticar a criação e manipulação de tabelas e dados.

## Conceitos Básicos

### Banco de Dados Relacional

Um banco de dados relacional armazena dados em tabelas, que são compostas por **linhas** e **colunas**. Cada tabela representa uma **entidade** diferente, e as relações entre as tabelas são definidas através de **`chaves estrangeiras`**.

### Tabelas

Uma tabela é uma coleção de dados organizados em **linhas** e **colunas**. Cada coluna tem um tipo de dado específico, como `INT`, `VARCHAR`, `DATE`, etc.

### SQL

`SQL` *`(Structured Query Language)`* é a linguagem padrão para gerenciar e manipular bancos de dados relacionais.

### Criando um banco de dados

```sql
CREATE DATABASE nome_do_banco;
```

### Usando um banco de dados

```sql
USE nome_do_banco;
```

### Criando uma Tabela

```sql
CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    idade INT,
    email VARCHAR(100)
);
```

### Inserindo Dados

```sql
INSERT INTO alunos (nome, idade, email) VALUES ('João Silva', 22, 'joao@example.com');
```

### Selecionando Dados

```sql
SELECT * FROM alunos;
```

- É possível também selecionar apenas um atributo.

```sql
SELECT nome FROM Alunos WHERE idade = 22;
```

### Atualizando Dados

```sql
UPDATE alunos SET idade = 23 WHERE nome = 'João Silva';
```

### Deletando Dados

```sql
DELETE FROM alunos WHERE nome = 'João Silva';
```

### Exercícios


1. Crie um banco de dados chamado escola.

2. Crie uma tabela chamada cursos com os campos id, nome, descricao, duracao.

3. Insira pelo menos cinco cursos na tabela cursos.

4. Selecione todos os cursos e exiba apenas os nomes e as durações.

5. Atualize a descrição de um dos cursos.

6. Delete um dos cursos.

---

7. Crie uma tabela chamada alunos com os campos id, nome, idade.

8. Insira pelo menos cinco alunos da tabela alunos.

9. Selecione todos os nomes de alunos, cujo a idade seja mais de 18 anos.

10. Atulalize a idade de alguns alunos.

11. Delete um aluno.