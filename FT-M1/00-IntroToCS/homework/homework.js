'use strict'

function BinarioADecimal(num) {
  //tu codigo aca 
/*var SumaDecimal=0;
var numcar = num.toString();
var exponente = numcar.length - 1;
for (let index = 0; index < numcar.length; index++) {let position = Number(CharAt(index));
  SumaDecimal=SumaDecimal+Math.pow(position,exponente)*position;exponente--;
 
}
return SumaDecimal;*/

// return parseInt(num,2);
/*
var decimal=0;
var instancia = 0;
num = num.toString();

for (let i = num.length-1; i>=0; i--) {
  decimal=decimal+(num[i] * Math.pow(2,instancia));
  instancia++;
}
console.log(decimal);
return decimal;

}
*/

// convertir en array el string de binario  por ej '1101' --> ['1','1','0','1']
// luego invertir posiciones: ['1','0','1','1']
// multiplicar cada elemento por 2 elevado a la posición o indice del array
// sumar todos los elemetos del array
num = num.toString();
// var aArray=Array.from(num);
// //console.log(aArray);
// var invertArray=aArray.reverse();
// //console.log(aArray);
// var terminos=invertArray.map(function(elemento,index){return elemento*Math.pow(2,index)});
// //console.log(terminos);
// var sumaTerminos = terminos.reduce(function(a,b){return a+b});
// var devolver=Number(sumaTerminos);
// console.log(devolver);
// return devolver;

//var aArray=Array.from(num);
//console.log(aArray);
//var invertArray=aArray.reverse();
//console.log(aArray);
//var terminos=invertArray
var terminos=Array
.from(num)
.reverse()
.map((elemento,index)=>elemento*Math.pow(2,index))
.reduce((a,b)=> a+b);
//console.log(terminos);
return terminos;
}
//BinarioADecimal('100');

function DecimalABinario(num) {
  // tu codigo aca

/*let bin = 0;
let resto, i=1,step=1;
while (num!=0) {
  resto = num % 2; num = parseInt(num/2,10);
  bin = bin + (resto*i); 
  i = i*10;
}
return bin;
*/

//Dividir el numero por la base (2) y guardarnos el resto %
// 18/2 = 9 [0]
// 9/2 = 4.5 --> redondeo hacia abajo --> 4 [1]
// 4/2 = 2 [0]
// 2/2 = 1 [0]
// 1/2 = 0 [1]
// '10010'

var binarioarr=[];
var resto=0;
var resultado='';
do {resto=num%2;binarioarr.unshift(resto);num=Math.floor(num/2);
//console.log(binarioarr,resto,num);
} while (num>0);
//console.log(binarioarr);
resultado=binarioarr.join('');
//console.log(resultado);
return resultado;
}

//DecimalABinario(22)

/*for (let i = 0; num>0; i++) {
  resto=num%2;
  if (resto===0) {
    num=num/2;
  } else if(resto===1){
    num=num-1;
    num=num/2;
  }
  resto.toString(); // convierte en string el resto
  binario.unshift(resto); // agrega como primer elemento al array
  */


//}
//resultado=binario.join(''); // devuelve en string los elementos de una matriz
//return resultado;


//Dividir el numero por la base (2) y guardarnos el resto %
// 18/2 = 9 [0]
// 9/2 = 4.5 --> redondeo hacia abajo --> 4 [1]
// 4/2 = 2 [0]
// 2/2 = 1 [0]
// 1/2 = 0 [1]
// '10010'
/*
var binary = '';
if (num <= 0 ) {return '0';};

while (num > 0) {
  binary = (num%2)+binary;
  num=Math.floor(num/2);
  }  
 return binary;

}
*/

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}


