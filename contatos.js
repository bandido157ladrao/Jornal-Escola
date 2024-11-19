const toggleTheme = () => {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");
    const mode = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", mode);
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.textContent = isDarkMode ? "🌙" : "🌞";
};

const initTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme === "dark" ? "dark-mode" : "light");
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.textContent = savedTheme === "dark" ? "🌙" : "🌞";
};

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

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    setupHoverEffects();
    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
});
