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
            console.log("El espacio de nombre debe contener letras")
            Swal.fire({
            title: "El espacio de nombre debe contener letras",
            icon: "error",
            draggable: true
            });
            return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(apellido)) {
            console.log("El espacio de apellido debe contener letras")
            Swal.fire({
            title: "El espacio de apellido debe contener letras",
            icon: "error",
            draggable: true
            });
            return;
    }

    // Documento
    if (!/^\d+$/.test(numeroDocumento)) {
            console.log("El espacio de numero de documento debe contener numeros")
            Swal.fire({
            title: "El espacio de numero de documento debe contener numeros",
            icon: "error",
            draggable: true
            });
            return;
    }

    if (!/^\d{1,10}$/.test(telefono)) {
            console.log("El espacio de telefono debe contener numeros y deben ser 10 digitos")
            Swal.fire({
            title: "El espacio de telefono debe contener numeros y deben ser 10 digitos",
            icon: "error",
            draggable: true
            });
            return;
    }

    // Email
    if (!email.includes("@")) {
            console.log("El espacio de email debe contener un @")
            Swal.fire({
            title: "El espacio de email debe contener un @",
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