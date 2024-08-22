const cartas = ["A", "A", "B", "B", "C", "C", "D", "D"];
const numerosDeCartas = cartas.length;

let jogadas = 0;
let paresEncontrados = 0;
let cartas1 = "";
let cartas2 = "";

while (jogadas < numerosDeCartas / 2){
  jogadas++;
  
// escolher a primeira carta
  let posicaoCarta1 = Math.floor(Math.random() * cartas.length);
  cartas1 = cartas[posicaoCarta1];
  cartas.splice(posicaoCarta1, 1);
// escolher a segunda carta
  let posicaoCarta2 = Math.floor(Math.random() * cartas.length);
  cartas2 = cartas[posicaoCarta2];
  cartas.splice(posicaoCarta2, 1);
// verificar se as cartas são iguais
  if (cartas1 === cartas2) {
   console.log(`par encontrado! (${cartas1},${cartas2})`); 
    paresEncontrados++;
  }else{
    console.log("as cartas não são iguais, tente novamente");
  }
}
console.log(`jogo finalizado! você encontrou ${paresEncontrados} pares em ${jogadas} jogadas.`);
