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
const navCard = document.querySelector(".nav-card");
const emailCard = document.querySelector(".js-card-email");
const telephoneCard = document.querySelector(".js-card-telephone");
const linkedinCard = document.querySelector(".js-card-linkedin");
const GithubCard = document.querySelector(".js-card-github");

const palettes = {

  colours1: ["jscolour1__1", "jscolour1__2", "jscolour1__3"],
  colours2: ["jscolour2__1", "jscolour2__2", "jscolour2__3"],
  colours3: ["jscolour3__1", "jscolour3__2", "jscolour3__3"],
  colours4: ["jscolour4__1", "jscolour4__2", "jscolour4__3"],
};

const paletteImages = {
  colours1: "./images/joker.jpg",
  colours2: "./images/joker2.jpeg",
  colours3: "./images/joker3.jpeg",
  colours4: "./images/joker4.jpeg",
};




function handlePalettes() {

  console.log("Se ha seleccionado una opción de color");
  const paletteName = document.querySelector(
    'input[name="colours"]:checked'
  ).value;
  //colours1, colours2, colours3, colours4, colours5
  if (paletteName === "colours1") {
    dataCard.palette = 1
  } else if (paletteName === "colours2") {
    dataCard.palette = 2
  }
  else if (paletteName === "colours3") {
    dataCard.palette = 3
  }
  else if (paletteName === "colours4") {
    dataCard.palette = 4
  }
  const palette = palettes[paletteName];

  nameCard.classList.remove(nameCard.classList[nameCard.classList.length - 1]);
  navCard.classList.remove(navCard.classList[navCard.classList.length - 1]);
  emailCard.classList.remove(
    emailCard.classList[emailCard.classList.length - 1]
  );
  telephoneCard.classList.remove(
    telephoneCard.classList[telephoneCard.classList.length - 1]
  );
  linkedinCard.classList.remove(
    linkedinCard.classList[linkedinCard.classList.length - 1]
  );
  GithubCard.classList.remove(
    GithubCard.classList[GithubCard.classList.length - 1]
  );

  nameCard.classList.add(palette[0]);
  navCard.classList.add(palette[1]);
  emailCard.classList.add(palette[2]);
  telephoneCard.classList.add(palette[2]);
  linkedinCard.classList.add(palette[2]);
  GithubCard.classList.add(palette[2]);


  const cardImage = document.querySelector(".js-card-image")
  cardImage.src = paletteImages[paletteName];

}

options.forEach((option) => {
  option.addEventListener("change", handlePalettes);
});

handlePalettes();
