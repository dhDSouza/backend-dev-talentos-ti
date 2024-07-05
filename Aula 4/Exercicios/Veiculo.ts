class Veiculo {

    marca: string;
    ano: number;

    constructor(marca: string, ano: number) {
        this.marca = marca;
        this.ano = ano;
    }

    info(): void {
        console.log(`Marca: ${this.marca}, Ano: ${this.ano}`);
    }

}

class Moto extends Veiculo {

    modelo: string;

    constructor(marca: string, ano: number, modelo: string) {
        super(marca, ano);
        this.modelo = modelo;
    }

    detalhes(): void {
        console.log(`${this.info()}, Modelo: ${this.modelo}`);
    }

}

const moto = new Moto("Honda", 2020, "CB 300");

moto.info();
moto.detalhes();