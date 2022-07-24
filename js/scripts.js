function aplicaModoEscuro() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

document.getElementById("moradorResponsavel").style.display = "none";
document.getElementById("blocoMorador").style.display = "none";
document.getElementById("andarMorador").style.display = "none";
document.getElementById("unidadeMorador").style.display = "none";
document.getElementById("matriculaMensageiro").style.display = "none";
document.getElementById("tipoUsuario").innerHTML = "Nome do(a) usuário(a)";

function exibeCampos() {
  if (document.getElementById("selectPerfil").value == "Morador(a)") {
    document.getElementById("moradorResponsavel").style.display = "block";
    document.getElementById("blocoMorador").style.display = "block";
    document.getElementById("andarMorador").style.display = "block";
    document.getElementById("unidadeMorador").style.display = "block";
    document.getElementById("matriculaMensageiro").style.display = "none";
    document.getElementById("tipoUsuario").innerHTML =
      "Nome do(a) usuário(a) Morador(a)";
  }

  if (document.getElementById("selectPerfil").value == "Mensageiro(a)") {
    document.getElementById("moradorResponsavel").style.display = "none";
    document.getElementById("blocoMorador").style.display = "none";
    document.getElementById("andarMorador").style.display = "none";
    document.getElementById("unidadeMorador").style.display = "none";
    document.getElementById("matriculaMensageiro").style.display = "block";
    document.getElementById("tipoUsuario").innerHTML =
      "Nome do(a) usuário(a) Mensageiro(a)";
  }

  if (document.getElementById("selectPerfil").value == "Supervisor(a)") {
    document.getElementById("moradorResponsavel").style.display = "none";
    document.getElementById("blocoMorador").style.display = "none";
    document.getElementById("andarMorador").style.display = "none";
    document.getElementById("unidadeMorador").style.display = "none";
    document.getElementById("matriculaMensageiro").style.display = "block";
    document.getElementById("tipoUsuario").innerHTML =
      "Nome do(a) usuário(a) Supervisor(a)";
  }
}
