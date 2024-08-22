const numero1: number = 5;
const numero2: number = 15;
let resultado;
const conclusao: number = numero1 > 0 && numero2 < 10 ? numero1 + numero2 : numero2;
console.log(conclusao);

resultado = numero1 <= 0 ? numero2 : 0;
console.log(resultado);

resultado = numero1 > 100 || numero2 > 5 ? numero1 + numero2 : 0;
console.log(resultado);
