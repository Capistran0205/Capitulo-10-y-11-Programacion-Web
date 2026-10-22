document.writeln("<h1>Ejercicio 11.27: Un corrector ortográfico</h1>");
document.writeln("<hr>");
document.writeln("<p>Diseñe e implemente una aplicación de corrección ortográfica en JavaScript. Su programa debe mantener un arreglo de cadenas llamado listaDePalabras. Permita al usuario introducir estas cadenas.</p>");
document.writeln("<ul>");
document.writeln("<li>Si la palabra se encuentra en el arreglo, su programa deberá imprimir \"La palabra está escrita correctamente\"</li>");
document.writeln("<li>Si la palabra no se encuentra en el arreglo, su aplicación debe imprimir \"La palabra no está escrita correctamente\".</li>");
document.writeln("</ul>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
var listaDePalabras = [];

// teclas vecinas en un teclado QWERTY (errores de tecla cercana)
var VECINAS = {
    q: "wa", w: "qes", e: "wrsd", r: "etdf", t: "ryfg", y: "tugh",
    u: "yihj", i: "uojk", o: "ipkl", p: "ol", a: "qwsz", s: "awedxz", d: "serfcx",
    f: "drtgvc", g: "ftyhbv", h: "gyujnb", j: "huikmn", k: "jiolm", l: "kop",
    z: "asx", x: "zsdc", c: "xdfv", v: "cfgb", b: "vghn", n: "bhjm", m: "njk"
};

// lee el diccionario del textarea (palabras separadas por espacios, comas o saltos de línea)
function cargarLista() {
    var piezas = document.getElementById("diccionario").value.toLowerCase().split(/[\s,]+/);
    listaDePalabras = [];

    for (var i = 0; i < piezas.length; ++i)
        if (piezas[i] !== "")
            listaDePalabras.push(piezas[i]);
} // fin de la función cargarLista

function sugerencias(palabra) {
    var candidatas = [];
    var i, j;

    // 1) transposiciones de dos letras adyacentes
    for (i = 0; i < palabra.length - 1; ++i)
        candidatas.push(palabra.substring(0, i) + palabra.charAt(i + 1) +
            palabra.charAt(i) + palabra.substring(i + 2));

    // 2) reemplazar cada letra doble por una sola
    for (i = 0; i < palabra.length - 1; ++i)
        if (palabra.charAt(i) === palabra.charAt(i + 1))
            candidatas.push(palabra.substring(0, i) + palabra.substring(i + 1));

    // 3) sustituir una letra por la de una tecla vecina
    for (i = 0; i < palabra.length; ++i) {
        var vecinas = VECINAS[palabra.charAt(i)];

        if (vecinas !== undefined)
            for (j = 0; j < vecinas.length; ++j)
                candidatas.push(palabra.substring(0, i) + vecinas.charAt(j) +
                    palabra.substring(i + 1));
    } // fin de for

    // se conservan solo las candidatas que existen en la lista de palabras
    var encontradas = [];

    for (i = 0; i < candidatas.length; ++i)
        if (listaDePalabras.indexOf(candidatas[i]) !== -1 &&
            encontradas.indexOf(candidatas[i]) === -1)
            encontradas.push(candidatas[i]);

    return encontradas;
} // fin de la función sugerencias

function verificar() {
    cargarLista();
    var palabra = document.getElementById("palabra").value.toLowerCase().replace(/^\s+|\s+$/g, "");
    var mensaje;

    if (palabra === "")
        mensaje = "Escriba una palabra";
    else if (listaDePalabras.indexOf(palabra) !== -1)
        mensaje = "La palabra está escrita correctamente";
    else {
        mensaje = "La palabra no está escrita correctamente";
        var opciones = sugerencias(palabra);

        for (var i = 0; i < opciones.length; ++i)
            mensaje += "\n¿Quiso decir \"" + opciones[i] + "\"?";
    } // fin de else

    document.getElementById("resultado").textContent = mensaje;
} // fin de la función verificar

function iniciar() {
    document.getElementById("botonVerificar").addEventListener("click", verificar, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);