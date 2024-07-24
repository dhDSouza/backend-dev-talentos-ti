-- 1. Criação do Banco de Dados e Tabelas
-- Crie um banco de dados chamado Biblioteca.
-- Crie uma tabela **Livros** com as colunas: `id`, `titulo` (VARCHAR(100)), autor (VARCHAR(100)), editora (VARCHAR(100)).
-- Crie uma tabela **Autores** com as colunas: `id`, `nome` (VARCHAR(50)), nacionalidade (VARCHAR(50)).

    CREATE DATABASE BIBLIOTECA;

    USE BIBLIOTECA;

    CREATE TABLE LIVROS (
        id int primary key auto_increment,
        titulo varchar(100) not null,
        editora varchar(100) not null
    );

    CREATE TABLE AUTORES (
        id int primary key auto_increment,
        nome varchar(50) not null,
        nacionalidade varchar(50) not null
    );

-- 2. Adição de Chaves Estrangeiras
-- Na tabela **Livros**, adicione uma coluna `autor_id` (INT) que será uma chave estrangeira referenciando a coluna `id` da tabela **Autores**.
-- Adicione a chave estrangeira à tabela **Livros**.

    USE BIBLIOTECA;

    ALTER TABLE LIVROS ADD COLUMN autor_id INT NOT NULL;
    ALTER TABLE LIVROS ADD CONSTRAINT fk_autor_id FOREIGN KEY (autor_id) REFERENCES AUTORES(id);

-- 3. Manipulação de Dados
-- Insira 3 registros na tabela **Autores**.
-- Insira 3 registros na tabela **Livros**, garantindo que `autor_id` referencie corretamente os id na tabela **Autores**.

    USE BIBLIOTECA;

    INSERT INTO AUTORES (NOME, NACIONALIDADE) VALUES ("Stephen King", "Estado Unidense"), ("George Orwell", "Britânico"), ("J.R.R. Tolkien", "Britânico");
    INSERT INTO LIVROS (TITULO, AUTOR, EDITORA, autor_id) VALUES ("IT", "Stephen King", "Gota Mágica", 1), ("Revolução dos Bichos", "George Orwell", "Herbert Richers", 2), ("O Iluminado", "Stephen King", "Alamo", 1);

-- 4. Consultas SQL
-- Selecione todos os autores que não têm livros cadastrados.

    USE BIBLIOTECA;

    SELECT NOME FROM AUTORES, LIVROS WHERE AUTORES.ID <> LIVROS.AUTOR_ID;