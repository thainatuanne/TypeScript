class Produto{
 private nome: string;
 private preco: number;

  constructor(nome: string, preco: number){
    this.nome = nome;
    this.preco = preco;
  }
  public obterNome(): string{
    return this.nome;
  }
  public obterPreco(): number{
    return this.preco;
  }
}
const produto1 = new Produto("Notebook", 7999.99);
const produto2 = new Produto("iPhone", 16990.99);
const produto3 = new Produto("Caneta", 5.99);
const produto4 = new Produto("Caderno", 29.99);
const produto5 = new Produto("Lápis", 2.99);
console.log("produtos:");
console.log("Nome:", produto1.obterNome(), "| Preço:", produto1.obterPreco());
console.log("Nome:", produto2.obterNome(), "| Preço:", produto2.obterPreco());
console.log("Nome:", produto3.obterNome(), "| Preço:", produto3.obterPreco());
console.log("Nome:", produto4.obterNome(), "| Preço:", produto4.obterPreco());
console.log("Nome:", produto5.obterNome(), "| Preço:", produto5.obterPreco());




