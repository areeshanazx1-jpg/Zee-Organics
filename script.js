// navigation toggle for mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
        }
    });
});

// order buttons functionality
const orderButtons = document.querySelectorAll('.order-btn');
orderButtons.forEach(btn => {
    const product = btn.getAttribute('data-product');
    const baseNumber = '923006721427'; // WhatsApp number without + or spaces
    const message = encodeURIComponent('Hello, I want to order from ZEE ORANICS.');
    // use api.whatsapp.com/send to work on desktop and mobile
    btn.setAttribute('href', `https://api.whatsapp.com/send?phone=${baseNumber}&text=${message}`);
});

// fade-in sections when scrolled into view
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.25 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// initialize AOS animations
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
}
