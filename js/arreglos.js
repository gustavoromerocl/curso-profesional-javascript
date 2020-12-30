/**Arreglos */

//Recorrer un arreglo

let arreglo = [1,2,3,4,5];
//ciclo for tradicional
for(let i = 0; i < arreglo.length; i++){
    let elemento = arreglo[i];
    console.log(elemento);    
}

//Métodos y operaciones sobre arreglos

let array = ['ruby', 'python', 'java', 'javascript'];

//FILTER: Elimina un elemento de la lista, el metodo filter en este caso retorna todos los elementos que cumplan con la condicion en un nuevo array
container = array.filter(function(el){
    return el != 'ruby';
})
console.log('filter1: ',container);

container2 = array.filter((el) => el != 'python')

console.log('filter2',container2);

//container.forEach((elemento) => console.log(elemento));

//FOREACH: itera sobre cada uno de los elementos del arreglo
array.forEach(function(elemento){
    console.log(elemento);
});

//FIND: Sirva para saber si un elemento existe dentro de un arreglo

let elemento_encontrado = array.find((el) => el == 'javascript');
console.log("Elemento encontrado: ",elemento_encontrado);

//MAP: Sirve para aplicar la funcion a todos los elementos en un nuevo array

let numbers = ["1", "2", "3", "4", "5"];

let numeros_enteros = numbers.map((el) => parseInt(el))
console.log(numeros_enteros);