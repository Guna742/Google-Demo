
document.addEventListener('DOMContentLoaded', () => {
    loadPartials();
});

async function loadPartials() {
    try {
        const headerRes = await fetch('header.html');
        const footerRes = await fetch('footer.html');
        
        if (headerRes.ok) {
            document.getElementById('header-placeholder').innerHTML = await headerRes.text();
            initHeader();
        }
        
        if (footerRes.ok) {
            document.getElementById('footer-placeholder').innerHTML = await footerRes.text();
        }
    } catch (e) {
        console.error('Error loading partials:', e);
    }
}

function initHeader() {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll'); // Prevent body scroll when menu open
        });
    }

    // Active Link Highlight
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Header Scroll Effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}
