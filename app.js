let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!');
        exibirTextoNaTela('p', `O número secreto é ${numeroSecreto}. Você acertou com ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) { 
            exibirTextoNaTela('h1', 'Você errou... Tente novamente!');
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}.`);
        }
        else {
            exibirTextoNaTela('h1', 'Você errou... Tente novamente!');
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}.`);            
        }
        tentativas++;
        limparCampo();
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo de Adivinhação');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function gerarNumeroAleatorio() { 
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;
   if (quantidadeDeElementosDaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();  
     } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
     }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();

