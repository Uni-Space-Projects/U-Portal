document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("themeToggle");

    if (boton) {
        boton.addEventListener("click", () => {
            // toggle añade la clase si no está, y la quita si ya está
            document.body.classList.toggle("dark-mode");
            
            // Verificamos el estado para imprimir en consola
            const estaEnDark = document.body.classList.contains("dark-mode");
            console.log("¿Modo oscuro activo?:", estaEnDark);
        });
    }
});