document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // Navbar Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.85)'; // translucent
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.background = '#fff'; // solid
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'var(--shadow)';
        }
    });

    // Animated Counters
    const counters = document.querySelectorAll('.counter');
    const impactSection = document.querySelector('.impact-section');

    const startCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const updateCount = () => {
            const count = +counter.innerText;
            const increment = target / 200;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    const observerOptions = { root: null, threshold: 0.5 };
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => { startCounter(counter); });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (impactSection) { counterObserver.observe(impactSection); }
});
