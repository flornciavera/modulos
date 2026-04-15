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
  Queue.prototype.print= function() {   
    return this.array;
  }
    
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.
var mergeQueue = new Queue();
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

mergeQueue=mergeQueues(queueOne,queueTwo);

console.log(mergeQueue);

console.log(mergeQueue.print());
