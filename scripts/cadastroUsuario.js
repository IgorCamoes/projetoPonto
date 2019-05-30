let spanFechar = document.querySelector('.fechaModal');
let cadModal = document.querySelector('.modalCad');
let confMsg = document.querySelector('.modalCad > p:first-child');
let submitCad = document.querySelector('.botaoForm > input:first-child');
let usuarioIn = document.getElementById('usuario').value;
let usuarioMod = document.querySelector('.modalConteudo > p > span:first-child');

function mensagemCadastro(){
    usuarioMod.innerHTML = usuarioIn;
    cadModal.style.display = 'flex';
}

function fechar(){
    cadModal.style.display = 'none'
}

submitCad.onclick = mensagemCadastro;
spanFechar.onclick = fechar;
