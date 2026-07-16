function ValidarDatos() {

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
    nombre == "" ||
    apellido == "" ||
    numeroDocumento == "" ||
    telefono == "" ||
    email == ""
  ) {
        Swal.fire({
        title: "Los campos estan vacios",
        icon: "error"
        });
        console.log("La función se ejecutó");
        return;
  } 
  
  else {

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombre)) {
            console.log("Este espacio debe contener letras")
            Swal.fire({
            title: "Este espacio debe contener letras",
            icon: "error",
            draggable: true
            });
            return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(apellido)) {
            console.log("Este espacio debe contener letras")
            Swal.fire({
            title: "Este espacio debe contener letras",
            icon: "error",
            draggable: true
            });
            return;
    }

    // Documento
    if (!/^\d+$/.test(numeroDocumento)) {
            console.log("Este espacio debe contener numeros")
            Swal.fire({
            title: "Este espacio debe contener numeros",
            icon: "error",
            draggable: true
            });
            return;
    }

    if (!/^\d+$/.test(telefono)) {
            console.log("Este espacio debe contener numeros")
            Swal.fire({
            title: "Este espacio debe contener numeros",
            icon: "error",
            draggable: true
            });
            return;
    }

    // Email
    if (!email.includes("@")) {
            console.log("Este espacio debe contener un @")
            Swal.fire({
            title: "Este espacio debe contener un @",
            icon: "error",
            draggable: true
            });
            return;
    }

    else {
            Swal.fire({
            title: "Guardado!",
            icon: "success",
            draggable: true
            });
            return;
    }
  }
}
document.getElementById("btnGuardar").onclick = ValidarDatos;