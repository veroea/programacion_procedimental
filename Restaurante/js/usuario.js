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
    Swal.fire("Campos vacios");
  } 
  
  else {

    // Nombre
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombre)) {
      Swal.fire("Este campo no acepta numeros");
    }

    // Apellido
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(apellido)) {
      Swal.fire("Este campo no acepta numeros");
    }

    // Documento
    if (!/^\d+$/.test(numeroDocumento)) {
      Swal.fire("Este campo solo acepta numeros");
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
      Swal.fire("Datos correctos");
    }
  }
}
document.getElementById("btnGuardar").onclick = ValidarDatos;
