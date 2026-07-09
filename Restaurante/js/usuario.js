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
    Swal.fire("Los campos estan vacios");
  } 
  
  else {

    // Nombre
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombre)) {
      Swal.fire("El nombre no acepta números");
    }

    // Apellido
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(apellido)) {
      Swal.fire("El apellido no acepta números");
    }

    // Documento
    if (!/^\d+$/.test(numeroDocumento)) {
      Swal.fire("El documento solo acepta números");
    }

    // Teléfono
    if (!/^\d{10}$/.test(telefono)) {
      Swal.fire("El teléfono solo acepta números y debe tener 10 dígitos");
    }

    // Email
    if (!email.includes("@")) {
      Swal.fire("El correo debe incluir @");
    }

    else {
      Swal.fire("Datos enviados");
    }
  }
}
document.getElementById("btnGuardar").onclick = ValidarDatos;