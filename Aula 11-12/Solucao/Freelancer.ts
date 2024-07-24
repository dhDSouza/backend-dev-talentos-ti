import { Pessoa } from './Pessoa';
import { Projeto } from './Projeto';

// Define a classe Freelancer que herda de Pessoa.
export class Freelancer extends Pessoa {
    // Propriedade privada para armazenar a área de especialização.
    private _areaDeEspecializacao: string;
    // Array para armazenar os projetos associados ao freelancer.
    private _projetos: Projeto[];

    // Construtor que inicializa nome, email e área de especialização, passando nome e email para o construtor da classe base (Pessoa).
    constructor(nome: string, email: string, areaDeEspecializacao: string) {
        super(nome, email);
        this._areaDeEspecializacao = areaDeEspecializacao;
        this._projetos = [];
    }

    // Métodos getters e setters para acessar e modificar a área de especialização.
    public getAreaDeEspecializacao(): string {
        return this._areaDeEspecializacao;
    }

    public setAreaDeEspecializacao(areaDeEspecializacao: string): void {
        this._areaDeEspecializacao = areaDeEspecializacao;
    }

    // Método para adicionar um projeto ao freelancer.
    public adicionarProjeto(projeto: Projeto): void {
        if (!this._projetos.includes(projeto)) {
            this._projetos.push(projeto);
            projeto.atribuirFreelancer(this);
        } else {
            console.log("Este projeto já foi adicionado!");
        }
    }

    // Método para remover um projeto do freelancer.
    public removerProjeto(projeto: Projeto): void {
        const index = this._projetos.indexOf(projeto);
        if (index > -1) {
            this._projetos.splice(index, 1);
            projeto.desatribuirFreelancer(this);
        }
    }

    // Método para obter os títulos dos projetos associados ao freelancer.
    public getProjetos(): void {
        this._projetos.forEach(projeto => console.log(projeto.getTitulo()));
    }

    // Implementa o método abstrato obterTipo, retornando "Freelancer".
    public obterTipo(): string {
        return 'Freelancer';
    }
}
