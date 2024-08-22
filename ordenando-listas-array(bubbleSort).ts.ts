const Numeros_Aleatorios = () => {
  let numeros = [];
  for (let i = 0; i < 5; i++){
    numeros.push(Math.floor(Math.random() * 100));
  } 
  return numeros;
}   
let numeros = Numeros_Aleatorios();
console.log("Segue a lista de números aleatórios: " + numeros)

for (let i = 0; i < numeros.length; i++){
  for (let j = i+1; j < numeros.length; j++){
    console.log("Comparando " + numeros[i] + " que tá na posição " + i + " com o número: " + numeros[j] + " que está na posição " + j);
    if (numeros [i] < numeros [j]){
      console.log("Trocando número " + numeros[i] + " é maior que o número " + numeros[j]);
     let aux = numeros [i];
      numeros [i] = numeros [j];
      numeros [j] = aux;
    }  
  }
}

console.log("Lista ordenada: " + numeros);