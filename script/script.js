
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        // Toggle active class for hamburger animation
        hamburger.classList.toggle('active');
        
        // Toggle active class to show/hide the nav menu
        navMenu.classList.toggle('active');
    });

    // Optional: Close the menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
