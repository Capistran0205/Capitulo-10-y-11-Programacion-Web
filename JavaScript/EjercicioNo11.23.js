document.writeln("<h1>Ejercicio 11.23: Impresión de fechas en varios formatos</h1>");
document.writeln("<hr>");
document.writeln("<ol type = 'a'>");
document.writeln("<li>Escriba una aplicación que lea una línea de texto desde el teclado e imprima una tabla que indique el número de ocurrencias de cada letra del alfabeto en el texto.</li>");
document.writeln("<li>Escriba una secuencia de comandos que lea varias líneas de texto e imprima una tabla que indique el número de palabras de una letra, de dos letras, de tres letras, etcétera, que aparezcan en el texto.</li>");
document.writeln("<li>Escriba una aplicación que lea varias líneas de texto e imprima una tabla que indique el número de ocurrencias de cada palabra distinta en el texto. La primera versión de su programa debe incluir las palabras en la tabla en el mismo orden en el cual aparecen en el texto.</li>");
document.writeln("</ol>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
var ALFABETO = "abcdefghijklmnñopqrstuvwxyz";

function sinAcentos(texto) {
    return texto.replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i")
        .replace(/ó/g, "o").replace(/[úü]/g, "u");
} // fin de la función sinAcentos

// deja solo las letras de una palabra (quita signos como ¿ ? : ,)
function soloLetras(palabra) {
    return palabra.replace(/[^a-záéíóúüñ]/gi, "");
} // fin de la función soloLetras

// ---------- a) ocurrencias de cada letra ----------
function tablaLetras() {
    var texto = sinAcentos(document.getElementById("textoA").value.toLowerCase());
    var salida = "Letra   Ocurrencias\n------------------\n";

    for (var i = 0; i < ALFABETO.length; ++i) {
        var letra = ALFABETO.charAt(i);
        var cuenta = 0;
        var posicion = texto.indexOf(letra);

        while (posicion !== -1) {
            ++cuenta;
            posicion = texto.indexOf(letra, posicion + 1);
        } // fin de while

        salida += "  " + letra + "        " + cuenta + "\n";
    } // fin de for

    document.getElementById("salidaA").value = salida;
} // fin de la función tablaLetras

// ---------- b) palabras por longitud ----------
function tablaLongitudes() {
    var tokens = document.getElementById("textoB").value.split(/\s+/);
    var cuentas = [];   // cuentas[ n ] = número de palabras de n letras
    var maximo = 0;

    for (var i = 0; i < tokens.length; ++i) {
        var palabra = soloLetras(tokens[i]);

        if (palabra.length > 0) {
            cuentas[palabra.length] = (cuentas[palabra.length] || 0) + 1;

            if (palabra.length > maximo)
                maximo = palabra.length;
        } // fin de if
    } // fin de for

    var salida = "Longitud de palabra   Ocurrencias\n";

    for (var n = 1; n <= maximo; ++n)
        salida += "        " + n + "                 " + (cuentas[n] || 0) + "\n";

    document.getElementById("salidaB").value = salida;
} // fin de la función tablaLongitudes

// ---------- c) frecuencia de cada palabra distinta ----------
function buscarPalabra(lista, palabra) {
    for (var i = 0; i < lista.length; ++i)
        if (lista[i].palabra === palabra)
            return i;

    return -1;
} // fin de la función buscarPalabra

function tablaPalabras() {
    var tokens = document.getElementById("textoC").value.split(/\s+/);
    var lista = [];   // arreglo de objetos { palabra, veces } en orden de aparición

    for (var i = 0; i < tokens.length; ++i) {
        var palabra = soloLetras(tokens[i]).toLowerCase();

        if (palabra !== "") {
            var indice = buscarPalabra(lista, palabra);

            if (indice === -1)
                lista.push({ palabra: palabra, veces: 1 });
            else
                ++lista[indice].veces;
        } // fin de if
    } // fin de for

    if (document.getElementById("alfabetico").checked)
        lista.sort(function (a, b) { return a.palabra.localeCompare(b.palabra, "es"); });

    var salida = "Palabra            Veces\n---------------------------\n";

    for (var k = 0; k < lista.length; ++k) {
        var relleno = lista[k].palabra;

        while (relleno.length < 19)
            relleno += " ";

        salida += relleno + lista[k].veces + "\n";
    } // fin de for

    document.getElementById("salidaC").value = salida;
} // fin de la función tablaPalabras

function iniciar() {
    document.getElementById("botonA").addEventListener("click", tablaLetras, false);
    document.getElementById("botonB").addEventListener("click", tablaLongitudes, false);
    document.getElementById("botonC").addEventListener("click", tablaPalabras, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);