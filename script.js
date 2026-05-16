document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const menuLinks = document.getElementById('menu-links');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
        hamburgerIcon.classList.toggle('open');
        menuLinks.classList.toggle('open');
    };

    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', toggleMenu);
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Intersection Observer for scroll animations (fade-in effects)
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });
});
