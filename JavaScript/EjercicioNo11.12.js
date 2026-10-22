document.writeln("<h1>Ejercicio 11.12: Mayúsculas y minúsculas</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos que reciba texto de un formulario de HTML5 y lo imprima tanto en mayúsculas como en minúsculas..</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
function invertir() {
    var linea = document.getElementById("linea").value;
    var tokens = linea.split(" ");
    var resultado = "";

    for (var i = tokens.length - 1; i >= 0; --i) {
        if (tokens[i] !== "")
            resultado += tokens[i] + " ";
    } // fin de for

    document.getElementById("resultado").textContent = resultado;
} // fin de la función invertir

function iniciar() {
    document.getElementById("botonInvertir").addEventListener("click", invertir, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);