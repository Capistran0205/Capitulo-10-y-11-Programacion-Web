document.writeln("<h1>Ejercicio 11.16: Cadenas que terminan con \"ed\"</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos que lea una serie de cadenas e imprima en un elemento textarea de HTML5 sólo aquellas cadenas que terminen con los caracteres \"ed\".</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
function filtrar() {
    // una cadena por línea
    var cadenas = document.getElementById("entrada").value.split("\n");
    var salida = "";

    for (var i = 0; i < cadenas.length; ++i) {
        if (cadenas[ i ].length >= 2 && cadenas[ i ].substring( cadenas[ i ].length - 2 ) === "ed")
            salida += cadenas[i] + "\n";
    } // fin de for

    document.getElementById("salida").value = salida;
} // fin de la función filtrar

function iniciar() {
    document.getElementById("botonFiltrar").addEventListener("click", filtrar, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);