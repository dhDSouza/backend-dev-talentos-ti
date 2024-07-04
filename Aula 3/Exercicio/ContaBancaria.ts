class ContaBancaria {

    private _saldo: number;

    constructor(saldo: number) {
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    private set saldo(novoSaldo: number) {
        this._saldo = novoSaldo;
    }

    realizarDeposito(valor: number): void {
        if(valor < 0) {
            console.log("Impossível sacar um valor negativo");
        }

        let saldoAtual = this.saldo + valor;
        this.saldo = saldoAtual;
    }

    realizarSaque(valor: number): void {
        if (valor > this.saldo) {
            console.log("Impossível sacar, você não tem saldo suficiente");
        } else if(valor < 0) {
            console.log("Impossível sacar um valor negativo");
        } else {
            let saldoAtual = this._saldo - valor;
            this.saldo = saldoAtual;
        }
    }

    transferencia(valor: number, recebedor: ContaBancaria): void {
        if (valor > this.saldo) {
            console.log("Impossível transferir, você não tem saldo suficiente");
        } else if(valor < 0) {
            console.log("Impossível transferir um valor negativo");
        } else {
            let saldoAtual = this._saldo - valor;
            this.saldo = saldoAtual;
            recebedor.realizarDeposito(valor);
            console.log('Transferência realizada com sucesso!');
        }        
    }

    exibirSaldo() {
        console.log(`Seu saldo atual é de: R$${this.saldo}`);
    }

}

const conta1 =  new ContaBancaria(1000);
const conta2 = new ContaBancaria(100);

conta1.exibirSaldo();
console.log("---------");
conta2.exibirSaldo();
console.log("---------");
conta1.realizarDeposito(100);
conta1.exibirSaldo();
conta1.realizarSaque(100);
conta1.exibirSaldo();
console.log("---------");
conta2.realizarDeposito(100);
conta2.exibirSaldo();
conta2.realizarSaque(100);
conta2.exibirSaldo();
console.log("---------");

conta1.transferencia(100, conta2);
conta1.exibirSaldo();
conta2.exibirSaldo();