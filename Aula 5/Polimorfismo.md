## Polimorfismo em TypeScript

### O que é Polimorfismo?

Polimorfismo é um conceito da programação orientada a objetos que permite que objetos de diferentes classes sejam tratados como objetos de uma classe comum. Ele permite que você use uma `interface única` para representar diferentes tipos de objetos. Simplificando, polimorfismo permite que um `método` se comporte de `diferentes maneiras`, dependendo do objeto com o qual está sendo usado.

Como Funciona?

Imagine que você tem uma classe `Animal` com um método `fazerSom`. Você pode ter várias subclasses de `Animal`, como `Cachorro`, `Gato`, e `Vaca`, cada uma com sua própria implementação do método `fazerSom`. Quando você chama `fazerSom` em um objeto, ele se comporta de maneira diferente, dependendo do tipo de animal.

### Exemplos em Código

```typescript
// Classe pai (superclasse)
class Animal {

  fazerSom(): void {
    console.log("O animal faz um som.");
  }

}

// Subclasse Cachorro
class Cachorro extends Animal {

  fazerSom(): void {
    console.log("O cachorro late: Au au!");
  }

}

// Subclasse Gato
class Gato extends Animal {

  fazerSom(): void {
    console.log("O gato mia: Miau!");
  }

}

// Subclasse Vaca
class Vaca extends Animal {

  fazerSom(): void {
    console.log("A vaca muge: Muuu!");
  }

}

// Testando as classes e o polimorfismo
const meuCachorro = new Cachorro();
const meuGato = new Gato();
const minhaVaca = new Vaca();

meuCachorro.emitirSom(); // Output: O cachorro late: Au au!
meuGato.emitirSom();     // Output: O gato mia: Miau!
minhaVaca.emitirSom();   // Output: A vaca muge: Muuu!
