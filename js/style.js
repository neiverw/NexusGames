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

  document.addEventListener("DOMContentLoaded", () => {
    const games = document.querySelectorAll(".product-1"); // Seleccionar los juegos
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalPrice = document.getElementById("modal-price");
    const modalInfo = document.getElementById("modal-info");
    const closeBtn = document.querySelector(".close-btn");

    // Información adicional de los juegos
    const gameInfo = {
        "League of Legends": "Un popular juego MOBA de estrategia y acción.",
        "Fortnite": "Un battle royale con construcción y acción intensa.",
        "Valorant": "Un juego táctico de disparos en primera persona.",
        "Minecraft": "Un sandbox de construcción y exploración infinito.",
        "World of Warcraft": "Un MMORPG legendario con historias épicas.",
        "Solo Leveling:Arise": "Juego basado en el manhwa popular Solo Leveling.",
        "Sword Art Online Alicization Lycoris": "Un RPG basado en el anime SAO.",
        "MY HERO ULTRA RUMBLE": "Un battle royale basado en My Hero Academia.",
        "Destiny 2": "Un shooter MMO con campañas y cooperativo."
    };

    // Abrir modal al hacer clic en un juego
    games.forEach(game => {
        game.addEventListener("click", () => {
            const img = game.querySelector("img").src;
            const title = game.querySelector("h3").textContent.trim();
            const price = game.querySelector(".price p").textContent.trim();

            modalImg.src = img;
            modalTitle.textContent = title;
            modalPrice.textContent = price;
            modalInfo.textContent = gameInfo[title] || "Información no disponible.";

            modal.style.display = "flex";
        });
    });

    // Cerrar modal al hacer clic en el botón de cerrar
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
