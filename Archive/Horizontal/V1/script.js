const container = document.querySelector('.inner-container');

function scrollLeft() {
    container.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth'
    });
}

function scrollRight() {
    container.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth'
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        scrollLeft();
    } else if (event.key === 'ArrowRight') {
        scrollRight();
    }
});
