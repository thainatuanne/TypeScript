function MaiorValor (num1:number, num2: number, num3: number): string{
  if (num1 > num2 && num1 > num3){
    return "O maior valor é: " + num1;
  }
  else if (num2 > num1 && num2 > num3){
    return "O maior valor é: " + num2;
  }
  else{
    return "O maior valor é: " + num3;
  }
}
const resultado = MaiorValor(10, 20, 30);
console.log(resultado);