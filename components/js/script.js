document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Toggle mode based on button clicks
    const lightModeBtn = document.getElementById('lightMode');
    const darkModeBtn = document.getElementById('darkMode');
    const modeIcon = document.querySelector('[data-mode-icon]');

    if (lightModeBtn && darkModeBtn && modeIcon) {
        lightModeBtn.addEventListener('click', () => {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
        });

        darkModeBtn.addEventListener('click', () => {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
        });
    }
});

// Form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Form submission logic would go here
        alert('Message sent successfully!');
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            el.classList.add('animate-fadeIn');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on page load



 // Animate contact section on load
        document.addEventListener('DOMContentLoaded', () => {
            const section = document.querySelector('.contact-section');
            setTimeout(() => {
                section.classList.add('animate');
            }, 200);
        });

// Trigger animations on load
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-section');
        elements.forEach(el => {
            el.style.opacity = 1;
    });
});