document.writeln("<h1>Ejercicio 11.24: Protección de cheques</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos que reciba como entrada un monto a imprimir sobre un cheque y que lo escriba mediante el formato de protección de cheques, con asteriscos al principio si es necesario. Suponga que existen nueve espacios disponibles para imprimir el monto.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
var ESPACIOS = 9;

// devuelve el monto con comas y dos decimales: 1230.6 → "1,230.60"
function formatearMonto(monto) {
    var partes = monto.toFixed(2).split(".");
    var entero = partes[0];
    var conComas = "";

    for (var i = 0; i < entero.length; ++i) {
        if (i > 0 && (entero.length - i) % 3 === 0)
            conComas += ",";

        conComas += entero.charAt(i);
    } // fin de for

    return conComas + "." + partes[1];
} // fin de la función formatearMonto

function protegerCheque() {
    var monto = parseFloat(document.getElementById("monto").value);
    var cheque = document.getElementById("cheque");

    if (isNaN(monto) || monto < 0) {
        cheque.textContent = "Escriba un monto válido";
        return;
    } // fin de if

    var texto = formatearMonto(monto);

    if (texto.length > ESPACIOS) {
        cheque.textContent = "El monto no cabe en " + ESPACIOS + " espacios";
        return;
    } // fin de if

    while (texto.length < ESPACIOS)
        texto = "*" + texto;   // asteriscos al principio

    cheque.textContent = texto + "\n123456789";
} // fin de la función protegerCheque

function iniciar() {
    document.getElementById("botonProteger").addEventListener("click", protegerCheque, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);