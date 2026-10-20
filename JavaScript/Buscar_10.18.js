// Fig. 10.18: buscar.js
// Buscar en un arreglo mediante indexOf.
var a = new Array( 101 ); // crear un arreglo

// llenar el arreglo con valores enteros pares de 0 a 200
for ( var i = 0; i < a.length; ++i )
{
   a[ i ] = 2 * i;
} // fin de for

// la función se invoca cuando se presiona el botón "Buscar"
function botonPresionado()
{
   // obtener el campo de texto de entrada
   var valEntrada = document.getElementById( "valEntrada" );

   // obtener el párrafo de resultado
   var resultado = document.getElementById( "resultado" );

   // obtener la clave de búsqueda del campo de texto de entrada y luego realizar la búsqueda
   var claveBusqueda = parseInt( valEntrada.value );
   var elemento = a.indexOf( claveBusqueda );

   if ( elemento != -1 )
   {
      resultado.innerHTML = "Se encontró el valor en el elemento " + elemento;
   } // fin de if
   else
   {
      resultado.innerHTML = "No se encontró el valor";
   } // fin de else
   imprimirArreglo("Arreglo:", a, document.getElementById("salida"));
} // fin de la función botonPresionado

// registra el manejador de eventos de clic de botonBuscar
function iniciar()
{
   var botonBuscar = document.getElementById( "botonBuscar" );
   botonBuscar.addEventListener( "click", botonPresionado, false );
} // fin de la función iniciar

// genera una tabla con los índices y elementos de "elArreglo"
function imprimirArreglo( encabezado, elArreglo, salida )
{
   var contenido = "<h2>" + encabezado + "</h2><table>" +
      "<thead><tr><th>Índice</th><th>Valor</th></tr></thead><tbody>";

   // imprime el índice y el valor de cada elemento del arreglo
   var longitud = elArreglo.length; // obtiene la longitud del arreglo una vez antes del ciclo

   for ( var i = 0; i < longitud; ++i )
   {
      contenido += "<tr><td>" + i + "</td><td>" + elArreglo[ i ] +
         "</td></tr>";
   } // fin de for

   contenido += "</tbody></table>";
   salida.innerHTML = contenido; // colocar la tabla en el elemento salida
} // fin de la función imprimirArreglo

window.addEventListener( "load", iniciar, false );