class Empregado {

    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    trabalhar(): void {
        console.log(`O empregado ${this.nome} está trabalhando.`);
    }

}

class Gerente extends Empregado {

    departamento: string;

    constructor(nome: string, idade: number, departamento: string) {
        super(nome, idade);
        this.departamento = departamento;
    }

    supervisionar(): void {
        console.log(`O gerente ${this.nome} está supervisionando o departamento ${this.departamento}`);
    }

    trabalhar(): void {
        console.log(`O gerente ${this.nome} está trabalhando no departamento ${this.departamento}`);
    }

}

const gerente = new Gerente("Daniel", 28, "Ensino");

gerente.trabalhar();
gerente.supervisionar();