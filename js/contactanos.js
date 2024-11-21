/*contactanos*/
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Mostrar mensaje de agradecimiento
    document.getElementById('gracias').classList.remove('hidden');
    
    // Resetear el formulario
    this.reset();
  });