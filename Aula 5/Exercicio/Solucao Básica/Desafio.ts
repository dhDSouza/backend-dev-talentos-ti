abstract class Personagem {
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

class Guerreiro extends Personagem {
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

class Arqueiro extends Personagem {
    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque);
    }

    ataquePreciso(): void {
        console.log(`${this.getNome()} realiza um ataque preciso! Dano crítico.`);
    }
}

class Mago extends Personagem {
    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque);
    }

    bolaDeFogo(): void {
        console.log(`${this.getNome()} lança uma bola de fogo!`);
    }
}

const guerreiro = new Guerreiro("Aragorn", 100, 20);
const mago = new Mago("Gandalf", 80, 30);
const arqueiro = new Arqueiro("Legolas", 90, 25);

guerreiro.golpeDuplo();
mago.bolaDeFogo();
arqueiro.ataquePreciso();

guerreiro.atacar();
mago.atacar();
arqueiro.atacar();
