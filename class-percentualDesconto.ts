class Desconto2{

  nome_produto: string;
  preco_compra: number;
  preco_venda: number;
  percentual_aplicado: number;
  situacao_produto: string;

  constructor(nome_produto: string, preco_compra: number){
    this.nome_produto = nome_produto;
    this.preco_compra = preco_compra;
    this.preco_venda = 0;
    this.percentual_aplicado = 0;
    this.situacao_produto = "Promoção";
    
  }
  venda(percentual_aplicado:number): void{
    this.percentual_aplicado = percentual_aplicado;
    
    this.preco_venda = this.preco_compra *(1 + this.percentual_aplicado / 100);
    if(this.percentual_aplicado >= 50){
      console.log(`Este produto está acima do valor médio de mercado`)
      
    }else{
      console.log(`Este produto está abaixo do valor médio de mercado`)
    }
  }
  imprimir(): void{
    console.log(`Nome do produto: ${this.nome_produto}`);
    console.log(`Preço de venda: ${this.preco_venda}`);
    console.log(`Situação do produto: ${this.situacao_produto}`);
  }
}
const produto1 = new Desconto2("Notebook", 2300);

const percentualAleatorio = Math.floor(Math.random() * (60 - 30 + 1)) + 30

produto1.venda(percentualAleatorio);

produto1.imprimir();




