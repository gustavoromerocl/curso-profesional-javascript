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

/** Subcadenas y caracteres */

console.log("hola"[0]);

let cadena = "Hola Mundo";

for(const caracter of cadena){console.log(caracter)};

//Recorre y muestra la cadenas en las posiciones indicadas
console.log(cadena.substring(0,2));
console.log(cadena.slice(2,4));
console.log(cadena.slice(-5));

//https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring#:~:text=The%20slice()%20method%20extracts,parts%20in%20a%20new%20string.&te

