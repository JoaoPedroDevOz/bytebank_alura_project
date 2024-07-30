import Conta from "../Types/Conta.js";
import { TipoTransacao } from "../Types/TipoTransacao.js";
import { Transacao } from "../Types/Transacao.js";
import SaldoComponent from "./saldo-component.js";

const transacaoForm = document.querySelector('.block-nova-transacao form') as HTMLFormElement;

transacaoForm.addEventListener('submit', function(event) {
    try {
        event.preventDefault();
        if (!transacaoForm.checkValidity()) {
            alert('Preencha todos os campos do formulário!');
            return;
        };
        const inputTipoTransacao= document.querySelector('#tipoTransacao') as HTMLSelectElement
        const inputValor = document.querySelector('#valor') as HTMLInputElement
        const inputData = document.querySelector('#data') as HTMLInputElement

        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let valor: number = inputValor.valueAsNumber;
        let data: Date = new Date(inputData.value);

        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };

        Conta.registrarTransacao(novaTransacao)
        SaldoComponent.atualizar()
        transacaoForm.reset();
    }
    catch(erro) {
        alert(erro.message);
    }
});