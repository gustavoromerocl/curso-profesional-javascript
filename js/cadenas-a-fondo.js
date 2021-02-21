/**CADENAS A FONDO*/

/** Como definir una cadena */

let nombre = "Gustavo";
console.log(nombre.length);

let name = new String("Gustavo");

console.log(typeof nombre);
console.log(typeof name);

/** Caracteres especiales */


//Escaping

console.log("Prueba de \"caracteres\" ");

// \n \t



/**Concatenación e interpolación */

let a = "Hola";
let b = "Mundo";

console.log(a.concat(b));

//Template literals

let pnombre = "Gustavo";
let template = `Hola ${pnombre}, como estas?`;

console.log(template);

//Como rellenar espacios

let mes = "2";

console.log(mes.padStart(2, "0"));
console.log(mes.padEnd(2, "0"));

/** Comparación de cadenas */

console.log("a".localeCompare("a"));
console.log("v".localeCompare("z"));
console.log("B".localeCompare("a"));
console.log("z".localeCompare("q"));

let prueba = "Hola";
let segundaPrueba = prueba.toUpperCase();

console.log(prueba);
console.log(segundaPrueba);
