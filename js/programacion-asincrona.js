//npm install request
//node "nombre del archivo"

/* PROGRAMACION ASÍNCRONA*/

/* CALLBACKS 

const request = require('request');

//Un CallBack es una funcion que se pasa como parametro a otra función asíncrona, esta se ejecuta despues de completar la primera peticion (async)
request('http://google.com', function(){
  console.log('Termine la peticion de Google');
});

console.log('Yo voy despues de la patición en el codigo');
*/

/** PROMESAS  */

//fullfield: promesa complida
//rejected: promesa no se cumple
//pending: promesa no se ha cumplido
//setled: promesa terminada

const rp = require('request-promise');

rp('http://google.com')
  .then(function(html){
    console.log('Termine la peticion de Google');
  }).catch(function(e){
    console.log(e);
  });