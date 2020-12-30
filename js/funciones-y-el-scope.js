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

//Argumentos a funciones

function cuadrados(numero = 0){ //Parametro// Es posible incializar el parametro para evitar errores de ejecución
  return numero * numero;
}

cuadrados(2); //Argumento

function suma_todos(){
  return arguments[0] + arguments[1]; //propiedad de js para recibir argumentos.
}

console.log(suma_todos(1,2));

//Funciones Anónimas

function executor(funcion){
  funcion();
}

function decirHola(){
  console.log("Hola");
}

//executor(decirHola) //Se puede llamar a la funcion sin parentesis

executor(function () {
  console.log("Hola") //Función anónima
});

//El Contexto 

//this hace referencia al objeto que contiene el codigo.-
function demo (){
  console.log(this);
}

demo();

let objeto = {
  demo: function(){
    console.log(this)
  }
}

objeto.demo();

let executorThis = {
  funcion: null,
  execute: function(f){ 
    this.funcion = f; 
    this.funcion(); }  //si agregamos la funcion como propiedad de el objeto que la llama el conexto vuelve a ser local
}

executorThis.execute(objeto.demo) // retorna el contecto global puesto que esta siendo llamado desde una funcion y no desde el objeto.  

let usuario = {
  nombre: "Gustavo",
  apellido: "Romero",
  nombreCompleto: function(){
    console.log(this.nombre + ' ' + this.apellido);
  }
}

usuario.nombreCompleto();
executorThis.execute(usuario.nombreCompleto) //Retorna undefined ya que el contexto desde donde se ejecuta cambia, por lo que this no encuentra los valores de nombre y apellido


//Arrow Functions

let demoArrow = () =>{
  console.log("Hola mundo");
}

demoArrow();

let suma = (a,b) => a + b;

console.log(suma(2,3));

