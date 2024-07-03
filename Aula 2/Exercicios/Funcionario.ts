/*
    Crie uma classe chamada Funcionário com os atributos nome, cargo e salário.
    Adcicione um método que calcula um aumento no salário em porcentagem.
    Instancie o objeto da classe Funcionario e chame o método de aumentar o salário, e exiba o novo salário.
*/

class Funcionario {

    nome: string;      // Propriedade para armazenar o nome do funcionário
    cargo: string;     // Propriedade para armazenar o cargo do funcionário
    salario: number;   // Propriedade para armazenar o salário do funcionário

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;         // Inicializa o nome com o valor passado como argumento
        this.cargo = cargo;       // Inicializa o cargo com o valor passado como argumento
        this.salario = salario;   // Inicializa o salário com o valor passado como argumento
    }

    aumentarSalario(percentual: number): void {
        this.salario += this.salario * (percentual / 100);   // Calcula o aumento de salário baseado no percentual
    }
}

const funcionario = new Funcionario('Daniel', 'Professor', 3000);   // Cria um objeto funcionario com nome Daniel, cargo Professor e salário 3000
console.log(`Salário antes do aumento: R$ ${funcionario.salario}`);   // Imprime o salário antes do aumento
funcionario.aumentarSalario(10);   // Chama o método aumentarSalario() para aumentar o salário em 10%
console.log(`Salário após o aumento de 10%: R$ ${funcionario.salario}`);   // Imprime o salário após o aumento
