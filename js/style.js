function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

// Función para cerrar el menú
function closeNav() {
    document.getElementById("mobile-menu").style.width = "0";
}

// Cerrar el menú automáticamente al hacer clic en un enlace
const menuLinks = document.querySelectorAll('#mobile-menu .overlay-content a');
menuLinks.forEach(link => {
    link.addEventListener('click', closeNav);
});
// Reproducción del video al pasar el cursor sobre la imagen
document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('.product-video');
    const image = container.querySelector('img');
    
    image.addEventListener('mouseenter', () => {
        video.style.display = 'block';
        video.play();
    });

    container.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reinicia el video
        video.style.display = 'none';
    });
});

// Mostrar notificación al hacer clic en "Comprar"
document.querySelectorAll('.btn-2').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto del enlace
        showNotification('Juego comprado con éxito'); // Mostrar notificación
    });
});

// Función para mostrar la notificación estilizada
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.classList.add('notification');
    document.body.appendChild(notification);
    
    // Remover la notificación después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
