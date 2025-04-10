// Skills section animation trigger
function animateSkills() {
    const skillCards = document.querySelectorAll('.skill-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });

    skillCards.forEach(card => observer.observe(card));
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateSkills();
});


// Generate floating particles
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('home');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 15 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 15 + 10;
        const opacity = Math.random() * 0.4 + 0.1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.opacity = opacity;
        
        hero.appendChild(particle);
    }
});



// Project filtering functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('bg-blue-500', 'text-white');
            b.classList.add('bg-gray-200', 'dark:bg-gray-700');
        });
        btn.classList.add('bg-blue-500', 'text-white');
        btn.classList.remove('bg-gray-200', 'dark:bg-gray-700');

        // Filter projects
        const filter = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});