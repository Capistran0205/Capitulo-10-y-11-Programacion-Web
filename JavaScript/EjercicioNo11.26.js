document.writeln("<h1>Ejercicio 11.26: Programa de métricas</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos que ayude al usuario a realizar conversiones métricas. Su programa debe permitir al usuario especificar los nombres de las unidades como cadenas (es decir, centímetros, litros, gramos, etcétera, para el sistema métrico, y pulgadas, cuartos, libras, etcétera, para el sistema inglés) y debe responder a preguntas simples tales como:</p>");
document.writeln("<p>¿Cuántas pulgadas hay en 2 metros?</p>");
document.writeln("<p>¿Cuántas litros hay en 10 cuartod?</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
// cada unidad: [ tipo de magnitud, factor para convertir a la unidad base ]
// bases: metro (longitud), kilogramo (masa) y litro (volumen)
var UNIDADES = {
    milimetro: ["longitud", 0.001], centimetro: ["longitud", 0.01],
    metro: ["longitud", 1], kilometro: ["longitud", 1000],
    pulgada: ["longitud", 0.0254], pie: ["longitud", 0.3048],
    yarda: ["longitud", 0.9144], milla: ["longitud", 1609.344],
    gramo: ["masa", 0.001], kilogramo: ["masa", 1],
    onza: ["masa", 0.028349523], libra: ["masa", 0.45359237],
    mililitro: ["volumen", 0.001], litro: ["volumen", 1],
    pinta: ["volumen", 0.473176473], cuarto: ["volumen", 0.946352946],
    galon: ["volumen", 3.785411784]
}; // fin del objeto UNIDADES

function normalizar(texto) {
    return texto.toLowerCase().replace(/á/g, "a").replace(/é/g, "e")
        .replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u")
        .replace(/^\s+|\s+$/g, "");
} // fin de la función normalizar

// acepta singular y plural: "metros", "pies", "galones"
function buscarUnidad(nombre) {
    var n = normalizar(nombre);
    var candidatos = [n, n.replace(/s$/, ""), n.replace(/es$/, "")];

    for (var i = 0; i < candidatos.length; ++i)
        if (UNIDADES[candidatos[i]])
            return candidatos[i];

    return null;
} // fin de la función buscarUnidad

function responder(pregunta) {
    var texto = normalizar(pregunta.replace(/[¿?]/g, ""));
    var m = /^cuant[oa]s\s+(.+?)\s+hay\s+en\s+(-?[0-9]*\.?[0-9]+)\s+(.+)$/.exec(texto);

    if (!m)
        return "No entendí la pregunta. Use: ¿Cuántas pulgadas hay en 2 metros?";

    var destino = buscarUnidad(m[1]);
    var origen = buscarUnidad(m[3]);
    var cantidad = parseFloat(m[2]);

    if (destino === null)
        return "Unidad desconocida: " + m[1];

    if (origen === null)
        return "Unidad desconocida: " + m[3];

    if (UNIDADES[destino][0] !== UNIDADES[origen][0])
        return "Conversión inválida: " + m[1] + " es una unidad de " +
            UNIDADES[destino][0] + " y " + m[3] + " es una unidad de " +
            UNIDADES[origen][0] + ".";

    var resultado = cantidad * UNIDADES[origen][1] / UNIDADES[destino][1];
    return cantidad + " " + m[3] + " = " + resultado.toFixed(4) + " " + m[1];
} // fin de la función responder

function convertir() {
    document.getElementById("respuesta").textContent =
        responder(document.getElementById("pregunta").value);
} // fin de la función convertir

function iniciar() {
    document.getElementById("botonConvertir").addEventListener("click", convertir, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);
