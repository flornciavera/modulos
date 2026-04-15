//const { queue } = require("@11ty/eleventy-cache-assets");
// const {
//   Queue,
//   Node,
//   LinkedList,
//   BinarySearchTree
// } = require('./DS.js')



function Queue() {
    this.array = [];
  }
  
  Queue.prototype.enqueue = function(elemento) {
    return this.array.push(elemento);
  }
  
  Queue.prototype.dequeue = function() {
    return this.array.shift();
  }
  
  Queue.prototype.size = function() {
    return this.array.length;
  }

  Queue.prototype.peek= function() {   //peek retorna el 1ro de la cola sin borrarlo
    return this.array[0];
  }

  Queue.prototype.isEmpty= function() {   //Retorna True si la cola está vacía
    return this.array.length === 0;
  }
  Queue.prototype.print= function() {   //Retorna True si la cola está vacía
    return this.array;
  }
  
  function LinkedList() {
    this.head = null;
  }
  
  LinkedList.prototype.add = function(valor) {
    var nuevoNodo = new Node(valor);
  
    if(!this.head){
      this.head = nuevoNodo;
    } else {
      var tailActual = this.head;
      while (tailActual.next !== null) {
        tailActual = tailActual.next;
      }
      tailActual.next = nuevoNodo;
    }
  }
  
  LinkedList.prototype.remove = function() {
    if(!this.head){
      return undefined;
    }
  
    if(this.head.next === null){
      var unicoNodo = this.head;
      this.head = null;
      return unicoNodo.value;
    }
  
    var nodoActual = this.head.next;
    var nodoPrevious = this.head;
    while (nodoActual.next !== null) {
      nodoPrevious = nodoActual;
      nodoActual = nodoActual.next;
    }
    nodoPrevious.next = null;
    return nodoActual.value;
  }
  
  LinkedList.prototype.search = function(arg) {
    var nodoActual = this.head;
  
    if(nodoActual === null){
      return null;
    }
  
    while (nodoActual !== null) {
      if(typeof arg === "function"){
        if(arg(nodoActual.value)){
          return nodoActual.value;
        }
      } else if(nodoActual.value === arg){
          return nodoActual.value;
      }
      nodoActual = nodoActual.next;
    }
  
    return null;
  }
  
  function Node(valor){
    this.value = valor;
    this.next = null;
  }

  var printlist=''
  LinkedList.prototype.print02 = function () {
    printlist = 'head';
    let current = this.head;
    while (current) {
      printlist += ' --> ' + current.value;
      current = current.next;
    }
    printlist += ' --> null';
    console.log (printlist);
    return printlist;
  };
  
  




  function BinarySearchTree(valor) {
    this.value = valor;
    this.left = null;
    this.right = null;
  }
  
  BinarySearchTree.prototype.insert = function(value) {
  
    if(value < this.value){
      if(this.left === null){
        var newTree = new BinarySearchTree(value);
        this.left = newTree;
      } else {
        this.left.insert(value);
      }
    } else {
      if(this.right === null){
        var newTree = new BinarySearchTree(value);
        this.right = newTree;
      } else {
        this.right.insert(value);
      }
    }
  }
  
  BinarySearchTree.prototype.size = function() {
    if(this.value === null){
      return 0;
    }
  
    if(this.left === null && this.right === null){
      return 1;
    }
  
    if(this.left === null){
      return 1 + this.right.size();
    }
  
    if(this.right === null){
      return 1 + this.left.size();
    }
  
    return 1 + this.left.size() + this.right.size();
  }

// const {
//     Queue,
//     Node,
//     LinkedList,
//     BinarySearchTree
// } = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
 // Tu código aca:

//para permitir el aplanamiento a nivel profundo use recursión con reduce y concat

//var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

// function aplanaVeloz(arr1) {
//    return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(aplanaVeloz(val)) : acc.concat(val), []);
// }

}

/*
// formula canonica
//aplanaVeloz(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

var arr2 = [1,2,3];
var val=7;
console.log(Array.isArray(val));




console.log(arr2.concat(val))



function aplanaVeloz(arr1){ return arr1.reduce(function(acc, val){ if (Array.isArray(val)) {return acc.concat(aplanaVeloz(val));} 

else { return acc.concat(val), [] } }) };


console.log(aplanaVeloz(arr1)); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

acc.concat()

*/

//para permitir el aplanamiento a nivel profundo use recursión con reduce y concat

var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

 function aplanaVeloz(arr1) {
  return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(aplanaVeloz(val)) : acc.concat(val), []);
 }

console.log(aplanaVeloz(arr1))

var arr2=aplanaVeloz(arr1);

