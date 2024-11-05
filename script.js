let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
setInterval(() => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}, 3000);
