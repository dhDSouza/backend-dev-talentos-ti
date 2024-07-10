import { Guerreiro } from "./Guerreiro";
import { Mago } from "./Mago";
import { Arqueiro } from "./Arqueiro";

function main() {

    const guerreiro = new Guerreiro("Aragorn", 100, 20);
    const mago = new Mago("Gandalf", 80, 30);
    const arqueiro = new Arqueiro("Legolas", 90, 25);

    guerreiro.golpeDuplo();
    mago.bolaDeFogo();
    arqueiro.ataquePreciso();

    guerreiro.atacar();
    mago.atacar();
    arqueiro.atacar();
}

main();
