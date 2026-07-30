//Robótica - mostrar listado de nombres
function mostrarNombres(nombres) {
    for (let i = 0; i < nombres.length; i++) { //el ciclo continúa mientras i sea menor que la cantidad de elementos del arreglo.
        console.log(nombres[i]);
    }
}
let lista = ["veronica", "valentina", "isabella", "sayra"];
mostrarNombres(lista);

//Digitalización - calcular área del rectángulo
function calcularAreaRectangulo(base, altura) {
    return base * altura;
}
let area = calcularAreaRectangulo(10, 5);
console.log("Área del rectángulo:", area);

//VideoJuegos - reciba un arreglo de números y devuelva el promedio
function calcularPromedio(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma / numeros.length;
}
let promedio = calcularPromedio([10, 20, 30, 40, 50]);
console.log("Promedio:", promedio);

//programacion - función que reciba un número y devuelva si es par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "Es par";
    } else {
        return "Es impar";
    }
}
console.log(esParOImpar(8));
console.log(esParOImpar(7));

//Ingeniería - procedimiento que reciba un objeto usuario y muestre sus propiedades
function mostrarUsuario(usuario) {
    for (let propiedad in usuario) {
        console.log(propiedad + ": " + usuario[propiedad]);
    }
}
let usuario = {
    nombre: "vero",
    edad: 16,
    ciudad: "manizales"
};

mostrarUsuario(usuario);