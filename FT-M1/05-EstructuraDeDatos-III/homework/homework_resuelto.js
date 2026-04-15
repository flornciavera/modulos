'use strict';
// // resolve estos ejercicios usando recursión

// // Binary Seach Tree
// // 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// // corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// // corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// // corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// // corre breadth-first cuando breadthFirstForEach() es ejecutado
// // Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

// // function BinarySearchTree(value) {
// //   this.value = value;
// //   this.right = null;
// //   this.left = null;
// // }

// // let tree = new BinarySearchTree(20);

// // BinarySearchTree.prototype.insert = function (value) {
// //   if (value > this.value) {
// //     if (this.right !== null) this.right.insert(value);
// //     else this.right = new BinarySearchTree(value);
// //   } else {
// //     if (this.left !== null) this.left.insert(value);
// //     else this.left = new BinarySearchTree(value);
// //   }
// // };

// // BinarySearchTree.prototype.contains = function (value) {
// //   //caso de corte ?
// //   if (this.value === value) return true;

// //   if (value > this.value) {
// //     return !!this.right && this.right.contains(value);
// //   }

// //   return !!this.left && this.left.contains(value);
// // };

// // BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
// //   // Pre-order --> root - izquierda - derecha
// //   if (order === 'pre-order') {
// //     cb(this.value);
// //     this.left && this.left.depthFirstForEach(cb, order);
// //     this.right && this.right.depthFirstForEach(cb, order);
// //   }
// //   // In-order --> izquierda - root - derecha
// //   if (order === 'in-order' || !order) {
// //     this.left && this.left.depthFirstForEach(cb, order);
// //     cb(this.value);
// //     this.right && this.right.depthFirstForEach(cb, order);
// //   }
// //   // Post-order --> izquierda - derecha - root
// //   if (order === 'post-order') {
// //     this.left && this.left.depthFirstForEach(cb, order);
// //     this.right && this.right.depthFirstForEach(cb, order);
// //     cb(this.value);
// //   }
// // };

// // BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr = []) {

// //   if (this.left) arr.push(this.left);
// //   if (this.right) arr.push(this.right);

// //   cb(this.value);

// //   arr.length && arr.shift().breadthFirstForEach(cb, arr);
// // };

// // BinarySearchTree.prototype.size = function () {
// //   //caso de corte
// //   if (!this.left && !this.right) return 1;
// //   if (!this.right) return 1 + this.left.size();
// //   if (!this.left) return 1 + this.right.size();

// //   return 1 + this.left.size() + this.right.size();
// // };

// // No modifiquen nada debajo de esta linea
// // --------------------------------

// module.exports = {
//   BinarySearchTree,
// };
// resolve estos ejercicios usando recursión
// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.right = null; //referencias
  this.left = null; //referencias
  this.value = value; //creo el árbol con el valor q me pasastes
}
BinarySearchTree.prototype.insert = function (value) {
  if (this.value < value) {
    //parámetro es mayor al "nodo" que estoy checkeando?
    if (!this.right) {
      this.right = new BinarySearchTree(value, 0);
    } //no tengo algo a la derecha? tuki
    else this.right.insert(value); //sí tengo? le pregunto a él si tiene espacio
  } else if (!this.left) {
    this.left = new BinarySearchTree(value, 0);
  } //ídem con la izquierda
  else this.left.insert(value);
};
BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true;
  if (value > this.value) {
    return !!this.right && this.right.contains(value);
  }
  return !!this.left && this.right.contains(value);
};
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (order === 'in-order' || !order) {
    this.left && this.left.depthFirstForEach(cb, order);
    cb(this.value);
    this.right && this.right.depthFirstForEach(cb, order);
  }
  if (order === 'pre-order') {
    cb(this.value);
    this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
  }
  if (order === 'post order') {
    this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }
};
BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr = []) {
  if (this.left) arr.push(this.left);
  if (this.right) arr.push(this.right);
  cb(this.value);
  return arr.length && arr.shift().breadthFirstForEach;
};
BinarySearchTree.prototype.size = function () {
  if (!this.right && !this.left) {
    return 1;
  }
  if (!this.right) {
    return 1 + this.left.size();
  }
  if (!this.left) {
    return 1 + this.right.size();
  }
  return 1 + this.right.size() + this.left.size();
};
// No modifiquen nada debajo de esta linea
// --------------------------------
module.exports = {
  BinarySearchTree,
};
