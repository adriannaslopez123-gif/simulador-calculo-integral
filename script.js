let estado = {
    modo: null,
    puntaje: 0,
    preguntaActual: 0
};

function mostrarMenu() {
    document.getElementById("bienvenida").classList.add("oculto");
    document.getElementById("menu").classList.remove("oculto");
}

function abrirSeccion(modo) {

    estado.modo = modo;

    const pantallas = document.querySelectorAll(".pantalla");
    pantallas.forEach(p => p.classList.add("oculto"));

    document.getElementById(modo).classList.remove("oculto");

    iniciarModo(modo);
}

function iniciarModo(modo) {

    if (modo === "estudiar") {
        document.getElementById("estudiar").innerHTML =
            "<h2>📘 Integral indefinida</h2><p>Una integral es la operación inversa de la derivada...</p>";
    }

    if (modo === "examen") {
        document.getElementById("examen").innerHTML =
            "<h2>📝 Examen</h2><p>Pregunta: ∫ x dx = ?</p>";
    }

}
