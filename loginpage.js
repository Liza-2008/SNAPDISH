// DOM Elements
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

// Animation Timing
const TRANSITION_DURATION = 500; // ms

// Form Switching with Animation Control
function togglePanel(showSignUp) {
    // Disable buttons during transition to prevent rapid clicks
    signUpButton.disabled = true;
    signInButton.disabled = true;
    
    container.classList.toggle("right-panel-active", showSignUp);
    // Re-enable buttons after transition completes
    setTimeout(() => {
        signUpButton.disabled = false;
        signInButton.disabled = false;
    }, TRANSITION_DURATION);
}

// Event Listeners with Debouncing
let lastClickTime = 0;
const DEBOUNCE_TIME = 300; // ms

signUpButton.addEventListener('click', () => {
    const now = Date.now();
    if (now - lastClickTime > DEBOUNCE_TIME) {
        togglePanel(true);
        lastClickTime = now;
    }
});

signInButton.addEventListener('click', () => {
    const now = Date.now();
    if (now - lastClickTime > DEBOUNCE_TIME) {
        togglePanel(false);
        lastClickTime = now;
    }
});

// Form Submission with Validation
async function handleFormSubmit(form, formType) {
    try {
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitButton.disabled = true;

        // Simulate API call (replace with actual fetch)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Validate form (add your specific validation logic)
        if (!validateForm(form, formType)) {
            throw new Error('Form validation failed');
        }

        // Successful submission
        showToast(`Successfully ${formType === 'signup' ? 'signed up' : 'signed in'}!`, 'success');
        
        // Redirect after brief delay
        setTimeout(() => {
            window.location.href = "homepage.html";
        }, 1000);
        
    } catch (error) {
        // Error handling
        console.error(`${formType} error:`, error);
        showToast(error.message || `Error during ${formType}`, 'error');
        
        // Restore button state
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
}

// Basic Form Validation
function validateForm(form, formType) {
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('invalid');
            isValid = false;
        } else {
            input.classList.remove('invalid');
            
            // Additional validation
            if (input.type === 'email' && !isValidEmail(input.value)) {
                input.classList.add('invalid');
                isValid = false;
            }
            
            if (input.type === 'password' && input.value.length < 8) {
                input.classList.add('invalid');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Toast Notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Form Submission Handlers
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    handleFormSubmit(signUpForm, 'signup');
});

signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    handleFormSubmit(signInForm, 'signin');
});

// Input Validation on Blur
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', () => {
        if (input.required && !input.value.trim()) {
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    });
});