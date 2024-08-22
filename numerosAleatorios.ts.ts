const Numeros_Aleatorios = () => {
  let numeros = [];
  for (let i = 0; i < 10; i++){
    numeros.push(Math.floor(Math.random() * 100));
    numeros.sort(function(a, b){return a - b})
  } 
  return numeros;
}                       
console.log("Segue a lista de números aleatórios: " + Numeros_Aleatorios())