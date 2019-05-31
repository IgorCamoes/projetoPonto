let spanFechar = document.querySelector('.fechaModal');
let cadModal = document.querySelector('.modalCad');
let confMsg = document.querySelector('.modalCad > p:first-child');
let submitCad = document.querySelector('.botaoForm > input:first-child');
let usuarioIn = document.getElementById('usuario').value;
let usuarioMod = document.querySelector('.modalConteudo > p > span:first-child');
let hora = document.querySelector('nav > div > p:nth-child(3)');
let today = new Date();
let h = today.getHours();
let m = today.getMinutes();

function startTime() {
    m = checkTime(m);
    s = checkTime(s);
    return h, m, s;
  }

function mensagemCadastro(){
    usuarioMod.innerHTML = usuarioIn;
    cadModal.style.display = 'flex';
}

function fechar(){
    cadModal.style.display = 'none'
}

let atualizarHora = () =>{
    hora.innerHTML = `${h}:${m}`;
}


for(j = 0; j<1000; j++){
    let t = setTimeout(atualizarHora(h, m), 500);
}

submitCad.onclick = mensagemCadastro;
spanFechar.onclick = fechar;
