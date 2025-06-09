document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded'); // Debugging line
    
    // 1. Search Functionality
    const searchButton = document.getElementById("search-button");
    const searchBar = document.getElementById("search-bar");
    
    if (searchButton && searchBar) {
        searchButton.addEventListener("click", performSearch);
        searchBar.addEventListener("keypress", function(e) {
            if (e.key === 'Enter') performSearch();
        });
    } else {
        console.error('Search elements not found');
    }

    // 2. Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                filterRecipes(this.dataset.filter);
            });
        });
    } else {
        console.warn('No filter buttons found');
    }

    // 3. Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', toggleBackToTop);
        backToTopButton.addEventListener('click', scrollToTop);
    }

    // 4. View More Button
    const viewMoreBtn = document.getElementById('view-more-btn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', loadMoreRecipes);
    }

    // 5. Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // 6. Back Button
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', goBack);
    }

    // 7. Recipe Card Hover Effects
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-10px)');
        card.addEventListener('mouseleave', () => card.style.transform = '');
    });
});

// Helper Functions
function performSearch() {
    const searchQuery = document.getElementById("search-bar").value.trim();
    console.log('Search initiated for:', searchQuery); // Debugging
    if (searchQuery) {
        // Replace with actual search implementation
        alert("Searching for: " + searchQuery);
    } else {
        alert("Please enter a search term");
    }
}

function filterRecipes(filterValue) {
    console.log('Filtering by:', filterValue); // Debugging
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    recipeCards.forEach(card => {
        if (filterValue === 'all') {
            card.style.display = 'block';
        } else {
            const categories = card.dataset.category.split(' ');
            card.style.display = categories.includes(filterValue) ? 'block' : 'none';
        }
    });
}

function toggleBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function loadMoreRecipes() {
    console.log('Loading more recipes...'); // Debugging
    // Replace with actual implementation
    alert('Loading more recipes...');
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
        console.log('Subscribing email:', emailInput.value); // Debugging
        alert('Thank you for subscribing with: ' + emailInput.value);
        emailInput.value = '';
    }
}

function goBack() {
    window.history.back();
}