import { Cliente } from "./Cliente";
import { Projeto } from "./Projeto";

// Define a classe Feedback.
export class Feedback {

    // Propriedades privadas para armazenar cliente, projeto, comentário e nota.
    private _cliente: Cliente;
    private _projeto: Projeto;
    private _comentario: string;
    private _nota: number;

    // Construtor que inicializa cliente, projeto, comentário e nota.
    constructor(cliente: Cliente, projeto: Projeto, comentario: string, nota: number) {
        this._cliente = cliente;
        this._projeto = projeto;
        this._comentario = comentario;

        // Valida se a nota está entre 0 e 10.
        if (nota < 0 || nota > 10) {
            throw new Error("Nota deve ser entre 0 e 10");
        } else {
            this._nota = nota;
        }
    }

    // Métodos getters e setters para acessar e modificar cliente.
    public getCliente(): Cliente {
        return this._cliente;
    }

    public setCliente(cliente: Cliente): void {
        this._cliente = cliente;
    }

    // Métodos getters e setters para acessar e modificar projeto.
    public getProjeto(): Projeto {
        return this._projeto;
    }

    public setProjeto(projeto: Projeto): void {
        this._projeto = projeto;
    }

    // Métodos getters e setters para acessar e modificar comentário.
    public getComentario(): string {
        return this._comentario;
    }

    public setComentario(comentario: string): void {
        this._comentario = comentario;
    }

    // Métodos getters e setters para acessar e modificar nota.
    public getNota(): number {
        return this._nota;
    }

    public setNota(nota: number): void {
        this._nota = nota;
    }
}
