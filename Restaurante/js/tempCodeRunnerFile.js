//Ejercicio 5
//sumar primeros n números naturales
function sumaNaturales(n) {
    if (n === 1) {
        return 1;
    }

    return n + sumaNaturales(n - 1);
}
const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//pedir el valor de n
entrada.question("Ingrese un número: ", (numero) => {
    let n = parseInt(numero);

    let resultado = sumaNaturales(n);

    console.log("La suma de los primeros", n, "números naturales es:", resultado);

    entrada.close();
});