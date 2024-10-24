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



    console.log("fez o submit");
    console.log(name.value);

    const data = JSON.stringify({
        nome : name.value,
        status : 'Pendente'
    })

    const response = await fetch('http://10.92.198.7:5000/fila', {
        method : 'POST',
        headers : {"Content-type": "application/json; charset=UTF-8"},
        body : data
    })

    const json = await response.json();

    console.log(json);


    window.location.reload();
    alert('Cadastro feito com sucesso')
})