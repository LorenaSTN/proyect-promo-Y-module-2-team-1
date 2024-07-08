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



const buttonArrow = document.querySelector(".js-button-arrow");
const dropdown = document.querySelector(".js-dropdown");
const buttonArrow2 = document.querySelector(".js-button-arrow2");
const dropdown2 = document.querySelector(".js-dropdown2");
const buttonArrow3 = document.querySelector(".js-button-arrow3");
const dropdown3 = document.querySelector(".js-dropdown3");
const collapsableHeaders = document.querySelectorAll(".js-collapsable-title")


dropdown2.classList.add("hiden");
dropdown3.classList.add("hiden");


function handleCollapsable(event){
  const clickedLegend = event.currentTarget;
  
  if (clickedLegend.classList.contains("js-fieldset-palettes")){
    dropdown.classList.toggle("hiden");
    dropdown2.classList.add("hiden");
    dropdown3.classList.add("hiden");
  }else if (clickedLegend.classList.contains("js-fieldset-fill")){
    dropdown2.classList.toggle("hiden");
    dropdown.classList.add("hiden");
    dropdown3.classList.add("hiden");
  }else if (clickedLegend.classList.contains ("js-fieldset-share")){
    event.preventDefault();
    dropdown3.classList.toggle("hiden");
    buttonArrow3.classList.toggle("rotate");
    dropdown.classList.add("hiden");
    dropdown2.classList.add("hiden");
  };
};


for(const collapsableHeader of collapsableHeaders){
  collapsableHeader.addEventListener("click", handleCollapsable)
};

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


const resetButton = document.querySelector(".js-button-reset");
const inputsForm = document.querySelectorAll(".js-form-fill input");

function handleResetClick() {
  for (const input of inputsForm) {
    input.value = "";
  }

  cardName.innerHTML = "Harley Quinn";
  cardJob.innerHTML = "Joker";
  cardEmail.href = "";
  cardEmail.title = "";
  cardTelephone.href = "";
  cardTelephone.title = "";
  cardLinkedin.href = "";
  cardLinkedin.title = "";
  cardGithub.href = "";
  cardGithub.title = "";
  profileImage.src = "./images/joker.jpg";
  profilePreview.src = "";
}

resetButton.addEventListener("click", handleResetClick);

const buttonShare = document.querySelector('button.button-share');

buttonShare.addEventListener('click', () => {
  dropdown.classList.remove('hiden');
  dropdown2.classList.remove('hiden');
  dropdown3.classList.remove('hiden');
});

const shareSection = document.querySelector('section.card-info');
const myForm = document.querySelector('form');

myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  dropdown.classList.add('hiden');
  dropdown2.classList.add('hiden');
  dropdown3.classList.remove('hiden');

  // TODO: Crear la tarjeta

  shareSection.classList.remove('hiden');
});
