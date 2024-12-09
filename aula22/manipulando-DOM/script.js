const titulo = document.getElementById('titulo')
const descricao = document.getElementsByClassName('descricao')
const botaoChange = document.getElementById('botao-mudar')
const botaoAdd = document.getElementById('botao-adicionar')
const botaoRemove = document.getElementById('botao-remover')
const botaoRemoveClass = document.getElementById('botao-remover-classe')

botaoChange.addEventListener('click', function() {
    titulo.textContent = 'Texto alterado com JavaScript'
    descricao[0].textContent = 'Paragrafo modificado'
})

botaoAdd.addEventListener('click', function() {
    const newP = document.createElement('p')
    newP.textContent = 'Novo parágrafo'
    document.body.appendChild(newP)
    newP.className = 'novo-paragrafo'
})

botaoRemove.addEventListener('click', function() {
    titulo.remove()
})

botaoRemoveClass.addEventListener('click', function() {
    const newP = document.getElementsByClassName('novo-paragrafo')
    newP[0].classList.remove('novo-paragrafo')
})

let timeout = setTimeout(function(){
    console.log('6 segundos')
}, 6000)

setInterval(function(){
    console.log('1 segundos')
}, 1000)

clearTimeout(timeout) // clearInterval(var) / limpa contagem