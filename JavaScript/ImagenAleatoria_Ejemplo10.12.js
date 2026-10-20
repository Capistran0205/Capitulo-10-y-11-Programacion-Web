// Fig. 10.12: ImagenAleatoria.js
// Selección de imágenes al azar usando arreglos
var imgIcono;
var directorio = "/Resources/";
var imagenes = ["CPE", "EPT", "GPP", "GUI", "PERF", "PORT", "SEO"];
var descripciones = ["Error común de programación",
   "Tip para prevenir errores",
   "Buena práctica de programación",
   "Observación de apariencia visual",
   "Tip de rendimiento", "Tip de portabilidad",
   "Observación de ingeniería de software"];

// elegir una imagen al azar y su descripción correspondiente, después modificar
// los atributos src y alt del elemento img
function elegirImagen() {
   var indice = Math.floor(Math.random() * 7);
   imgIcono.setAttribute("src", directorio + imagenes[indice] + ".png");
   imgIcono.setAttribute("alt", descripciones[indice]);
} // fin de la función elegirImagen

// registrar el manejador de eventos de clic
function iniciar() {
   imgIcono = document.getElementById("imagen");
   imgIcono.addEventListener("click", elegirImagen, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);