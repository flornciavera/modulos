function multiplica(a,b){return a*b;}
var multiplicaPorDos=multiplica.bind(this,2);
console.log(multiplicaPorDos(3));
console.log(multiplicaPorDos(4));
console.log(multiplicaPorDos(5));
