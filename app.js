function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;
    if (de > ate) {
        alert("Verifique se os dados estão corretos!");
        return;
    } else {
        if (quantidade <= ate - de) {
            for (let i = 0; i < quantidade; i++) {
                numero = obterNumeroAleatorio(de, ate);

                while (sorteados.includes(numero)) {
                    numero = obterNumeroAleatorio(de, ate);
                    alert('Tentando obter número inédito');
                }

                sorteados.push(numero);
            }
        } else {
            alert("A quantidade de números sorteados excede o limite proposto!");
            return;
        }

        alterarCorBotao();
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    }

}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarCorBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarCorBotao();
}