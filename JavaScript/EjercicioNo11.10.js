document.writeln("<h1>Ejercicio 11.10: Número telefónico</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una aplicación que reciba como entrada un número telefónico como una cadena de la forma (555)555-5555. La aplicación deberá utilizar el método split de String para extraer:</p>");
document.writeln("<ol type = 'a'>");
document.writeln("<li>El código de área como un token</li>");
document.writeln("<li>Los primeros tres dígitos del número telefónico como otro token, y</li>");
document.writeln("<li>Los últimos cuatro dígitos como otro token.</li>");
document.writeln("</ol>");
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