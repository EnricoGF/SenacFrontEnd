const form = document.getElementById('formulario')
const campoTexto = document.getElementById('mensagem')

form.addEventListener('submit', function(event){
    event.preventDefault()
    alert('Formulario enviado')
})

campoTexto.addEventListener('focus', function() {
    campoTexto.style.backgroundColor = 'rgb(255, 255, 200)'
})

campoTexto.addEventListener('blur', function() {
    campoTexto.style.backgroundColor = 'white'
})

campoTexto.addEventListener('change', function() {
    alert('Valor alterado para: ' + campoTexto.value)
})

window.addEventListener('scroll', function() {
    console.log('A página foi rolada. Posição do scroll: ' + window.scrollY)
})