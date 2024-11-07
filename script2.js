let currentIndex = 0;

function showImage(index) {
    const carousel = document.getElementById('carousel');
    const images = carousel.getElementsByTagName('img');
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 300;
    carousel.style.transform = `translateX(${offset}px)`;
}

function next() {
    showImage(currentIndex + 1);
}

function previous() {
    showImage(currentIndex - 1);
}

showImage(0);
