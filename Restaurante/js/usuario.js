function ValidarDatos() {
  alert("La función se ejecutó");
let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let tipoDocumento = document.getElementById("tipoDocumento").value;
let numeroDocumento = document.getElementById("numeroDocumento").value;
let telefono = document.getElementById("telefono").value;
let email = document.getElementById("email").value;
let genero = document.getElementById("genero").value;
let cargo = document.getElementById("cargo").value;
let fechaNacimiento = document.getElementById("fechaNacimiento").value;
let contraseña = document.getElementById("contraseña").value;

  if (
    nombre === "" ||
    apellido === "" ||
    numeroDocumento === "" ||
    telefono === "" ||
    email === ""
  ) {
    console.log("Los campos estan vacios");
  } else {
    if (!/[a-zA-Z]/.test(nombre)) {
    alert("Este campo no acepta números");
    }
    if (! /[a-zA-Z]/.test(apellido)) {
      alert("Este campo no acepta números");
    }
    if (!/^\d+$/.test(numeroDocumento)) {
    alert("Este campo solo acepta números");
    }
    if (!/^\d{1,10}$/.test(telefono)) {
    alert("Este campo solo acepta números y debe tener entre 1 y 10 dígitos");
    }
    if (!email.includes("@")) {
    alert("Este campo debe incluir @");
    }
  }
}
