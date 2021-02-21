//npm install request
//node "nombre del archivo"

const request = require('request');

//Un CallBack es una funcion que se pasa como parametro a otra función asíncrona, esta se ejecuta despues de completar la primera peticion (async)
request('http://google.com', function(){
  console.log('Termine la peticion de Google');
});

console.log('Yo voy despues de la patición en el codigo');