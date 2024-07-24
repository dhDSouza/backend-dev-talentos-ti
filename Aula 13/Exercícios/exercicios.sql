-- 1. Crie um banco de dados chamado escola.
    
    CREATE DATABASE ESCOLA;

-- 2. Crie uma tabela chamada cursos com os campos id, nome, descricao, duracao.	
    
    CREATE TABLE CURSOS(
        ID INT PRIMARY KEY AUTO_INCREMENT,
        NOME VARCHAR(50) NOT NULL,
        DESCRICAO VARCHAR(255),
        DURACAO INT(3) NOT NULL''
    );

-- 3. Insira pelo menos cinco cursos na tabela cursos.
    
    INSERT INTO CURSOS VALUES (DEFAULT, "Python", "Aprenda Python do Básico ao Avançado", 200);
    INSERT INTO CURSOS VALUES (DEFAULT, "C#", "Aprenda C# do Básico ao Avançado", 90);
    INSERT INTO CURSOS VALUES (DEFAULT, "Back-End TypeScript", "Aprenda TypeScript para Back-End", 90);
    INSERT INTO CURSOS VALUES (DEFAULT, "Front-End ReactJS", "Aprenda ReacJS para Front-End", 90);
    INSERT INTO CURSOS VALUES (DEFAULT, "Visão Computacional em Python", "Desenvolva aplicações com o uso de Visão Computacional em Python.", 360);

-- OU
        
    INSERT INTO CURSOS (nome, descricao, duracao) VALUES ("Python", "Aprenda Python do Básico ao Avançado", 200);
    INSERT INTO CURSOS (nome, descricao, duracao) VALUES ("C#", "Aprenda C# do Básico ao Avançado", 90);
    INSERT INTO CURSOS (nome, descricao, duracao) VALUES ("Back-End TypeScript", "Aprenda TypeScript para Back-End", 90);
    INSERT INTO CURSOS (nome, descricao, duracao) VALUES ("Front-End ReactJS", "Aprenda ReacJS para Front-End", 90);
    INSERT INTO CURSOS (nome, descricao, duracao) VALUES ("Visão Computacional em Python", "Desenvolva aplicações com o uso de Visão Computacional em Python.", 360);

-- 4. Selecione todos os cursos e exiba apenas os nomes e as durações.
    
    SELECT nome, duracao FROM CURSOS;

-- 5. Atualize a descrição de um dos cursos.
    
    UPDATE CURSOS SET descricao = "Aprenda a linguagem de programação Python desde o básico até o avançado" WHERE id = 1;

-- 6. Delete um dos cursos.
    
    DELETE FROM CURSOS WHERE id = 2;

-- 7. Crie uma tabela chamada alunos com os campos id, nome, idade.
    
    CREATE TABLE ALUNOS (
        ID INT PRIMARY KEY AUTO_INCREMENT,
        NOME VARCHAR(50) NOT NULL,
        IDADE INT(2) NOT NULL
    );

-- 8. Insira pelo menos cinco alunos da tabela alunos.

    INSERT INTO ALUNOS VALUES (DEFAULT, "Daniel", 28);
    INSERT INTO ALUNOS VALUES (DEFAULT, "Gabriel", 22);
    INSERT INTO ALUNOS VALUES (DEFAULT, "Emily", 15);
    INSERT INTO ALUNOS VALUES (DEFAULT, "Ronaldo", 40);
    INSERT INTO ALUNOS VALUES (DEFAULT, "Valdisney", 17);

-- OU
        
    INSERT INTO ALUNOS (nome, idade) VALUES ("Daniel", 28);
    INSERT INTO ALUNOS (nome, idade) VALUES ("Gabriel", 22);
    INSERT INTO ALUNOS (nome, idade) VALUES ("Emily", 15);
    INSERT INTO ALUNOS (nome, idade) VALUES ("Ronaldo", 40);
    INSERT INTO ALUNOS (nome, idade) VALUES ("Valdisney", 17);

-- 9. Selecione todos os nomes de alunos, cujo a idade seja mais de 18 anos.
    
    SELECT nome FROM ALUNOS WHERE idade > 18;

-- 10. Atulalize a idade de alguns alunos.
    
    UPDATE ALUNOS SET idade = 19 WHERE id = 3;
    UPDATE ALUNOS SET idade = 18 WHERE id = 5;

-- 11. Delete um aluno.
    
    DELETE FROM ALUNOS WHERE id = 5;
