class Calculadora{
  somar(n1: number, n2: number): number{
    return n1 * n2
  }
}
const calculo = new Calculadora ();
const resultado = calculo.somar(10, 31);
console.log(resultado);