console.log(arr2);

let suma=arr2.reduce((tot,current)=>tot+current);

console.log(suma);

console.log(arr1.flat());



// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:

}

var obj = {
  a: {
    a1: 10,
    a2: 'Franco',
    a3: {f: 'r', a: 'n', c: {o: true}}
  },
  b: 2,
  c: [1, {a: 1}, 'Franco']
}

var contador=0;

function contarprop(){for(let clave in obj) {  if (typeof clave === 'object') { clave= clave.clave ; return contarprop(clave);
} else { contador++; }}};

contarprop(obj);
console.log(contador);

contador=0;

var claves=[];
/*
function contarprop02(){claves = Object.keys(obj);
  for(let i=0; i< claves.length; i++){
    let clave = claves[i];
    console.log(obj[clave]);
    console.log(typeof obj[clave])
    if (typeof obj[clave] === 'object') {
      contador++;
      console.log(contador);
      //return contarprop02(obj[clave]);
    }
                                      }
                                    };

contarprop02(obj);
console.log(claves);
console.log(contador);
*/

// var cantprop = Object.keys(obj).length;
// console.log(cantprop);

// var cantprop2 = Object.getOwnPropertyNames(obj);
// console.log(cantprop2);

// var arr = Object.keys(obj).map(function (key) {return [Number(key), obj[key]];});
// console.log(arr);

// function cuentaprop(obj) {
//   return obj.reduce((acc, val) => Array.isArray(val) ? acc.concat(cuentaprop(val)) : acc.concat(val), []);
//  }




/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho'] y la función debería haber devuelto el valor 1

// LinkedList.prototype.changeNotNumbers = function(){
//     // Tu código aca:

// }

//ESTA FUNCION ES SIMPLEMENTE PARA QUE EL CONSOLE LOG DE LA LISTA SEA MAS LINDO





LinkedList.prototype.changeNotNumbers = function() {
	var current = this.head;
	while (current.next!=null) {
		console.log(current.value);
		current = current.next;
    if (typeof current.value  === 'string' && isNaN(current.value)) {
      current.value='Kirikocho';
    }
  } 
  //typeof current.value  === 'number'
  //!isNaN(current.value
	console.log(current.value);
}

listanum = new LinkedList();

//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']

listanum.add(1);
listanum.add('2');
listanum.add(false);
listanum.add('Franco');

listanum.print02();
console.log (printlist);
listanum.changeNotNumbers();
listanum.print02();
console.log (printlist);
listanum.search()

console.log(listanum.search(1));
console.log(listanum.search('2'));
console.log(listanum.search(false));
console.log(listanum.search('Franco'))
console.log(listanum.search('Kirikocho'))


// expect(listOne.search(1)).toBe(1)
// expect(listOne.search('2')).toBe('2')
// expect(listOne.search(false)).toBe(false)
// expect(listOne.search('Franco')).toBe(null)
// expect(listOne.search('Kiricocho')).toBe('Kiricocho')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.
var mergeQueue = new Queue
var mergeQueues = function(queueOne, queueTwo) {
    // Tu código 
/*
    for (let i = 0; i < queueOne.length; i++) {
      const element1 = queueOne[i];
      newQ.enqueue(element1);
      for (let j = 0; j < array.length; j++) {
        const element2 = array[j];
        newQ.enqueue(element2);
      }

    }
    return newQ; */
    var temp = new Queue;
    while (queueOne.isEmpty) {
      var primcola1=queueOne.peek();
      temp.enqueue(primcola1);
      queueOne.dequeue();

      // while (!queueTwo.isEmpty) {
      //   var primcola2=queueTwo.peek()
      //   mergeQueue.enqueue(primcola2);
      //   queueTwo.dequeue();
        
      // }
    }
return temp;
}
// - queueOne: [7,3,5]
var queueOne=new Queue;
queueOne.enqueue(7);
queueOne.enqueue(3);
queueOne.enqueue(5);
//queueOne.dequeue();
console.log(queueOne);

// - queueTwo: [2,4,6]
var queueTwo=new Queue;
queueTwo.enqueue(2);
queueTwo.enqueue(4);
queueTwo.enqueue(6);

console.log(queueTwo);

//var primcola1 = queueOne.peek()
//var primcola2 = queueTwo.peek()

//console.log(primcola1)
//newQ.enqueue(primcola1);
//newQ.enqueue(primcola2);

// mergeQueue=mergeQueues(queueOne,queueTwo);

// console.log(mergeQueue);

// console.log(mergeQueue.print());







// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:

}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:

}

// module.exports = {
//     countArray,
//     countProps,
//     mergeQueues,
//     closureMult
// }