/**Funciones y el Scope */

//Declaración de funciones

function cuadrado(numero){
    return numero * numero;
}

let cuadrado_de_dos = cuadrado(2);

console.log(cuadrado_de_dos)

//Qué es el scope (Alcance)

var nombre = "Gustavo"; //Scope global

function saludar(){
    //Scope local
    console.log("hola " + nombre );
}

saludar();

function switch_nombres(){
  var nombre = "Marcos"
  console.log(nombre) //Scope local
}

switch_nombres() //scope local
console.log(nombre) //Scope global

//Cuando usar let, const y var

function mayor_de_edad(edad){
  if(edad >= 18){
    var resultado = "Eres mayor de edad";//el scope o alcance esta dentro de las llaves de la funcion mas próxima
  }
  else{
    let resultado = "Eres menor de edad"; //El scope o alcance esta dentro de las llaves mas proximas
  }

  console.log(resultado);
}

mayor_de_edad(18);
