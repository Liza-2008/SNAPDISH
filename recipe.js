
document.addEventListener('DOMContentLoaded', function() {
    // Back button functionality with enhanced features
    const backButton = document.getElementById('back-button');
    
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add visual feedback
            this.classList.add('clicked');
            
            // Check if there's history to go back to
            if (window.history.length > 1) {
                window.history.back();
            } else {
                // Fallback to home page if no history
                window.location.href = '/'; // Change to your home page URL
            }
            
            // Remove the visual feedback after animation
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
        
        // Add hover effects via JavaScript (could also be done in CSS)
        backButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        backButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }

    // Print button functionality (since we added it in HTML)
    const printButton = document.getElementById('print-button');
    
    if (printButton) {
        printButton.addEventListener('click', function() {
            // Add visual feedback
            this.classList.add('clicked');
            
            // Print the recipe article content
            const recipeContent = document.querySelector('.recipe-article').innerHTML;
            const originalContent = document.body.innerHTML;
            
            document.body.innerHTML = `
                <div class="print-container">
                    ${recipeContent}
                    <style>
                        body { background: white; color: black; }
                        .print-container { padding: 20px; }
                        .action-buttons, .main-footer { display: none; }
                        img { max-width: 100%; height: auto; }
                    </style>
                </div>
            `;
            
            window.print();

            
            document.body.innerHTML = originalContent;
            

            // Remove the visual feedback
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    }
});