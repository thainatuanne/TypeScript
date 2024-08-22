class Produtos {
  private nome: string;
  private preco: number;
  private categoria: string;

  constructor(nome: string, preco: number, categoria: string){
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    
  }
  getNome(): string {
    return this.nome;
  }

  getPreco(): number {
   return this.preco;
  }

  getCategoria(): string {
   return this.categoria;
  }
}

const produto = new Produtos('Notebook', 2999.99, 'Eletronico');
console.log(`Nome: ${produto.getNome()} - Preço: ${produto.getPreco()} - Categoria: ${produto.getCategoria()}`);