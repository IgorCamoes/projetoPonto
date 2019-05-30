let pontoDiv = document.querySelector('.tbUser');

const consultarTabela = () => {
    fetch('http://40.91.210.192/ponto/consultar/1?tipo=todos',{
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then
}