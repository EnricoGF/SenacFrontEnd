const button = document.getElementById('btn')
const button2 = document.getElementById('btn2')
let i = 0

function printHello() {
    alert("Hello World!")
}

function changeColor() {
    i += 1
    if (i % 2 == 0) {
        button.style.backgroundColor = 'red' 
    }
    else {
        button.style.backgroundColor = 'orange'
    }
}

button.addEventListener('click', printHello)
button2.addEventListener('click', changeColor)