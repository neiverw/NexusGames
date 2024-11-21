document.addEventListener('DOMContentLoaded', function () {
    // Manejo del carrusel
    const carouselImages = document.querySelector('.carousel-images');
    const totalImages = carouselImages.children.length;
    let currentIndex = 0;
    let autoSlideInterval;

    function showImage(index) {
        carouselImages.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
        resetAutoSlide();  // Reinicia el temporizador automático
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
        resetAutoSlide();  // Reinicia el temporizador automático
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextImage, 3500);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Añadimos los eventos onclick a los botones del carrusel
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    if (nextButton && prevButton) {
        nextButton.onclick = nextImage;
        prevButton.onclick = prevImage;
    }

    // Inicia el cambio automático
    startAutoSlide();

    // Manejo del menú
    const menuToggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.links');
    const bodyContent = document.querySelector('body'); // Usamos body para mover el contenido

    if (menuToggle && links) {
        menuToggle.addEventListener('click', function () {
            links.classList.toggle('show');
            bodyContent.classList.toggle('content-shift');  // Desplazamos el contenido a la derecha
        });
    }
});