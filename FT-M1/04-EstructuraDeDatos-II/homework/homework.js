'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null;
  this._length = 0;

}

function Node(value){
  this.value = value;
  this.next = null;

}

 let list = new LinkedList();

// Caso 0 
// List --> null // Si mi lista está vacia, insertar el nodo en el this.head

// caso 1
// List --> 1 --> 2 -->3 --> 4 --> null // Recorrer la lista hasta el final, e insertar el nodo donde sea null

LinkedList.prototype.add = function(value){
  let node = new Node(value);
  let current = this.head;
 // caso 0 Lista Vacía
 if (!current){
   this.head = node;
   this._length++;
   return node;
 }
 // caso 1 tengo items en la lista
 while (current.next){
   current = current.next;
 }
 current.next= node;
 this._length++
 return node
}


list.add(1);
list.add(2);
list.add(5);
list.add(3);
list.add(8);

LinkedList.prototype.remove = function(){
// Caso 0 
// List --> null // Si mi lista está vacia, insertar el nodo en el this.head

// caso 1
// List --> 1 -->  null // Si mi head existe y el next es null.
//          v      next
// aux = {value:1 , next: null}
// caso 2
// List --> 1 --> 2 -->3 --> null // Recorrer la lista hasta el final, e insertar el nodo donde sea null

let current = this.head;

// caso 0
if(!current) return null; // esto es null

// caso 1

if (current && !current.next){
  let aux = current.value; // value:1 
  this.head = null;
  this._length--;
  return aux;
}
// caso 2
while(current.next.next){
  current=current.next;
}
let aux = current.next.value //:3
current.next=null;
this._length--;
return  aux;

}

// List --> 1 --> 2 -->3 --> null
//          v
//list.search(3)
LinkedList.prototype.search = function(value){
  
  let current = this.head;
  
  while(current){
   // caso 0, no me pasan funcion
    if(current === current.value) {return value;}
  // caso 1, me pasan funcion y tengo que ver que sea eso
    else if (typeof value === 'function') {
      if (value(current.value) ){
        return current.value;
      }
    }
    current = current.next;
  }
  return null;
}

LinkedList.prototype.print= function() {
  let result = ['Head'];
  let current = this.head;
  while (current) {
      result.push(current.value);
      current = current.next;
  }
  result.push('null');
  console.log(result.join(' => '));    // 
};

list.print()

//ESTA FUNCION ES SIMPLEMENTE PARA QUE EL CONSOLE LOG DE LA LISTA SEA MAS LINDO
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

list.print02();
console.log (printlist);


// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.


//Las estructuras de datos Hash se dividen en dos partes:

//La estrcutura (funcion constructora)
function HashTable(){
  this.armario = {}; //Puede armarse de muchas formas, en este caso hicimos un simple obj
}


//La funcion hash
HashTable.prototype.hash = function(string){
  return string[0] // Es muy mala esta por favor no la usen asi jaja
}


//La funcion set va a setearnos lo que nosotros le pasemos en alguno de los cubiculos.
HashTable.prototype.set= function(nombre, campera){
  let llave = this.hash(nombre); // tenemos que crear una llave, con lo cual pasamos el argumento recibido a la funcion hash
  this.armario[llave] = campera // y le asignamos una posicion en nuestro armario
}

//La funcion set es cuando nosotros le traemos el ticket al empleado del guardarropas y sabe el qué y donde lo tiene que ir a buscar.
HashTable.prototype.get = function(nombre){
  let llave = this.hash(nombre); // Generamos la llave con el mismo nombre que habiamos recibido antes
  return this.armario[llave] // Devolvemos lo que sea que este guardado en ese cubiculo.
}

var ropero = new HashTable()
console.log(ropero)
ropero.set('mati', 'roja')
console.log(ropero.get('mati'))



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
