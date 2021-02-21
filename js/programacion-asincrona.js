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

/** PROMESAS  

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
*/

/** CREAR MIS PROPIAS PROMESAS */

const request = require('request');

function leer(url){
  return new Promise(function(resolve, reject){
    request(url, function(err, response){
      if(err){
        reject(err);
      }
      else{
        resolve(response);
      }
    });
    resolve('Todo salio muy bien');
    reject(new Error('No se pudo completar'));
  })
}

//Se ejecuta la promesa creada
leer('http://google.com')
  .then(function(response){
    console.log(response);
  }).catch(function(e){
    console.log(e);
  })

