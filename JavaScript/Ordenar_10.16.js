// Fig. 10.16: Ordenar.js
// Ordenar un arreglo mediante sort.
function iniciar()
{
   var a = [ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ];

   imprimirArreglo( "Elementos de datos en el orden original: ", a,
      document.getElementById( "arregloOriginal" ) );
   a.sort( compararEnteros ); // ordenar el arreglo
   imprimirArreglo( "Elementos de datos en orden ascendente: ", a,
      document.getElementById( "arregloOrdenado" ) );
} // fin de la función iniciar

// función de comparación para usar con sort
function compararEnteros( valor1, valor2 )
{
   return parseInt( valor1 ) - parseInt( valor2 );
} // fin de la función compararEnteros

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