function getData() {
  let name = document.getElementById("nome").value
  document.getElementById("showNome").innerHTML = "Nome: "+ name

  let email = document.getElementById("email").value
  document.getElementById("showEmail").innerHTML = "Email: "+ email

  let senha = document.getElementById("senha").value
  document.getElementById("showSenha").innerHTML = "Senha: "+ senha
}