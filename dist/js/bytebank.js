var saldo = 5000;
var saldoValor = document.querySelector('.saldo-valor .valor');
if (saldoValor) {
    saldoValor.textContent = saldo.toString();
}
var transacaoForm = document.querySelector('.block-nova-transacao form');
transacaoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!transacaoForm.checkValidity()) {
        alert('Preencha todos os campos do formulário!');
        return; 
    }
    ;
    var inputTipoTransacao = document.querySelector('#tipoTransacao');
    var inputValor = document.querySelector('#valor');
    var inputData = document.querySelector('#data');
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipoTransacao == 'Depósito') {
        saldo += valor;
    }
    else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valor;
    }
    else {
        alert('Nosso site não é compatível com outros tipos de transações, perdão!');
        return;
    }
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    saldoValor.textContent = saldo.toString();
    console.log(novaTransacao);
    transacaoForm.reset();
});
