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
