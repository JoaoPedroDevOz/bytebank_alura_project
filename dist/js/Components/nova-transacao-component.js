import Conta from "../Types/Conta.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";
const transacaoForm = document.querySelector('.block-nova-transacao form');
transacaoForm.addEventListener('submit', function (event) {
    try {
        event.preventDefault();
        if (!transacaoForm.checkValidity()) {
            alert('Preencha todos os campos do formulário!');
            return;
        }
        ;
        const inputTipoTransacao = document.querySelector('#tipoTransacao');
        const inputValor = document.querySelector('#valor');
        const inputData = document.querySelector('#data');
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value + '00:00:00');
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        transacaoForm.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
});
