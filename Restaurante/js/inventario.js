let codigoProducto = document.getElementById("codigoProducto").value;
let nombreProducto = document.getElementByName("nombreProducto").value;
let cantidad = document.getElementById("cantidad").value;
let marcaProducto = document.getElementByName("marcaProducto").value;

function ValidarDatos(){
    if (codigoProducto == '' || nombreProducto == '' || cantidad == '' || marcaProducto == ''){
        console.log('Los campos estan vacios')
    }
    else{
        if (codigoProducto != /[^\d+{1,6}$]/){
            alert('Este campo solo acepta números')
        }
        if (nombreProducto != /[a-zA-Z]/){
            alert('Este campo no acepta números')
        }
        if (cantidad != /[^\d+$]/){
            alert('Este campo solo acepta números')
        }
        if (marcaProducto !=/[a-zA-Z]/){
            alert('Este campo no acepta números')
        }
    }
}