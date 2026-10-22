document.writeln("<h1>Ejercicio 11.20: Mi propia versión de lastIndexOf</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba su propia versión del método String.lastIndexOf y úselo en una secuencia de comandos.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
// devuelve el índice de la última ocurrencia de "buscada" en "cadena",
// buscando hacia atrás desde "desde" (opcional), o -1 si no existe
function miLastIndexOf( cadena, buscada, desde )
{
   var maximo = cadena.length - buscada.length;

   if ( desde === undefined || desde > maximo )
      desde = maximo;

   for ( var i = desde; i >= 0; --i )
   {
      var coincide = true;

      for ( var j = 0; j < buscada.length; ++j )
      {
         if ( cadena.charAt( i + j ) !== buscada.charAt( j ) )
         {
            coincide = false;
            break;
         } // fin de if
      } // fin de for interno

      if ( coincide )
         return i;
   } // fin de for externo

   return -1;
} // fin de la función miLastIndexOf
function buscar() {
  var cadena = document.getElementById("cadena").value;
  var buscada = document.getElementById("buscada").value;
  document.getElementById( "resultado" ).textContent =
   "miLastIndexOf: " + miLastIndexOf( cadena, buscada ) +
   "   |   lastIndexOf de JavaScript: " + cadena.lastIndexOf( buscada );
} // fin de la función buscar

function iniciar() {
  document
    .getElementById("botonBuscar")
    .addEventListener("click", buscar, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);
