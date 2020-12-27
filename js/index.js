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


