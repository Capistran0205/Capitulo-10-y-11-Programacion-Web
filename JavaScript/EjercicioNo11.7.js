document.writeln("<h1>Ejercicio 11.7: Comparación de Strings</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos que utilice la generación de números aleatorios para crear enunciados. Use cuatro arreglos de cadenas llamados articulo, sustantivo, verbo y preposicion.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
var articulo = ["el", "un", "algún", "ningún"];
var sustantivo = ["niño", "niña", "perro", "ciudad", "auto"];
var verbo = ["manejó", "saltó", "corrió", "caminó", "omitió"];
var preposicion = ["a", "desde", "encima de", "debajo de", "sobre"];

function aleatoria(arreglo) {
    return arreglo[Math.floor(Math.random() * arreglo.length)];
} // fin de la función aleatoria

function crearEnunciado() {
    var enunciado = "";
    enunciado += aleatoria(articulo) + " ";
    enunciado += aleatoria(sustantivo) + " ";
    enunciado += aleatoria(verbo) + " ";
    enunciado += aleatoria(preposicion) + " ";
    enunciado += aleatoria(articulo) + " ";
    enunciado += aleatoria(sustantivo);

    // primera letra en mayúscula y punto final
    return enunciado.charAt(0).toUpperCase() + enunciado.substring(1) + ".";
} // fin de la función crearEnunciado

function crearHistoria() {
    var historia = "Había una vez...\n";

    for (var i = 1; i <= 20; ++i)
        historia += crearEnunciado() + "\n";

    historia += "FIN";
    document.getElementById("historia").value = historia;
} // fin de la función crearHistoria

function iniciar() {
    document.getElementById("botonHistoria").addEventListener("click", crearHistoria, false);
    crearHistoria();
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);