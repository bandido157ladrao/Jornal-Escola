let currentIndex = 0;

function changeSlide(direction) {
    const noticias = document.querySelectorAll('.noticia');
    const totalNoticias = noticias.length;

    // Atualiza o índice atual
    currentIndex = (currentIndex + direction + totalNoticias) % totalNoticias;

    // Esconde todas as notícias
    noticias.forEach((noticia, index) => {
        noticia.style.display = 'none';
    });

    // Exibe a notícia atual
    noticias[currentIndex].style.display = 'block';
}

// Exibe a primeira notícia inicialmente
document.addEventListener('DOMContentLoaded', () => {
    changeSlide(0); // Exibe a primeira notícia
});


const cards = Array.from(document.querySelectorAll(".card"));
const cardsContainer = document.querySelector("#cards");

cardsContainer.addEventListener("mousemove", (e) => {
    for (const card of cards) {
        const rect = card.getBoundingClientRect(); // Obtém as coordenadas do card
        const x = e.clientX - rect.left; // Calcula a posição X do mouse dentro do card
        const y = e.clientY - rect.top;  // Calcula a posição Y do mouse dentro do card

        // Aplica as variáveis CSS para as coordenadas X e Y
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
});
