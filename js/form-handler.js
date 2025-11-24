// Enhanced Puppy Cheat Sheet Form Handler
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
        // Email validation pattern
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
        
        // Validate all required fields
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
            // For Netlify Forms - this will work when deployed
            const formData = new FormData(this.form);
            
            // Simulate form submission (remove this in production)
            await this.simulateSubmission(formData);
            
            // Show success message
            this.showSuccessMessage(formData.get('email'));
            this.form.reset();
            
        } catch (error) {
            this.showMessage('😔 Something went wrong. Please try again or contact us directly.', 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    async simulateSubmission(formData) {
        // Simulate API call - remove this when using Netlify Forms
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Simulated network error'));
                }
            }, 2000);
        });
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
                <h3>🎉 Cheat Sheet Sent Successfully!</h3>
                <p>We've emailed your personalized puppy care guide to <strong>${email}</strong></p>
                <p>📬 <strong>Check your inbox</strong> (and spam folder) within 5 minutes</p>
                <div class="disclaimer">
                    <p>💡 <strong>Important Disclaimer:</strong></p>
                    <p>This information is general guidance. Always consult with your veterinarian for specific advice about your puppy's health and care.</p>
                    <p>🏥 <strong>Local Nairobi Contacts:</strong></p>
                    <ul>
                        <li>KSPCA: 0700 000 000</li>
                        <li>Nairobi Vet Services: 0712 345 678</li>
                        <li>Emergency Vet: 0733 123 456</li>
                    </ul>
                </div>
            </div>
        `;
        
        // Add celebration
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
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'floating-emoji';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.textContent = ['🎉', '🎊', '🐕', '🐾', '📧'][Math.floor(Math.random() * 5)];
            confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }
    }
}

// Initialize form handler when page loads
document.addEventListener('DOMContentLoaded', () => {
    new PuppyFormHandler();
});