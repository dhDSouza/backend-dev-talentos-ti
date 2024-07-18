# Adição de Chaves Estrangeiras

Depois de criar as tabelas cursos e alunos da aula anterior, podemos adicionar chaves estrangeiras para criar relações entre elas.

## Adicionar Chave Estrangeira na Tabela Alunos

A chave estrangeira `curso_id` na tabela Alunos referenciará a coluna `id` da tabela Cursos.

```sql
ALTER TABLE Alunos
ADD CONSTRAINT fk_curso_id
FOREIGN KEY (curso_id)
REFERENCES Cursos(id);
```

## Exercícios

1. Criação do Banco de Dados e Tabelas


- Crie um banco de dados chamado Biblioteca.

- Crie uma tabela **Livros** com as colunas: `id`, `titulo` (VARCHAR(100)), autor (VARCHAR(100)), editora (VARCHAR(100)).

- Crie uma tabela **Autores** com as colunas: `id`, `nome` (VARCHAR(50)), nacionalidade (VARCHAR(50)).


2. Adição de Chaves Estrangeiras


- Na tabela **Livros**, adicione uma coluna `autor_id` (INT) que será uma chave estrangeira referenciando a coluna `id` da tabela **Autores**.

- Adicione a chave estrangeira à tabela **Livros**.


3. Manipulação de Dados


- Insira 3 registros na tabela **Autores**.

- Insira 3 registros na tabela **Livros**, garantindo que `autor_id` referencie corretamente os id na tabela **Autores**.


4. Consultas SQL


- Selecione todos os autores que não têm livros cadastrados.
