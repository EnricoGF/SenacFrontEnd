const button = document.getElementById('dropdown-button')
const menu = document.getElementById('dropdown-menu')

button.addEventListener('click', function(){
    if (menu.style.display === 'none') {
        menu.style.display = 'flex'
        menu.style.flexDirection = 'column'
    }

    else {
        menu.style.display = 'none'
    }
})