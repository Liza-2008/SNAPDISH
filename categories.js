// categories.js

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

   
    function filterByCuisine(cuisine) {
        // Save the filter to localStorage
        localStorage.setItem('categoryFilter', JSON.stringify({
            type: 'cuisine',
            value: cuisine
        }));

        // Redirect to finder page with hash
        window.location.href = 'finder.html#filtered'; // Make sure this path is correct for your setup
    }

    function filterByType(dietType) {
        localStorage.setItem('categoryFilter', JSON.stringify({
            type: 'diet', // Or maybe 'type' depending on how you structure your recipe data
            value: dietType
        }));
        window.location.href = 'finder.html#filtered'; // Make sure this path is correct for your setup
    }

    function filterByMeal(mealType) {
        localStorage.setItem('categoryFilter', JSON.stringify({
            type: 'meal', // Or maybe 'type' depending on how you structure your recipe data
            value: mealType
        }));
        window.location.href = 'finder.html#filtered'; // Make sure this path is correct for your setup
    }

    // Make functions globally available for HTML onclick attributes
    window.filterByCuisine = filterByCuisine;
    window.filterByType = filterByType;
    window.filterByMeal = filterByMeal;

    // Add click animations to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // Add keyboard navigation for accessibility
    categoryCards.forEach(card => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });

        // Make cards focusable
        card.setAttribute('tabindex', '0');
    });
});

// Keep any other functions or code you had outside the DOMContentLoaded block here
// (Based on your provided code, there doesn't seem to be any other code outside this block)