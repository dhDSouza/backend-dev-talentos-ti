import { Freelancer } from './Freelancer';
import { Cliente } from './Cliente';

// Define a classe Projeto.
export class Projeto {
    // Propriedades privadas para armazenar título, descrição, freelancers, cliente e estado de conclusão do projeto.
    private _titulo: string;
    private _descricao: string;
    private _freelancers: Freelancer[];
    private _cliente: Cliente;
    private _concluido: boolean;

    // Construtor que inicializa título, descrição e cliente.
    constructor(titulo: string, descricao: string, cliente: Cliente) {
        this._titulo = titulo;
        this._descricao = descricao;
        this._cliente = cliente;
        this._freelancers = [];
        this._concluido = false;
    }

    // Métodos getters e setters para acessar e modificar o título.
    public getTitulo(): string {
        return this._titulo;
    }

    public setTitulo(titulo: string): void {
        this._titulo = titulo;
    }

    // Métodos getters e setters para acessar e modificar a descrição.
    public getDescricao(): string {
        return this._descricao;
    }

    public setDescricao(descricao: string): void {
        this._descricao = descricao;
    }

    // Método getter para obter os freelancers associados ao projeto.
    public getFreelancers(): Freelancer[] {
        return this._freelancers;
    }

    // Métodos getters e setters para acessar e modificar o cliente.
    public getCliente(): Cliente {
        return this._cliente;
    }

    public setCliente(cliente: Cliente): void {
        this._cliente = cliente;
    }

    // Métodos setters para marcar o projeto como concluído.
    public setConcluido(concluido: boolean): void {
        this._concluido = concluido;
    }

    // Método getter para verificar se o projeto está concluído.
    public isConcluido(): boolean {
        return this._concluido;
    }

    // Método para atribuir um freelancer ao projeto.
    public atribuirFreelancer(freelancer: Freelancer): void {
        if (!this._freelancers.includes(freelancer)) {
            this._freelancers.push(freelancer);
            freelancer.adicionarProjeto(this);
        } else {
            console.log("Este freelancer já está adicionado a este projeto!");
        }
    }

    // Método para desatribuir um freelancer do projeto.
    public desatribuirFreelancer(freelancer: Freelancer): void {
        const index = this._freelancers.indexOf(freelancer);
        if (index > -1) {
            this._freelancers.splice(index, 1);
            freelancer.removerProjeto(this);
        }
    }
}
