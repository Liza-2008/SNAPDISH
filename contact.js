document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.submit-btn');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectSelect = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');

    // Form submission handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Disable submit button to prevent multiple submissions
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Form validation
            if (!validateForm()) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                return;
            }
            
            // Prepare form data (in a real app, you would send this to a server)
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                subject: subjectSelect.value,
                message: messageTextarea.value.trim(),
                timestamp: new Date().toISOString()
            };
            
            // Simulate form submission (replace with actual AJAX call)
            simulateFormSubmission(formData)
                .then(response => {
                    showSuccessMessage(formData.name);
                    contactForm.reset();
                })
                .catch(error => {
                    showErrorMessage();
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                });
        });
    }

    // Form validation function
    function validateForm() {
        let isValid = true;
        
        // Validate name
        if (nameInput.value.trim() === '') {
            showInputError(nameInput, 'Please enter your name');
            isValid = false;
        } else {
            clearInputError(nameInput);
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showInputError(emailInput, 'Please enter a valid email');
            isValid = false;
        } else {
            clearInputError(emailInput);
        }
        
        // Validate message
        if (messageTextarea.value.trim() === '') {
            showInputError(messageTextarea, 'Please enter your message');
            isValid = false;
        } else {
            clearInputError(messageTextarea);
        }
        
        return isValid;
    }

    // Helper function to show input error
    function showInputError(inputElement, message) {
        const formGroup = inputElement.closest('.form-group');
        let errorElement = formGroup.querySelector('.error-message');
        
        if (!errorElement) {
            errorElement = document.createElement('p');
            errorElement.className = 'error-message';
            errorElement.style.color = '#d32f2f';
            errorElement.style.marginTop = '5px';
            errorElement.style.fontSize = '0.9em';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        inputElement.style.borderColor = '#d32f2f';
    }

    // Helper function to clear input error
    function clearInputError(inputElement) {
        const formGroup = inputElement.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            errorElement.remove();
        }
        
        inputElement.style.borderColor = '#ddd';
    }

    // Simulate form submission (replace with actual fetch/AJAX call)
    function simulateFormSubmission(formData) {
        return new Promise((resolve, reject) => {
            // Simulate network delay
            setTimeout(() => {
                console.log('Form data to be submitted:', formData);
                // In a real app, you would use:
                // fetch('/api/contact', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(formData)
                // })
                // .then(response => response.json())
                // .then(data => resolve(data))
                // .catch(error => reject(error));
                
                // For demo purposes, we'll randomly succeed or fail
                Math.random() > 0.2 ? resolve({ success: true }) : reject(new Error('Network error'));
            }, 1500);
        });
    }

    // Show success message
    function showSuccessMessage(name) {
        // You could use a more sophisticated modal/notification system
        alert("Thank you, ${name}! Your message has been sent successfully. We'll get back to you soon.");
        
        // Alternative: Create a success message element
        /*
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <p>Thank you, ${name}! Your message has been sent.</p>
            <p>We'll get back to you soon.</p>
        `;
        successMessage.style.backgroundColor = '#4CAF50';
        successMessage.style.color = 'white';
        successMessage.style.padding = '15px';
        successMessage.style.borderRadius = '5px';
        successMessage.style.marginTop = '20px';
        successMessage.style.textAlign = 'center';
        contactForm.appendChild(successMessage);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
        */
    }

    // Show error message
    function showErrorMessage() {
        alert('There was an error sending your message. Please try again later.');
        
        // Alternative: Create an error message element
        /*
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'There was an error sending your message. Please try again later.';
        errorMessage.style.backgroundColor = '#f44336';
        errorMessage.style.color = 'white';
        errorMessage.style.padding = '15px';
        errorMessage.style.borderRadius = '5px';
        errorMessage.style.marginTop = '20px';
        errorMessage.style.textAlign = 'center';
        contactForm.appendChild(errorMessage);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            errorMessage.remove();
        }, 5000);
        */
    }

    // Add input event listeners for real-time validation
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() !== '') {
            clearInputError(nameInput);
        }
    });
    
    emailInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailInput.value.trim())) {
            clearInputError(emailInput);
        }
    });
    
    messageTextarea.addEventListener('input', () => {
        if (messageTextarea.value.trim() !== '') {
            clearInputError(messageTextarea);
        }
    });
});