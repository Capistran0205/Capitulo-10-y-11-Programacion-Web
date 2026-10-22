document.writeln("<h1>Ejercicio 11.17: Código entero a código carater</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos que reciba como entrada un código entero para un carácter y que muestre el carácter correspondiente.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
function mostrarCaracter() {
    var codigo = parseInt(document.getElementById("codigo").value, 10);
    var resultado = document.getElementById("resultado");

    if (isNaN(codigo) || codigo < 0 || codigo > 65535)
        resultado.textContent = "Escriba un entero entre 0 y 65535";
    else
        resultado.textContent = "El carácter con código " + codigo + " es: " +
            String.fromCharCode(codigo);
} // fin de la función mostrarCaracter

function iniciar() {
    document.getElementById("botonMostrar").addEventListener("click", mostrarCaracter, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);