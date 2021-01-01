/**Objetos */

//Declarar un objeto con JSON (JavaScript Object Notation)

let curso = {
    titulo: 'Curso Profesional de Javascript',
    duracion: 2.2,
    formato: 'Video',
    bloque: ['Introduccion', 'Funciones'],
    inscribir: (usuario) => console.log(usuario + ' ahora esta inscrito')
}

console.log(curso.titulo);
console.log(curso['titulo']);
curso.inscribir('Gustavo');

curso.titulo = 'Curso base de javascript';

console.log(curso.titulo);

curso['inscribir'] = function(){};

//Funciones constructoras

function Curso(titulo){
    this.titulo = titulo
    this.inscribir = function(usuario){
        console.log(usuario + " se ha inscrito");
    }
}

let cursoJavaScript = new Curso("Curso profesional de javascript");
let cursoRuby = new Curso("Curso Ruby");

cursoJavaScript.inscribir("Romero")

console.log(cursoJavaScript.titulo)
console.log(cursoRuby.titulo)

//Clases


/**
class Ejemplo{};

let Ejemplo = class{};

let Ejemplo = class Ejemplo{}
 */


class ClaseCurso{
    //Las propiedades se declaran dentro del constructor
    constructor(titulo){
        this.titulo = titulo
    }

    //Las funciones no requieren de la palabra function
    inscribir(usuario){
        console.log(usuario + ' se ha inscrito.');
    }
}

let JavaScriptCurso = new ClaseCurso("Curso profesional de javascript");
console.log(JavaScriptCurso.titulo);
JavaScriptCurso.inscribir("Gustavo")
