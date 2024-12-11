function olaMundo() {
    let ola = document.getElementById("ola")

    ola.innerHTML = "Olá mundo!"

    let newDiv = document.createElement("div")

    newDiv.textContent = "Seja bem vindo"

    newDiv.style.backgroundColor = "aliceblue"
    newDiv.style.border = "1px solid black"
    newDiv.style.margin = "10px"

    ola.appendChild(newDiv)
}


function copyList() {
    let body = document.querySelector("body")
    let newDiv = document.createElement("div")
    let newUL = document.createElement("ul")

    for (let x = 1; x < 5; x++) {
        let newLI = document.createElement("li")

        newLI.textContent = 'Item ' + x
        newUL.appendChild(newLI)
    }

    newDiv.appendChild(newUL)
    body.appendChild(newDiv)
}

function createLi() {
    let body = document.querySelector("body")
    let newDiv = document.createElement("div")
    let newUL = document.createElement("ul")
    let newLI = document.createElement("li")

    let lis = document.getElementsByTagName("li")
    let tamanho = lis.length

    for (let x = 0; x < tamanho; x++) {
        newLI.textContent = "Item " + x
        newUL.appendChild(newLI)
    }

    newDiv.appendChild(newUL)
    body.appendChild(newDiv)
}