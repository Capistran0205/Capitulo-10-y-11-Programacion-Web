document.writeln("<h1>Ejercicio 11.8: Quintillas al azar</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos que utilice la generación de números aleatorios para crear enunciados. Use cuatro arreglos de cadenas llamados articulo, sustantivo, verbo y preposicion.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
         // cada grupo contiene versos que terminan con la misma rima
         var rimas = [
            [ "Un gato valiente quiso volar", "Mi abuela salió a bailar",
              "El perro se puso a cantar", "Un pato aprendió a nadar",
              "La vaca se fue a pasear", "Un loro empezó a rimar" ],
            [ "Un ratón se subió al avión", "Se tragó un enorme melón",
              "Perdió el zapato en el salón", "Bailó con un dragón",
              "Le dolía el corazón", "Cantó desde el balcón" ],
            [ "Se levantó casi al mediodía", "Soñaba con la fantasía",
              "Comía sopa todo el día", "Cantaba con alegría",
              "Le dio una extraña manía", "Escribió una poesía" ],
            [ "Se perdió en medio del camino", "Se bebió un vaso de vino",
              "Pasó frente a un molino", "Saludó a su vecino",
              "Siguió su extraño destino", "Cenó pan con tocino" ]
         ]; // fin del arreglo rimas

         // toma n versos distintos de un grupo, en orden aleatorio
         function elegirVersos( grupo, n )
         {
            var copia = grupo.slice();   // copia para no modificar el original
            var elegidos = [];

            for ( var i = 0; i < n; ++i )
            {
               var indice = Math.floor( Math.random() * copia.length );
               elegidos.push( copia.splice( indice, 1 )[ 0 ] );
            } // fin de for

            return elegidos;
         } // fin de la función elegirVersos

         function crearQuintilla()
         {
            var a = Math.floor( Math.random() * rimas.length );
            var b = Math.floor( Math.random() * rimas.length );

            while ( b === a )   // las dos rimas deben ser distintas
               b = Math.floor( Math.random() * rimas.length );

            var versosA = elegirVersos( rimas[ a ], 3 );
            var versosB = elegirVersos( rimas[ b ], 2 );

            // esquema de rima A A B B A
            var quintilla =
               versosA[ 0 ] + ",\n" + versosA[ 1 ] + ",\n" +
               versosB[ 0 ] + ",\n" + versosB[ 1 ] + ",\n" +
               versosA[ 2 ] + ".";

            document.getElementById( "quintilla" ).value = quintilla;
         } // fin de la función crearQuintilla

         function iniciar()
         {
            document.getElementById( "botonQuintilla" ).addEventListener( "click", crearQuintilla, false );
            crearQuintilla();
         } // fin de la función iniciar

         window.addEventListener( "load", iniciar, false );