document.writeln("<h1>Ejercicio 11.12: Mayúsculas y minúsculas</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos que reciba texto de un formulario de HTML5 y lo imprima tanto en mayúsculas como en minúsculas.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
function convertir() {
    var texto = document.getElementById("texto").value;
    document.getElementById("mayusculas").textContent = texto.toUpperCase();
    document.getElementById("minusculas").textContent = texto.toLowerCase();
} // fin de la función convertir

function iniciar() {
    document.getElementById("botonConvertir").addEventListener("click", convertir, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);