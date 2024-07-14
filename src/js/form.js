"use strict";

const dataCard = {
  //No estamos utilizndo el valor de dataCard para NADA. Para que sea util tenemos que pasarle el input.
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

// Se define los valores por defecto.
const defaultData = {
  palette: null,
  name: 'Joker',
  job: 'Comodín',
  email:'#',
  phone:'#',
  linkedin:'#',
  github:'#',
  photo: "",
};


//al haber cambiado las clases de lugar se actualizaron los selectores para los elementos a.
const formName = document.querySelector(".js-form-name");
const cardName = document.querySelector(".js-card-name");
const formJob = document.querySelector(".js-form-job");
const cardJob = document.querySelector(".js-card-job");
const formEmail = document.querySelector(".js-form-email");
const cardEmail = document.querySelector(".js-card-email a");
const formTelephone = document.querySelector(".js-form-telephone");
const cardTelephone = document.querySelector(".js-card-telephone a");
const formLinkedin = document.querySelector(".js-form-linkedin");
const cardLinkedin = document.querySelector(".js-card-linkedin a");
const formGithub = document.querySelector(".js-form-github");
const cardGithub = document.querySelector(".js-card-github a");
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
  event.preventDefault();
  const clickedLegend = event.currentTarget;
  
  if (clickedLegend.classList.contains("js-fieldset-palettes")) {
    dropdown.classList.toggle("hiden");
    dropdown2.classList.add("hiden");
    dropdown3.classList.add("hiden");
    buttonArrow.classList.toggle("rotate");
  }else if (clickedLegend.classList.contains("js-fieldset-fill")) {
    dropdown2.classList.toggle("hiden");
    dropdown.classList.add("hiden");
    dropdown3.classList.add("hiden");
    buttonArrow2.classList.toggle("rotate");
  }else if (clickedLegend.classList.contains ("js-fieldset-share")) {
    event.preventDefault();
    dropdown3.classList.toggle("hiden");
    dropdown.classList.add("hiden");
    dropdown2.classList.add("hiden");
    buttonArrow3.classList.toggle("rotate");
  }
}


for(const collapsableHeader of collapsableHeaders){
  collapsableHeader.addEventListener("click", handleCollapsable);
}

///////



// completar formulario y que se vea en la tarjeta 
const inputsFormFill = document.querySelector(".js-form-fill");

inputsFormFill.addEventListener("input", (event) => {
  //se uso event.target para acceder al valor del input y se uso el operador ternario para asignar valores por defecto.
  if (event.target.id === "name") {
    cardName.innerHTML = event.target.value !== '' ? event.target.value : defaultData.name;
    dataCard.name = event.target.value;
  } else if (event.target.id === "job") {
    cardJob.innerHTML = event.target.value !== '' ? event.target.value : defaultData.job;
    dataCard.job = event.target.value;
  } else if (event.target.id === "email") {
    cardEmail.href = event.target.value !== '' ? `mailto:${event.target.value}` : defaultData.email;
    cardEmail.title = formEmail.value; 
    dataCard.email = event.target.value;
  } else if (event.target.id === "telephone") {
    cardTelephone.href = event.target.value !== '' ? `tel:${event.target.value}` : defaultData.tel;
    cardTelephone.title = formTelephone.value;
    dataCard.phone = event.target.value;
  } else if (event.target.id === "linkedin") {
    cardLinkedin.href = event.target.value !== '' ? event.target.value : defaultData.linkedin;
    cardLinkedin.title = formLinkedin.value;
    dataCard.linkedin = event.target.value;
  } else if (event.target.id === "github") {
    cardGithub.href = event.target.value !== '' ? event.target.value : defaultData.github;
    cardGithub.title = formGithub.value;
    dataCard.github = event.target.value;
  } else if (event.target.id === "photo") {
    // console.log(event.target.value);
  }
});



// Resetear Tarjeta
const resetButton = document.querySelector(".js-button-reset");
const inputsForm = document.querySelectorAll(".js-form-fill input");

function handleResetClick() {
  for (const input of inputsForm) {
    input.value = "";
  }
  //se usan los valores por defecto.
  cardName.innerHTML = defaultData.name;
  cardJob.innerHTML = defaultData.job;
  cardEmail.href = defaultData.email;
  cardEmail.title = "";
  cardTelephone.href = defaultData.tel;
  cardTelephone.title = "";
  cardLinkedin.href = defaultData.linkedin;
  cardLinkedin.title = "";
  cardGithub.href = defaultData.github;
  cardGithub.title = "";
  profileImage.src = "/images/joker.jpg";
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
const shareError = document.querySelector('section.card-error');
const myForm = document.querySelector('form');

myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  dropdown.classList.add('hiden');
  dropdown2.classList.add('hiden');
  dropdown3.classList.remove('hiden');

  console.log(dataCard);



// FETCH:
const buttonCardshare = document.querySelector(".js-botton-share");
const createdCard = document.querySelector+(".js-card-info");

const handleCardshare = (ev) => {
    ev.preventDefault();
  //lo he movido porque si no, no valida el
  //lo he movido porque si no, no valida el formulario
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    body: JSON.stringify(dataCard),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((data) => { 
    shareSection.classList.add("hiden");
    shareError.classList.add("hiden");

    if(data.cardURL) {
      const shareLink = document.querySelector('.card-info__link');
      shareLink.href = data.cardURL;
      shareLink.innerHTML = data.cardURL;
      shareSection.classList.remove('hiden')
    } else {
      const errorMessage = document.querySelector('.card-error__message');
      errorMessage.innerHTML = data.error;
      shareError.classList.remove('hiden');
    }
  })
  .catch((error) => {
    const errorMessage = document.querySelector('.card-error__message');
    errorMessage.innerHTML = error;
    shareSection.classList.add("hiden");
    shareError.classList.remove('hiden');
  });

  shareSection.classList.remove('hiden');
});

buttonCardshare.addEventListener("click", handleCardshare);



//TWITTER

const twitter = document.querySelector('.js-share-twitter');

const newsharetwitter = document.createElement('a');
newsharetwitter.setAttribute('href', "https://twitter.com/intent/post?text=Hello%20world");
newsharetwitter.className = "twitter-share-button";
newsharetwitter.dataset.size = "large";
twitter.appendChild(newsharetwitter);
