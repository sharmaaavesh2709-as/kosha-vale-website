// KOSHA VALE Website JavaScript

// Shopping Cart Functionality
let cart = [];
const cartIcon = document.querySelector('.cart-count');

// Add to Cart Button Listeners
const addToCartButtons = document.querySelectorAll('.product-card .btn-secondary');

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        
        // Add to cart
        cart.push({
            id: index,
            name: productName,
            price: productPrice
        });
        
        // Update cart count
        updateCartCount();
        
        // Show feedback
        const originalText = button.textContent;
        button.textContent = '✓ Added to Cart';
        button.style.backgroundColor = '#27ae60';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
    });
});

function updateCartCount() {
    if (cartIcon) {
        cartIcon.textContent = cart.length;
    }
}

// Subscribe Button Listeners
const subscribeButtons = document.querySelectorAll('.subscription .btn-primary');

subscribeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const planCard = button.closest('.plan-card');
        const planName = planCard.querySelector('h3').textContent;
        alert(`Thank you! You've selected the ${planName} subscription plan.\n\nRedirecting to checkout...`);
        // In a real app, this would redirect to a checkout page
    });
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // In a real app, this would send data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you! Your message has been sent.\nWe\'ll get back to you soon at ' + email);
        contactForm.reset();
    });
}

// Newsletter Subscription
const newsletterInput = document.querySelector('.newsletter-input');
const newsletterButton = document.querySelector('.footer-section .btn-secondary');

if (newsletterButton) {
    newsletterButton.addEventListener('click', function() {
        const email = newsletterInput.value;
        
        if (email && email.includes('@')) {
            alert('Welcome to KOSHA VALE newsletter! Check your email for confirmation.');
            newsletterInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#cart') {
            alert('Cart Page - Items: ' + cart.length);
            cart.forEach((item, i) => {
                console.log(`${i + 1}. ${item.name} - ${item.price}`);
            });
            return;
        }
        
        if (targetId === '#account') {
            alert('Account Page - Please log in or create an account');
            return;
        }
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
console.log('KOSHA VALE Website loaded successfully!');
updateCartCount();

// Add some interactivity to product cards
const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});