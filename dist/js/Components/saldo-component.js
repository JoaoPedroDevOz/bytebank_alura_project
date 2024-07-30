import Conta from "../Types/Conta.js";
import { FormatoData } from "../Types/FormatoData.js";
import { formatarMoeda, formatarData } from "../Utils/formatters.js";
const elementoSaldoValor = document.querySelector('.saldo-valor .valor');
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
renderizarSaldo();
export function renderizarSaldo() {
    if (elementoSaldoValor) {
        elementoSaldoValor.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponent;
