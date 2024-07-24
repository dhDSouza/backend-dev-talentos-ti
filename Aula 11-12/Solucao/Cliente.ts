import { Pessoa } from "./Pessoa";

// Define a classe Cliente que herda de Pessoa.
export class Cliente extends Pessoa {

    // Construtor que inicializa nome e email, passando para o construtor da classe base (Pessoa).
    constructor(nome: string, email: string) {
        super(nome, email)
    }

    // Implementa o método abstrato obterTipo, retornando "Cliente".
    public obterTipo(): string {
        return "Cliente";
    }
}
