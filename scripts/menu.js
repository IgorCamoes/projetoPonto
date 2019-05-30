let spanFechar = document.querySelector('.fechaModal');
let menuModal = document.querySelector('.modalMenu');
let confMsg = document.querySelector('.modalConteudo > p:first-child')
let ancoras = document.querySelectorAll('.ancorasMenu h3');
let hmbSpan = document.querySelector('nav > div > div:last-child');
let pontoDia = document.querySelector('.pontoDia');
let spanMobile = document.querySelectorAll('nav > div > div:last-child span');
10
function mudarConfirmação0(){
        confMsg.innerHTML = 'Entrada de ponto realizada com sucesso!';
        menuModal.style.display = 'flex';
}

function mudarConfirmação1(){
    confMsg.innerHTML = 'Saída de ponto realizada com sucesso!';
    menuModal.style.display = 'flex';
}

function fechar(){
    menuModal.style.display = 'none';
}

function abrirHmb(){
    pontoDia.classList.toggle('vemMenu');
    spanMobile[0].classList.toggle('topoSpan');
    spanMobile[1].classList.toggle('meioSpan')
    spanMobile[2].classList.toggle('baseSpan');
}



spanFechar.onclick = fechar;

ancoras[0].onclick = mudarConfirmação0;
ancoras[1].onclick = mudarConfirmação1;
hmbSpan.onclick = abrirHmb;
