## Exercício Complementar: Adicionando Feedback do Cliente ao Sistema de Gerenciamento de Projetos Freelancer

**Objetivo:**

Melhorar o sistema de gerenciamento de projetos para freelancers da última aula, adicionando a funcionalidade de feedback do cliente. Os clientes poderão fornecer feedback sobre os projetos concluídos, e esse feedback será armazenado e exibido junto com a avaliação do freelancer. As avaliações **`só poderão ser feitas`** se o projeto estiver marcado como **`concluído`**.

**Requisitos:**

1. **Classe `Cliente` (herdando de `Pessoa`):**
    - Métodos públicos para **`obter`** e **`alterar`** os atributos.
    - Implementação do método `obterTipo()`, retornando "Cliente".

2. **Modificação da Classe `Projeto`:**
    - Atributos privados adicionais: `cliente` (objeto do tipo `Cliente`) e `concluido` (boolean).
    - Métodos públicos para **`obter`** e **`alterar`** o cliente.
    - Método para marcar o projeto como concluído.
    - Método `isConcluido()` para verificar se o projeto está concluído.

3. **Classe `Feedback`:**
    - Atributos privados: `cliente` (objeto do tipo `Cliente`), `projeto` (objeto do tipo `Projeto`), `comentario` (string), `nota` (número de 0 a 10).
    - Métodos públicos para obter e alterar os atributos.

4. **Modificação da Classe `Avaliacao`:**
    - Atributo privado adicional: `feedback` (objeto do tipo `Feedback` ou `null`).
    - Método para adicionar feedback a uma avaliação.
    - Modificação do método `avaliar()` para permitir a avaliação apenas se o projeto estiver concluído.

5. **Organização do Código:**
    - Cada nova classe deve estar em um arquivo separado.
    - Utilizar `export` para exportar as classes e `import` para utilizá-las onde necessário.

**Instruções:**

1. Crie a classe `Cliente` no arquivo `Cliente.ts`, herdando de `Pessoa`.

2. Modifique a classe `Projeto` no arquivo `Projeto.ts` para incluir os atributos `cliente` e `concluido` e métodos relacionados.

3. Crie a classe `Feedback` no arquivo `Feedback.ts`.

4. Modifique a classe `Avaliacao` no arquivo `Avaliacao.ts` para incluir o atributo `feedback` e métodos relacionados.

5. Atualize o arquivo `main.ts` para testar a nova funcionalidade, realizando as seguintes operações:

    - Criação de alguns clientes, freelancers, e projetos.
    - Atribuição de clientes e freelancers a projetos.
    - Marcação de projetos como concluídos.
    - Criação de feedbacks e adição aos projetos.
    - Exibição das avaliações e feedbacks.