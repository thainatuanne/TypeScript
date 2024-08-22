class parImpar {
  calculo(num: number): number{
    if(num % 2 == 0){
      console.log("O número é par: " + num);
    }else{
      console.log("O número é ímpar: " + num);
    }
      return num
    }
  }
  let num = new parImpar();
  const resultado = num.calculo(16);
  console.log(resultado);
