import { TipoTransacao } from "./TipoTransacao.js";
let saldo = 5000;
function debitar(valor) {
    if (valor <= 0) {
        throw new Error("O valor a ser debitado precisa ser maior que zero!");
    }
    if (saldo < valor) {
        throw new Error("Saldo insuficiente!");
    }
    saldo -= valor;
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error("O valor a ser debitado precisa ser maior que zero!");
    }
    saldo += valor;
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_DE_BOLETO) {
            debitar(novaTransacao.valor);
        }
        else {
            throw new Error('Nosso site não é compatível com outros tipos de transações, perdão!');
        }
    }
};
export default Conta;
