class ContaBancaria {
    
    // Propriedade privada para armazenar o saldo
    private _saldo: number;

    // Construtor que inicializa o saldo com o valor passado como argumento
    constructor(saldo: number) {
        this._saldo = saldo;
    }

    // Getter para obter o saldo
    get saldo() {
        return this._saldo;
    }

    // Setter privado para definir o saldo
    private set saldo(novoSaldo: number) {
        this._saldo = novoSaldo;
    }

    // Método para realizar um depósito
    realizarDeposito(valor: number): void {
        if(valor < 0) {
            console.log("Impossível sacar um valor negativo");
        } else {
            let saldoAtual = this.saldo + valor;
            this.saldo = saldoAtual;
        }
    }

    // Método para realizar um saque
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

    // Método para realizar uma transferência para outra conta bancária
    realizarTransferencia(valor: number, recebedor: ContaBancaria): void {
        if (valor > this.saldo) {
            console.log("Impossível transferir, você não tem saldo suficiente");
        } else if(valor < 0) {
            console.log("Impossível transferir um valor negativo");
        } else {
            let saldoAtual = this._saldo - valor;
            this.saldo = saldoAtual;
            recebedor.realizarDeposito(valor);
            console.log(`Transferência no valor de R$${valor.toFixed(2)} realizada com sucesso!`);
        }        
    }

    // Método para exibir o saldo atual
    exibirSaldo() {
        console.log(`Seu saldo atual é de: R$${this.saldo}`);
    }
}

// Criação de duas contas bancárias com saldos iniciais
const conta1 =  new ContaBancaria(1000);
const conta2 = new ContaBancaria(100);

// Exibição dos saldos antes dos depósitos
console.log("Saldo antes do depósito");
conta1.exibirSaldo();
conta2.exibirSaldo();
console.log("-----------------------");

// Realização dos depósitos
conta1.realizarDeposito(1000);
conta2.realizarDeposito(100);

// Exibição dos saldos após os depósitos
console.log("Saldo depois do depósito");
conta1.exibirSaldo();
conta2.exibirSaldo();
console.log("-----------------------");

// Realização dos saques
conta1.realizarSaque(500);
conta2.realizarSaque(50);

// Exibição dos saldos após os saques
console.log("Saldo depois do saque");
conta1.exibirSaldo();
conta2.exibirSaldo();
console.log("-----------------------");

// Realização das transferências
conta1.realizarTransferencia(500, conta2);
conta2.realizarTransferencia(50, conta1);

// Exibição dos saldos após as transferências
console.log("Saldo depois da transferência");
conta1.exibirSaldo();
conta2.exibirSaldo();
console.log("-----------------------");
