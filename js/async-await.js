/**ASYNC */
const fetch = require("node-fetch");
//La palabra reservada asyn permite declarar funciones asíncronas, retornando de forma implicita una promesa
async function suma(valor1, valor2){
  return valor1 + valor2;
  //return Promise.resolve()
}

//En este ejemplo se puede apreciar lo que resuelven de forma interna las funciones asyncronas 
async function calcular() {
  return new Promise((resolve, reject)=>{
    setTimeout(resolve,500,5);
  });
};

