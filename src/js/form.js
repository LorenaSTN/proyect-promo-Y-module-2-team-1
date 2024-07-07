"use strict";

const dataCard = {
  //No estamos utilizndo el valor de dataCard para NADA. Para que sea util tenemos que pasarle el input.
  palette: null,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

/* 
El formulario se mostrarà en la tarjeta
1-Crear formulario
2-Recoger la info de la usuaria cuando escriba en el input - definir variable input + crear evento.(input/keydown) - {event.target.value}
3-La info se previzualiza en la pantalla -definir las variables de la tarjeta. 
4-Iconos: Cuando la usuari@ haga click se redirigirá a un enlace.******
*/

const formName = document.querySelector(".js-form-name");
const cardName = document.querySelector(".js-card-name");
const formJob = document.querySelector(".js-form-job");
const cardJob = document.querySelector(".js-card-job");
const formEmail = document.querySelector(".js-form-email");
const cardEmail = document.querySelector(".js-card-email");
const formTelephone = document.querySelector(".js-form-telephone");
const cardTelephone = document.querySelector(".js-card-telephone");
const formLinkedin = document.querySelector(".js-form-linkedin");
const cardLinkedin = document.querySelector(".js-card-linkedin");
const formGithub = document.querySelector(".js-form-github");
const cardGithub = document.querySelector(".js-card-github");
const formPhoto = document.querySelector(".js-form-photo img");
const cardPhoto = document.querySelector(".js-card-image");

/*  Si la usuaria escribe en el input de nombre, se ve visualizado en el preview card (en el nombre),
Si la usuaria escribe en el input de job/trabajo, se ve visualizado en el preview card (en el job/trabajo)
.....

=== / contenido y tipo de dato
== / contenido



iconos- href= 
*/

const buttonArrow = document.querySelector(".js-button-arrow");
const dropdown = document.querySelector(".js-dropdown");
const buttonArrow2 = document.querySelector(".js-button-arrow2");
const dropdown2 = document.querySelector(".js-dropdown2");
const buttonArrow3 = document.querySelector(".js-button-arrow3");
const dropdown3 = document.querySelector(".js-dropdown3");


// dropdown.classList.add("hiden");
dropdown2.classList.add("hiden");
dropdown3.classList.add("hiden");
// function de ocultar- no se porque no funciona?
function handleHidingPalettes(event) {
  event.preventDefault();
  dropdown.classList.toggle("hiden");
  buttonArrow.classList.toggle("rotate");
  dropdown2.classList.add("hiden");
  dropdown3.classList.add("hiden");
}
buttonArrow.addEventListener("click", handleHidingPalettes);

function handleHidingForm(event) {
  event.preventDefault();
  dropdown2.classList.toggle("hiden");
  buttonArrow2.classList.toggle("rotate");
  dropdown.classList.add("hiden");
  dropdown3.classList.add("hiden");
}

buttonArrow2.addEventListener("click", handleHidingForm);

function handleHidingShare(event) {
  event.preventDefault();
  dropdown3.classList.toggle("hiden");
  buttonArrow3.classList.toggle("rotate");
  dropdown.classList.add("hiden");
  dropdown2.classList.add("hiden");
}

buttonArrow3.addEventListener("click", handleHidingShare);

///////

const inputsFormFill = document.querySelector(".js-form-fill");

inputsFormFill.addEventListener("input", (event) => {
  // event.preventDefault();
  // console.log ("Hola");
  if (event.target.id === "name") {
    cardName.innerHTML = event.target.value;
    dataCard.name = event.target.value;
  } else if (event.target.id === "job") {
    cardJob.innerHTML = event.target.value;
    dataCard.job = event.target.value;
  } else if (event.target.id === "email") {
    cardEmail.href = `mailto:${formEmail.value}`; //cambie el innerHTML por (herf =mailto.)
    cardEmail.title = formEmail.value; //pusimos la propiedad title en el HTML de los iconos que muestra el valor cuando haces hover
    dataCard.email = event.target.value;
  } else if (event.target.id === "telephone") {
    cardTelephone.href = `tel: ${formTelephone.value}`;
    cardTelephone.title = formTelephone.value;
    dataCard.telephone = event.target.value;
  } else if (event.target.id === "linkedin") {
    cardLinkedin.href = `${formLinkedin.value}`;
    cardLinkedin.title = formLinkedin.value;
    dataCard.linkedin = event.target.value;
  } else if (event.target.id === "github") {
    cardGithub.href = `${formGithub.value}`;
    cardGithub.title = formGithub.value;
    dataCard.github = event.target.value;
  }

});

//cardPhoto.src = `"${formPhoto.value}"`;
//dataCard.photo = event.target.value;        /
// const cardIconEmail = document.querySelector(".js-icon-email");

// cardIconEmail.addEventListener ("click", (event) =>{
//     event.preventDefault()
//         event.target.id === "email" ;
//         const emailInputValue = formEmail.value;
//         emailInputValue = ` mailto:${emailInputValue}`;
//         window.location.href = emailInputValue;
//     }
// )

// else if (event.target.id === "email"){
//         const emailInputValue = formEmail.value;
//         emailInputValue = `mailto:${emailInputValue}`;
//         window.location.href = emailInputValue;
// cardEmail.href = `mailto:${formEmail.value}`; //cambie el innerHTML por (herf =mailto.)

// formName.addEventListener ("input" , (event)=>{
//     const value = event.target.value;
//     cardName.innerHTML = value;
// } )

/* formJob.addEventListener ("input" , (event)=> {
    const value1 = event.target.value;
    cardJob.innerHTML = value1;
}) */

//Section reset button//

const resetButton = document.querySelector(".js-button-reset");
const inputsForm = document.querySelectorAll(".js-form-fill input");

function handleResetClick() {
  for (const input of inputsForm) {
    input.value = "";
  }

  cardName.innerHTML = "Nombre Apellido";
  cardJob.innerHTML = "Front-end developer";
  cardEmail.href = "";
  cardEmail.title = "";
  cardTelephone.href = "";
  cardTelephone.title = "";
  cardLinkedin.href = "";
  cardLinkedin.title = "";
  cardGithub.href = "";
  cardGithub.title = "";
  profileImage.src = "./images/images/cuyito.jpg";
  profilePreview.src = "";
}

resetButton.addEventListener("click", handleResetClick);
