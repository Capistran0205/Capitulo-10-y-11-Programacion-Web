document.writeln( "<h1>Ejercicio 11.2: Botones y Fechas</h1>" );
document.writeln( "<hr>" );
document.writeln( "<p>Cree una página Web que contenga cuatro botones. Al hacer clic en cada botón, deberá aparecer un diálogo de alerta con una hora o fecha diferentes en relación con la hora actual.</p>" );
document.writeln( "<ol type = 'a'>" );
document.writeln( "<li>Un botón Ahora, que alerte sobre la hora y fecha actuales.</li>" );
document.writeln( "<li>Un botón Ayer, que alerte sobre la fecha y hora de hace 24 horas.</li>" );
document.writeln( "<li>Otros dos botones, que alerten sobre la fecha y hora de hace diez años y de una semana a partir de hoy.</li>" );
document.writeln( "</ol>" );
document.writeln( "<hr>" );
document.writeln( "<h2>Solución:</h2>" );
function mostrar(titulo, fecha) {
    alert(titulo + ": " + fecha.toLocaleString());
} // fin de la función mostrar

function ahora() {
    mostrar("Ahora", new Date());
} // fin de la función ahora

function ayer() {
    // 24 horas = 24 * 60 * 60 * 1000 milisegundos
    var milisegundos = new Date().getTime() - 24 * 60 * 60 * 1000;
    mostrar("Hace 24 horas", new Date(milisegundos));
} // fin de la función ayer

function haceDiezAnios() {
    var fecha = new Date();
    fecha.setFullYear(fecha.getFullYear() - 10);
    mostrar("Hace diez años", fecha);
} // fin de la función haceDiezAnios

function enUnaSemana() {
    var fecha = new Date();
    fecha.setDate(fecha.getDate() + 7);   // setDate ajusta el mes si es necesario
    mostrar("Dentro de una semana", fecha);
} // fin de la función enUnaSemana

function iniciar() {
    document.getElementById("botonAhora").addEventListener("click", ahora, false);
    document.getElementById("botonAyer").addEventListener("click", ayer, false);
    document.getElementById("botonDiezAnios").addEventListener("click", haceDiezAnios, false);
    document.getElementById("botonSemana").addEventListener("click", enUnaSemana, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);