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
    let precoComDesconto = this.preco * 0.1; // Aplica um desconto de 10%
    let meuLivro = this.preco - precoComDesconto;
    console.log(`O preço original do livro R$${this.preco.toFixed(2)}, valor do desconto é R$ ${precoComDesconto.toFixed(2)}. O preço final do livro é R$ ${meuLivro.toFixed(2)}.`);
  }
}
let meulivro = new Livro("O Senhor dos Anéis", 50);
meulivro.calcularDesconto();