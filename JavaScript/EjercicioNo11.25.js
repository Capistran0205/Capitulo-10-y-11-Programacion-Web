document.writeln("<h1>Ejercicio 11.25: Monto del cheque en palabras</h1>");
document.writeln("<hr>");
document.writeln("<p>Escriba una secuencia de comandos que reciba como entrada un monto numérico para el cheque y escriba el equivalente del monto en letras.</p>");
document.writeln("<hr>");
document.writeln("<h2>Solución:</h2>");
// Arreglos para guardar unidades, decenas, centenas
var UNIDADES = ["", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO",
   "NUEVE", "DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISÉIS",
   "DIECISIETE", "DIECIOCHO", "DIECINUEVE", "VEINTE", "VEINTIUNO", "VEINTIDÓS",
   "VEINTITRÉS", "VEINTICUATRO", "VEINTICINCO", "VEINTISÉIS", "VEINTISIETE",
   "VEINTIOCHO", "VEINTINUEVE"];
var DECENAS = ["", "", "", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA",
   "OCHENTA", "NOVENTA"];
var CENTENAS = ["", "CIENTO", "DOSCIENTOS", "TRESCIENTOS", "CUATROCIENTOS",
   "QUINIENTOS", "SEISCIENTOS", "SETECIENTOS", "OCHOCIENTOS", "NOVECIENTOS"];

// palabras de un número entre 1 y 999
function menosDeMil(n) {
   if (n === 100)
      return "CIEN";

   var texto = CENTENAS[Math.floor(n / 100)];
   var resto = n % 100;

   if (resto > 0) {
      if (texto !== "")
         texto += " ";

      if (resto < 30)
         texto += UNIDADES[resto];
      else {
         texto += DECENAS[Math.floor(resto / 10)];

         if (resto % 10 > 0)
            texto += " Y " + UNIDADES[resto % 10];
      } // fin de else
   } // fin de if

   return texto;
} // fin de la función menosDeMil

// "UNO" → "UN" y "VEINTIUNO" → "VEINTIÚN" cuando va antes de MIL o MILLONES
function apocopar(texto) {
   if (/VEINTIUNO$/.test(texto))
      return texto.replace(/VEINTIUNO$/, "VEINTIÚN");

   return texto.replace(/UNO$/, "UN");
} // fin de la función apocopar

function enteroEnLetras(n) {
   if (n === 0)
      return "CERO";

   var millones = Math.floor(n / 1000000);
   var miles = Math.floor(n % 1000000 / 1000);
   var resto = n % 1000;
   var texto = "";

   if (millones > 0)
      texto += (millones === 1 ? "UN MILLÓN" : apocopar(menosDeMil(millones)) + " MILLONES") + " ";

   if (miles > 0)
      texto += (miles === 1 ? "MIL" : apocopar(menosDeMil(miles)) + " MIL") + " ";

   if (resto > 0)
      texto += menosDeMil(resto);

   return texto.replace(/\s+$/, "");
} // fin de la función enteroEnLetras

function montoEnLetras(monto) {
   var centavos = Math.round(monto * 100);
   var entero = Math.floor(centavos / 100);
   var cent = centavos % 100;

   return enteroEnLetras(entero) + " CON " + (cent < 10 ? "0" : "") + cent + "/100";
} // fin de la función montoEnLetras

function convertir() {
   var monto = parseFloat(document.getElementById("monto").value);
   var resultado = document.getElementById("resultado");

   if (isNaN(monto) || monto < 0 || monto >= 1000000000)
      resultado.textContent = "Escriba un monto entre 0 y 999999999.99";
   else
      resultado.textContent = montoEnLetras(monto);
} // fin de la función convertir

function iniciar() {
   document.getElementById("botonConvertir").addEventListener("click", convertir, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);