function soma(){
  let soma:number = 0;
  
  for (let i = 1; i <= 30; i++) {
    console.log("Somando o numero " + soma + " que está na variavel soma com " + i)
    soma += i;
  }
    
  return soma;  
}
console.log(soma());