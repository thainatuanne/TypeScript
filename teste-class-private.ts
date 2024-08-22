class Carro{
  private _marca: string;
  
  constructor(marca: string){
    this._marca = marca;
}
  public detalhes(): void{
    console.log(this._marca);
  }
  
  // metodo para alternar apenas a cor do carro dentro da classe
  mudarMarca(novaMarca: string): void{
    this._marca = novaMarca;
  }
}
const carro1 = new Carro("Toyota");

// Tentando acessar diretamente os membros privados, o que vai resultar em erro
// Se tentarmos acessar a propriedade mensagem diretamente, teremos um erro:
 // Isso resultaria em um erro, pois a propriedade é privada e não pode ser acessada fora da classe.
// carro1.marca;


// Mudando a cor do carro usando um método público
carro1.mudarMarca("Ford");

// Acessando os membros privados através de métodos públicos da classe
carro1.detalhes();
