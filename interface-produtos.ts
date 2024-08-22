interface Produto {
  nome: string;
  preco: number;
  calcularDesconto(): void;
}

class Livro implements Produto {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number){
    this.nome = nome;
    this.preco = preco;
  }
  calcularDesconto(): void {
    let precoComDesconto = this.preco * 0.9; // Aplica um desconto de 10%
    console.log(`O preço original do livro R$${this.preco.toFixed(2)}, com desconto é R$ ${precoComDesconto.toFixed(2)}.`);
  }
}
let livro = new Livro("O Senhor dos Anéis", 50);
livro.calcularDesconto();