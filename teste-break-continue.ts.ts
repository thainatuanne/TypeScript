// sintaxe for 
  
for (let i = 0; i < 10; i++) {
  if (i===5) {
    break; // sai do laço de quando i for igual a 5
  }

  if (i % 2 === 0) {
    continue; // pula pra próxima iteração quando i for par
  }

  console.log(i); // imprime apenas os numeros impares de 0 a 4
}