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
            console.log("El espacio de codigo del producto debe contener numeros y deben ser 6 digitos")
            Swal.fire({
            title: "El espacio de codigo del producto debe contener numeros y deben ser 6 digitos",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombreProducto)) {
            console.log("El espacio de nombre del producto debe contener letras")
            Swal.fire({
            title: "El espacio de nombre del producto debe contener letras",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^\d+$/.test(cantidad)) {
           console.log("El espacio de cantidad debe contener numeros")
            Swal.fire({
            title: "El espacio de cantidad debe contener numeros",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(marcaProducto)) {
            console.log("El espacio de marca del producto debe contener letras")
            Swal.fire({
            title: "El espacio de marca del producto debe contener letras",
            icon: "error",
            draggable: true
            });
            return;
        }

            Swal.fire({
            title: "Guardado!",
            icon: "success",
            draggable: true
            });
            return;
        
    }
}
document.getElementById("btnGuardar").onclick = ValidarDatos;
