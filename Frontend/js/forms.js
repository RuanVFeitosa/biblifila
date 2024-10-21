function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}

function clicked(e)
{
    if(!confirm('Are you sure?')) {
        e.preventDefault();
    }
}