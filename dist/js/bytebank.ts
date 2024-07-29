let saldo: number = 5000;
const saldoValor = document.querySelector('.saldo-valor .valor') as HTMLElement;
if (saldoValor) {
    saldoValor.textContent = saldo.toString();
}

const transacaoForm = document.querySelector('.block-nova-transacao form') as HTMLFormElement;

transacaoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!transacaoForm.checkValidity()) {
        alert('Preencha todos os campos do formulário!');
        return;
    };

    const inputTipoTransacao= document.querySelector('#tipoTransacao') as HTMLSelectElement
    const inputValor = document.querySelector('#valor') as HTMLInputElement
    const inputData = document.querySelector('#data') as HTMLInputElement

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao == 'Depósito') {
        saldo += valor;
    } else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valor;
    } else {
        alert('Nosso site não é compatível com outros tipos de transações, perdão!')
        return;
    }
    
    saldoValor.textContent = saldo.toString();

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };

    console.log(novaTransacao);
    transacaoForm.reset();
});


