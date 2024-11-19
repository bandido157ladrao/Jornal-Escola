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
// Alterna o tema e atualiza o ícone com base no tema atual
const toggleTheme = () => {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");
    const mode = isDarkMode ? "dark" : "light";

    // Salva a preferência de tema no localStorage
    localStorage.setItem("theme", mode);

    // Atualiza o ícone do botão
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.textContent = isDarkMode ? "🌙" : "🌞";
};

// Define o tema inicial com base na preferência salva ou no padrão "light"
const initTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "light";

    // Adiciona a classe correta ao corpo da página
    document.body.classList.add(savedTheme === "dark" ? "dark-mode" : "light");

    // Atualiza o ícone do botão ao carregar a página
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.textContent = savedTheme === "dark" ? "🌙" : "🌞";
};

// Adiciona efeitos de hover nos itens da lista
const setupHoverEffects = () => {
    document.querySelectorAll("li").forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.classList.add("hovered");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("hovered");
        });
    });
};

// Inicializa o script ao carregar o DOM
document.addEventListener("DOMContentLoaded", () => {
    initTheme(); // Define o tema inicial
    setupHoverEffects(); // Configura os efeitos de hover

    // Configura o evento de alternância de tema
    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
});




