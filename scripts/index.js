let ajudaHover = document.querySelector(".ttHover > h5");
let ajudaSenha = document.querySelector(".ttSpan");

function chamarAjuda(){
    ajudaSenha.classList.toggle("active");
}

ajudaHover.onclick = chamarAjuda;
