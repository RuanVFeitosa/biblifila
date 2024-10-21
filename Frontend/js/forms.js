function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
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

    const response = await fetch('http://localhost:5000/fila', {
        method : 'POST',
        headers : {"Content-type": "application/json; charset=UTF-8"},
        body : data
    })

    const json = await response.json();

    console.log(json);


    window.location.reload();
    alert('Cadastro feito com sucesso')
})