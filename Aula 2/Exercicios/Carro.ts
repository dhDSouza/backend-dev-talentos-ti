/*
    Crie uma classe chamada Carro com os atributos marca, modelo e ano. 
    Adicione um método que retorna uma descrição do carro. 
    Instancie um objeto da classe Carro e chame o método de descrição. 
*/

class Carro {

    marca: string;  //Propriedade para armazenar a marca do carro
    modelo: string; //Propriedade para armazenar o modelo do carro
    ano: number;    //Propriedade para armazenar o ano do carro

    // Construtor da classe Carro
    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;     // Inicializa a propriedade 'marca' com o valor passado
        this.modelo = modelo;   // Inicializa a propriedade 'modelo' com o valor passado
        this.ano = ano;         // Inicializa a propriedade 'ano' com o valor passado
    }

    // Método para imprimir a descrição do carro
    descricao(): void {
        console.log(`Carro modelo: ${this.modelo}, marca: ${this.marca} do ano: ${this.ano}.`);
    }
}

// Criação de um objeto 'carro' da classe Carro
const carro = new Carro("Fiat", "Uno", 1992);

// Chamada do método 'descricao()' para imprimir a descrição do carro
carro.descricao();
