document.writeln("<h1>Ejercicio 11.11: Tokens en Orden Inverso</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos que reciba como entrada una línea de texto, que divida la línea en tokens mediante el método split de String y que muestre los tokens en orden inverso.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
function separar() {
    var telefono = document.getElementById("telefono").value;

    // los delimitadores son "(", ")" y "-"; el primer token queda vacío
    var tokens = telefono.split(/[()\-]/);

    if (tokens.length !== 4) {
        alert("Use el formato (555)555-5555");
        return;
    } // fin de if

    document.getElementById("codigoArea").value = tokens[1];
    document.getElementById("numeroSiete").value = tokens[2] + tokens[3];
} // fin de la función separar

function iniciar() {
    document.getElementById("botonSeparar").addEventListener("click", separar, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);