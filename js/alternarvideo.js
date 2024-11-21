const backgroundVideo = document.getElementById("background-video");
const firstContentImg = document.getElementById("button1");
const cameraButton = document.getElementById("cameraButton");
const soundButton = document.getElementById("soundButton");
const cameraUnlockedIcon = "imagenes/PepiconsPopCameraOff.png"; // Icono cuando el video está activo
const cameraLockedIcon = "imagenes/PepiconsPopCamera.png"; // Icono cuando la imagen está activa
const soundOnIcon = "imagenes/sound-on.png"; // Icono cuando el sonido está activado
const soundOffIcon = "imagenes/sound-off.png"; // Icono cuando el sonido está desactivado

// Control de interacción para habilitar sonido en móviles
let hasInteracted = false; // Variable para detectar la interacción

// Función que permite iniciar el video con sonido después de la interacción


// Función para alternar el sonido
function toggleSound() {
  if (backgroundVideo.muted) {
    backgroundVideo.muted = false;
    soundButton.querySelector("img").src = soundOnIcon; // Cambia el icono a sonido activado
  } else {
    backgroundVideo.muted = true;
    soundButton.querySelector("img").src = soundOffIcon; // Cambia el icono a sonido desactivado
  }
}

// Reproducir el video o mostrar la imagen cuando se hace clic en el botón de cámara
cameraButton.addEventListener("click", () => {
  
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

// Alternar el sonido al hacer clic en el botón de sonido
soundButton.addEventListener("click", toggleSound);
