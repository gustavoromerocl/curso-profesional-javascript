/**Expresiones regulares */

//  /Hola/

//Literales, especiales (meta caracteres)
//Especiales: tipo caracter, las aserciones, agrupamientos rangos, cuantificadores, unicode property escape

/** Busqueda con expresiones regulares */

let texto = "Hola mi nombre es Gustavo y tengo 30 años";

//busqueda del indice a partir de expreiones regulares
console.log(texto.search(/Gustavo/));

//La expresion regular \d busca la posicion de el primer digito dentro de la cadena
console.log(texto.search(/\d/));

//Esta expresion retorna los digitos o coincidencias de la expresion ingresada
console.log(texto.match(/\d/g));

//Retorna las cadenas unidas
console.log(texto.match(/\d+/g));

/** Reemplazando patrones */

//Si se agrega g a la expresion regular, realiza el cambio en todas las instancias de la cadena
let nuevoTexto = texto.replace(/Gustavo/g,"Gustavo Romero");

console.log(nuevoTexto);
