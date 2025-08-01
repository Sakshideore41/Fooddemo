function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

    const marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMap();
});
