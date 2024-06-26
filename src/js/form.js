'use strict';


/* 
El formulario se mostrarà en la tarjeta
1-Crear formulario
2-Recoger la info de la usuaria cuando escriba en el input - definir variable input + crear evento.(input/keydown) - {event.target.value}
3-La info se previzualiza en la pantalla -definir las variables de la tarjeta. 
4-Iconos: Cuando la usuari@ haga click se redirigirá a un enlace.******
*/

const formName = document.querySelector (".js-form-name");
const cardName = document.querySelector (".js-card-name");
const formJob = document.querySelector (".js-form-job");
const cardJob = document.querySelector (".js-card-job");
const formEmail = document.querySelector (".js-form-email");

formName.addEventListener ("input" , (event)=>{
    const value = event.target.value;
    cardName.innerHTML = value;
} )

formJob.addEventListener ("input" , (event)=> {
    const value1 = event.target.value;
    cardJob.innerHTML = value1;
})


