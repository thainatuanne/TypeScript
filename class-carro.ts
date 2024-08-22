class Carro{
  marca: string;
  modelo: string;
  ano: number;
  cor: string;

  constructor(marca: string, modelo: string, ano: number, cor: string){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
  }
  ligar(){
    console.log("O carro está ligado");
    
  }
}

let carro = new Carro("Ford", "Fiesta", 2014, "Prata")

//console.log(carro.marca);
//console.log(carro.modelo);
//console.log(carro.ano);
//console.log(carro.cor);

carro.ligar();