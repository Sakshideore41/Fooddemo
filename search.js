document.getElementById('searchForm').addEventListener('submit', function(event) {
    var searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() === '') {
        alert('Please enter a search term.');
        event.preventDefault();
    }
});

document.getElementById('searchInput').addEventListener('input', function() {
    var query = this.value;
    var suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = ''; // Clear previous suggestions

    if (query.length > 0) {
        // Example suggestions, replace with actual AJAX request or data source
        var exampleSuggestions = ['Pizza', 'Burger', 'Pasta', 'Sushi', 'Salad'];
        var filteredSuggestions = exampleSuggestions.filter(function(item) {
            return item.toLowerCase().includes(query.toLowerCase());
        });

        filteredSuggestions.forEach(function(item) {
            var suggestionItem = document.createElement('li');
            suggestionItem.textContent = item;
            suggestionItem.addEventListener('click', function() {
                document.getElementById('searchInput').value = item;
     
