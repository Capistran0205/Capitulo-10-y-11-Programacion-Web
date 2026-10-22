document.writeln( "<h1>Ejercicio 11.3: Funciones de la clase Math</h1>" );
document.writeln( "<hr>" );
document.writeln( "<p>Escriba una secuencia de comandos que evalúe todas las funciones que pueda de la biblioteca Math de la figura 11.1. Para ejercitar cada una de estas funciones, haga que su programa muestre tablas de valores de retorno para varios valores de argumentos en un elemento textarea de HTML5..</p>" );
document.writeln( "<ol type = 'a'>" );
document.writeln( "<hr>" );
document.writeln( "<h2>Solución:</h2>" );
// cada fila: nombre del método seguido de varios arreglos de argumentos
var pruebas = [
    ["abs", [7.2], [0], [-5.6]],
    ["ceil", [9.2], [-9.8]],
    ["cos", [0], [Math.PI]],
    ["exp", [1], [2]],
    ["floor", [9.2], [-9.8]],
    ["log", [2.718282], [7.389056]],
    ["max", [2.3, 12.7], [-2.3, -12.7]],
    ["min", [2.3, 12.7], [-2.3, -12.7]],
    ["pow", [2, 7], [9, .5]],
    ["round", [9.75], [9.25]],
    ["sin", [0], [Math.PI / 2]],
    ["sqrt", [900], [9]],
    ["tan", [0], [Math.PI / 4]]
]; // fin del arreglo pruebas

function rellenar(texto, ancho) {
    while (texto.length < ancho)
        texto += " ";
    return texto;
} // fin de la función rellenar

function llenarTabla() {
    var texto = rellenar("Función", 14) + rellenar("Argumentos", 22) + "Resultado\n";
    texto += "--------------------------------------------------\n";

    for (var i = 0; i < pruebas.length; ++i) {
        var nombre = pruebas[i][0];

        for (var j = 1; j < pruebas[i].length; ++j) {
            var argumentos = pruebas[i][j];
            var resultado = Math[nombre].apply(Math, argumentos);
            texto += rellenar("Math." + nombre, 14) +
                rellenar(argumentos.join(", "), 22) + resultado + "\n";
        } // fin de for interno
    } // fin de for externo

    document.getElementById("salida").value = texto;
} // fin de la función llenarTabla

window.addEventListener("load", llenarTabla, false);