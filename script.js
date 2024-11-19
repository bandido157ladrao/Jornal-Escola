let currentIndex = 0;

function changeSlide(direction) {
    const noticias = document.querySelectorAll('.noticia');
    const totalNoticias = noticias.length;

    // Atualiza o índice da notícia com base na direção
    currentIndex = (currentIndex + direction + totalNoticias) % totalNoticias;

    // Esconde todas as notícias
    noticias.forEach((noticia) => {
        noticia.style.display = 'none';
    });

    // Exibe a notícia atual
    noticias[currentIndex].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    changeSlide(0); // Exibe a primeira notícia quando o conteúdo estiver carregado
});



// Alternância de tema
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = document.getElementById("theme-icon");

// Verifica se há um tema preferido no localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.textContent = "🌙";  // Define o ícone como lua se o tema for escuro
} else {
    body.classList.add('light');
    themeIcon.textContent = "🌞";  // Define o ícone como sol para o tema claro
}

// Alterna entre os temas claro e escuro
themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light");
    
    // Muda o ícone dependendo do tema ativo
    if (body.classList.contains("dark-mode")) {
        themeIcon.textContent = "🌙";  // Lua para o tema escuro
        localStorage.setItem('theme', 'dark');  // Salva a preferência do tema
    } else {
        themeIcon.textContent = "🌞";  // Sol para o tema claro
        localStorage.setItem('theme', 'light');  // Salva a preferência do tema
    }
});
