/**
 * TOASTS.JS - Notificaciones flotantes con temporizador
 * - Toast de éxito
 * - Toast de error
 * - Toast de advertencia
 * - Toast de información
 * - Cuenta regresiva en segundos
 * - Barra de progreso animada
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================
       UTILIDADES
       ============================================ */

    /**
     * Crea el contenedor de toasts si no existe
     */
    function getToastContainer() {
        let container = document.querySelector('.toast-container');

        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            container.setAttribute('aria-live', 'polite');
            container.setAttribute('aria-atomic', 'true');
            document.body.appendChild(container);
        }

        return container;
    }

    /**
     * Íconos por tipo de toast
     */
    const icons = {
        success: '✓',
        danger: '✕',
        warning: '⚠',
        info: 'ℹ'
    };

    /**
     * Muestra un toast
     */
    function showToast(type = 'info', title = '', message = '', duration = 5) {
        const container = getToastContainer();

        // Crear el elemento del toast
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        toast.setAttribute('role', 'alert');

        // HTML interno
        toast.innerHTML = `
            <span class="toast__icon" aria-hidden="true">${icons[type] || 'ℹ'}</span>
            <div class="toast__content">
                ${title ? `<p class="toast__title">${title}</p>` : ''}
                ${message ? `<p class="toast__message">${message}</p>` : ''}
            </div>
            <span class="toast__timer" aria-hidden="true">${duration}s</span>
            <button type="button" class="toast__close" aria-label="Cerrar notificación">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div class="toast__progress" style="animation-duration: ${duration}s;"></div>
        `;

        container.appendChild(toast);

        // Temporizador
        let timeLeft = duration;
        const timerElement = toast.querySelector('.toast__timer');

        const interval = setInterval(() => {
            timeLeft--;
            if (timerElement) {
                timerElement.textContent = `${timeLeft}s`;
            }

            if (timeLeft <= 0) {
                clearInterval(interval);
                removeToast(toast);
            }
        }, 1000);

        // Cerrar manualmente
        const closeButton = toast.querySelector('.toast__close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                clearInterval(interval);
                removeToast(toast);
            });
        }

        return toast;
    }

    /**
     * Elimina un toast con animación
     */
    function removeToast(toast) {
        toast.style.transition = 'all 0.3s ease-in-out';
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';

        setTimeout(() => {
            if (toast.parentElement) {
                toast.parentElement.removeChild(toast);
            }
        }, 300);
    }

    /* ============================================
       API PÚBLICA (para usar desde otros scripts)
       ============================================ */

    window.Toast = {
        success: (title, message, duration = 5) => showToast('success', title, message, duration),
        danger: (title, message, duration = 5) => showToast('danger', title, message, duration),
        warning: (title, message, duration = 5) => showToast('warning', title, message, duration),
        info: (title, message, duration = 5) => showToast('info', title, message, duration)
    };

    /* ============================================
       AUTO-DISPARAR TOASTS POR ATRIBUTOS DATA
       ============================================ */

    document.querySelectorAll('[data-toast]').forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();

            const type = trigger.getAttribute('data-toast') || 'info';
            const title = trigger.getAttribute('data-toast-title') || '';
            const message = trigger.getAttribute('data-toast-message') || '';
            const duration = parseInt(trigger.getAttribute('data-toast-duration') || '5', 10);

            showToast(type, title, message, duration);
        });
    });

});