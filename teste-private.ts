class Carro{
  private marca: string;
  private modelo: string;
  private cor: string;
  
  constructor(marca: string, modelo: string, cor: string){
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
}
  detalhes(): void{
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Cor: ${this.cor}`);
  }
  
  // metodo para alternar apenas a cor do carro dentro da classe
  mudarCor(novaCor: string): void{
    this.cor = novaCor;
  }
}
const carro1 = new Carro("Toyota", "Corolla", "Vermelho");
// Tentando acessar diretamente os membros privados, o que vai resultar em erro
//console.log(carro1.marca);
//console.log(carro1.modelo);
//console.log(carro1.cor);

// Mudando a cor do carro usando um método público
carro1.mudarCor("Azul");

// Acessando os membros privados através de métodos públicos da classe
carro1.detalhes();




