class Produtos {
  private nome: string;
  private preco: number;
  private categoria: string;

  constructor(nome: string, preco: number, categoria: string){
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    
  }
  public getNome(): string {
    return this.nome;
    
  }

  public getPreco(): number {
   return this.preco;
    
  }

  public getCategoria(): string {
   return this.categoria;
  }
  calcularTaxaImposto(): number {
    throw new Error('Método não implementado.')
  }
    
  }

class Eletronico extends Produtos {
  
  constructor(nome: string, preco: number){
    super(nome, preco, `Eletrônico`);
    
  }
  // imposto para eletronicos
  private static readonly TAXA_IMPOSTO: number = 0.20;
  
  calcularTaxaImposto(): number {
    return this.preco * Eletronico.TAXA_IMPOSTO;
    
  }
}

class Roupa extends Produtos {

  constructor(nome: string, preco: number){
    super(nome, preco, `Roupa`);
    
  }
  // imposto para roupas
  private static readonly TAXA_IMPOSTO: number = 0.10;
  
  calcularTaxaImposto(): number {
    return this.preco * Roupa.TAXA_IMPOSTO;
    
  }
}

class Alimento extends Produtos {

  constructor(nome: string, preco: number){
    super(nome, preco, `Alimento`);
    
  }
  //imposto para alimetos 
  private static readonly TAXA_IMPOSTO: number = 0.05;
  calcularTaxaImposto(): number {
    return this.preco * Alimento.TAXA_IMPOSTO;
    
  }
}

const produtos: Produtos [] = [
new Eletronico (`Televisão`, 3500),
new Eletronico (`Notebook`, 4800),
new Roupa (`Camiseta`, 80),
new Roupa (`Calça`, 180),
new Alimento (`Arroz`, 8),
new Alimento (`Feijão`, 10),
];

for (const produto of produtos) {
  const imposto = produto.calcularTaxaImposto();
  const precoTotal = produto.getPreco() + imposto;

  console.log(`Produto: ${produto.getNome()}`);
  console.log(`Preço: R$ ${produto.getPreco()}`);
  console.log(`Categoria: ${produto.getCategoria()}`);
  console.log(`Imposto: R$ ${imposto.toFixed(2)}`);
  console.log(`Preço total: R$ ${precoTotal.toFixed(2)}`)

}





