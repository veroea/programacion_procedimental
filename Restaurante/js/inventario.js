function ValidarDatos() {

    let codigoProducto = document.getElementById("codigoProducto").value.trim();
    let nombreProducto = document.getElementById("nombreProducto").value.trim();
    let cantidad = document.getElementById("cantidad").value.trim();
    let marcaProducto = document.getElementById("marcaProducto").value.trim();


    if (
        codigoProducto == '' ||
        nombreProducto == '' ||
        cantidad == '' ||
        marcaProducto == ''
    ) {
        Swal.fire("Los campos están vacíos");
    }

    else {

        // Código del producto: solo números (máximo 6 dígitos)
        if (!/^\d{1,6}$/.test(codigoProducto)) {
            Swal.fire("El código del producto solo acepta números y máximo 6 dígitos");
        }

        // Nombre del producto: solo letras
        if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombreProducto)) {
            Swal.fire("El nombre del producto no acepta números");
        }

        // Cantidad: solo números
        if (!/^\d+$/.test(cantidad)) {
            Swal.fire("La cantidad solo acepta números");
        }

        // Marca: solo letras
        if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(marcaProducto)) {
            Swal.fire("La marca no acepta números");
        }

        else {
            Swal.fire("Datos enviados");
        }
    }
}
document.getElementById("btnGuardar").onclick = ValidarDatos;
