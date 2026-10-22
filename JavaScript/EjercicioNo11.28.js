document.writeln("<h1>Ejercicio 11.28: Generador de crucigramas</h1>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
var TAM = 21;   // la cuadrícula es de TAM x TAM
var cuadricula;      // letras
var orientaciones;   // "H", "V" o "HV" en cada celda ocupada
var colocadas;       // palabras ya colocadas

function nuevaCuadricula() {
   cuadricula = [];
   orientaciones = [];
   colocadas = [];

   for (var f = 0; f < TAM; ++f) {
      cuadricula[f] = [];
      orientaciones[f] = [];

      for (var c = 0; c < TAM; ++c) {
         cuadricula[f][c] = "";
         orientaciones[f][c] = "";
      } // fin de for de columnas
   } // fin de for de filas
} // fin de la función nuevaCuadricula

// devuelve el número de cruces si la palabra cabe, o -1 si no cabe
function puedeColocar(palabra, fila, col, horizontal) {
   var df = horizontal ? 0 : 1;   // desplazamiento por letra
   var dc = horizontal ? 1 : 0;
   var cruces = 0;
   var finFila = fila + df * palabra.length;
   var finCol = col + dc * palabra.length;

   // la palabra debe caber dentro de la cuadrícula
   if (fila < 0 || col < 0 || finFila - df >= TAM || finCol - dc >= TAM)
      return -1;

   // las celdas justo antes y justo después de la palabra deben estar vacías
   if (fila - df >= 0 && col - dc >= 0 && cuadricula[fila - df][col - dc] !== "")
      return -1;

   if (finFila < TAM && finCol < TAM && cuadricula[finFila][finCol] !== "")
      return -1;

   for (var i = 0; i < palabra.length; ++i) {
      var f = fila + df * i;
      var c = col + dc * i;
      var actual = cuadricula[f][c];

      if (actual !== "") {
         if (actual !== palabra.charAt(i))
            return -1;   // choca con una letra distinta

         if (orientaciones[f][c].indexOf(horizontal ? "H" : "V") !== -1)
            return -1;   // se encima con otra palabra en la misma dirección

         ++cruces;
      } // fin de if
      else {
         // una celda nueva no debe quedar pegada a letras vecinas en perpendicular
         var vf = f + dc, vc = c + df;   // vecino de un lado
         var uf = f - dc, uc = c - df;   // vecino del otro lado

         if (vf < TAM && vc < TAM && cuadricula[vf][vc] !== "")
            return -1;

         if (uf >= 0 && uc >= 0 && cuadricula[uf][uc] !== "")
            return -1;
      } // fin de else
   } // fin de for

   return cruces;
} // fin de la función puedeColocar

function colocar(palabra, fila, col, horizontal, pista) {
   var df = horizontal ? 0 : 1;
   var dc = horizontal ? 1 : 0;

   for (var i = 0; i < palabra.length; ++i) {
      cuadricula[fila + df * i][col + dc * i] = palabra.charAt(i);
      orientaciones[fila + df * i][col + dc * i] += horizontal ? "H" : "V";
   } // fin de for

   colocadas.push({
      palabra: palabra, fila: fila, col: col,
      horizontal: horizontal, pista: pista
   });
} // fin de la función colocar

// devuelve las palabras que no se pudieron colocar
function generar(entradas) {
   nuevaCuadricula();
   entradas.sort(function (a, b) { return b.palabra.length - a.palabra.length; });
   var noColocadas = [];

   for (var e = 0; e < entradas.length; ++e) {
      var palabra = entradas[e].palabra;
      var pista = entradas[e].pista;
      var hecho = false;

      if (colocadas.length === 0)   // la primera va horizontal, al centro
      {
         colocar(palabra, Math.floor(TAM / 2),
            Math.floor((TAM - palabra.length) / 2), true, pista);
         continue;
      } // fin de if

      // intentar cruzar con cada palabra ya colocada
      for (var p = 0; p < colocadas.length && !hecho; ++p) {
         var base = colocadas[p];
         var horizontal = !base.horizontal;   // se cruza en la dirección contraria

         for (var i = 0; i < palabra.length && !hecho; ++i) {
            for (var j = 0; j < base.palabra.length && !hecho; ++j) {
               if (palabra.charAt(i) === base.palabra.charAt(j)) {
                  var fila = base.horizontal ? base.fila - i : base.fila + j;
                  var col = base.horizontal ? base.col + j : base.col - i;

                  if (puedeColocar(palabra, fila, col, horizontal) > 0) {
                     colocar(palabra, fila, col, horizontal, pista);
                     hecho = true;
                  } // fin de if
               } // fin de if de letra común
            } // fin de for j
         } // fin de for i
      } // fin de for p

      if (!hecho)
         noColocadas.push(palabra);
   } // fin de for de entradas

   return noColocadas;
} // fin de la función generar

// asigna números a las palabras (de arriba a abajo, de izquierda a derecha)
function numerar() {
   var numeros = {};
   var n = 0;

   for (var f = 0; f < TAM; ++f)
      for (var c = 0; c < TAM; ++c)
         for (var k = 0; k < colocadas.length; ++k)
            if (colocadas[k].fila === f && colocadas[k].col === c) {
               if (numeros[f + "," + c] === undefined)
                  numeros[f + "," + c] = ++n;

               colocadas[k].numero = numeros[f + "," + c];
            } // fin de if

   return numeros;
} // fin de la función numerar

// rectángulo mínimo que contiene todas las palabras
function limites() {
   var l = { minF: TAM, maxF: 0, minC: TAM, maxC: 0 };

   for (var k = 0; k < colocadas.length; ++k) {
      var w = colocadas[k];
      var ultimaFila = w.horizontal ? w.fila : w.fila + w.palabra.length - 1;
      var ultimaCol = w.horizontal ? w.col + w.palabra.length - 1 : w.col;
      l.minF = Math.min(l.minF, w.fila);
      l.minC = Math.min(l.minC, w.col);
      l.maxF = Math.max(l.maxF, ultimaFila);
      l.maxC = Math.max(l.maxC, ultimaCol);
   } // fin de for

   return l;
} // fin de la función limites

function tablaHTML(resuelta) {
   var numeros = numerar();
   var l = limites();
   var html = "<table>";

   for (var f = l.minF; f <= l.maxF; ++f) {
      html += "<tr>";

      for (var c = l.minC; c <= l.maxC; ++c) {
         if (cuadricula[f][c] === "") {
            html += "<td class = 'negra'></td>";
            continue;
         } // fin de if

         var n = numeros[f + "," + c];
         html += "<td>" + (n ? "<span class = 'num'>" + n + "</span>" : "") +
            (resuelta ? cuadricula[f][c] : "") + "</td>";
      } // fin de for de columnas

      html += "</tr>";
   } // fin de for de filas

   return html + "</table>";
} // fin de la función tablaHTML

function pistasHTML() {
   var horizontales = "<h3>Horizontales</h3><ol>";
   var verticales = "<h3>Verticales</h3><ol>";
   var ordenadas = colocadas.slice();
   ordenadas.sort(function (a, b) { return a.numero - b.numero; });

   for (var i = 0; i < ordenadas.length; ++i) {
      var item = "<li value = '" + ordenadas[i].numero + "'>" +
         ordenadas[i].pista + " (" + ordenadas[i].palabra.length + " letras)</li>";

      if (ordenadas[i].horizontal)
         horizontales += item;
      else
         verticales += item;
   } // fin de for

   return horizontales + "</ol>" + verticales + "</ol>";
} // fin de la función pistasHTML

function crearCrucigrama() {
   var lineas = document.getElementById("palabras").value.split("\n");
   var entradas = [];

   for (var i = 0; i < lineas.length; ++i) {
      var partes = lineas[i].split(":");
      var palabra = partes[0].toUpperCase().replace(/\s+/g, "");

      if (palabra.length >= 2)
         entradas.push({ palabra: palabra, pista: partes.length > 1 ? partes[1] : "Sin pista" });
   } // fin de for

   if (entradas.length === 0) {
      alert("Escriba al menos una palabra");
      return;
   } // fin de if

   var noColocadas = generar(entradas);
   var html = "<h2>Crucigrama</h2>" + tablaHTML(false) + pistasHTML();

   if (noColocadas.length > 0)
      html += "<p>No se pudieron colocar: " + noColocadas.join(", ") + "</p>";

   html += "<div id = 'solucion' style = 'display: none'><h2>Solución</h2>" +
      tablaHTML(true) + "</div>";
   document.getElementById("resultado").innerHTML = html;
   document.getElementById("mostrarSolucion").checked = false;
} // fin de la función crearCrucigrama

function alternarSolucion() {
   var solucion = document.getElementById("solucion");

   if (solucion)
      solucion.style.display = document.getElementById("mostrarSolucion").checked ? "block" : "none";
} // fin de la función alternarSolucion

function iniciar() {
   document.getElementById("botonCrear").addEventListener("click", crearCrucigrama, false);
   document.getElementById("mostrarSolucion").addEventListener("click", alternarSolucion, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);