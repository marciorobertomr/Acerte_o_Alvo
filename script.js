// Início do desenho do quadro e alvo

function desenhaAlvo() {
    limpaTela();
    coordenadasAleatorias();

    desenhaCirculo(raio + 20, cores[cor]);
    desenhaCirculo(raio + 10, 'white');
    desenhaCirculo(raio, cores[cor]);
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);
}

function coordenadasAleatorias() {
    let testeX = false;
    let testeY = false;
    while (testeX === false) {
        alvoX = Math.random() * 1000;
        if (alvoX > 30 && alvoX < (600 - 30)) {
            testeX = true;
        }
    }
    while (testeY === false) {
        alvoY = Math.random() * 1000;
        if (alvoY > 30 && alvoY < (400 - 30)) {
            testeY = true;
        }
    }
}

function desenhaCirculo(raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(alvoX, alvoY, raio, 0, 2 * Math.PI);
    pincel.fill();
}

// Fim do processo de desenho do quadro e alvo

// Validação do disparo

function tiro(evento) {
    tiroX = evento.pageX - tela.offsetLeft;
    tiroY = evento.pageY - tela.offsetTop;

    validaAcerto();
}

function validaAcerto() {
    let resultado = document.getElementById('resultado');

    if ((tiroX < (alvoX + 10) && tiroX > (alvoX - 10)) && (tiroY < (alvoY + 10) && tiroY > (alvoY - 10))) {
        console.log('ACERTOU!!!');
        cor++;
        if (cor > 5) {
            cor = 0;
        }
        quantidadeAcertos++;
        resultado.textContent = quantidadeAcertos;
    } else {
        console.log('ERROU!!!');
    }
}

// Desenhando o quadro canvas
let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

// Definindo variáveis para a monstagem do alvo
let alvoX = 0;
let alvoY = 0;
let raio = 10;
let tiroX = 0;
let tiroY = 0;
let quantidadeAcertos = 0;
let cor = 0;
let cores = ['red', 'blue', 'yellow', 'orange', 'green', 'purple'];

// Intervalo de criação do alvo
setInterval(desenhaAlvo, 1000);

// Interação
tela.onclick = tiro;