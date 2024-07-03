# Encapsulamento em TypeScript
## Objetivos:

- Aplicar encapsulamento em classes TypeScript

## O que é Encapsulamento?

É uma forma de proteger os dados de um objeto, permitindo que apenas métodos específicos possam acessar ou modificar esses dados. Isso ajuda a manter os dados seguros e a prevenir que sejam alterados de maneira inadequada.

Como Funciona?

Imagine que você tem um cofre. Você não pode simplesmente abrir o cofre e pegar o que está dentro. Você precisa usar a chave ou a combinação correta. Da mesma forma, o encapsulamento mantém os dados de um objeto "dentro de um cofre", e você precisa usar `métodos específicos` para `acessar` ou `modificar` esses dados. Estes métodos são comumente conhecidos como `Getter's` e `Setter's`.

### Exemplo de Encapsulamento em TypeScript

```typescript

class Funcionario {

    nome: string;
    cargo: string;
    private _salario: number;
    
    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this._salario = salario;
    }

    AumentoSalario(percentual: number): void {
        this._salario += this._salario * (percentual / 100);
    }

}

const funcionario = new Funcionario2("Daniel", "Professor", 3000);
console.log(funcionario.nome);     //Daniel 
console.log(funcionario.cargo);    //Professor
console.log(funcionario._salario); //Property '_salario' is private and only accessible within class 'Funcionario'.

```

## Exercícios

1. Crie uma classe chamada ContaBancaria com o atributo `privado` saldo crie métodos para depositar e sacar.
2. Crie um método para trasnferência entre contas, crie duas contas e teste a transferência entre elas.