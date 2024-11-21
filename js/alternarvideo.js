const backgroundVideo = document.getElementById("background-video");
const firstContentImg = document.getElementById("button1");
const cameraButton = document.getElementById("cameraButton");
const cameraUnlockedIcon = "imagenes/PepiconsPopCameraOff.png"; // Icono cuando el video está activo
const cameraLockedIcon = "imagenes/PepiconsPopCamera.png"; // Icono cuando la imagen está activa

// Control de interacción para habilitar sonido en móviles
let hasInteracted = false; // Variable para detectar la interacción

// Función que permite iniciar el video con sonido después de la interacción
function enableSoundAndPlay() {
  if (!hasInteracted) {
    backgroundVideo.play();
    backgroundVideo.muted = false; // Habilitar sonido
    hasInteracted = true;
  }
}

// Reproducir el video o mostrar la imagen cuando se hace clic en el botón
cameraButton.addEventListener("click", () => {
  enableSoundAndPlay(); // Asegúrate de que el video suene después de la interacción
  
  if (backgroundVideo.classList.contains("active")) {
    // Mostrar imagen de fondo, detener y reiniciar el video
    backgroundVideo.classList.remove("active");
    backgroundVideo.pause(); // Detiene el video
    backgroundVideo.currentTime = 0; // Lo reinicia al inicio
    firstContentImg.style.backgroundImage = 'url("imagenes/spider2index.png")';
    cameraButton.querySelector("img").src = cameraLockedIcon;
  } else {
    // Mostrar video y reproducirlo
    backgroundVideo.classList.add("active");
    backgroundVideo.play(); // Vuelve a reproducir el video
    firstContentImg.style.backgroundImage = "none";
    cameraButton.querySelector("img").src = cameraUnlockedIcon;
  }
});

// Reproducir el video automáticamente cuando se carga la página, pero sin sonido hasta la interacción del usuario
document.addEventListener("DOMContentLoaded", () => {
  backgroundVideo.play();
  backgroundVideo.muted = true; // Inicia en silencio
  
  // Detecta la interacción del usuario para activar el sonido
  document.body.addEventListener("click", enableSoundAndPlay, { once: true }); // Solo lo permite una vez
});
