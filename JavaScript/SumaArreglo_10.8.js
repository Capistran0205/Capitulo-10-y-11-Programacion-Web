// Fig. 10.8: SumaArreglo.js
// Suma de los elementos de un arreglo con for y for...in
function iniciar()
{
   var elArreglo = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
   var total1 = 0, total2 = 0;

   imprimirArreglo("Arreglo:", elArreglo, document.getElementById("salida1"));

   // itera a través de los elementos del arreglo en orden y suma
   // el valor de cada elemento a total1
   var longitud = elArreglo.length; // obtener la longitud del arreglo una vez antes del ciclo

   for ( var i = 0; i < longitud; ++i )
   {
      total1 += elArreglo[ i ];
   } // fin de for

   var resultados = "<p>Total usando índices: " + total1 + "</p>";

   // itera a través de los elementos del arreglo usando una instrucción
   // for...in para sumar el valor de cada elemento a total2
   for ( var elemento in elArreglo )
   {
      total2 += elArreglo[ elemento ];
   } // fin de for

   resultados += "<p>Total usando for...in: " + total2 + "</p>";
   document.getElementById( "salida2" ).innerHTML = resultados;
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