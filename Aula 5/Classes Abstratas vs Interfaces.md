# Diferença entre Classe Abstrata e Interface em TypeScript

## Classe Abstrata

Uma classe abstrata é uma classe que não pode ser instanciada diretamente, ou seja, você não pode criar objetos a partir dela. Ela serve como uma base para outras classes. Em uma classe abstrata, você pode definir métodos que devem ser implementados nas classes derivadas (filhas), mas também pode ter métodos com implementação já definida.

**Exemplo de Classe Abstrata:**

```typescript

abstract class Animal {
    abstract fazerSom(): void;

    mover(): void {
        console.log("O animal se moveu.");
    }
}

class Cachorro extends Animal {
    fazerSom(): void {
        console.log("O cachorro latiu.");
    }
}

const meuCachorro = new Cachorro();
meuCachorro.fazerSom(); // Saída: O cachorro latiu.
meuCachorro.mover();    // Saída: O animal se moveu.

```

Neste exemplo, `Animal` é uma classe abstrata com um método abstrato `fazerSom()`, que precisa ser implementado nas classes que a herdam, como `Cachorro`. A classe abstrata também tem um método concreto `mover()` que pode ser usado diretamente.

## Interface

Uma interface define um contrato que as classes devem seguir. Ela não pode ter nenhuma implementação, apenas a assinatura dos métodos e propriedades que as classes que implementarem essa interface devem possuir.

### Exemplo de Interface

```typescript

interface Veiculo {
    marca: string;
    velocidade: number;
    
    acelerar(): void;
    frear(): void;
}

class Carro implements Veiculo {
    marca: string;
    velocidade: number;

    constructor(marca: string, velocidade: number) {
        this.marca = marca;
        this.velocidade = velocidade;
    }

    acelerar(): void {
        console.log(`${this.marca} acelerou.`);
        this.velocidade += 10;
    }

    frear(): void {
        console.log(`${this.marca} freou.`);
        this.velocidade -= 10;
    }
}

const meuCarro = new Carro("Toyota", 0);
meuCarro.acelerar(); // Saída: Toyota acelerou.
meuCarro.frear();    // Saída: Toyota freou.

```

Neste exemplo, `Veiculo` é uma interface que define o que uma classe que a implemente deve ter as propriedades `marca` e `velocidade`, e métodos `acelerar()` e `frear()`. A classe `Carro` implementa a interface `Veiculo`, garantindo que possui todas as propriedades e métodos definidos na interface.

## Resumo das Diferenças

### Classe Abstrata:

- Pode ter métodos com implementação.
- Não pode ser instanciada diretamente.
- Usada para compartilhar código comum entre classes relacionadas.

### Interface:

- Não pode ter implementação de métodos.
- Serve como um contrato que as classes devem seguir.
- Usada para definir a estrutura de objetos, sem compartilhar código.