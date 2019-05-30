let ajudaHover = document.querySelector(".ttHover");
let ajudaSenha = document.querySelector(".ttSpan");

function chamarAjuda(){
    ajudaSenha.classList.toggle("active");
}

ajudaHover.onmouseover = chamarAjuda;
ajudaHover.onmouseout = chamarAjuda;
