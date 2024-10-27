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
const btnSubmit = document.getElementsByClassName("btn-submit")[0];
const msgErro = document.getElementById("error-message");

const nomesInvalidos = ['cuu', 'porra', 'desgraça'];

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    if(nomesInvalidos.includes(name.value)){
        msgErro.innerText = "Dados invalidos"
        msgErro.style.display = 'block'
        return null
    }

    if(name.value.trim().length < 3){
        // Volta a mensagem de erro
        msgErro.innerText = "Dados invalidos, digite mais de 3 caracteres"
        msgErro.style.display = 'block'
        return null
    }

    btnSubmit.disabled = true;

    console.log("fez o submit");
    

    

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
        console.log(json);

        document.getElementById("senha").innerText = json.fila.senha;

        clicked(e);
        name.value = ""
        btnSubmit.disabled = false;
        msgErro.style.display = 'none'

    } catch (error) {
        console.error(error);
        
    }


    // alert('Cadastro feito com sucesso')
})