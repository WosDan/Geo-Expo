document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".capa-interactiva");

    elementos.forEach(elemento => {
        elemento.addEventListener("click", () => {
            const dialog = document.getElementById(`dialog-${elemento.id}`);
            if (dialog) dialog.showModal();
        });
    });

    const botonesCerrar = document.querySelectorAll("dialog button");

    botonesCerrar.forEach(boton => {
        boton.addEventListener("click", () => {
            const dialog = boton.closest("dialog");
            if (dialog) dialog.close();
        });
    });
});