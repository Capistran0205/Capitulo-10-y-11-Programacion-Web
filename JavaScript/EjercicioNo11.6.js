document.writeln("<h1>Ejercicio 11.6: Comparación de Strings</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos que use operadores relacionales y de igualdad para comparar dos objetos String introducidos por el usuario a través de un formulario de HTML5. Muestre si la primera cadena es menor, igual o mayor que la segunda.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
function comparar() {
    var cadena1 = document.getElementById("cadena1").value;
    var cadena2 = document.getElementById("cadena2").value;
    var relacion;

    if (cadena1 == cadena2)
        relacion = "igual a";
    else if (cadena1 < cadena2)
        relacion = "menor que";
    else
        relacion = "mayor que";

    document.getElementById("resultado").textContent =
        "\"" + cadena1 + "\" es " + relacion + " \"" + cadena2 + "\"";
} // fin de la función comparar

function iniciar() {
    document.getElementById("botonComparar").addEventListener("click", comparar, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);