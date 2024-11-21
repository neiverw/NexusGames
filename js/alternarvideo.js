const backgroundVideo = document.getElementById("background-video");
const firstContentImg = document.getElementById("button1");
const cameraButton = document.getElementById("cameraButton");
const cameraUnlockedIcon = "imagenes/PepiconsPopCameraOff.png"; // Icono cuando el video está activo
const cameraLockedIcon = "imagenes/PepiconsPopCamera.png"; // Icono cuando la imagen está activa

cameraButton.addEventListener("click", () => {
  if (backgroundVideo.classList.contains("active")) {
    // Mostrar imagen de fondo
    backgroundVideo.classList.remove("active");
    firstContentImg.style.backgroundImage =
      'url("imagenes/spider2index.png")';
    cameraButton.querySelector("img").src = cameraLockedIcon;
  } else {
    // Mostrar video
    backgroundVideo.classList.add("active");
    firstContentImg.style.backgroundImage = "none";
    cameraButton.querySelector("img").src = cameraUnlockedIcon;
  }
});
