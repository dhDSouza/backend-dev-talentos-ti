class Humano {

    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }

}

class Aluno extends Humano {

    curso: string;

    constructor(nome: string, idade: number, curso: string) {
        super(nome, idade);
        this.curso = curso;
    }

    estudar(): void {
        console.log(`O aluno: ${this.nome} está estudando no curso: ${this.curso}`);
    }

}

const aluno = new Aluno("Daniel", 28, "Desenvolvimento Backend");

aluno.apresentar();
aluno.estudar();