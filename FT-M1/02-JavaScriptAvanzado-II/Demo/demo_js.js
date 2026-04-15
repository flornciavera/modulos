//EJEMPLO 1

function saludar(saludo) {
  // var saludo = 'Hola'  ----------> Queda guardado en el lexical enviroment de forma privada y puede ser accedida mas adelante

  return function (nombre) {
    return saludo + ' ' + nombre;
  };
}

var saludarHola = saludar('Hola'); // devuelve una funcion
//function(nombre){
//   console.log(saludo + ' ' + nombre)
// }

var saludarChau = saludar('Chau');

console.log(saludarChau('Jime'));
console.log(saludarHola('Mati'));
console.log(saludarHola('Toni'));
console.log(saludarHola('Fran'));

// contexto saludar -->   lexical enviroment : var saludo = 'Hola' --> se destruye pero queda guardado 'Hola'

// Todo lo del contexto saludar se destruye menos su variable saludo(el argumento que recibe en el contexto global)
// Esa variable se almacena en la memoria de forma privada e inmodificable
// A eso se le llama closure

// contexto saludarHola --> lexical enviroment: var nombre = 'Jime'
// contexto global ---> lexical enviroment: var saludarHola('Hola) --> funcion

/////////////////////////////////////////////////////////////////////////////////////

// EJEMPLO 2

function multiplica(num) {
  // var num : 5  --> el argumento que reciba mi funcion va a quedar guardado en memoria para ser utilizado mas adelante

  return function (b) {
    return num * b;
  };
}

var multiplicaPor2 = multiplica(2); // return function (b){
//   return num * b
// }

console.log(multiplicaPor2(4));
console.log(multiplicaPor2(6));

//OTRA FORMA DE EJECUTAR CLOSURE
console.log(multiplica(4)(4));

// PUEDO GENERAR MULTIPLES VARIABLES CON DISTINTOS CLOSURES, CADA UNA CON SU RESPECTIVO ESPACIO EN MEMORIA Y CONTEXTO DE EJECUCION
var multiplicaPor3 = multiplica(3);
console.log(multiplicaPor3(3));
console.log(multiplicaPor3(4));

var multiplicaPor5 = multiplica(5); // return function (b){
//                                //   return num * b
//                                // }

// Distintas formas de aprovechar la utilidad del closure
for (var i = 0; i <= 10; i++) {
  console.log(multiplicaPor5(i));
}


///////////////////////////////////////////////////////////////////////////////////////////

var creaFuncion = function () {
  var arreglo = [
    function () {
      console.log(i);
    },
    function () {
      console.log(i);
    },
    function () {
      console.log(i);
    },
  ]; // Esto es lo que nos va a devolver el array, fijense que toma el valor de memoria de i una vez terminado el loop.
  //          3
  for (var i = 0; i < 3; i++) {
    arreglo.push(function () {
      console.log(i);
    });
  }
  return arreglo;
};
var arr = creaFuncion();

arr[0]();
arr[1]();
arr[2]();

//var arreglo = [function(){console.log(i)}	, function(){	console.log(i)}	, function(){	console.log(i)}	];

///////////////////////////////////
// var creaFuncion: function(){...}
// var arr : creaFuncion()

// crea funcion memory:
// i : 3 --> queda guardado en la memoria el valor de i al finalizar la funcion y por eso devuelve 3,3,3

// contexto global -->fase creacion
///////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EJEMPLO DE IIFE

var creaFuncion2 = function () {
  var arreglo = [];
  // var arreglo = [function(){console.log(0)}	, function(){	console.log(1)}	, function(){	console.log(2)}	];
  
  for (var i = 0; i < 3; i++) {
    // IIFE
    arreglo.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i),
    );
  }
  return arreglo;
};

var arr = creaFuncion2();

arr[0]();
arr[1]();
arr[2]();



///////////////////////////////////////////////////////////////////////////////
// FABRICANDO FUNCIONES CON CLOSURES
function hacerSaludo( lenguaje ){
	// lenguaje queda guardado en memoria como closure
	if ( lenguaje === 'en'){
		return function(){
			return 'Hi!';
		}
	}

	if ( lenguaje === 'es'){
		return function(){
			return 'Hola!';
		}
	}
}

var saludoIngles = hacerSaludo('en');	// function(){
                                      //   return 'Hi!';
                                      // }
var saludoEspaniol = hacerSaludo('es');// function(){
                                      //   return 'Hola!';
                                      // }

console.log(saludoIngles())
console.log(saludoEspaniol())

/////////////////////////////////////////////////////////////////////
// BIND

var persona = {
  nombre: 'Guille',
  apellido: 'Aszyn',
};

var persona2 = {
  nombre: 'jime',
};

var logNombre = function () {
  // ----------> apunta al objeto global
  return this.nombre;
};
//SINTAXIS DEL BIND                   //this
var logNombrePersona = logNombre.bind(persona);
var logNombrePersona2 = logNombre.bind(persona2);
//EL BIND DEVUELVE UNA FUNCION

console.log(logNombrePersona());
console.log(logNombrePersona2());

// el primer parametro de bind es el this!
// logNombrePersona();

//Ejemplo pasando parametros
function multiplicaB(a, b) {
  return a * b;
}

var multiplcaPorDos = multiplicaB.bind(null, 2);
console.log(multiplcaPorDos(5));

////////////////////////////////////////////////////////////////////
// CALL
var persona = {
  nombre: 'Guille',
  apellido: 'Aszyn',
};

var logNombre = function () {
  return `${this.nombre} ${this.apellido}`;
};

// el primer parametro de call es el this!

console.log(logNombre.call(persona));

// Call hace lo mismo que Bind, solo que invoca la función,
// no devuelve una nueva.
// tambien bindea argumentos!

var logNombre = function (arg1, arg2) {
  return arg1 + ' ' + this.nombre + ' ' + arg2;
};
//            this    argumentos  argumentos
console.log(logNombre.call(persona, 'Hola', ', cómo estas?'));
