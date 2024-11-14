let currentIndex = 0;

function changeSlide(direction) {
    const noticias = document.querySelectorAll('.noticia');
    const totalNoticias = noticias.length;

    currentIndex = (currentIndex + direction + totalNoticias) % totalNoticias;

    noticias.forEach((noticia) => {
        noticia.style.display = 'none';
    });

    noticias[currentIndex].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    changeSlide(0);
});

const cards = Array.from(document.querySelectorAll(".card"));
const cardsContainer = document.querySelector("#cards");

cardsContainer.addEventListener("mousemove", (e) => {
    for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
});
