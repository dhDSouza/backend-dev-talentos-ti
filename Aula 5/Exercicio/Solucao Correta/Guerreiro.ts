import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem {
    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque);
    }

    golpeDuplo(): void {

        let ataqueOriginal = this.getAtaque();
        this.setAtaque(this.getAtaque() * 2);

        console.log(`${this.getNome()} executa o golpe duplo! Aumento temporário de ataque para ${this.getAtaque()}.`);
        
        this.setAtaque(ataqueOriginal);
        
    }
}
