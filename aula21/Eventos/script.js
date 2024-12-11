const button = document.getElementById('botao')
const text = document.getElementById('texto')

const button2 = document.getElementById('botao2')
const text2 = document.getElementById('texto2')

const button3 = document.getElementById('botao3')

const key = document.getElementById('tecla')


function changeText() {
    text.innerText = "O texto foi alterado"
}

function changeText2() {
    if (text2.innerText === 'original') {
        text2.innerText = 'secundario'
    }
    else {
        text2.innerText = 'original'
    }
}

function doubleClick() {
    alert("double click")
}

/* function teclaParagrafo(event) {
    key.innerText = "Tecla pressionada: " + event.key
}
document.addEventListener('keydown', teclaParagrafo)
*/

document.addEventListener('keydown', function(event){
    key.innerText = "Tecla pressionada: " + event.key
})


button.addEventListener('click', changeText)
button2.addEventListener('mouseover', changeText2)
button3.addEventListener('dblclick', doubleClick)