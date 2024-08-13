// Change theme based on slider
document.addEventListener('DOMContentLoaded', () => {
    const desktopToggle = document.getElementById('theme-toggle-desktop');
    const mobileToggle = document.getElementById('theme-toggle-mobile');
    const currentTheme = localStorage.getItem('theme');

    // Apply the stored theme if it exists
    if (currentTheme) {
        document.body.className = currentTheme;
        desktopToggle.checked = (currentTheme === 'dark-theme');
        mobileToggle.checked = (currentTheme === 'dark-theme');
    }

    // Function to toggle the theme
    const toggleTheme = (isDark) => {
        if (isDark) {
            document.body.className = 'dark-theme';
            localStorage.setItem('theme', 'dark-theme');
        } else {
            document.body.className = 'light-theme';
            localStorage.setItem('theme', 'light-theme');
        }
    };

    // Add event listeners for both toggle switches
    desktopToggle.addEventListener('change', () => {
        const isDark = desktopToggle.checked;
        mobileToggle.checked = isDark; // Sync mobile toggle
        toggleTheme(isDark);
    });

    mobileToggle.addEventListener('change', () => {
        const isDark = mobileToggle.checked;
        desktopToggle.checked = isDark; // Sync desktop toggle
        toggleTheme(isDark);
    });
});
