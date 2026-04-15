String.prototype.repeatify = String.prototype.repeatify || 
  function(n) {
    var results = "";
    for (var i = 0; i < n; i++) {
     results = results + this;
   }
  return results;
  }

  console.log('Laura'.repeatify(3));

// * Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
// * Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
// * Agregá un nuevo método al prototipo llamado `getPerimeter`.

 var shape = {
    type :'',
    getType : function(){var nombreFigura='Figura: '+this.type; return nombreFigura;}
}
console.log(shape);

// function Shape(type) {
//     this.type='';
//     //this.getType=function(){}
// }

shape.prototype.Triangle= function (a,b,c) {
 //   Shape.call(this,type);
    this.type='Triangle';
    this.a=a;
    this.b=b;
    this.c=c;
}

// Shape.prototype.triangle=function(a,b,c){this.a=a;
// this.b=b; this.c=c; this.type='Triangle'; } 

var t = new Triangle(1, 2, 3);

console.log(t)
