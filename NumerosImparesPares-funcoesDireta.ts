const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
const numerosImpares = numeros.filter(numero => numero % 2 !== 0);
console.log(`numerosPares: ${numerosPares}`);
console.log(`numerosImpares: ${numerosImpares}`);