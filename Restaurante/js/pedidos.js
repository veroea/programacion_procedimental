let nombreUsuario = document.getElementByName("nombreUsuario").value;
let producto = document.getElementByName("producto").value;
let cantidad = document.getElementById("cantidad").value;
let direccion = document.getElementById("direccion").value;
let telefono = document.getElementById("telefono").value;
let metodoPago = document.getElementByName("metodoPago").value;
let observaciones = document.getElementByName("observaciones").value;

function ValidarDatos() {
    if (nombreUsuario == '' || producto == '' || cantidad == '' || direccion == '' || telefono == '') {
        console.log('Los campos estan vacios');
    }
    else {
        if (nombreUsuario != /[a-zA-Z]/) {
            alert('El nombre de usuario no acepta números');
        }

        if (producto != /[a-zA-Z]/) {
            alert('El producto no acepta números');
        }

        if (cantidad != /[^\d+$]/) {
            alert('La cantidad solo acepta números');
        }

        if (direccion == '') {
            alert('La dirección no puede estar vacía');
        }

        if (telefono != /[^\d+{1,10}$]/) {
            alert('El teléfono solo acepta números y debe tener entre 1 y 10 dígitos');
        }
    }
}