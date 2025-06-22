document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carouselContainer = document.querySelector('.carousel-container');

    let scrollAmount = 0;

    nextButton.addEventListener('click', () => {
        carouselContainer.scrollBy({
            top: 0,
            left: 300,
            behavior: 'smooth'
        });
        scrollAmount += 300;
    });

    prevButton.addEventListener('click', () => {
        carouselContainer.scrollBy({
            top: 0,
            left: -300,
            behavior: 'smooth'
        });
        scrollAmount -= 300;
    });
});