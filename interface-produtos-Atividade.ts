interface Produtos {
  nome_produto: string;
  quantidade: number;
  preco_compra: number;
}
function listarProdutos(nome_produto: string, quantidade: number, preco_compra: number): void{
  console.log(`Nome do produto: ${nome_produto}`);
  console.log(`Quantidade: ${quantidade}`);
  console.log(`Preço de compra: ${preco_compra}`);
  }
listarProdutos(`Arroz`, 5, 10);
