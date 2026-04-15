'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  /*
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
  console.log(nFactorial(3));
  var suma,i
  */

	var factor = 2;
	var end = 1;
	var arrfactor = [];

	if (num === 1) {  // Si el num es 1 retorna [1]
    console.log(num)
	return [num];
	}
  console.log(factor)

  while (num > end) {      //Si num mayor que 1 haga...
		if(num % factor === 0) {   //Si el resto es 0
			arrfactor.push(factor);   // agrego al array factor primer cociente de la division
			num = num / factor;   // nuevo num a dividir
		} else {
 //     arrfactor.push(factor);   // agrego al array factor primer cociente de la division
      factor++;           // aumento factor
      console.log(factor)
    }
  
	}
  
  console.log(arrfactor);

	return arrfactor;   // retorno array de factores

}

factorear(180)


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  var len = array.length;
	var swap = true;
	
	for(var i=0; i<len-1 && swap; i++) {
		swap = false;
		for(var j=1; j<len-i; j++) {
			if(array[j-1] > array[j]){
				var temp = array[j-1];
		 		array[j-1] = array[j]
				array[j] = temp;
				swap = true;
			}
		}
	}

	return array;

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
	var len = array.length;

	for(var i=1; i<len; i++) {
		var j = i;
		
		while(j>0 && array[j-1] > array[j]) {
			var temp = array[j-1];
			array[j-1] = array[j];
			array[j] = temp;
			j--;
		}
	}
	return array;	
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
	var len = array.length;
	for(var i=0; i<len-1; i++) {
		var min = i;
		for(var j=i+1; j<len; j++) {
			if(array[j] < array[min]){
				min = j;
			}
		}
		temp = array[i];
		array[i] = array[min];
		array[min] = temp;
	}
	return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
