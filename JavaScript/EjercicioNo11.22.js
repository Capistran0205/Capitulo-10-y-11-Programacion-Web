document.writeln("<h1>Ejercicio 11.22: Impresión de fechas en varios formatos</h1>");
document.writeln("<hr>");
document.writeln("<p>Las fechas se imprimen en varios formatos comunes. Escriba una secuencia de comandos que lea una fecha de un formulario de HTML5 y cree un objeto Date para guardar esa fecha. Después use los diversos métodos del objeto Date que convierten las fechas en cadenas para mostrar esa fecha en varios formatos.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
var dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
    "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

function dosDigitos(n) {
    return (n < 10 ? "0" : "") + n;
} // fin de la función dosDigitos

function mostrarFormatos() {
    var valor = document.getElementById("fecha").value;   // formato AAAA-MM-DD

    if (valor === "") {
        alert("Seleccione una fecha");
        return;
    } // fin de if

    var partes = valor.split("-");
    // el mes del constructor va de 0 a 11
    var fecha = new Date(partes[0], partes[1] - 1, partes[2]);

    var dd = dosDigitos(fecha.getDate());
    var mm = dosDigitos(fecha.getMonth() + 1);
    var aaaa = fecha.getFullYear();

    document.getElementById("salida").value =
        "toString:           " + fecha.toString() + "\n" +
        "toDateString:       " + fecha.toDateString() + "\n" +
        "toLocaleDateString: " + fecha.toLocaleDateString() + "\n" +
        "toLocaleString:     " + fecha.toLocaleString() + "\n" +
        "toUTCString:        " + fecha.toUTCString() + "\n" +
        "toISOString:        " + fecha.toISOString() + "\n" +
        "\n" +
        "dd/mm/aaaa:         " + dd + "/" + mm + "/" + aaaa + "\n" +
        "mm-dd-aaaa:         " + mm + "-" + dd + "-" + aaaa + "\n" +
        "aaaa-mm-dd:         " + aaaa + "-" + mm + "-" + dd + "\n" +
        "Largo:              " + dias[fecha.getDay()] + ", " + fecha.getDate() +
        " de " + meses[fecha.getMonth()] + " de " + aaaa + "\n";
} // fin de la función mostrarFormatos

function iniciar() {
    document.getElementById("botonFormatos").addEventListener("click", mostrarFormatos, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);