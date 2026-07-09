function ValidarDatos() {

let nombreUsuario = document.getElementById("nombreUsuario").value;
let producto = document.getElementById("producto").value;
let cantidad = document.getElementById("cantidad").value;
let direccion = document.getElementById("direccion").value;
let telefono = document.getElementById("telefono").value;
let metodoPago = document.getElementById("metodoPago").value;
let observaciones = document.getElementById("observaciones").value;

     if (
        nombreUsuario == '' ||
        producto == '' ||
        cantidad == '' ||
        direccion == '' ||
        telefono == ''
    ) {
        Swal.fire('Los campos están vacíos');
    }

    else {

        // Validar nombre de usuario
        if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombreUsuario)) {
            Swal.fire('El nombre de usuario no acepta números');
        }

        // Validar producto
        if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(producto)) {
            Swal.fire('El producto no acepta números');
        }

        // Validar cantidad
        if (!/^\d+$/.test(cantidad)) {
            Swal.fire('La cantidad solo acepta números');
        }

        // Validar teléfono
        if (!/^\d{1,10}$/.test(telefono)) {
            Swal.fire('El teléfono solo acepta números y debe tener entre 1 y 10 dígitos');
        }

        // Si todo está correcto
        else {
            Swal.fire('Datos enviados');
        }
    }
}
document.getElementById("btnGuardar").onclick = ValidarDatos;