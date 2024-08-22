class Veiculos{
  private _nome_veiculo: string;
  private _placa: string;
  private _cor: string;

  constructor(nome_veiculo: string, placa: string, cor: string){
    this._nome_veiculo = nome_veiculo;
    this._placa = placa;
    this._cor = cor;
  }
  public listarVeiculos(): void{
    if (this._cor.toLowerCase() === "azul"){
      console.log(`O veiculo ${this._nome_veiculo} com placa ${this._placa} é ${this._cor}`);
    }else{
      console.log(`O veiculo ${this._nome_veiculo} não possui cor azul`)
    }
  }
}
let veiculo1 = new Veiculos("Fusca", "ABC123", "Azul");
let veiculo2 = new Veiculos("Gol", "DEF456", "Vermelho");
let veiculo3 = new Veiculos("Corsa", "GHI789", "Azul");
let veiculo4 = new Veiculos("S10", "JKL015", "Preto");
let veiculo5 = new Veiculos("CR-V", "JKL012", "Prata")
veiculo1.listarVeiculos();
veiculo2.listarVeiculos();
veiculo3.listarVeiculos();
veiculo3.listarVeiculos();
veiculo4.listarVeiculos();
veiculo5.listarVeiculos();


