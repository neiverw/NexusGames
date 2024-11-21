const backgroundVideo = document.getElementById("background-video");
const firstContentImg = document.getElementById("button1");
const cameraButton = document.getElementById("cameraButton");
const cameraUnlockedIcon = "imagenes/PepiconsPopCameraOff.png"; // Icono cuando el video está activo
const cameraLockedIcon = "imagenes/PepiconsPopCamera.png"; // Icono cuando la imagen está activa

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
