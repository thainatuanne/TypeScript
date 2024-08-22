// sintaxe while
const numeros = [1, 5, 8, 12, 16, 20];
const numerosParaencontrar = 12;

let encontrado = false;
let i = 0;
while (!encontrado && i < numeros.length){
  console.log("verificando a posição " + i)
  if (numeros[i] === numerosParaencontrar){
    encontrado = true;
    console.log("Numero encontrado na posição " + i)
  } 
  i++;
} if (!encontrado){
  console.log("Numero não encontrado")
  
}