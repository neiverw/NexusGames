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


/*contactanos*/
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Mostrar mensaje de agradecimiento
    document.getElementById('gracias').classList.remove('hidden');
    
    // Resetear el formulario
    this.reset();
  });