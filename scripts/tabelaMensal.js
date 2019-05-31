let horasT = document.querySelector('.dadosUser > div:last-child p');
let hora = document.querySelector('nav > div > p:nth-child(3)');
let today = new Date();
let h = today.getHours();
let m = today.getMinutes();



function startTime() {
    m = checkTime(m);
    s = checkTime(s);
    return h, m, s;
  }

const consultarTabela = () => {
    fetch('http://40.91.210.192/ponto/consultar/3?tipo=todos',{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.get('token')
        }
    })
    .then(response => response.json())
    .then(dados => {
        mostrarHorarios(dados.ponto);
        JSON.stringify(dados);
        mostrarHora(dados.totalHoras);
    });
}


const mostrarHorarios = (ponto) => {
    let tabelaHorario = document.querySelector('.tbUser > table');
    console.log(tabelaHorario);
    for(batida of ponto){

        let checarEntrada = () => {
            if(batida.tipoRegistro == 'ENTRADA'){
                return 'Entrada:';
            }
            else if(batida.tipoRegistro == 'SAIDA'){
                return 'Saída:';
            }        
        }

        tabelaHorario.innerHTML = tabelaHorario.innerHTML + `
        <tr class="trMensal">
            <td>${checarEntrada(batida)}</td>
            <td>${batida.data}</td>
            <td>${batida.hora}</td>
        </tr>
        `
    }
}

let mostrarHora = (hora) =>{
    horasT.innerHTML = `${hora}`;
}
let atualizarHora = () =>{
    hora.innerHTML = `${h}:${m}`;
}




consultarTabela();

for(j = 0; j<1000; j++){
    let t = setTimeout(atualizarHora(h, m), 500);
}