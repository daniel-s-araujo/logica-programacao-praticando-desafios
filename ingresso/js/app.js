function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }
    
    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        alert('Compra realizada com sucesso');
    }

    qtdPista -= qtd;
    document.getElementById('qtd-pista').textContent = qtdPista;
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        alert('Compra realizada com sucesso');
    }

    qtdSuperior -= qtd;
    document.getElementById('qtd-superior').textContent = qtdSuperior;
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        alert('Compra realizada com sucesso');
    }

    qtdInferior -= qtd;
    document.getElementById('qtd-inferior').textContent = qtdInferior;
}
