/**
 * PASSWORD-TOGGLE.JS - Mostrar/ocultar contraseña
 * - Cambia el tipo de input entre "password" y "text"
 * - Cambia el ícono entre ojo abierto y ojo cerrado
 * - Actualiza el aria-label para accesibilidad
 */

document.addEventListener('DOMContentLoaded', () => {

    const toggles = document.querySelectorAll('.form-password__toggle');

    toggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            // Obtener el ID del input objetivo desde el atributo data-target
            const targetId = toggle.getAttribute('data-target');
            const input = document.getElementById(targetId);

            if (!input) return;

            // Cambiar el tipo de input
            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';

            // Cambiar la clase del botón (para alternar el ícono)
            toggle.classList.toggle('is-visible');

            // Actualizar el aria-label para accesibilidad
            toggle.setAttribute(
                'aria-label',
                isPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
            );

            // Mantener el foco en el input después del toggle
            input.focus();
        });
    });

});