console.log("Hola mundo") //Impresion de datos
//prompt() //Recibe un dato mediante un input y lo imprime por consola

//Variables: El valor cambia en tiempo de ejecución
let nombre = "Gustavo";
var apellido = "Romero";

//Constante: El valor no cambia en tiempo de ejecución
const pi = 3.1416;

//operaciones aritmeticas + - / * %

/*Utilidades de la clase Math*/
console.log(Math.PI)    //Retorna el valor de PI
console.log(Math.pow(10,2)) //Elevar un número al cuadrado
console.log(Math.pow(10,3)) //Elevar un número a el cubo
console.log(Math.round(6.5)) //Redondea el número que recibe
console.log(Math.sqrt(4)) //Raíz cuadrada del número que recibe

/*Booleanos*/
let booleano = new Boolean(1);
console.log(booleano.toString());

//Valores que retornan falso = undefined, NaN, null, 0, -0, "", false


/*Operadores de comparación*/
let edad = 24;

console.log(edad == 24) //True
console.log(edad == 20) //False
console.log(edad != 20) //True
console.log(edad > 20) //True
console.log(edad < 20) //False
console.log(edad <= 20) //False
console.log(edad >= 20) //True

console.log(24 == "24")//True
console.log(24 === "24")//False - Comparación estricta
console.log(edad === 24)//True - Comparación estricta
console.log(edad !== 24)//True - Comparación estricta

/**Operadores Lógicos (true o false)*/

24 == 24 && "hola" == "hola" // Operador AND 
24 == 24 || "hola" == "hola" // operador OR 
!(24 == 24 || "hola" == "hola") // operador NOT 

/**Condiciones */
if(24 == 24 && "hola" == "hola") {
    console.log("condicion complida")
}else if (24 == 24 || "hola" == "hola"){
    console.log("condicion complida")
}else{
    console.log("Se ejecuta si ninguna ")
};

/**Ciclos */

for(let i = 1; i <= 10; i++){
    if(i > 5) break; //Si se ejecuta detiene el ciclo
    console.log(i);
};

for(let i = 1; i <= 10; i++){
    if(i % 2 == 0) continue; //Si se cumple la condicion ejecuta el ciclo
    console.log(i);
};

//While evalua primero la ciondicion y luego ejecuta el codigo
let i = 1;
while(i <= 10){
    console.log(i);
    ++i;
}

//DoWhile se ejecuta al menos una vez antes de evaluar la condicion
let j =1;
do{
    console.log(j);
    ++j;
}while(j <= 10)

/**Undefined, Null y NaN */

//Undefined : La variable no ha sido incializada con ningun valor
let numero;
console.log(typeof(numero));

//Null: Es un dato vacio que corresponde a un object
numero = null;
console.log(typeof(numero));

//undefined es un tipo de dato, mientras que null es un object, sin embargo ambos representan un valor vacio
console.log(null === undefined)
console.log(null == undefined)

//NaN: Indica que el valor no es un número
console.log("sadjasdk" * 3);

//Infinity: Indica un valor decimal infinito
console.log(100/0);

//Ejercicios del bloque

// 1- Tomando como entrada un número entero, imprimir si es par o impar.

/**
let number = prompt();
if(number % 2 == 0){
    console.log("El número es par");
}else{
    console.log("El numero es impar");
}
*/

//2- Recibir dos números usando prompt y sumarlos, restarlos, dividirlos y multiplicarlos

/**
let number1 = prompt();
let number2 = prompt();


console.log('resta: ', number1-number2);
console.log('division: ', number1/number2);
console.log('multiplicacion: ', number1*number2);
console.log('suma: ', parseInt(number1) + parseInt(number2));
*/

//3- Imprimir la sucesión fibonacci el número de veces que indicó el usuario

//4- Programar el juego del "Número Mágico" en el que se define un número y el usuario trata de adivinarlo, si el número que ingresó el usuario es menor, imprimir la pista "El número mágico es mayor", si el número que ingresó el usuario es mayor, imprimir la pista "El número mágico es menor",
 
/**
let numeroMagico = 7;
let input = null;

 do{
      input = prompt()
      if(input > numeroMagico)console.log("El número mágico es menor") 
      if(input < numeroMagico)console.log("El número mágico es mayor") 
 }while(input != numeroMagico);
 */
