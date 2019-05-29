let spanFechar = document.querySelector('.fechaModal');
let menuModal = document.querySelector('.modalMenu');
let confMsg = document.querySelector('.modalConteudo > p:first-child')
let ancoras = document.querySelectorAll('.ancorasMenu a')


function mudarConfirmação(){
    for(let i=0; i<ancoras.length; i++){
        if(EventSource == ancoras[0]){
            confMsg.innerHTML = 'Entrada de ponto realizada com sucesso!';
            menuModal.style.display = 'flex';
        }
        else if(EventSource == ancoras[1]){
            confMsg.innerHTML = 'Saída de ponto realizada com sucesso!';
            menuModal.style.display = 'flex';
        }
    }
}

function fechar(){
    menuModal.style.display = 'none';
}



spanFechar.onclick = fechar;
ancoras.onclick = mudarConfirmação;