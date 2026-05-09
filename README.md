# 🏦 Banca 360 - Prototipo de Banca Digital

![Estado](https://img.shields.io/badge/Estado-Completado-success)
![Tecnologías](https://img.shields.io/badge/Tecnologías-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue)

**Banca 360** es un prototipo interactivo de una aplicación bancaria web, diseñado y construido desde cero **sin el uso de frameworks** ni dependencias externas. Su propósito es simular la experiencia de usuario de un portal bancario moderno, aplicando buenas prácticas de maquetación (HTML/CSS) y manipulación del DOM mediante JavaScript puro.

---

## 🌟 Características Principales

*   **Autenticación Simulada:** Flujos de inicio de sesión, registro de usuarios con validaciones en tiempo real (requisitos de contraseña) y preguntas de seguridad.
*   **Dashboard Interactivo:** Un panel de control principal que muestra el saldo (con opción de ocultarlo 👁️/🙈) y un resumen rápido de los últimos movimientos.
*   **Módulo de Operaciones:** Formularios simulados para realizar transacciones financieras:
    *   💸 Transferencias a terceros.
    *   📱 Pago Móvil.
    *   💵 Depósitos en efectivo.
*   **Historial de Movimientos:** Un listado completo de transacciones con filtros (ingresos/gastos) y detalles ampliados mediante ventanas modales.
*   **Gestión de Perfil:** Vista para la configuración de datos del usuario y cambio de foto de perfil.
*   **🌙 Modo Oscuro / Claro:** Implementación dinámica del modo oscuro que se aplica instantáneamente a todas las páginas mediante el uso de clases y variables CSS.
*   **Diseño 100% Responsivo:** Interfaz adaptada a dispositivos móviles, tablets y pantallas de escritorio.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto fue desarrollado bajo la filosofía de "cero dependencias", lo que significa que todo el código es nativo:

*   **Estructura:** HTML5 semántico.
*   **Estilos:** CSS3 nativo (uso de Flexbox, CSS Grid y Custom Properties / Variables para el sistema de diseño y temas).
*   **Lógica:** JavaScript (Vanilla JS), gestionando validaciones, eventos, manipulación del DOM y simulación de enrutamiento/alertas.

---

## 📂 Estructura del Proyecto

El proyecto está organizado en páginas y directorios para un fácil mantenimiento:

*   📄 `index.html` - Pantalla de inicio de sesión y registro.
*   📄 `dashboard.html` - Pantalla principal del usuario.
*   📄 `operations.html` / `transfers.html` / etc. - Vistas para cada tipo de transacción.
*   📁 `css/` - Hojas de estilo centralizadas (diseño global, componentes y temas).
*   📁 `js/` - Scripts divididos por responsabilidades (`auth.js`, `operations.js`, `theme.js`, etc.).

---

## 🚀 Cómo ejecutar el proyecto

Al ser un proyecto estático, no requiere instalación de paquetes ni servidores complejos:

1. Clona o descarga este repositorio en tu computadora.
2. Abre la carpeta del proyecto.
3. Haz doble clic en el archivo `index.html` para abrirlo directamente en tu navegador web de preferencia.
*(Alternativamente, puedes usar una extensión como "Live Server" en VS Code para una mejor experiencia).*

---
*Desarrollado como proyecto académico para demostrar habilidades en Desarrollo Web Frontend.*
