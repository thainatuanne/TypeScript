class Revenda{
  nomeCarro: string;
  categoriaCarro: string;
  precoCompra: number;
  precoVenda: number;

  constructor(nomeCarro: string, categoriaCarro: string, precoCompra: number){
    this.nomeCarro = nomeCarro;
    this.categoriaCarro = categoriaCarro;
    this.precoCompra = precoCompra;
    this.precoVenda = 0;
    
  }
  calculoVenda(): void{
    if(this.categoriaCarro === "passeio"){
      this.precoVenda = this.precoCompra * 0.10 ;
  
    }else if (this.categoriaCarro === "SUV"){
      this.precoVenda = this.precoCompra * 0.12;
    
    }else {
      console.log("Categoria do carro inválida");
      return;
  }
    
    console.log(`Nome do carro: ${this.nomeCarro}`);
    console.log(`Categoria do carro: ${this.categoriaCarro}`);
    console.log(`Preço de compra: R$${this.precoCompra.toFixed(2)}`);
    console.log(`Preço de venda: R$${this.precoVenda.toFixed(2)}`);
    
    }
  }

const revenda = new Revenda("CR-V", "SUV", 61200);
revenda.calculoVenda();

