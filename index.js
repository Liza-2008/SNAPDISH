document.addEventListener('DOMContentLoaded', function() {
    console.log('index.js loaded for the Index Page.');

    // --- Handle the click on the "Let's Get Started" button ---
    const getStartedButton = document.getElementById('getStartedButton');

    if (getStartedButton) {
        getStartedButton.addEventListener('click', function() {
            console.log('"Let\'s Get Started" button clicked, navigating to homepage.html');

            // Optional: Add a class for click feedback animation before redirect
            this.classList.add('clicked'); // Add a class

            // Navigate the user to your Homepage file after a short delay
            // Added a small delay to potentially see click animation, remove if not needed
            setTimeout(() => {
                 window.location.href = 'homepage.html'; // Navigate to the Homepage file
            }, 100); // 100ms delay

        });
    } else {
        console.error('Get Started button (#getStartedButton) not found on the Index page.');
    }

    // Add any other JavaScript specific to your Index page here if needed.
});