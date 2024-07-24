// Define uma classe abstrata chamada Pessoa, que será a base para outras classes.
export abstract class Pessoa {

    // Propriedades privadas para armazenar nome e email.
    private _nome: string;
    private _email: string;

    // Construtor que inicializa nome e email.
    constructor(nome: string, email: string) {
        this._nome = nome;
        this._email = email;
    }

    // Métodos getters e setters para acessar e modificar o nome.
    public getNome(): string {
        return this._nome;
    }

    public setNome(nome: string): void {
        this._nome = nome;
    }

    // Métodos getters e setters para acessar e modificar o email.
    public getEmail(): string {
        return this._email;
    }

    public setEmail(email: string): void {
        this._email = email;
    }

    // Método abstrato que deve ser implementado pelas subclasses.
    public abstract obterTipo(): string;
}
