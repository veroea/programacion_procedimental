function ValidarDatos() {

let nombre = document.getElementById("nombre").value;
let ventas = document.getElementById("ventas").value;
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let concepto = document.getElementById("concepto").value;
let valor = document.getElementById("valor").value;

 if (
        nombre == '' ||
        ventas == '' ||
        ingresos == '' ||
        egresos == '' ||
        valor == ''
    ) {
        Swal.fire({
        title: "Los campos estan vacios",
        icon: "error"
        });
        console.log("La función se ejecutó");
        return;
    }

    else {

        if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
            console.log("El espacio de nombre debe contener letras")
            Swal.fire({
            title: "El espacio de nombre debe contener letras",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^\d+$/.test(ventas)) {
            console.log("El espacio de ventas debe contener numeros")
            Swal.fire({
            title: "El espacio de ventas debe contener numeros",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^\d+$/.test(ingresos)) {
            console.log("El espacio de ingresos debe contener numeros")
            Swal.fire({
            title: "El espacio de ingresos debe contener numeros",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^\d+$/.test(egresos)) {
            console.log("El espacio de egresos debe contener numeros")
            Swal.fire({
            title: "El espacio de egresos debe contener numeros",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^\d+$/.test(valor)) {
            console.log("El espacio de valor debe contener numeros")
            Swal.fire({
            title: "El espacio de valor debe contener numeros",
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