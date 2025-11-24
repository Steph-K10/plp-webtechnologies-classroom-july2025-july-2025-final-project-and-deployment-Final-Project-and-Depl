// Netlify Form Handler for Puppy Cheat Sheet
class PuppyFormHandler {
    constructor() {
        this.form = document.getElementById('puppyForm');
        this.messageDiv = document.getElementById('formMessage');
        this.submitBtn = this.form.querySelector('.submit-btn');
        this.init();
    }

    init() {
        this.addFormListeners();
        this.addInputValidation();
    }

    addFormListeners() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        // Real-time validation
        this.form.querySelectorAll('input, select').forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearError(input);
            });
        });
    }

    addInputValidation() {
        this.emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'email':
                if (!value) {
                    errorMessage = 'Please enter your email address';
                    isValid = false;
                } else if (!this.emailPattern.test(value)) {
                    errorMessage = 'Please enter a valid email address';
                    isValid = false;
                }
                break;
                
            case 'puppyAge':
                if (!value) {
                    errorMessage = 'Please select your puppy\'s age range';
                    isValid = false;
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        } else {
            this.clearError(field);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('error');
        const errorDiv = document.getElementById(`${field.name}Error`);
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.classList.add('show');
        }
    }

    clearError(field) {
        field.classList.remove('error');
        const errorDiv = document.getElementById(`${field.name}Error`);
        if (errorDiv) {
            errorDiv.classList.remove('show');
        }
    }

    validateForm() {
        let isValid = true;
        
        this.form.querySelectorAll('[required]').forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    async handleSubmit() {
        // Validate form before submission
        if (!this.validateForm()) {
            this.showMessage('Please fix the errors above before submitting.', 'error');
            return;
        }

        // Show loading state
        this.setLoadingState(true);

        try {
            const formData = new FormData(this.form);
            const userEmail = formData.get('email');
            
            // Netlify Forms Submission
            const response = await fetch('/', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded' 
                },
                body: new URLSearchParams(new URLSearchParams(formData)).toString()
            });

            if (response.ok) {
                this.showSuccessMessage(userEmail);
                this.form.reset();
            } else {
                throw new Error('Form submission failed');
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showMessage(
                '😔 Unable to send right now. Please try again in a few moments.', 
                'error'
            );
        } finally {
            this.setLoadingState(false);
        }
    }

    setLoadingState(loading) {
        if (loading) {
            this.submitBtn.disabled = true;
            this.submitBtn.classList.add('loading');
        } else {
            this.submitBtn.disabled = false;
            this.submitBtn.classList.remove('loading');
        }
    }

    showSuccessMessage(email) {
        this.messageDiv.innerHTML = `
            <div class="success-message">
                <h3>🎉 Success! Cheat Sheet Sent!</h3>
                <p>We've emailed your personalized puppy care guide to:</p>
                <p class="user-email"><strong>${email}</strong></p>
                <div class="success-details">
                    <p>📬 <strong>Check your inbox</strong> within 5 minutes</p>
                    <p>📋 You'll receive age-specific guidance for your puppy</p>
                    <p>🐾 Don't forget to check your spam folder</p>
                </div>
                <div class="disclaimer">
                    <p>💡 <strong>Important Disclaimer:</strong> This is general guidance. Always consult your veterinarian for specific advice.</p>
                    <p>🏥 <strong>Local Nairobi Contacts:</strong> KSPCA: 0700 000 000 | Emergency Vet: 0733 123 456</p>
                </div>
            </div>
        `;
        
        this.createConfetti();
    }

    showMessage(message, type = 'error') {
        this.messageDiv.innerHTML = `
            <div class="${type === 'error' ? 'error-message-box' : 'success-message'}">
                <h3>${type === 'error' ? '😔 Oops!' : '🎉 Success!'}</h3>
                <p>${message}</p>
            </div>
        `;
    }

    createConfetti() {
        const colors = ['#FFB6C1', '#87CEEB', '#98FB98', '#FFD700'];
        for (let i = 0; i < 20; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'floating-emoji';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.textContent = ['🎉', '🎊', '🐕', '🐾', '📧'][Math.floor(Math.random() * 5)];
            confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
            confetti.style.zIndex = '9999';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }
    }
}

// Initialize form handler
document.addEventListener('DOMContentLoaded', () => {
    new PuppyFormHandler();
});