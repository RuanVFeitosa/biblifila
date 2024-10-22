const containerProx = document.getElementsByClassName("prox-list")[0]
const containerCham = document.getElementsByClassName("cham-list")[0]
const proxListaContainer = document.getElementsByClassName("pedido-numero")[0]




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


const chamadosLista = async () => {
    try {
        const response = await fetch('http://localhost:5000/fila/concluidos', {
            method : "GET",
        })

        const json = await response.json();

        const concluidos = json.concluidos;
        if(containerCham.childElementCount === 11){
            console.log("tem 11 elementtos")
        }
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
    
    proxListaContainer.innerHTML = 
    `<h3>Senha ${proxListaItem.senha}</h3> 
    <h2>${proxListaItem.nome} </h2>`
    // console.log(proxListaItem)
    return proxListaItem
}




const funcBtnFinalizar = async() => {

    const btnFinalizar = document.getElementsByClassName("finalizar")[0];
    btnFinalizar.addEventListener('click', async(e) => {
        e.preventDefault();

        const user = await proxLista();
        // console.log(user)

        const data = JSON.stringify({
            status : 'Concluido'
        })
        try {

            const response = await fetch(`http://localhost:5000/fila/${user._id}`, {
                method : 'put',
                headers : {"Content-Type": "application/json; charset=UTF-8"},
                body : data
            })
    
            const json = await response.json();



            // const monitor = window.open("./senhas.html");
            // monitor.location.reload();






















            window.location.reload();
            // console.log(json)
        } catch (error) {
            console.error(error);
        }
        
    })
    // console.log(btnFinalizar);

}

const funcBtnAusente = async() => {
    const btnAusente = document.getElementsByClassName("ausente")[0];
    btnAusente.addEventListener('click', async(e) => {
        e.preventDefault();

        const user = await proxLista();
        // console.log(user)

        const data = JSON.stringify({
            status : 'Cancelado'
        })
        try {
            const response = await fetch(`http://localhost:5000/fila/${user._id}`, {
                method : 'put',
                headers : {"Content-Type": "application/json; charset=UTF-8"},
                body : data
            })
    
            const json = await response.json();
            window.location.reload();
            // console.log(json)
        } catch (error) {
            console.error(error);
        }
        
    }
)}






proximosLista()
chamadosLista()
proxLista()
funcBtnFinalizar();
funcBtnAusente();






