interface Produtos {
  nome_produto: string;
  quantidade: number;
  preco_compra: number;
}
function listarProdutos(produto: Produto[] ): void{
  for(const produto of produtos){
    console.log(`Nome: ${produto.nome_produto} - Quantidade: ${produto.quantidade} - Preço de Compra: ${produto.preco_compra}`);
  }
}
const produtos: Produto[] =[
  {nome_produto: "Arroz", quantidade: 10, preco_compra: 5.99},
  {nome_produto: "Feijão", quantidade: 5, preco_compra: 8.99},
  {nome_produto: "Macarrão", quantidade: 15, preco_compra: 2.49},
  {nome_produto: "Óleo", quantidade: 3, preco_compra: 5.99},
];
listarProdutos(produtos);

