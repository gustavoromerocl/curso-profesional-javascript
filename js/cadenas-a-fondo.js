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

/** Búsqueda */

console.log(cadena.indexOf("Mundo"));
//retorna -1 cuando es falso 
if(cadena.indexOf("Mundo") > 0 ) console.log("Encontrado");

//retorna true o false
if(cadena.includes("Mundo")) console.log("Encontrado");

let link = "https://codigofacilito.com/";

if(link.startsWith("https")) console.log("Es un link seguro");
if(link.endsWith("com/")) console.log("Es un link seguro también");

/** Cadenas y arreglos */

//El metodo split separa las palabras en un nuevo arreglo
let texto = "Estoy aprendiendo javascript con el curso de CodigoFacilito";
//El metodo split separa las palabras en un nuevo arreglo
let palabras = texto.split(" ");
console.log(palabras);
console.log(palabras.length);
//El metodo join une las palabras en una cadena
console.log(palabras.join(""));

function filtroDeMarcas(str){
    let marcas = ['CodigoFacilito']
    let palabrasFiltradas = str.split(" ").map(
        palabra => {
            return marcas.includes(palabra) ? "XXX" : palabra
        }
    );
    return palabrasFiltradas.join(" ");
}

console.log(filtroDeMarcas(texto));