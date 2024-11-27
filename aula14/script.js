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