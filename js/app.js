/**
 * APP.JS - Interacciones principales del sitio
 * - Menú hamburguesa móvil
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================
       MENÚ HAMBURGUESA MÓVIL
       ============================================ */

    const toggle = document.querySelector('.site-header__toggle');
    const mobileMenu = document.querySelector('.site-header__mobile-menu');

    if (toggle && mobileMenu) {
        // Abrir/cerrar menú
        toggle.addEventListener('click', () => {
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';

            toggle.setAttribute('aria-expanded', !isOpen);
            mobileMenu.classList.toggle('is-open');
            mobileMenu.setAttribute('aria-hidden', isOpen);
        });

        // Cerrar el menú al hacer clic en un enlace
        const links = mobileMenu.querySelectorAll('a');
        links.forEach((link) => {
            link.addEventListener('click', () => {
                toggle.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('is-open');
                mobileMenu.setAttribute('aria-hidden', 'true');
            });
        });

        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', (event) => {
            const isClickInsideToggle = toggle.contains(event.target);
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isOpen = mobileMenu.classList.contains('is-open');

            if (isOpen && !isClickInsideToggle && !isClickInsideMenu) {
                toggle.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('is-open');
                mobileMenu.setAttribute('aria-hidden', 'true');
            }
        });

        // Cerrar el menú al redimensionar la ventana a desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                toggle.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('is-open');
                mobileMenu.setAttribute('aria-hidden', 'true');
            }
        });
    }

    /* ============================================
       SMOOTH SCROLL PARA ENLACES INTERNOS
       ============================================ */

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');

            // Ignorar enlaces "#" o "#top"
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

});