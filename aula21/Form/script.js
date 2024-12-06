const form = document.getElementById('formulario')
const msg = document.getElementById('mensagem')
const campoTexto = document.getElementById('mensagem')

form.addEventListener('submit', function(event){
    event.preventDefault()
    alert('Formulario enviado')
})

campoTexto.addEventListener('focus', function(){
    campoTexto.style.backgroundColor = 'yellow'
})

campoTexto.addEventListener('blur', function(){
    campoTexto.style.backgroundColor = 'white'
})