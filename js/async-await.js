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

/**AWAIT */

//La palabra reservada await se usa dentro de funciones asíncronas para esperar que la promesa se resuelva y ejecutar la siguiente acción o callback, de esta forma se evita el uso de la palabra then

let promesa = new Promise((resolve, reject)=>{
  setTimeout(resolve,500,5);
});

promesa.then((resultado) => {console.log(resultado)});

(async function(){
//asigna el resultado de la promesa a una variable
let resultado = await new Promise((resolve, reject)=>{
  setTimeout(resolve,500,5);
});

let resultado2 = await new Promise((resolve, reject)=>{
  setTimeout(resolve,500,10);
});

console.log(resultado + resultado2);

}
)();

async function showGitHubInfo(){
let response = await fetch("https://api.github.com/users/urielhdz/repos")
let repos = await response.json();
console.log(repos);
}

showGitHubInfo();