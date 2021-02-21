/**GENERADORES E ITERADORES */

//ITERADORES 

let iterador = {
  currentValue: 1,
  next(){
    let result = {value: null, done: false}
    if(this.currentValue > 0 && this.currentValue <= 5){
      result = {value: this.currentValue, done: false}
      this.currentValue += 1;
    }else{
      result = {done: true}
    }
    return result;
  }
};
 /**
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
setTimeout(() => console.log(iterador.next()),5000);



let item = iterador.next();
while (!item.done){
  console.log(item.value);
  item = iterador.next();
}
*/


/*GENERADORES

//Las funciones generadoras * retornan generadores de forma implicita
function* counter(){
  console.log('Estoy aquí');
  yield 1;
  console.log('Ahora estoy aquí');
  yield 2;
}


//yield detiene la ejecución del ciclo for
function* counter(){
  for(var i = 1; i <= 5; i++){
    yield i;
  }
}

let generator = counter();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
*/
/**RETURN EN FUNCIONES GENERADORAS 

//Las funciones generadoras hace un return implicito de un generador, si se llama explicitamente acaba la iteración.

function* retornador(){
  return 3;
}

let g = retornador();

console.log(g.next());
*/


/**DELEGAR GENERADORES 

function* counter(){
  for(var i = 1; i <= 5; i++){
    yield i;
  }
}

let generator = counter();

//Este geenrador ejecuta otro generador en el primer yield
function* retornador(){
  yield* counter();
  console.log('Regresé');
}

let g = retornador();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

//LIBRERIAS QUE UTILIZAR GENERADORES; CO.JS REDUX-SAGA
*/



/**MANEJO DE SÍMBOLOS */

//Se usan para asegurar que una cadena no sea reemplazada por similitud en el nombre de la variable.

let simbolo = Symbol('mi-simbolo');
let obj = {};

obj[simbolo] = function(){
  console.log('Mi nombre es un simbolo')
}

obj[simbolo]();

/**ITERABLES CON ITERADORES */

let rango = {
  min: null,
  max: null,
  currentValue: null,
  [Symbol.iterator](){
    return this;
  },
  next(){
    if(this.currentValue == null) this.currentValue = this.min;
    let result = {};
    if(this.currentValue >= this.min && this.currentValue <= this.max){
      result = { value: this.currentValue, done: false};
      this.currentValue += 1;
    }else{
      result = { done: true };
    }
    return result;
  }
}

rango.min = 5;
rango.max = 10;

for(el of rango){console.log(el)};