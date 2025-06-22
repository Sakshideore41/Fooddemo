document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.quantity-control .minus').forEach(button => {
        button.addEventListener('click', function() {
            const quantityElement = this.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            }
        });
    });

    document.querySelectorAll('.quantity-control .plus').forEach(button => {
        button.addEventListener('click', function() {
            const quantityElement = this.previousElementSibling;
            let quantity = parseInt(quantity
