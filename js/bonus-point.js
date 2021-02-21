/** SPREAD OPERATOR */

let numeros = [2,3,5];

let otro_arreglo = ['hola', 'mundo']

function sumar(n1,n2,n3){
  return n1+ n2 + n3;
}

//apply aplica el contexto y desonctuye el arreglo entregando elemento por elemento
let resultado = sumar.apply(this, numeros);

//Una forma más optima de pasar los argumentos seria con spread operator [1,2,3] === 1 , 2 , 3
let resultado_2 = sumar(...numeros);

console.log(resultado);

//De esta forma es posible conbinar 2 arreglos
console.log([...numeros, ...otro_arreglo])

//Agregar un elmento al arreglo
console.log([...numeros, 7])


//También es posible combinar objetos
let objeto = {
  clave: 3
}

let objetoDos = {
  otraclave: 4
}

let newObject = {
  ...objeto,
  ...objetoDos
}
console.log(objeto);
console.log(objetoDos);
console.log(newObject);

/** FOR OF y FOR IN */

let arreglo = [2,3,4]

for(numero of arreglo){
  console.log(arreglo);
}

function saludarATodos(){
  for(nombre of arguments){
    console.log('Hola' + nombre);
  }
}

saludarATodos('Tavo', 'CodigoFacilito', 'Alumnos');