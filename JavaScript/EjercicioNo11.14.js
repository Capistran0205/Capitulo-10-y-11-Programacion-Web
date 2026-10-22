document.writeln("<h1>Ejercicio 11.14: Frecuencia de cada letra del alfabeto</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos con base en el programa del ejercicio 11.13 que reciba como entrada varias líneas de texto y utilice el método String.indexOf para determinar el número total de ocurrencias de cada letra del alfabeto en ese texto. Las letras mayúsculas y minúsculas deben contarse como una sola. Almacene los totales para cada letra en un arreglo e imprima los valores en formato tabular en un elemento textarea de HTML5 después de que se hayan determinado los totales.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
function contarOcurrencias(texto, caracter) {
    var cuenta = 0;
    var posicion = texto.indexOf(caracter);

    while (posicion !== -1) {
        ++cuenta;
        posicion = texto.indexOf(caracter, posicion + 1);   // sigue después de la última coincidencia
    } // fin de while

    return cuenta;
} // fin de la función contarOcurrencias

function contar() {
    var texto = document.getElementById("texto").value;
    var caracter = document.getElementById("caracter").value.charAt(0);

    if (caracter === "") {
        alert("Escriba el carácter a buscar");
        return;
    } // fin de if

    document.getElementById("resultado").textContent =
        "El carácter \"" + caracter + "\" aparece " +
        contarOcurrencias(texto, caracter) + " vez/veces.";
} // fin de la función contar

function iniciar() {
    document.getElementById("botonContar").addEventListener("click", contar, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);