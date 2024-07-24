# Tipos de Dados e Atributos em MySQL

## Tipos de Dados

| Tipo de Dados | Descrição |
|---------------|-----------|
| **INT**       | Número inteiro (4 bytes). Pode ser especificado como `TINYINT`, `SMALLINT`, `MEDIUMINT`, `INT`, ou `BIGINT` para diferentes tamanhos. |
| **FLOAT**     | Número de ponto flutuante com precisão simples. |
| **DOUBLE**    | Número de ponto flutuante com precisão dupla. |
| **DECIMAL**   | Número decimal com precisão exata, útil para valores monetários. |
| **CHAR**      | Cadeia de caracteres com comprimento fixo. |
| **VARCHAR**   | Cadeia de caracteres com comprimento variável. |
| **TEXT**      | Cadeia de caracteres de comprimento variável, até 65.535 caracteres. Existem variantes menores: `TINYTEXT`, `MEDIUMTEXT`, `LONGTEXT`. |
| **DATE**      | Data no formato 'YYYY-MM-DD'. |
| **DATETIME**  | Data e hora no formato 'YYYY-MM-DD HH:MM:SS'. |
| **TIMESTAMP** | Data e hora no formato 'YYYY-MM-DD HH:MM:SS', geralmente usado para registros de criação e atualização. |
| **TIME**      | Hora no formato 'HH:MM:SS'. |
| **YEAR**      | Ano no formato 'YYYY'. |
| **BLOB**      | Binário Large Object, usado para armazenar dados binários de até 65.535 bytes. Variedades incluem `TINYBLOB`, `MEDIUMBLOB`, `LONGBLOB`. |
| **ENUM**      | Lista de valores permitidos, armazenando uma string de uma lista de valores predefinidos. |

## Atributos

| Atributo       | Descrição |
|----------------|-----------|
| **NOT NULL**   | Garante que a coluna não pode ter valores nulos. |
| **AUTO_INCREMENT** | Incrementa automaticamente o valor da coluna para cada nova linha, geralmente usado para chaves primárias. |
| **PRIMARY KEY** | Define a coluna como a chave primária da tabela, garantindo unicidade e indexação. |
| **FOREIGN KEY** | Estabelece uma relação entre colunas de tabelas diferentes, garantindo integridade referencial. |
| **UNIQUE**     | Garante que todos os valores na coluna sejam únicos. |
| **DEFAULT**    | Define um valor padrão para a coluna quando nenhum valor é fornecido. |
| **CHECK**      | Define uma restrição que limita os valores aceitos na coluna (disponível a partir do MySQL 8.0.16). |
