let numero = 2
let naoEhPrimo = false
for (let i = 2; i < numero; i++){
  if (numero % i === 0){
    naoEhPrimo = true
    break;
  }
}
if (naoEhPrimo){
  console.log(numero + ' não é primo');
}else{
  console.log(numero + ' é primo');
}