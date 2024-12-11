function getData() {
  let name = document.getElementById("nome").value
  let email = document.getElementById("email").value
  let senha = document.getElementById("senha").value


  if (name == "") {
    document.getElementById("showNome").innerHTML = "Nome inválido"
  }
  else {
    document.getElementById("showNome").innerHTML = "Nome: " + name
  }

  if (email == "") {
    document.getElementById("showEmail").innerHTML = "Email inválido"
  }
  else {
    document.getElementById("showEmail").innerHTML = "Email: " + email
  }

  if (senha == "") {
    document.getElementById("showSenha").innerHTML = "Senha inválida"
  }
  else {
    document.getElementById("showSenha").innerHTML = "Senha: " + senha
  }
}