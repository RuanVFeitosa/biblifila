const limite = 10; // Definindo o limite de senhas
const containerProx = document.getElementsByClassName("containerProx")[0];
const containerCham = document.getElementsByClassName("containerCham")[0];
const senhaAtual = document.getElementsByClassName("senha-atual")[0];
// Função para limitar senhas na lista
// const limitarSenhas = (container, tipo) => {
//     const itens = container.getElementsByClassName(tipo);
//     if (itens.length > limite) {
//         for (let i = limite; i < itens.length; i++) {
//             itens[i].style.display = 'none'; // Esconder senhas que ultrapassam o limite
//         }
//     }
// };

// // Chama a função para limitar as senhas em ambas as listas
// limitarSenhas(containerProx, 'prox');
// limitarSenhas(containerCham, 'cham');

const proximosLista = async() => {
    const response = await fetch('https://api-sistema-de-fila-1.onrender.com/fila/pendentes', {
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
        const response = await fetch('https://api-sistema-de-fila-1.onrender.com/fila/concluidos', {
            method: "GET",
        });

        const json = await response.json();
        const concluidos = json.concluidos;

        // Limpar a lista anterior
        containerCham.innerHTML = '';

        // Adicionar senhas, respeitando o limite
        concluidos.forEach(element => {
            containerCham.innerHTML += `<div class="cham">${element.senha}</div>`;
        });
    } catch (error) {
        console.log(error);
    }
};

// Função para obter a senha atual
const proxLista = async () => {
    const response = await fetch('https://api-sistema-de-fila-1.onrender.com/fila/proxLista', {
        method: "GET"
    });

    const json = await response.json();
    const proxListaItem = json.proxLista;

    senhaAtual.innerHTML = `
        <h1>${proxListaItem.senha}</h1>
        <p>${proxListaItem.nome}<br>Dirija-se à atração</p>`;
};

// Chamar as funções ao carregar a página
proximosLista();
chamadosLista();
proxLista();
