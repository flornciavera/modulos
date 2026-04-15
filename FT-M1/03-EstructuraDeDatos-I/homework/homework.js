'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if (n>-1 && n<2) {                      // cuando -1<x<2
    return 1;
  } else {
    if (n < 0) {return 0;} else {
      return n * nFactorial(n-1);  // cd..Queue
      }
    }
}
//nFactorial(0);
console.log(nFactorial(4));


var suma,i

function nFibonacci(n) {
  //    elementos            0  1  2  3  4  5  6  7   8   9   10  11  12
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1  // el elemento 1 es 1
  // nFibonacci(6) // 1  // el elemento 6 es 8
  
 if (n<2) {
   return n} else {
     return nFibonacci(n-2) + nFibonacci(n-1);
   }
}
console.log(nFibonacci(12))

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.
/*
function Queue() {
   this.data = [];
   this.tam=0;
}

Queue.prototype.enqueue = function(val){  // agrega un valor a la izquierda del array
  this.data.unshift(val);
  this.tam++;}


Queue.prototype.dequeue = function(val){ // sale un valor a la derecha del array
 
  this.data.pop(val)
 
  this.tam--;
}

Queue.prototype.size = function(val){
 return this.tam;}

const q = new Queue();
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)

console.log(q)

q.dequeue()
console.log(q)
q.dequeue()
console.log(q)
q.dequeue()
console.log(q)
q.dequeue()
console.log(q)

console.log(q.size())

q.enqueue(5)
console.log(q)
console.log(q.size())
q.dequeue()
console.log(q)
console.log(q.size())

q.dequeue()
console.log(q)
console.log(q.size())
*/

/*
Queue.prototype.dequeue = function(val){
  this.data.pop(val);
}

Queue.prototype.size = function(val){
  this.data.length(val);
}

const q = new Queue();

q.enqueue('The Rock')

console.log(q.size())
*/
/*
class Queue{

  constructor(){
    this.items={};
    this.front = 0;
    this.end=0;
  }
  enqueue(data) {
     this.items[this.end] = data;
     this.end++;
  }

}

const queue = new Queue();
queue.enqueue(1);

console.log(queue);

*/

class Queue {
  constructor() {
    this.array = []
  }
  enqueue(valor) {
    return this.array.push(valor)
  }
  dequeue() {
    return this.array.shift()
  }
  size() {
    return this.array.length
  }
}

const q = new Queue();
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)

console.log(q)
q.dequeue()
console.log(q)
console.log(q.size())


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
