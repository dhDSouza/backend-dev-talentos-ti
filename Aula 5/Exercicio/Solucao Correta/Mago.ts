import { Personagem } from "./Personagem";

export class Mago extends Personagem {
    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque);
    }

    bolaDeFogo(): void {
        console.log(`${this.getNome()} lança uma bola de fogo!`);
    }
}