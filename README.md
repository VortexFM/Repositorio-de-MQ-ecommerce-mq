# 🎨 E-commerce MQ - Repositorio de Maquetación

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Repositorio de **maquetación pura** (HTML5 + CSS3 + JavaScript ligero) del sistema e-commerce **Mi Tienda**, sin uso de frameworks.

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Arquitectura CSS](#-arquitectura-css)
- [Vistas Incluidas](#-vistas-incluidas)
- [Instalación](#-instalación)
- [Equipo](#-equipo)
- [Licencia](#-licencia)

---

## 📖 Descripción

Este repositorio contiene la **maquetación funcional** del sistema e-commerce **Mi Tienda**, desarrollada con:

- **HTML5 semántico** (sin `<div>` innecesarios).
- **CSS3 modular** con variables globales (`:root`).
- **JavaScript ligero** para interacciones (menú, modales, toasts, validaciones).

**Sin frameworks.** Sin dependencias. Solo HTML, CSS y JS puro.

---

## ✨ Características

- ✅ **HTML5 semántico** con etiquetas correctas.
- ✅ **CSS3 modular** organizado por carpetas.
- ✅ **Variables globales** en `:root`.
- ✅ **Diseño responsive** (móvil, tablet, desktop).
- ✅ **Menú hamburguesa** funcional.
- ✅ **Modales** de éxito, error y confirmación.
- ✅ **Toasts** con temporizador.
- ✅ **Validaciones** de formularios en tiempo real.
- ✅ **Botones en 4 estados** (normal, hover, focus, disabled).
- ✅ **Paleta de colores** oficial.
- ✅ **Tipografía** Montserrat + Inter.

---

## 🚀 Tecnologías

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura semántica |
| CSS3 | Estilos y diseño responsive |
| JavaScript (ES6+) | Interacciones dinámicas |
| Google Fonts | Tipografía Montserrat + Inter |

---

## 📁 Estructura del Proyecto

- **Raíz**
  - `README.md` — Documentación
  - `index.html` — Home
- **`tienda/`**
  - `productos.html` — Catálogo
  - `producto.html` — Detalle de producto
  - `categorias.html` — Categorías
  - `carrito.html` — Carrito
  - `checkout.html` — Checkout
  - `confirmacion.html` — Confirmación
- **`auth/`**
  - `login.html` — Login
  - `registro.html` — Registro
- **`usuario/`**
  - `perfil.html` — Perfil
- **`informativas/`**
  - `contacto.html` — Contacto
  - `nosotros.html` — Sobre nosotros
  - `faq.html` — FAQ
  - `terminos.html` — Términos
  - `privacidad.html` — Privacidad
  - `envios.html` — Envíos
  - `devoluciones.html` — Devoluciones
- **`admin/`**
  - `dashboard.html` — Dashboard admin
  - `crud.html` — CRUD productos
- **`error/`**
  - `404.html` — Página 404
- **`css/`**
  - `styles.css` — Punto de entrada
  - `theme.css` — Variables `:root`
  - **`base/`** — `reset.css`, `typography.css`
  - **`components/`** — `buttons.css`, `cards.css`, `forms.css`, `alerts.css`, `badges.css`, `modals.css`
  - **`layouts/`** — `header.css`, `footer.css`, `sidebar.css`, `admin.css`
  - **`pages/`** — `home.css`, `products.css`, `product-detail.css`, `cart.css`, `checkout.css`, `confirmation.css`, `error.css`, `contact.css`, `about.css`, `faq.css`, `legal.css`, `login.css`, `profile.css`
    - **`pages/admin/`** — `dashboard.css`, `products-admin.css`, `orders-admin.css`, `clients-admin.css`, `reports-admin.css`
- **`js/`**
  - `app.js` — Menú hamburguesa
  - `validations.js` — Validaciones
  - `password-toggle.js` — Mostrar/ocultar contraseña
  - `modals.js` — Modales
  - `toasts.js` — Toasts con temporizador
- **`assets/`**
  - `img/` — Imágenes

---

## 🎨 Arquitectura CSS

El proyecto usa **CSS modular** con la metodología **BEM**:

- **Bloque:** `.product-card`
- **Elemento:** `.product-card__title`
- **Modificador:** `.product-card--featured`

### Variables globales (`:root`)

```css
:root {
    --color-primary: #be0b11;
    --color-primary-dark: #9b0c0f;
    --color-dark: #0b0a08;
    --color-wine: #79d6d6;
    --color-maroon: #57e0eb;
    --font-title: 'Montserrat', sans-serif;
    --font-body: 'Inter', sans-serif;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 2rem;
}

📄 Vistas Incluidas
Públicas
Home (index.html)

Catálogo (productos.html)

Detalle de producto (producto.html)

Categorías (categorias.html)

Carrito (carrito.html)

Checkout (checkout.html)

Confirmación (confirmacion.html)

Login (login.html)

Registro (registro.html)

Perfil (perfil.html)

Informativas
Contacto (contacto.html)

Sobre nosotros (nosotros.html)

FAQ (faq.html)

Términos (terminos.html)

Privacidad (privacidad.html)

Envíos (envios.html)

Devoluciones (devoluciones.html)

Admin
Dashboard (dashboard.html)

CRUD Productos (crud.html)

Especiales
Sistema de Diseño (sistema_diseno.html)

Página 404 (404.html)

🔧 Instalación
No requiere instalación. Solo abre los archivos .html en tu navegador.

👥 Equipo
Equipo de Desarrollo:

Luiggi Zozzaro - C.I. [por definir]

Yorhan Lopez - C.I. [por definir]

Jose Almao - C.I. [por definir]

Frank Gimenez - C.I. [por definir]

Daniel Huerta - C.I. [por definir]

Institución: [Nombre de la universidad]
Materia: ADS-433 - Análisis y Diseño de Sistemas
Docente: Prof. Eduardo Nieves
Año: 2026

## 🔧 Notas de la última revisión

- Se reconstruyeron 18 vistas HTML que estaban vacías (0 bytes), usando como referencia el sistema real hecho en Laravel/Blade.
- Se corrigieron enlaces internos rotos en `index.html` (apuntaban a archivos planos en vez de a las subcarpetas `tienda/`, `auth/`, `informativas/`).
- Se corrigió un `rel="stylessheet"` (typo) en `auth/login.html` que impedía cargar el CSS.
- Se corrigió el enlace `/register` en `auth/login.html` → ahora apunta a `auth/registro.html`.
- Todas las páginas comparten el mismo header/footer y las mismas hojas de estilo (`css/styles.css`), sin duplicar CSS.

---

📄 Licencia
Este proyecto está bajo la Licencia MIT.

