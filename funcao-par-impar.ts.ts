function VerificarParouImpar (num1: number): string{
  if (num1 % 2 == 0){
    return "Par";
  } else {
    return "Impar";
  } 
}
const resultado = VerificarParouImpar(5);
console.log(resultado);