let btnMenu = document.querySelector("#btn-menu");
let btnCerrar = document.querySelector("#close-menu");
let menu = document.querySelector("#menu-mob");
let motionGraphics = document.querySelector("#motion-graphics");
let ilustradorInHouse = document.querySelector("#ilustrador-in-house");
let btnIlustrador = document.querySelector("#btn-ilustrador");
let btnMotion = document.querySelector("#btn-motion");
let navItems = document.querySelectorAll(".nav-items > li > a");

/* Menu mobile */

btnMenu.addEventListener("click", () => {
    menu.classList.remove("oculto");    
});

btnCerrar.addEventListener("click", () => {
    menu.classList.add("oculto");    
});

navItems.forEach(l => {
    l.addEventListener('click', () => {
        menu.classList.add("oculto");
    })
  })


/* Detalle Responsabilidades Experiencia */

btnIlustrador.addEventListener("click", () => {
    if (ilustradorInHouse.classList.contains("oculto")){
        ilustradorInHouse.classList.remove("oculto");
    }
    else {
        ilustradorInHouse.classList.add("oculto");
    }    
});

btnMotion.addEventListener("click", () => {
    if (motionGraphics.classList.contains("oculto")){
        motionGraphics.classList.remove("oculto");
    }
    else {
        motionGraphics.classList.add("oculto");
    }    
});

