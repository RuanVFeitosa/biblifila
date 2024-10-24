function togglePopup() {
    const popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.classList.toggle("show");
}

function showSuccessPopup() {
    const successPopup = document.getElementById("successPopup");
    successPopup.classList.add("show"); // Exibe o popup de sucesso
}

function closeSuccessPopup() {
    const successPopup = document.getElementById("successPopup");
    successPopup.classList.remove("show"); // Fecha o popup de sucesso
}

function clicked(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Fecha o formulário
    const popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.classList.remove("show");

    // Exibe o popup de sucesso
    showSuccessPopup();
}



// function clicked(e)
// {
//     if(!confirm('Are you sure?')) {
//         e.preventDefault();
//     }
// } 




// Adicionando senha na lista

const name = document.getElementById("name");
const form = document.getElementById("form-container");

form.addEventListener('submit', async(e) => {
    e.preventDefault();



    // console.log("fez o submit");
    // console.log(name.value);

    const data = JSON.stringify({
        nome : name.value,
        status : 'Pendente'
    })

    try {
        const response = await fetch('https://api-sistema-de-fila-1.onrender.com/fila', {
            method : 'POST',
            headers : {"Content-type": "application/json; charset=UTF-8"},
            body : data
        })
    
        const json = await response.json();
        document.getElementById("senha").innerText = json.fila.senha;

        clicked(e);
        name.value = ""

        // console.log(json);

    } catch (error) {
        console.error(error);
    }


    // alert('Cadastro feito com sucesso')
})