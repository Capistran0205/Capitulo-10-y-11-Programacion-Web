document.writeln("<h1>Ejercicio 11.9: Latín Cerdo</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos que codifique frases en español a frases en latín cerdo. El latín cerdo es una forma de lenguaje codificado que se utiliza con frecuencia por diversión. Existen muchas variaciones en los métodos para formar frases en latín cerdo. Por simplicidad, utilice el siguiente algoritmo:</p>");
document.writeln("<p>Para formar una frase en latín cerdo a partir de una frase en español, divida la frase en palabras con el método split de String. Para traducir cada palabra en español a una palabra en latín cerdo, coloque la primera letra de la palabra en español al final de la palabra y agregue las letras \"ae\"</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
// muestra una palabra en latín cerdo al final del textarea
function imprimirPalabraEnLatin(palabra) {
    // primera letra al final de la palabra + "ae"
    var traducida = palabra.substring(1) + palabra.charAt(0) + "ae";
    document.getElementById("salida").value += traducida + " ";
} // fin de la función imprimirPalabraEnLatin

function traducir() {
    var entrada = document.getElementById("entrada");
    var tokens = entrada.value.split(" ");

    for (var i = 0; i < tokens.length; ++i) {
        if (tokens[i] !== "")   // ignora espacios dobles
            imprimirPalabraEnLatin(tokens[i]);
    } // fin de for

    document.getElementById("salida").value += "\n";   // un enunciado por línea
    entrada.value = "";
    entrada.focus();
} // fin de la función traducir

function iniciar() {
    document.getElementById("botonTraducir").addEventListener("click", traducir, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);