document.writeln("<h1>Ejercicio 11.19: IndexOf propio.</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba su propia versión del método String.indexOf y úselo en una secuencia de comandos.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
// devuelve el índice de la primera ocurrencia de "buscada" en "cadena",
// empezando en "desde" (opcional), o -1 si no existe
function miIndexOf(cadena, buscada, desde) {
  if (desde === undefined || desde < 0) desde = 0;

  for (var i = desde; i <= cadena.length - buscada.length; ++i) {
    var coincide = true;

    for (var j = 0; j < buscada.length; ++j) {
      if (cadena.charAt(i + j) !== buscada.charAt(j)) {
        coincide = false;
        break;
      } // fin de if
    } // fin de for interno

    if (coincide) return i;
  } // fin de for externo

  return -1;
} // fin de la función miIndexOf

function buscar() {
  var cadena = document.getElementById("cadena").value;
  var buscada = document.getElementById("buscada").value;

  document.getElementById("resultado").textContent =
    "miIndexOf: " +
    miIndexOf(cadena, buscada) +
    "   |   indexOf de JavaScript: " +
    cadena.indexOf(buscada);
} // fin de la función buscar

function iniciar() {
  document
    .getElementById("botonBuscar")
    .addEventListener("click", buscar, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);
