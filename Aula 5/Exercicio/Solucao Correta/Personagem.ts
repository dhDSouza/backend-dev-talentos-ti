export abstract class Personagem {
    private _nome: string;
    private _vida: number;
    private _ataque: number;

    constructor(nome: string, vida: number, ataque: number) {
        this._nome = nome;
        this._vida = vida;
        this._ataque = ataque;
    }

    getNome(): string {
        return this._nome;
    }

    getVida(): number {
        return this._vida;
    }

    setVida(vida: number): void {
        this._vida = vida;
    }

    getAtaque(): number {
        return this._ataque;
    }

    setAtaque(ataque: number): void {
        this._ataque = ataque;
    }

    atacar(): void {
        console.log(`${this._nome} está atacando com força de ${this._ataque}!`);
    }
}