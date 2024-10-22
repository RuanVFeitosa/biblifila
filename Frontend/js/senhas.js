const containerProx = document.getElementsByClassName("prox-list")[0]
const containerCham = document.getElementsByClassName("cham-list")[0]
const senhaAtual = document.getElementsByClassName("senha-atual")[0]

// console.log(containerCham, containerProx)


const proximosLista = async() => {
    const response = await fetch('http://localhost:5000/fila/pendentes', {
        method : "GET",
        headers : {},
    })

    const json = await response.json();
    const pendentes = json.pendentes;
    pendentes.forEach(element => {

        containerProx.innerHTML += 
        `<div class="prox">${element.senha}</div>`
        // console.log(element)
    });
    // console.log(pendentes);
}

setTimeout(function (){
    window.location.reload(1);
}, 5000)

// window.location.reload();



const chamadosLista = async () => {
    try {
        const response = await fetch('http://localhost:5000/fila/concluidos', {
            method : "GET",
        })

        const json = await response.json();

        const concluidos = json.concluidos;

        concluidos.forEach(element => {
            containerCham.innerHTML += `<div class="cham">${element.senha}</div>`
            // console.log(element)
        })
        // console.log(json)
    } catch (error) {
        console.log(error);
    }
}

const proxLista = async() => {
    const response = await fetch('http://localhost:5000/fila/proxLista', {
        method : "GET"
    })

    const json = await response.json();
    const proxListaItem = json.proxLista;
    senhaAtual.innerHTML = 
    `<h1>${proxListaItem.senha}</h1> 
    <p>${proxListaItem.nome}<br>Dirija-se a atração</p>`
    console.log(proxListaItem)
}

proximosLista();
chamadosLista();
proxLista();