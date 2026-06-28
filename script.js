let estado = {
    pregunta: 0,
    puntaje: 0,
    flash: 0
};

// 📘 ESTUDIAR
const estudio = `
<h2>📘 Integral indefinida</h2>
<p>La integral es la operación inversa de la derivada.</p>
<p>Incluye constante +C</p>
<p>Ejemplo: ∫x dx = x²/2 + C</p>
`;

// 📝 EXAMEN
const examen = [
    { q: "∫x dx = ?", a: "x^2/2 + C" },
    { q: "∫1/x dx = ?", a: "ln|x| + C" },
    { q: "∫cos(x) dx = ?", a: "sen(x) + C" }
];

// 📚 FÓRMULAS
const formulas = `
<h2>📚 Fórmulas</h2>
<p>∫xⁿ dx = xⁿ⁺¹/(n+1) + C</p>
<p>∫e^x dx = e^x + C</p>
<p>∫sen(x) dx = -cos(x) + C</p>
<p>∫cos(x) dx = sen(x) + C</p>
<p>∫1/x dx = ln|x| + C</p>
`;

// 🧠 FLASHCARDS
const flashcards = [
    { p: "¿Qué es una integral?", r: "Operación inversa de la derivada" },
    { p: "¿Qué significa +C?", r: "Constante de integración" },
    { p: "∫x dx", r: "x²/2 + C" }
];

function mostrarMenu() {
    document.getElementById("bienvenida").classList.add("oculto");
    document.getElementById("menu").classList.remove("oculto");
}

function abrirSeccion(modo) {

    document.querySelectorAll(".pantalla").forEach(p => p.classList.add("oculto"));
    document.getElementById(modo).classList.remove("oculto");

    if (modo === "estudiar") {
        document.getElementById("estudiar").innerHTML = estudio;
    }

    if (modo === "formulas") {
        document.getElementById("formulas").innerHTML = formulas;
    }

    if (modo === "examen") {
        estado.pregunta = 0;
        estado.puntaje = 0;
        mostrarExamen();
    }

    if (modo === "practica") {
        document.getElementById("practica").innerHTML =
            "<h2>🎯 Práctica</h2><p>Próximamente ejercicios interactivos</p>";
    }

    if (modo === "repaso") {
        mostrarFlashcard();
    }
}

// 📝 EXAMEN
function mostrarExamen() {
    let p = examen[estado.pregunta];

    document.getElementById("examen").innerHTML = `
        <h2>📝 Examen</h2>
        <p>${p.q}</p>
        <input id="resp" placeholder="respuesta">
        <button onclick="verificarExamen()">Responder</button>
        <p id="feedback"></p>
    `;
}

function verificarExamen() {
    let p = examen[estado.pregunta];
    let r = document.getElementById("resp").value;

    if (r.trim() === p.a) {
        estado.puntaje++;
        document.getElementById("feedback").innerText = "✔ Correcto";
    } else {
        document.getElementById("feedback").innerText = "✘ Incorrecto: " + p.a;
    }

    estado.pregunta++;

    setTimeout(() => {
        if (estado.pregunta < examen.length) {
            mostrarExamen();
        } else {
            document.getElementById("examen").innerHTML =
                `<h2>Resultado</h2><p>Puntaje: ${estado.puntaje}/${examen.length}</p>`;
        }
    }, 1000);
}

// 🧠 FLASHCARDS
function mostrarFlashcard() {
    let f = flashcards[estado.flash];

    document.getElementById("repaso").innerHTML = `
        <h2>🧠 Repaso</h2>
        <p><b>${f.p}</b></p>
        <button onclick="verRespuesta()">Ver respuesta</button>
        <p id="res"></p>
    `;
}

function verRespuesta() {
    let f = flashcards[estado.flash];
    document.getElementById("res").innerText = f.r;

    setTimeout(() => {
        estado.flash++;
        if (estado.flash < flashcards.length) {
            mostrarFlashcard();
        } else {
            document.getElementById("repaso").innerHTML =
                "<h2>Fin del repaso</h2>";
        }
    }, 1500);
}
