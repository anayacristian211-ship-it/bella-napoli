// MENÚ HAMBURGUESA
const botonMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", () => {
    const estaAbierto = menu.classList.toggle("abierto");

    botonMenu.setAttribute(
        "aria-expanded",
        String(estaAbierto)
    );

    botonMenu.setAttribute(
        "aria-label",
        estaAbierto ? "Cerrar menú" : "Abrir menú"
    );

    botonMenu.textContent = estaAbierto ? "✕" : "☰";
});

// CERRAR EL MENÚ AL SELECCIONAR UNA SECCIÓN
menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("abierto");

        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");
        botonMenu.textContent = "☰";
    });
});

// BOTÓN VOLVER ARRIBA
const botonArriba = document.getElementById("volver-arriba");

window.addEventListener("scroll", () => {
    botonArriba.classList.toggle(
        "visible",
        window.scrollY > 350
    );
});

botonArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// AÑO AUTOMÁTICO EN EL PIE DE PÁGINA
document.getElementById("anio").textContent =
    new Date().getFullYear();