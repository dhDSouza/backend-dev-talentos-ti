# Classes e Objetos em TypeScript
## Objetivos:

- Criar classes e instanciar objetos em TypeScript

## Conteúdo:
### Criando uma Classe em TypeScript

```typescript
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const pessoa1 = new Pessoa("Daniel", 28);
console.log(pessoa1.saudacao());
```
## Exercício:

1. Crie uma classe chamada Carro com os atributos marca, modelo e ano. Adicione um método que retorna uma descrição do carro. Instancie um objeto da classe Carro e chame o método de descrição.

2. Crie uma classe chamada Retângulo com os atributos largura e a altura. Adicione um método que retorna a área do retângulo em m². Instancie um objeto da classe Retângulo e chame o método de calcular a área.

3. Crie uma classe chamada Funcionário com os atributos nome, cargo e salário. Adcicione um método que calcula um aumento no salário em porcentagem. Instancie o objeto da classe Funcionario e chame o método de aumentar o salário, e exiba o novo salário.