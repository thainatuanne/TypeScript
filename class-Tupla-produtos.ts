class Produtos{
  
  produto: [string, number, number];

  constructor(nomeProduto: string, quantidade: number, preco: number){
    
    this.produto = [nomeProduto, quantidade, preco]
  }
  
  imprimirProduto(): void{
    console.log(`Lista de Produtos: `);
    console.log(`Nome: ${this.produto[0]}`);
    console.log(`Quantidade: ${this.produto[1]}`);
    console.log(`Preço: ${this.produto[2]}`);
  }
}

let produto1 = new Produtos("Arroz", 2, 10);
let produto2 = new Produtos("Feijão", 3, 8);
let produto3 = new Produtos("Macarrão", 1, 5);
produto1.imprimirProduto();
produto2.imprimirProduto();
produto3.imprimirProduto();