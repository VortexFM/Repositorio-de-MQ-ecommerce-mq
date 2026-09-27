/**
 * VALIDATIONS.JS - Validaciones de formularios en tiempo real
 * - Correo electrónico
 * - Contraseña (mínimo 8 caracteres)
 * - Confirmación de contraseña
 * - Teléfono
 * - Campos requeridos
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================
       UTILIDADES
       ============================================ */

    /**
     * Muestra un mensaje de error debajo del campo
     */
    function showError(input, message) {
        clearMessage(input);

        input.classList.add('is-invalid');
        input.classList.remove('is-valid');

        const error = document.createElement('p');
        error.className = 'form-error';
        error.textContent = message;

        // Si el input está dentro de .form-password, agregar al padre del .form-password
        const passwordWrapper = input.closest('.form-password');
        if (passwordWrapper) {
            passwordWrapper.appendChild(error);
        } else {
            input.parentElement.appendChild(error);
        }
    }

    /**
     * Muestra un mensaje de éxito debajo del campo
     */
    function showSuccess(input) {
        clearMessage(input);

        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    }

    /**
     * Limpia los mensajes y clases de validación
     */
    function clearMessage(input) {
        input.classList.remove('is-invalid', 'is-valid');

        const passwordWrapper = input.closest('.form-password');
        const parent = passwordWrapper || input.parentElement;

        const existing = parent.querySelectorAll('.form-error, .form-success');
        existing.forEach((el) => el.remove());
    }

    /**
     * Valida el formato de un correo
     */
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    /**
     * Valida que un campo no esté vacío
     */
    function isRequired(value) {
        return value.trim().length > 0;
    }

    /* ============================================
       VALIDACIONES POR TIPO DE CAMPO
       ============================================ */

    function validateEmail(input) {
        const value = input.value;

        if (!isRequired(value)) {
            showError(input, 'El correo es obligatorio');
            return false;
        }

        if (!isValidEmail(value)) {
            showError(input, 'Ingresa un correo válido (ej: tu@correo.com)');
            return false;
        }

        showSuccess(input);
        return true;
    }

    function validatePassword(input, minLength = 8) {
        const value = input.value;

        if (!isRequired(value)) {
            showError(input, 'La contraseña es obligatoria');
            return false;
        }

        if (value.length < minLength) {
            showError(input, `La contraseña debe tener al menos ${minLength} caracteres`);
            return false;
        }

        showSuccess(input);
        return true;
    }

    function validatePasswordConfirmation(input, originalInput) {
        const value = input.value;
        const original = originalInput.value;

        if (!isRequired(value)) {
            showError(input, 'Debes confirmar tu contraseña');
            return false;
        }

        if (value !== original) {
            showError(input, 'Las contraseñas no coinciden');
            return false;
        }

        showSuccess(input);
        return true;
    }

    function validateRequired(input, message = 'Este campo es obligatorio') {
        if (!isRequired(input.value)) {
            showError(input, message);
            return false;
        }

        showSuccess(input);
        return true;
    }

    function validatePhone(input) {
        const value = input.value;
        const regex = /^[0-9+\-\s()]+$/;

        if (!isRequired(value)) {
            showError(input, 'El teléfono es obligatorio');
            return false;
        }

        if (!regex.test(value)) {
            showError(input, 'Ingresa un teléfono válido');
            return false;
        }

        showSuccess(input);
        return true;
    }

    /* ============================================
       APLICAR VALIDACIONES A CAMPOS
       ============================================ */

    // Campos de correo
    document.querySelectorAll('input[type="email"]').forEach((input) => {
        input.addEventListener('blur', () => validateEmail(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                validateEmail(input);
            }
        });
    });

    // Campos de contraseña (sin confirmación)
    document.querySelectorAll('input[name="password"]').forEach((input) => {
        input.addEventListener('blur', () => validatePassword(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                validatePassword(input);
            }
        });
    });

    // Confirmación de contraseña
    document.querySelectorAll('input[name="password_confirmation"]').forEach((input) => {
        const original = document.querySelector('input[name="password"]');

        if (!original) return;

        input.addEventListener('blur', () => validatePasswordConfirmation(input, original));
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                validatePasswordConfirmation(input, original);
            }
        });
    });

    // Campos de teléfono
    document.querySelectorAll('input[type="tel"]').forEach((input) => {
        input.addEventListener('blur', () => validatePhone(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                validatePhone(input);
            }
        });
    });

    // Campos de texto requeridos
    document.querySelectorAll('input[required][type="text"]').forEach((input) => {
        input.addEventListener('blur', () => validateRequired(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                validateRequired(input);
            }
        });
    });

});