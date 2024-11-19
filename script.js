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

const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = document.getElementById("theme-icon");

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.textContent = "🌙";
} else {
    body.classList.add('light');
    themeIcon.textContent = "🌞";
}

themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light");
    
    if (body.classList.contains("dark-mode")) {
        themeIcon.textContent = "🌙";
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = "🌞";
        localStorage.setItem('theme', 'light');
    }
});
