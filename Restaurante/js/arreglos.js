// Ejercicio 1
let estudiantes = [
  "veronica",
  "valentina",
  "sayra",
  "juan",
  "mariana",
  "simon",
  "laura",
  "isabella",
  "david",
  "kevin"
];
//mostrar nombre de cada estudiante
console.log("Lista de estudiantes:");
for (let i = 0; i < estudiantes.length; i++) {
  console.log((i + 1) + ". " + estudiantes[i]);
}
//mostrar cantidad total
console.log("\nCantidad total de estudiantes:", estudiantes.length);
//mostrar último estudiante
console.log("Último estudiante:", estudiantes[estudiantes.length - 1]);


//Ejercicio 2
let horario = [
  ["matematicas", "español", "ingles"],      // Lunes
  ["naturales", "sociales", "educación fisica"], // Martes
  ["quimica", "matematicas", "arte"],        // Miércoles
  ["fisica", "ingles", "tic"],       // Jueves
  ["etica", "español", "tic"]          // Viernes
];
let dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
//horario completo
console.log("Horario de clases:\n");
for (let i = 0; i < horario.length; i++) {
  console.log(dias[i] + ":");
  for (let j = 0; j < horario[i].length; j++) {
    console.log("  Hora " + (j + 1) + ": " + horario[i][j]);
  }
}
//consultar materia en un día y hora
let dia = 2;  
let hora = 1;
console.log("\nConsulta:");
console.log(
  "El " + dias[dia] + " en la hora " + (hora + 1) +
  " tienes: " + horario[dia][hora]
);


//Ejercicio 3
//arreglo de calificaciones
let calificaciones = [5, 3, 4, 5, 2, 5, 4, 3];
//mostrar calificaciones originales
console.log("Calificaciones originales:");
console.log(calificaciones);
//orden de menor a mayor
calificaciones.sort((a, b) => a - b);
console.log("\nCalificaciones ordenadas:");
console.log(calificaciones);
//mostrar calificacioon mas alta y mas baja
console.log("\nCalificación más baja:", calificaciones[0]);
console.log("Calificación más alta:", calificaciones[calificaciones.length - 1]);


//Ejercicio 4
//arreglo de notas
let notas = [5, 3, 4, 5, 2];
//sumar las notas
function sumarNotas(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    return suma;
}
//calcular promedio
function calcularPromedio(notas) {
    let suma = sumarNotas(notas);
    return suma / notas.length;
}
//mostrar resultado
function mostrarResultado(suma, promedio) {
    console.log("La suma de las notas es:", suma);
    console.log("El promedio del estudiante es:", promedio);
}
// Llamar funciones
let suma = sumarNotas(notas);
let promedio = calcularPromedio(notas);
mostrarResultado(suma, promedio);


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





