// Función para mostrar la pantalla de preguntas
function iniciarJuego() {
  document.getElementById("pantalla-inicial").classList.add("oculto");
  document.getElementById("preguntas").classList.remove("oculto");
}

// Función para manejar la respuesta del usuario
function responder(esCorrecta) {
  if (esCorrecta) {
    // Mostrar pantalla de revelación con un pequeño retardo
    setTimeout(() => {
      document.getElementById("preguntas").classList.add("oculto");
      document.getElementById("revelacion").classList.remove("oculto");
    }, 800);
    lanzarConfetiYCorazones()
  } else {
    alert("Hmm... buena suposición, pero sigan intentando 😄");
  }
}

function mostrarFoto() {
  document.getElementById("foto-nosotros").style.display = "block";
}

function lanzarConfetiYCorazones() {
  // 🎉 Confeti
  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.6 }
  });

  // 💕 Corazones flotando
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.classList.add('corazon');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (4 + Math.random() * 2) + 's';
    heart.innerText = '💖';
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
}