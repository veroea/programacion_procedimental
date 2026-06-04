console.log("Hola mundo");
let nombre = document.getElementByName("nombre").value;
let apellido = document.getElementByName("apellido").value;
let tipoDocumento = document.getElementByName("tipoDocumento").value;
let numeroDocumento = document.getElementById("numeroDocumento").value;
let telefono = document.getElementById("telefono").value;
let email = document.getElementByName("email").value;
let genero = document.getElementByName("genero").value;
let cargo = document.getElementByName("cargo").value;
let fechaNacimiento = document.getElementById("fechaNacimiento").value;
let contraseña = document.getElementById("contraseña").value;

function ValidarDatos() {
    // Nombre
    if (nombre == '' || apellido == '' || numeroDocumento == '' || telefono == '' || email == '' ){
        console.log("Los campos estan vacios")
    }
    else{
        if (nombre != /[a-zA-Z]/){
            alert('Este campo no acepta números')
            return false;
        }
        if (apellido != /[a-zA-Z]/){
            alert('Este campo no acepta números')
            return false;
        }
        if (numeroDocumento != /[^\d+$]/){
            alert('Este campo solo acepta números')
            return false;
        }
        if (telefono != /[^\d{1,10}$]/){
            alert('Este campo solo acepta números y solo se permiten 10 digitos')
            return false;
        }
        if (correo != include("@")){
            alert('Este campo debe incluir @')
            return false;
        }
    }
    return true;
}