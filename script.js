let estado = {
    preguntaActual: 0,
    puntaje: 0
};

// 📘 banco de preguntas (puedes ampliarlo luego)
const preguntas = [
    {
        enunciado: "¿Cuál es la integral de x?",
        respuesta: "x^2/2 + C"
    },
    {
        enunciado: "¿Cuál es la integral de 1/x?",
        respuesta: "ln|x| + C"
    },
    {
        enunciado: "¿Cuál es la integral de cos(x)?",
        respuesta: "sen(x) + C"
    }
];

function mostrarMenu() {
    document.getElementById("bienvenida").classList.add("oculto");
    document.getElementById("menu").classList.remove("oculto");
}

function abrirSeccion(modo) {

    const pantallas = document.querySelectorAll(".pantalla");
    pantallas.forEach(p => p.classList.add("oculto"));

    document.getElementById(modo).classList.remove("oculto");

    if (modo === "estudiar") {
        mostrarPregunta();
    }
}

function mostrarPregunta() {

    const p = preguntas[estado.preguntaActual];

    document.getElementById("estudiar").innerHTML = `
        <h2>📘 Practica</h2>
        <p><b>${p.enunciado}</b></p>

        <input type="text" id="respuesta" placeholder="Escribe tu respuesta">
        <br><br>

        <button onclick="verificar()">Responder</button>

        <p id="feedback"></p>
    `;
}

function verificar() {

    const p = preguntas[estado.preguntaActual];
    const respuestaUsuario = document.getElementById("respuesta").value.trim();
    const feedback = document.getElementById("feedback");

    if (respuestaUsuario === p.respuesta) {
        feedback.innerHTML = "✔ Correcto";
        estado.puntaje++;
    } else {
        feedback.innerHTML = "✘ Incorrecto. Respuesta: " + p.respuesta;
    }

    estado.preguntaActual++;

    setTimeout(() => {

        if (estado.preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            document.getElementById("estudiar").innerHTML =
                `<h2>Fin</h2><p>Puntaje: ${estado.puntaje}/${preguntas.length}</p>`;
        }

    }, 1000);
}
