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
            console.warn("Este espacio debe contener letras")
            Swal.fire({
            title: "Este espacio debe contener letras",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^\d+$/.test(ventas)) {
            console.log("Este espacio debe contener numeros")
            Swal.fire({
            title: "Este espacio debe contener numeros",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^\d+$/.test(ingresos)) {
            console.log("Este espacio debe contener numeros")
            Swal.fire({
            title: "Este espacio debe contener numeros",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^\d+$/.test(egresos)) {
            console.log("Este espacio debe contener numeros")
            Swal.fire({
            title: "Este espacio debe contener numeros",
            icon: "error",
            draggable: true
            });
            return;
        }

        if (!/^\d+$/.test(valor)) {
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