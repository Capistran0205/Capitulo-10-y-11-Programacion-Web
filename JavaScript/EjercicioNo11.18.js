document.writeln("<h1>Ejercicio 11.18: Todos los códigos de 000 a 255</h1>");
document.writeln("<hr>");
document.writeln("<p>Modifique su solución al ejercicio 11.17 de manera que genere todos los posibles códigos de tres dígitos en el rango de 000 a 255 y que intente imprimir los caracteres correspondientes. Muestre los resultados en un elemento textarea de HTML5.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
function generarCodigos() {
    var texto = "";

    for (var codigo = 0; codigo <= 255; ++codigo) {
        var tres = String(codigo);

        while (tres.length < 3)   // rellenar con ceros: 7 → 007
            tres = "0" + tres;

        // los caracteres de control (0-31 y 127-159) no son imprimibles
        var caracter = (codigo < 32 || (codigo >= 127 && codigo < 160)) ?
            "(control)" : String.fromCharCode(codigo);

        texto += tres + "   " + caracter + "\n";
    } // fin de for

    document.getElementById("salida").value = texto;
} // fin de la función generarCodigos

window.addEventListener("load", generarCodigos, false);