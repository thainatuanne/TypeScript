class Desconto{
  precoProduto1: number;
  precoProduto2: number;
  total: number;
  desconto: number;

  constructor(precoProduto1: number, precoProduto2: number, total: number, desconto: number){
    this.precoProduto1 = precoProduto1;
    this.precoProduto2 = precoProduto2;
    this.total = total;
    this.desconto = desconto;
    
  }
  meuDesconto(): number{
    return this.precoProduto1 + this.precoProduto2 - (this.total * this.desconto / 100);
  }  
}
const desconto = new Desconto(100, 50, 150, 10);
console.log(`O produto custou R$: ${desconto.meuDesconto()}`);
