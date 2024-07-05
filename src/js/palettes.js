"use strict";

// para hacer palettes -parte diseño
/*
si la usuaria hace click en  opcion1, 
se actualiza con los colores de opcion1
si hace click en opcion 2,
se actualiza con los colores de esa opcion

*/
const options = document.querySelectorAll('input[name="colours"]');
const nameCard = document.querySelector(".js-card-name");
const emailCard = document.querySelector(".js-card-email");
const telephoneCard = document.querySelector(".js-card-telephone");
const linkedinCard = document.querySelector(".js-card-linkedin");
const GithubCard = document.querySelector(".js-card-github");



function handlePalettes() {
    console.log("Se ha seleccionado una opción de color");

    
    options.forEach(option => {
        if (option.checked) {
            if (option.value === "colours1") {
                nameCard.classList.add("jscolour1__1");
            } else if (option.value === "colours2") {
                nameCard.classList.add("jscolour2__1");
            } else if (option.value === "colours3") {
                nameCard.classList.add("jscolour3__1");
            }
        }
    })
};

options.forEach(option => {
    option.addEventListener("change", handlePalettes);
});

handlePalettes();