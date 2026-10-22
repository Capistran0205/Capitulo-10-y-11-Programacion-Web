document.writeln( "<h1>Ejercicio 11.4: Redondeo con la clase Math.floor</h1>" );
document.writeln( "<hr>" );
document.writeln( "<p>Escriba una secuencia de comandosque defina cuatro funciones para redondear un número x de varias formas:</p>" );
document.writeln( "<ol type = 'a'>" );
document.writeln( "<li>redondearAEntero( numero )</li>" );
document.writeln( "<li>redondearADecimas( numero )</li>" );
document.writeln( "<li>redondearACentesimas( numero )</li>" );
document.writeln( "<li>redondearAMilesimas( numero )</li>" );
document.writeln( "</ol>" );
document.writeln( "<hr>" );
document.writeln( "<h2>Solución:</h2>" );
function redondearAEntero(numero) {
    return Math.floor(numero + .5);
} // fin de la función redondearAEntero

function redondearADecimas(numero) {
    return Math.floor(numero * 10 + .5) / 10;
} // fin de la función redondearADecimas

function redondearACentesimas(numero) {
    return Math.floor(numero * 100 + .5) / 100;
} // fin de la función redondearACentesimas

function redondearAMilesimas(numero) {
    return Math.floor(numero * 1000 + .5) / 1000;
} // fin de la función redondearAMilesimas

function rellenar(texto, ancho) {
    while (texto.length < ancho)
        texto += " ";
    return texto;
} // fin de la función rellenar

function procesar() {
    var campo = document.getElementById("numero");
    var numero = parseFloat(campo.value);

    if (isNaN(numero)) {
        alert("Escriba un número válido");
        return;
    } // fin de if

    document.getElementById("salida").value +=
        rellenar(String(numero), 14) +
        rellenar(String(redondearAEntero(numero)), 10) +
        rellenar(String(redondearADecimas(numero)), 10) +
        rellenar(String(redondearACentesimas(numero)), 13) +
        redondearAMilesimas(numero) + "\n";

    campo.value = "";
    campo.focus();
} // fin de la función procesar

function iniciar() {
    document.getElementById("salida").value =
        rellenar("Original", 14) + rellenar("Entero", 10) +
        rellenar("Décimas", 10) + rellenar("Centésimas", 13) + "Milésimas\n";
    document.getElementById("botonRedondear").addEventListener("click", procesar, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);