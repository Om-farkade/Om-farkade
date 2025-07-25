// Investment Trial Class JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Modal Elements
    const modal = document.getElementById('bookingModal');
    const bookingForm = document.getElementById('bookingForm');
    const closeBtn = document.querySelector('.close');
    
    // Display booking messages if they exist
    displayBookingMessages();
    
    // Event Listeners
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Form submission
    bookingForm.addEventListener('submit', handleFormSubmission);
    
    // Play button functionality
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', playInstructorVideo);
    }
    
    // Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll
    observeElements();
});

// Open booking modal
function bookTrialClass() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus on first input
    setTimeout(() => {
        const firstInput = modal.querySelector('input[type="text"]');
        if (firstInput) firstInput.focus();
    }, 300);
}

// Close booking modal
function closeModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Validate form
    if (!validateForm()) {
        return false;
    }
    
    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Processing...';
    submitBtn.disabled = true;
    
    // Simulate payment processing (you can integrate with actual payment gateway)
    setTimeout(() => {
        // In real implementation, you would handle payment here
        // For now, we'll submit the form
        event.target.submit();
    }, 2000);
}

// Form validation
function validateForm() {
    const form = document.getElementById('bookingForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        const errorMsg = field.parentNode.querySelector('.error-message');
        if (errorMsg) errorMsg.remove();
        
        if (!field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
            showFieldError(field, 'Please enter a valid email address');
            isValid = false;
        } else if (field.type === 'tel' && !isValidPhone(field.value)) {
            showFieldError(field, 'Please enter a valid phone number');
            isValid = false;
        }
    });
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '14px';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#dc3545';
    
    // Remove error styling on focus
    field.addEventListener('focus', function() {
        field.style.borderColor = '#28a745';
        const error = field.parentNode.querySelector('.error-message');
        if (error) error.remove();
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{9,14}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleanPhone);
}

// Play instructor video
function playInstructorVideo() {
    // In a real implementation, you would open a video modal or redirect to video
    alert('Video will be played here. Integration with your video platform needed.');
    
    // Example of how you might integrate with YouTube or Vimeo
    // window.open('https://youtube.com/watch?v=YOUR_VIDEO_ID', '_blank');
}

// Display booking messages
function displayBookingMessages() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookingStatus = urlParams.get('booking');
    
    if (bookingStatus) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `booking-message ${bookingStatus}`;
        
        if (bookingStatus === 'success') {
            messageDiv.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <strong>Booking Successful!</strong> 
                Check your email for confirmation and Zoom link details.
            `;
        } else if (bookingStatus === 'error') {
            messageDiv.innerHTML = `
                <i class="fas fa-exclamation-triangle"></i>
                <strong>Booking Failed!</strong> 
                Please try again or contact support.
            `;
        }
        
        const container = document.querySelector('.trial-class-container');
        container.insertBefore(messageDiv, container.firstChild);
        
        // Auto-hide message after 5 seconds
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => messageDiv.remove(), 300);
        }, 5000);
        
        // Remove URL parameter
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
    }
}

// Intersection Observer for animations
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.instructor-card, .trial-card, .detail-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Utility function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: '2-digit'
    });
}

// Handle escape key to close modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('bookingModal');
        if (modal.style.display === 'block') {
            closeModal();
        }
    }
});

// Add ripple effect to buttons
function addRippleEffect() {
    const buttons = document.querySelectorAll('.book-trial-btn, .submit-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Initialize ripple effect
addRippleEffect();

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .book-trial-btn, .submit-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);