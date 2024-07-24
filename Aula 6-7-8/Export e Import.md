## Utilizando `export` e `import` em TypeScript para Organizar Classes em Arquivos Separados

### Por que usar `export` e `import`?

Organizar seu código em vários arquivos torna mais fácil gerenciar, entender e manter. Cada arquivo pode conter uma única classe ou um pequeno grupo de classes relacionadas, o que ajuda a evitar arquivos gigantes e complexos. Além disso, isso facilita a reutilização de código, já que você pode importar classes onde precisar.

### Como usar `export` e `import` em TypeScript

#### Passo 1: Exportar a classe

Vamos supor que você tenha uma classe `Pessoa` em um arquivo chamado `Pessoa.ts`.

```typescript
// Pessoa.ts
export class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
```

A palavra-chave `export` permite que essa classe seja importada em outros arquivos.

#### Passo 2: Importar a classe

Agora, em outro arquivo, por exemplo, `main.ts`, você pode importar e usar a classe `Pessoa`.

```typescript
// main.ts
import { Pessoa } from './Pessoa';

const pessoa = new Pessoa('Daniel', 28);
console.log(pessoa.saudacao());
```

Aqui usamos a palavra-chave `import` seguida do nome da classe entre chaves `{}` e o caminho do arquivo onde a classe foi definida. Observe que usamos um caminho relativo `(./Pessoa)` para importar a classe.

### Benefícios de usar export e import

- **`Modularidade`**: Divide o código em módulos menores e mais gerenciáveis.
- **`Reutilização de Código`**: Facilita a reutilização de classes e funções em diferentes partes do projeto.
- **`Manutenabilidade`**: Simplifica a manutenção e atualização do código, pois cada módulo é independente.
- **`Colaboração`**: Facilita o trabalho em equipe, já que cada membro pode trabalhar em módulos específicos sem conflitos.
- **`Leitura e Compreensão`**: Torna o código mais legível e compreensível, facilitando a navegação entre diferentes partes do projeto.