// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const darkModeToggles = document.querySelectorAll('[data-darkmode-toggle]');
    const modeIcons = document.querySelectorAll('[data-mode-icon]');

    // Check for saved preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply dark mode
    function applyDarkMode(isDark) {
        html.classList.toggle('dark', isDark);
        localStorage.setItem('darkMode', isDark);

        // Update icons
        modeIcons.forEach(icon => {
            icon.classList.toggle('fa-moon', !isDark);
            icon.classList.toggle('fa-sun', isDark);
        });
    }

    // Initialize
    applyDarkMode(isDarkMode);

    // Add event listeners to all toggle buttons
    darkModeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const isDark = html.classList.contains('dark');
            applyDarkMode(!isDark);
        });
    });

    // Watch for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('darkMode')) {
            applyDarkMode(e.matches);
        }
    });
});