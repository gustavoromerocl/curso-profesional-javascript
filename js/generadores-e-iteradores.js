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


/**DELEGAR GENERADORES */

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