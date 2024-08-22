const numeros = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const numerosPares = numeros.filter((n) => n % 2 === 0)
  const numerosImpares = numeros.filter((n) => n % 2 !== 0)
  return {
    numerosPares,
    numerosImpares,
  }
}
const resultado = numeros();
console.log(resultado);