'use strict'
// No cambies los nombres de las funciones.

//function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  function partition( array, left, right ) {
    var	pivot = array[Math.floor((left + right)/2)],
      i 	  = left,
      j 	  = right;
  
    
    while ( i <= j ) {
  
      while ( array[i] <  pivot ) {
        i++;
      }
  
      while ( array[j] >  pivot ) {
        j--;
      }
  
      if ( i <= j ) {
        swap(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  }
  
  function swap( array, leftIndex, rightIndex ) {
    var left = array[leftIndex],
      right = array[rightIndex];
  
    array[leftIndex] = right;
    array[rightIndex] = left;
  }
  
  function quickSort( array, left, right ) {
  
      var index;
  
      if (array.length > 1) {
  
          index = partition(array, left, right);
  
          if (left < index - 1) {
              quickSort(array, left, index - 1);
          }
  
          if (index < right) {
              quickSort(array, index, right);
          }
  
      }
  
      return array;
  }
  
  var array = [4,2,6,5,3,9] //|| ['mario','luan', 'santos', 'de', 'souza'];
  var result = quickSort(array, 0, array.length - 1);
  //var result = quickSort(array);
  console.log(result);

//}

//function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
//}
function merge(arr1, arr2) {
    let merged = [];
// index for arr1
    let index1 = 0;
// index for arr2
    let index2 = 0;
while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            merged.push(arr1[index1]);
            index1++;
        } else {
            merged.push(arr2[index2]);
            index2++;
        }
    }
while (index1 < arr1.length) {
        merged.push(arr1[index1]);
        index1++;
    }
while (index2 < arr2.length) {
        merged.push(arr2[index2]);
        index2++;
    }
return merged;
}

function mergeSort(arr) {
  // base case
  if (arr.length < 2) return arr;
let mid = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid);
return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

var array = [4,2,6,5,3,9] || ['mario','luan', 'santos', 'de', 'souza'];
//var result = mergeSort(array, 0, array.length - 1);
var result = mergeSort(array);
console.log(result);



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
