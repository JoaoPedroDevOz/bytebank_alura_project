import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number = 5000


function debitar(valor: number): void {
    if (valor <= 0) {
        throw new Error("O valor a ser debitado precisa ser maior que zero!")
    }

    if (saldo < valor) {
        throw new Error("Saldo insuficiente!");
    }
    saldo -=valor
}

function depositar(valor: number): void {
    if (valor <= 0) {
        throw new Error("O valor a ser debitado precisa ser maior que zero!")
    }
    saldo +=valor
}

const Conta = {
    getSaldo(): number {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_DE_BOLETO) {
            debitar(novaTransacao.valor);
        } else {
            throw new Error('Nosso site não é compatível com outros tipos de transações, perdão!');
        }    
    }
}

export default Conta;