'use strict'

const { cache } = require("@11ty/eleventy/src/TemplateCache");

function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
/*
  var incremento = 0;
  return function(){
    incremento++;
    return incremento;
  }
}
var newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
*/

let counter = 0;

 return function () {
   counter++;
   return counter;
 };

// return {
//   suma1 : function(){
//     counter++
//     return counter
//   },
//   resta1: function(){
//     counter--
//     return counter
//   },
//   total: function(){
//     return counter
//   }
//  }
 }

//  var newCounter = counter(); // function (){...}
// console.log(newCounter())
// console.log(newCounter())
// console.log(newCounter())
//  console.log(newCounter.suma1())
//  console.log(newCounter.suma1())
// console.log(newCounter.suma1())
// console.log(newCounter.suma1())
//  console.log(newCounter.resta1())
//  console.log(newCounter.total())
// console.log(newCounter.total())
// console.log(newCounter())
// console.log(newCounter())
// console.log(newCounter())
// console.log(newCounter())
// console.log(newCounter())
// console.log(newCounter())
// console.log(newCounter())

// var counter2 = counter()
// console.log(counter2())
// console.log(counter2())
// console.log(counter2())
// console.log(counter2())


function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!

  let cache={};

  return function(val){
   if (!cache.hasOwnProperty(val)) {
    cache[val]=cb(val);
   }
    return cache[val];
  }
}


/*
var cache = {};
  return function (argument){
  if (!cache.hasOwnProperty(argument)){
    cache[argument]=cb(argument);
   } else {
    console.log('La encontró en el cache');
   }
  return cache[argument];
  }
}

var test = cacheFunction(function(x){
  return x*x;})
console.log(test(5));
console.log(test(10));
console.log(test(5));
console.log(test(5));
*/

 /*
  var cache = {
    elemento1: resultado1
  }
  */

  // function que retorna una function --> genero un closure
  // lo que guarde en memoria --> un objeto que guarde los elementos usados
  // si es la primera vez que yo ejecuto el callback, el resultado lo guardo en un objeto (cache)
  // sino es es la primera vez que ejecuto el callback , busco el resultado en mi objeto (cache)
//   var cache = {
//   };

// return function (x) {
//   if (!cache.hasOwnProperty(x)) cache[x] = cb(x);
// si no tengo cache[x] ---> ejecutar el callback y asignar el valor      
//   return cache[x]; // devuelvo el valor de cache[x]
 
// };
// }





// Bind

var instructor = {
  nombre: "Franco",
  edad: 25
}

var alumno = {
  nombre: "Juan",
  curso: "FullStack"
}

function getNombre(){
  return this.nombre;
}
 // Escribir código, sin modificar lo que ya se encuentra escrito arriba, para poder llamar al método getNombre para obtener primero el nombre del instructor y luego para obtener el nombre del alumno.
// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que bindear el this!

//let getNombreInstructor=getNombre.bind(instructor);
//console.log(getNombreInstructor());

//let getNombreAlumno=getNombre.bind(alumno);
//console.log(getNombreAlumno());

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);



/*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena"
y el delimitador especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces luego:

1. textoAsteriscos
2. textoGuiones
3. textoUnderscore

Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole un argumento en vez de los tres que recibe "crearCadena"

*/
 
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
     return delimitadorIzquierda + cadena + delimitadorDerecha;
 }


let textoAsteriscos = crearCadena.bind(null,'*','*');
console.log(textoAsteriscos('Aparicio'));

let textoGuiones = crearCadena.bind(null,'-','-');
console.log(textoGuiones('Aparicio'));

let textoUnderscore = crearCadena.bind(null,'_','_');
console.log(textoUnderscore('Aparicio'));

// function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
//     return delimitadorIzquierda + cadena + delimitadorDerecha;
// }

// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que usar bind para "bindear" algunos parámetros de la función crearCadena.

// let textoAsteriscos = crearCadena.bind(null,'*','*');

// console.log(textoAsteriscos('nueva'))

// let textoGuiones = crearCadena.bind(null,'-','-');
// console.log(textoGuiones('nueva'))


// let textoUnderscore = crearCadena.bind(null,'_','_');



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
