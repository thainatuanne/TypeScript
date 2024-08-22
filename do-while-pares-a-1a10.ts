for (let i=0; i<=10; i++){
  if (i === 10){
    console.log(i);
    break; //bloco de codigo executado para executar os pares
  }
  if (i % 2 == 0){
    console.log(i + " é par");
    continue; 
  }
}
  