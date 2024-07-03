class Retangulo {

    largura: number;
    altura: number;

    constructor(largura: number, altura:number) {
        this.largura = largura;
        this.altura = altura;
    }

    calculaArea(): number {
        let area: number = this.largura * this.altura;
        return area;
    }

    resultado(): void {
        console.log(`A área do retângulo é de ${this.calculaArea()} m².`);
    }

}

const retangulo = new Retangulo(2, 5);
retangulo.resultado();