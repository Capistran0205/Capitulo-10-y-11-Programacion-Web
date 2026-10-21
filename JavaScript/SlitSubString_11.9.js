// Fig. 11.9: SplitYSubString.js
// Los métodos String split y substring.
document.writeln("<h1>Ejemplo 11.8: Split y Subtring de Cadenas</h1>");
function botonDividirPresionado()
{
   var cadenaEntrada = document.getElementById( "campoEntrada" ).value;
   var tokens = cadenaEntrada.split( " " );

   var resultados = document.getElementById( "resultados" );

   resultados.innerHTML = "<p>El enunciado dividido en palabras es: </p>" +
      "<p class = 'indent'>" +
      tokens.join( "</p><p class = 'indent'>" ) + "</p>" +
      "<p>Los primeros 10 caracteres de la cadena de entrada son: </p>" +
      "<p class = 'indent'>'" + cadenaEntrada.substring( 0, 10 ) + "'</p>";
} // fin de la función botonDividirPresionado

// registrar manejador de eventos de clic para botonDividir
function iniciar()
{
   var botonDividir = document.getElementById( "botonDividir" );
   botonDividir.addEventListener( "click", botonDividirPresionado, false );
} // fin de la función iniciar

window.addEventListener( "load", iniciar, false );