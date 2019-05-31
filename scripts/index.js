let ajudaHover = document.querySelector(".ttHover");
let ajudaSenha = document.querySelector(".ttSpan");
let botaoLogin = document.querySelector(".indexCont form button")
let hora = document.querySelector('nav > div > p:nth-child(2)');
let today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let d = today.getDay();
let mn = today.getMonth();

const gerarDadosForm = campos => {
    let dados = {};
    
    for(let campo of campos){
      dados[campo.name] = campo.value;
      
      if(campo.value = String){
        campo.value = parseInt(campo.value);
      }
    }
  
    return dados;
  }

const fazerLogin = () =>{
    const campos = document.querySelectorAll('.indexCont form input');
    const dados = gerarDadosForm(campos);

    fetch('http://40.91.210.192/login',{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        sessionStorage.setItem("nome", JSON.stringify(dados.colaborador.nome));
        sessionStorage.setItem("token", JSON.stringify(dados.token));
        sessionStorage.setItem("funcional", JSON.stringify(dados.colaborador.funcional));
        
        window.location = 'menu.html';
    })
}

function startTime() {
    m = checkTime(m);
    s = checkTime(s);
    return h, m, s;
  }

function chamarAjuda(){
    ajudaSenha.classList.toggle("active");
}

let atualizarHora = () =>{
    hora.innerHTML = `${h}:${m}`;
}

for(j = 0; j<1000; j++){
    let t = setTimeout(atualizarHora(h, m), 500);
}


ajudaHover.onmouseover = chamarAjuda;
ajudaHover.onmouseout = chamarAjuda;
botaoLogin.onclick = fazerLogin;