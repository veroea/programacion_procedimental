function ValidarDatos() {

    let codigoProducto = document.getElementById("codigoProducto").value;
    let nombreProducto = document.getElementById("nombreProducto").value;
    let cantidad = document.getElementById("cantidad").value;
    let marcaProducto = document.getElementById("marcaProducto").value;


    if (
        codigoProducto == '' ||
        nombreProducto == '' ||
        cantidad == '' ||
        marcaProducto == ''
    ) {
        Swal.fire({
        title: "Los campos estan vacios",
        icon: "error"
        });
        console.log("La función se ejecutó");
        return;
    }

    else {

        if (!/^\d{1,6}$/.test(codigoProducto)) {
            console.log("Este espacio debe contener numeros")
            Swal.fire({
            title: "Este espacio debe contener numeros",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombreProducto)) {
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

        if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(marcaProducto)) {
            console.log("Este espacio debe contener letras")
            Swal.fire({
            title: "Este espacio debe contener letras",
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
