document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;
    const images = carouselContainer.querySelectorAll('img');
    const totalImages = images.length;

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 100 / totalImages;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    const plusButtons = document.querySelectorAll('.plus');
    const minusButtons = document.querySelectorAll('.minus');
    const counts = document.querySelectorAll('.count');

    plusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            counts[index].innerText = parseInt(counts[index].innerText) + 1;
        });
    });

    minusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (parseInt(counts[index].innerText) > 0) {
                counts[index].innerText = parseInt(counts[index].innerText) - 1;
            }
        });
    });
});

function initMap() {
    const mapOptions = {
        zoom: 15,
        center: { lat: -34.397, lng: 150.644 }
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
