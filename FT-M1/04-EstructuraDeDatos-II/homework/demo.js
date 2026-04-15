//LINKED LISTS

//Primero que nada voy a tener que crear mis funciones creadoras de estas instancias

function Node(data) {
  this.data = data; 
  this.next = null;
  
}

function List() {
  this._length = 0;
  this.head = null;
}

//LISTA: SABE DONDE ESTA EL PRIMER NODO
//NODE: SABEN DONDE ESTA EL SIGUIEN NODO


//ESTA FUNCION ES SIMPLEMENTE PARA QUE EL CONSOLE LOG DE LA LISTA SEA MAS LINDO
List.prototype.print = function () {
  let print = 'head';
  let pointer = this.head;
  while (pointer) {
    print += ' --> ' + pointer.data;
    pointer = pointer.next;
  }
  print += ' --> null';
  return print;
};



//////////////////////////////////////////////////////////////
//ITERAR TODA LA LISTA
//                                current.next ---> hace referencia al next del current (en este caso null)
// lista --> {'Fran'} --> {'Mati'} --> null
//                        iterador ---> mi iterador va a ser el current


List.prototype.getData = function () {
  let current = this.head; //El current va a ser el inicio de mi lista

  while (current !== null) { //La condicion para entrar al bucle es que si mi current no es null, que siga avanzando
    console.log(current.data); // Si entra a la condicion, consologeo la data de mi current
    current = current.next; // Actualizo la referencia de mi current al current.next, con lo cual me muevo sobre la lista
  }
};

//////////////////////////////////////////////////////
//AGREGAR AL FINAL DE LA LISTA

//Caso 1: this.head esta vacio. Simplemente piso el valor por el nuevo nodo
//lista --> null
//lista --> jime --> null

//Caso 2: this.head NO es null, con lo cual tengo que recorrer la lista hasta llegar a null (current.next === null)
//        current  current.next
//           |         |
//           v         v
//lista --> jime --> null
//lista --> jime --> mati --> null                              

//Visto en codigo:

List.prototype.addInLastPos = function (data) {
  let node = new Node(data); // Genero mi nuevo nodo
  let current = this.head;  // Guardo la referencia del head

  //Caso 1: mi lista esta vacia
  if (!current) {   // Si no tengo head, entro en esta conodicion
    this.head = node; // Piso el valor del head con el nodo que generamos en nuestra variable node
    this._length++; // Aumento el length de mi lista
    return node;  // Devuelvo el valor (podria devolver true como para informar que salio todo bien)
  }

  //Caso 2: tengo next, con lo cual mi lista no esta vacia
  while (current.next) {  // Avanzo mientras mi current.next sea distinto de null (o sea, exista)
    current = current.next; // Cambio la referencia de current, ahora va a ser el nodo guardado en current.next
  }
  //Una vez que llegue al final de la lista (que current.next === null) , genero mi nuevo nodo
  current.next = node; // current.next pasa de null a ser el nuevo nodo
  this._length++; // Aumento el length ed mi lista
  return node; // Devuelvo el valor (podria devolver true como para informar que salio todo bien)
}; 

// let lista = new List();
// lista.addInLastPos('fran');
// lista.addInLastPos('mati');
// lista.addInLastPos('jime');
// lista.addInLastPos('mora');
// console.log(lista.print());



//////////////////////////////////////////////////////////////
//AGREGAR UN NODO AL INICIO DE LA LISTA

// Si yo pisara el valor de this.head con el nuevo nodo, el nuevo nodo va a tener un next de valor null
// Que pasa con eso? De no guardar una referencia de mi lista original, voy a perder todas las referencias

// Yo tengo esta lista:
// list --> fran --> mati --> jime

// Si yo quiero agregar a fede al inicio de la lista pero no guarde la referencia del next que tenia fran, pasa lo siguiente
// list --> fede --> null

// Perdi toda la referencia que tenia fran, con lo cual pierdo mi lista.
// Yo tengo que hacer una variable auxiliar que me guarde toda la info que tiene fran:

// let aux = this.head -----> en this.head se va a guardar toda esta data --> fran --> mati --> jime
// Con lo cual yo deberia decirle a fede que su next va a ser mi auxiliar, el que tiene toda esa data.
// list
// |
// | -----> fede --> fran --> mati -->jime --> null


///////////////////////////////////////////////////////////////////////
//AGREGAR EN EL MEDIO DE LA LISTA
// Similar a cuando guardamos la referencia para agregar al inicio, con la diferencia que vamos a tener
// que guardar el current.next:
// let aux = current.next

// La diferencia es que mi funcion deberia recibir el parametro al que yo le quiero cambiar el .next .
// O sea, si quiero agregar un nodo despues de fran, deberia pasar como parametro el valor de ese nodo
// addInPos('fran') --> necesito ver si yo tengo ese .data en mi lista, como lo hago? Recorriendola.
// Una vez que llegue a ese nodo, entonces tengo que hacer el cambio de referencias.
// Mi current va a estar parado sobre fran

// list --> fran -->  mati -->     jime --> null
//          current   current.next 

//Yo quiero agregar a toni despues de fran, entonces para que no pase lo siguiente:
// list --> fran --> toni--> null

//Tengo que guardar la referencia del next de fran y asignarselo al .next del nuevo valor que estoy añadiendo
//para que mi resultado sea el siguiente:

// list --> fran --> toni--> mati --> jime --> null
                           
// EJEMPLO DE COMO FUNCIONA ESTO //

var current = {
  data: 'fran',
  next: { data: 'mati', 
          next: { 
                  data: 'jime', next: null
                } 
        },
};


aux = current.next
current.next = {data: 'toni' , next: aux }
console.log(current)
console.log(aux)

////////////////////////////////////////////////////////////////////////////


//HASH TABLE
// Es una estructura de datos que posee buckets/cubiculos donde nosotros guardamos elementos.
// Mediante un metodo hash definimos donde vamos a guardar una data, en qué cubiculo/casillero en memoria.
// Este metodo hash nos sirve para devolvernos una llave, y gracias a esa llave es que despues vamos a poder
// acceder a la data sin requerir de un tiempo muy alto de busqueda, ya que sabe donde y el qué tiene que buscar.

//El objetivo de las HashTables es poder guardar objetos en memoria sin tener ningun tipo de colision.
//Las colisiones son cuando tenemos dos elementos guardados en el mismo cubiculo. Si a nosotros nos pasara eso,
//tenemos que tener una forma de hacer que no se sobrescriban los datos y poder guardar esos dos elementos alli.

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

