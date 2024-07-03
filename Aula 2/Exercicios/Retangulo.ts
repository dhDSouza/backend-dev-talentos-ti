/*
    Crie uma classe chamada Retângulo com os atributos largura e a altura. 
    Adicione um método que retorna a área do retângulo em m². 
    Instancie um objeto da classe Retângulo e chame o método de calcular a área.
*/

class Retangulo {

    largura: number;    // Propriedade para armazenar a largura do retângulo
    altura: number;     // Propriedade para armazenar a altura do retângulo

    constructor(largura: number, altura:number) {
        this.largura = largura;   // Inicializa a largura com o valor passado como argumento
        this.altura = altura;     // Inicializa a altura com o valor passado como argumento
    }

    calculaArea(): number {
        let area: number = this.largura * this.altura;   // Calcula a área multiplicando largura por altura
        return area;    // Retorna o valor calculado da área
    }

    resultado(): void {
        console.log(`A área do retângulo é de ${this.calculaArea()} m².`);   // Imprime a área calculada do retângulo
    }
}

const retangulo = new Retangulo(2, 5);   // Cria um objeto retangulo com largura 2 e altura 5
retangulo.resultado();   // Chama o método resultado() para imprimir a área do retângulo
