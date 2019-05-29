let spanFechar = document.querySelector('.fechaModal');
let menuModal = document.querySelector('.modalMenu');
let confMsg = document.querySelector('.modalConteudo > p:first-child')
let ancoras = document.querySelectorAll('.ancorasMenu h3')


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



spanFechar.onclick = fechar;

ancoras[0].onclick = mudarConfirmação0;
ancoras[1].onclick = mudarConfirmação1;
