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
        telefono == ''
    ) {
        Swal.fire({
        title: "Los campos estan vacios",
        icon: "error"
        });
        console.log("La función se ejecutó");
        return;
    }

    else {

        if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombreUsuario)) {
            console.log("Este espacio debe contener letras")
            Swal.fire({
            title: "Este espacio debe contener letras",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(producto)) {
            console.log("Este espacio debe contener letras")
            Swal.fire({
            title: "Este espacio debe contener letras",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^\d+$/.test(cantidad)) {
            console.log("Este espacio debe contener numeros")
            Swal.fire({
            title: "Este espacio debe contener numeros",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^\d{1,10}$/.test(telefono)) {
            console.log("Este espacio debe contener numeros")
            Swal.fire({
            title: "Este espacio debe contener numeros",
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