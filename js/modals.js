/**
 * MODALS.JS - Sistema de modales
 * - Abrir/cerrar modales
 * - Modal de confirmación (eliminar)
 * - Modal de éxito
 * - Modal de error
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================
       UTILIDADES
       ============================================ */

    /**
     * Abre un modal por su ID
     */
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');

        // Enfocar el primer botón del modal
        const firstButton = modal.querySelector('button');
        if (firstButton) {
            firstButton.focus();
        }
    }

    /**
     * Cierra un modal por su ID
     */
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    /**
     * Cierra el modal actual
     */
    function closeCurrentModal(modal) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    /* ============================================
       MODAL DE CONFIRMACIÓN (ELIMINAR)
       ============================================ */

    document.querySelectorAll('[data-confirm]').forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();

            const message = trigger.getAttribute('data-confirm') || '¿Estás seguro?';
            const modal = document.getElementById('modal-confirm');

            if (!modal) return;

            // Actualizar el mensaje del modal
            const messageElement = modal.querySelector('[data-confirm-message]');
            if (messageElement) {
                messageElement.textContent = message;
            }

            // Guardar la acción a ejecutar
            const action = trigger.getAttribute('data-action') || '#';
            const confirmButton = modal.querySelector('[data-confirm-action]');
            if (confirmButton) {
                confirmButton.setAttribute('href', action);
            }

            openModal('modal-confirm');
        });
    });

    /* ============================================
       MODAL DE ÉXITO
       ============================================ */

    document.querySelectorAll('[data-success]').forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();

            const message = trigger.getAttribute('data-success') || 'Operación exitosa';

            const modal = document.getElementById('modal-success');
            if (!modal) return;

            const messageElement = modal.querySelector('[data-success-message]');
            if (messageElement) {
                messageElement.textContent = message;
            }

            openModal('modal-success');
        });
    });

    /* ============================================
       MODAL DE ERROR
       ============================================ */

    document.querySelectorAll('[data-error]').forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();

            const message = trigger.getAttribute('data-error') || 'Ocurrió un error';

            const modal = document.getElementById('modal-error');
            if (!modal) return;

            const messageElement = modal.querySelector('[data-error-message]');
            if (messageElement) {
                messageElement.textContent = message;
            }

            openModal('modal-error');
        });
    });

    /* ============================================
       CERRAR MODALES
       ============================================ */

    // Cerrar con el botón de cerrar (X)
    document.querySelectorAll('[data-modal-close]').forEach((button) => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal-overlay');
            if (modal) closeCurrentModal(modal);
        });
    });

    // Cerrar al hacer clic en el overlay (fuera del modal)
    document.querySelectorAll('.modal-overlay').forEach((overlay) => {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closeCurrentModal(overlay);
            }
        });
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const openModalElement = document.querySelector('.modal-overlay.is-open');
            if (openModalElement) {
                closeCurrentModal(openModalElement);
            }
        }
    });

    /* ============================================
       API PÚBLICA (para usar desde otros scripts)
       ============================================ */

    window.Modal = {
        open: openModal,
        close: closeModal
    };

});