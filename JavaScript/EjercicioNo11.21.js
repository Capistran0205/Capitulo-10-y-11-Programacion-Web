document.writeln("<h1>Ejercicio 11.21: Cadenas de tres letras a partir de una palabra de cinco</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba un programa que lea una palabra de cinco letras proveniente del usuario y que produzca todas las posibles cadenas de tres letras que puedan derivarse de las letras de la palabra de cinco letras. Por ejemplo, las palabras de tres letras producidas a partir de la palabra \"trigo\" son \"rio\", \"tío\" y \"oir\". Muestre los resultados en un elemento textarea de HTML5.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
function tresLetras(palabra) {
    var resultados = [];
    var vistos = "|";   // evita repetir cadenas cuando la palabra tiene letras repetidas

    for (var i = 0; i < 5; ++i) {
        for (var j = 0; j < 5; ++j) {
            if (j === i)
                continue;   // no se reutiliza la misma posición

            for (var k = 0; k < 5; ++k) {
                if (k === i || k === j)
                    continue;

                var cadena = palabra.charAt(i) + palabra.charAt(j) + palabra.charAt(k);

                if (vistos.indexOf("|" + cadena + "|") === -1) {
                    vistos += cadena + "|";
                    resultados.push(cadena);
                } // fin de if
            } // fin de for k
        } // fin de for j
    } // fin de for i

    return resultados;
} // fin de la función tresLetras

function generar() {
    var palabra = document.getElementById("palabra").value;

    if (palabra.length !== 5) {
        alert("Escriba una palabra de exactamente cinco letras");
        return;
    } // fin de if

    var cadenas = tresLetras(palabra);
    document.getElementById("salida").value =
        cadenas.length + " cadenas:\n" + cadenas.join("\n");
} // fin de la función generar

function iniciar() {
    document.getElementById("botonGenerar").addEventListener("click", generar, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);