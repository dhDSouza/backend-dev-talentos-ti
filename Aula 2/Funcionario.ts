class Funcionario {

    nome: string;
    cargo: string;
    salario: number;

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    aumentarSalario(percentual: number): void {
        this.salario += this.salario * (percentual / 100);
    }
}

const funcionario = new Funcionario('Daniel', 'Professor', 3000);
console.log(`Salário antes do aumento: R$ ${funcionario.salario}`);
funcionario.aumentarSalario(10);
console.log(`Salário após o aumento de 10%: R$ ${funcionario.salario}`);
