# Exercício: Sistema de Gerenciamento de Projetos Freelancer

**Objetivo:**

Desenvolver um sistema de gerenciamento de projetos para freelancers utilizando conceitos de Programação Orientada a Objetos (POO) em TypeScript. O sistema deve permitir o cadastro de freelancers, projetos, e atribuições de projetos a freelancers. A solução deve utilizar atributos `privados`, `encapsulamento`, `herança`, `classes abstratas`, `interfaces` e `polimorfismo`. O código deve ser organizado em arquivos separados usando `export` e `import`.

**Requisitos:**

1. **Classe Abstrata `Pessoa`:**

    - Atributos privados: `nome`, `email`.
    - Métodos públicos para **`obter`** e **`alterar`** os atributos.
    - Método abstrato `obterTipo(): string`.

2. **Classe `Freelancer` (herdando de `Pessoa`):**
    - Atributos privados adicionais: `areaDeEspecializacao`, `projetos` (array de objetos do tipo `Projeto`).
    - Métodos públicos para adicionar e remover projetos.
    - Implementação do método `obterTipo()`, retornando "Freelancer".

3. **Classe `Projeto`:**
    - Atributos privados: `titulo`, `descricao`, `freelancer` (objeto do tipo `Freelancer` ou `null`).
    - Métodos públicos para obter e alterar os atributos.
    - Métodos para atribuir e desatribuir um freelancer ao projeto.

4. **Interface `IAvaliavel`:**
    - Método `avaliar(): void`.

5. **Classe `Avaliacao`:**
    - Implementa a interface `IAvaliavel`.
    - Atributos privados: `freelancer` (objeto do tipo `Freelancer`), `projeto` (objeto do tipo `Projeto`), `nota` (número de 0 a 10).
    - Implementação do método `avaliar()`, que deve imprimir uma mensagem com a nota e detalhes da avaliação.

6. **Organização do Código:**
    - Cada classe e interface deve estar em um arquivo separado.
    - Utilizar `export` para exportar as classes e interfaces e `import` para utilizá-las onde necessário.

**Instruções:**

1. Crie a estrutura de pastas e arquivos para organizar seu código.

2. Implemente a classe abstrata `Pessoa` no arquivo `Pessoa.ts`.

3. Implemente a classe `Freelancer` no arquivo `Freelancer.ts`, herdando de `Pessoa`.

4. Implemente a classe `Projeto` no arquivo `Projeto.ts`.

5. Implemente a interface `IAvaliavel` no arquivo `IAvaliavel.ts`.

6. Implemente a classe `Avaliacao` no arquivo `Avaliacao.ts`, implementando a interface `IAvaliavel`.

7. Crie um arquivo `main.ts` para testar seu sistema, realizando as seguintes operações:

    - Criação de alguns freelancers e projetos.
    - Atribuição de freelancers a projetos.
    - Avaliação de freelancers nos projetos.

**Exemplo de Estrutura de Pastas e Arquivos:**

```sh

src/
|-- Pessoa.ts
|-- Freelancer.ts
|-- Projeto.ts
|-- IAvaliavel.ts
|-- Avaliacao.ts
|-- main.ts

```