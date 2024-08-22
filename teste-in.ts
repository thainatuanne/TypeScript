type Veiculo = {marca: string, ano: number} | {modelo: string, cor: string};

function exibirPropriedadesCarro(veiculo: Veiculo){
  if (`marca` in veiculo){
    console.log(`Marca: ${veiculo.marca}`);
  }
  if (`modelo` in veiculo){
    console.log(`Modelo do veículo: ${veiculo.modelo}`);
  }
  if (`cor` in veiculo){
    if(veiculo.cor === `Preta`){
    console.log (`Cor do veículo: ${veiculo.cor}`);
  }else{
    console.log(`Não tem essa cor`)
  }
 }
}

let carro = {marca: `Ford`, ano: 2020};
let detalhe_carro = {modelo: `Fiesta`, cor: `Preto`};
exibirPropriedadesCarro(carro);
exibirPropriedadesCarro(detalhe_carro);
