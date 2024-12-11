function displayNome() {
    return document.getElementById("display").innerHTML = "Enrico"
}

function styleText() {
    return document.getElementById("hello").style.fontSize = "50px"
}

function mudaTamanho (){
    x = document.getElementById("muda").style.backgroundColor = "red"
    y = document.getElementById("muda").style.width = "1000px"
    z = document.getElementById("muda").style.height = "1000px"
    return x, y, z
}

function displayNone() {
    return document.getElementById("hide").style.display = "none"
}