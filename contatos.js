// Alterna o tema e atualiza o ícone com base no tema atual
const toggleTheme = () => {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");
    const mode = isDarkMode ? "dark" : "light";

    localStorage.setItem("theme", mode);

    // Atualiza o ícone do botão
    document.getElementById("theme-icon").textContent = isDarkMode ? "🌙" : "🌞";
};

// Define o tema inicial com base na preferência salva ou no padrão "light"
const initTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme === "dark" ? "dark-mode" : "light");

    // Define o ícone correto para o botão ao carregar a página
    document.getElementById("theme-icon").textContent = savedTheme === "dark" ? "🌙" : "🌞";
};

// Configura o evento de clique e inicializa o tema ao carregar o DOM
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
});
