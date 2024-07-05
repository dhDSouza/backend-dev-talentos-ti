# Herança em TypeScript
## Objetivos

-  Aplicar o conceito de herança em typescript.

## O que é Herança?

Herança é um conceito da programação orientada a objetos onde uma classe (chamada de `classe filha` ou `subclasse`) pode herdar `propriedades` e `métodos` de outra classe (chamada de `classe pai` ou `superclasse`). Isso permite reutilizar código e criar hierarquias de classes.

Como Funciona?

Imagine que você tem uma classe `Animal` que define características comuns a todos os animais, como `nome` e `idade`, e comportamentos como `comer` e `dormir`. Você pode criar uma classe `Cachorro` que herda essas características e comportamentos da classe `Animal`, mas também pode ter suas próprias características, como `raça`, e comportamentos específicos, como `latir`.


### Exemplo de Herança em TypeScript

```typescript

// Classe pai (superclasse)
class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }

  dormir() {
    console.log(`${this.nome} está dormindo.`);
  }
}

// Classe filha (subclasse) que herda de Animal
class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    // Chama o construtor da superclasse
    super(nome, idade);
    this.raca = raca;
  }

  latir() {
    console.log(`${this.nome} está latindo: Au au!`);
  }
}

// Criando um objeto da classe Cachorro
const meuCachorro = new Cachorro("Rex", 5, "Labrador");

console.log(meuCachorro.nome);  // Output: Rex
console.log(meuCachorro.idade); // Output: 5
console.log(meuCachorro.raca);  // Output: Labrador

meuCachorro.comer(); // Output: Rex está comendo.
meuCachorro.dormir(); // Output: Rex está dormindo.
meuCachorro.latir(); // Output: Rex está latindo: Au au!

```

## Exercícios

1. Crie uma classe `Humano` com as propriedades `nome` e `idade`, e um método apresentar que imprime uma mensagem com o nome e a idade da pessoa. Em seguida, crie uma classe `Aluno` que herda de `Humano` e adiciona a propriedade `curso`. Adicione também um método `estudar` que imprime uma mensagem dizendo que o aluno está estudando o curso especificado.

2. Crie uma classe `Veiculo` com as propriedades `marca` e `ano`, e um método `info` que imprime a marca e o ano do veículo. Em seguida, crie uma classe `Moto` que herda de `Veiculo` e adiciona a propriedade `modelo`. Adicione um método `detalhes` que imprime todas as informações do carro (marca, ano e modelo).

3. Crie uma classe `Empregado` com as propriedades `nome` e `salario`, e um método `trabalhar` que imprime uma mensagem dizendo que o empregado está trabalhando. Crie uma subclasse `Gerente` que herda de `Empregado` e adiciona a propriedade `departamento`. Adicione um método `supervisionar` que imprime uma mensagem dizendo que o gerente está supervisionando o departamento especificado. Além disso, modifique o método `trabalhar` na classe `Gerente` para incluir a informação do departamento.
