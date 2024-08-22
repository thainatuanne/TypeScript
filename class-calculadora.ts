class Calculadora{
  
   constructor(){}
  
  caluloAdicao(n1: number, n2: number): number{
      return n1 + n2;
    }
  
  calculoSubtracao(n1: number, n2: number): number{
      return n1 - n2;
    }
  
  calculoMultiplicacao(n1: number, n2: number): number{
      return n1 * n2;
    }
  
  calculoDivisao(n1: number, n2: number): number{
      if(n2 === 0){
        throw new Error("Não é possível dividir por zero!");
      }
      return n1 / n2;
    
    }
  }
const somaTotal = new Calculadora();
const resultado = somaTotal.caluloAdicao(2, 7);
console.log(`O resultado da soma é: ${resultado}`);
const subtracaoTotal = new Calculadora();
const resultadoSubtracao = subtracaoTotal.calculoSubtracao(2, 4);
console.log(`O resultado da subtração é: ${resultadoSubtracao}`);
const multiplicacaoTotal = new Calculadora();
const resultadoMultiplicacao = multiplicacaoTotal.calculoMultiplicacao(2, 4);
console.log(`O resultado da multiplicação é: ${resultadoMultiplicacao}`);
const divisaoTotal = new Calculadora();
const resultadoDivisao = divisaoTotal.calculoDivisao(20, 5);
console.log(`O resultado da divisão é: ${resultadoDivisao}`);



