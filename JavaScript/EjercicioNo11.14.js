document.writeln("<h1>Ejercicio 11.14: Frecuencia de cada letra del alfabeto</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos con base en el programa del ejercicio 11.13 que reciba como entrada varias líneas de texto y utilice el método String.indexOf para determinar el número total de ocurrencias de cada letra del alfabeto en ese texto. Las letras mayúsculas y minúsculas deben contarse como una sola. Almacene los totales para cada letra en un arreglo e imprima los valores en formato tabular en un elemento textarea de HTML5 después de que se hayan determinado los totales.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
var ALFABETO = "abcdefghijklmnñopqrstuvwxyz";

// quita acentos para que "á" cuente como "a"
function sinAcentos(texto) {
    return texto.replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i")
        .replace(/ó/g, "o").replace(/[úü]/g, "u");
} // fin de la función sinAcentos

function contarLetras(texto) {
    var totales = [];
    texto = sinAcentos(texto.toLowerCase());   // mayúsculas y minúsculas cuentan igual

    for (var i = 0; i < ALFABETO.length; ++i) {
        var letra = ALFABETO.charAt(i);
        var cuenta = 0;
        var posicion = texto.indexOf(letra);

        while (posicion !== -1) {
            ++cuenta;
            posicion = texto.indexOf(letra, posicion + 1);
        } // fin de while

        totales[i] = cuenta;
    } // fin de for

    return totales;
} // fin de la función contarLetras

function mostrarTabla() {
    var totales = contarLetras(document.getElementById("texto").value);
    var salida = "Letra   Total\n--------------\n";

    for (var i = 0; i < totales.length; ++i)
        salida += "  " + ALFABETO.charAt(i) + "       " + totales[i] + "\n";

    document.getElementById("salida").value = salida;
} // fin de la función mostrarTabla

function iniciar() {
    document.getElementById("botonContar").addEventListener("click", mostrarTabla, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);