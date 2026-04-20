'use strict'

function BinarioADecimal(num) {
  //tu codigo aca 
  num = num.toString();
  var resultado = 0;
  
  for (let i = 0; i < num.length; i++) {
    resultado = resultado + num[i] * Math.pow(2, num.length - 1 - i);
  }
  
  return resultado;
}


function DecimalABinario(num) {
  // tu codigo aca
  var binarioarr = [];   
  var resto = 0;
  var resultado = '';

  while (num > 0) {
    resto = num % 2;              
    binarioarr.unshift(resto);    
    num = Math.floor(num / 2);    
  }

  resultado = binarioarr.join('');
  return resultado;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}