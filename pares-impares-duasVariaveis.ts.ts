let pares = [];
let impares = [];
let numeros = [1, 2, 3, 4, 5, 6]
for (let i=0; i <numeros.length; i++){
  if(numeros[i] % 2 == 0){
    pares.push(numeros[i]);
  }else{
    impares.push(numeros[i]);
  }   
}
console.log("Numeros parares: " + pares);
console.log("Numeros impares: " + impares);