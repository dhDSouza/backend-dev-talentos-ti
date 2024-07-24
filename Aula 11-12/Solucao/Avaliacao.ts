import { IAvaliavel } from './IAvaliavel';
import { Freelancer } from './Freelancer';
import { Projeto } from './Projeto';
import { Feedback } from './Feedback';

// Define a classe Avaliacao que implementa a interface IAvaliavel.
export class Avaliacao implements IAvaliavel {

    // Propriedades privadas para armazenar freelancer, projeto, nota e feedback.
    private _freelancer: Freelancer;
    private _projeto: Projeto;
    private _nota: number;
    private _feedback: Feedback | null;

    // Construtor que inicializa freelancer, projeto e nota.
    constructor(freelancer: Freelancer, projeto: Projeto, nota: number) {
        this._freelancer = freelancer;
        this._projeto = projeto;
        this._nota = nota;
        this._feedback = null;

        // Valida se a nota está entre 0 e 10.
        if (nota < 0 || nota > 10) {
            throw new Error("Nota deve ser entre 0 e 10");
        } else {
            this._nota = nota;
        }
    }

    // Métodos getters para acessar o freelancer, projeto e nota.
    public getFreelancer(): Freelancer {
        return this._freelancer;
    }

    public getProjeto(): Projeto {
        return this._projeto;
    }

    public getNota(): number {
        return this._nota;
    }

    // Método setter para modificar a nota.
    public setNota(nota: number): void {
        this._nota = nota;
    }

    // Método getter para acessar o feedback.
    public getFeedback(): Feedback | null {
        return this._feedback;
    }

    // Método para adicionar um feedback à avaliação.
    public adicionarFeedback(feedback: Feedback): void {
        this._feedback = feedback;
    }

    // Implementa o método avaliar da interface IAvaliavel.
    public avaliar(): void {
        if (this._projeto.isConcluido()) {
            console.log(`Avaliando o freelancer ${this._freelancer.getNome()} no projeto ${this._projeto.getTitulo()}`);
            console.log(`Nota: ${this._nota}`);
            if (this._feedback) {
                console.log(`Feedback do cliente: ${this._feedback.getComentario()} (Nota: ${this._feedback.getNota()})`);
            }
        } else {
            console.log(`O projeto ${this._projeto.getTitulo()} não está concluído. Não é possível avaliar.`);
        }
    }
}
