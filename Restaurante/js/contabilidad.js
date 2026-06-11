let nombre = document.getElementByName("nombre").value;
let ventas = document.getElementById("ventas").value;
let fecha = document.getElementByName("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let concepto = document.getElementByName("concepto").value;
let valor = document.getElementById("valor").value;

function ValidarDatos() {
    if (nombre == ''|| ventas == '' || ingresos == '' || egresos == '' || valor == '' ){
        console.log('Los campos estan vacios')
    }
    else{
        if (nombre == ""){
        alert("El campo está vacío");
        return false;
        }
        if (ventas != /[^\d+$]/){
            alert('Este campo solo acepta números')
            return false;
        }
        if (ingresos != /[^\d+$]/) {
            alert('Este campo solo acepta números')
            return false;
        }
        if (egresos != /[^\d+$]/){
            alert('Este campo solo acepta números')
            return false;
        }
        if (valor != /[^\d+$]/){
            alert('Este campo solo acepta números')
            return false;
        }
        return true;
    }
}