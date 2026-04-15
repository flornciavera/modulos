function sumar(num, tot = 0) {
    // si mi número es menor igual `0` dejo de contar y retorno el total
    if(num <= 0) return tot;

    console.log(num,tot);

    // si no sumo el número actual al total
    tot += num;
    num -= 1;

    // y finalmente realizo una nueva invocación
    
     return sumar(num, tot);
  }

  console.log(sumar(4));

