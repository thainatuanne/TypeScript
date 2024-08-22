interface Mercado {
  nome_produto: string;
  quantidade: number;
}
function listarProdutos(produtos: Mercado[]){
  for(let i = 0; i < produtos.length; i++){
    if(produtos[i].quantidade > 50){
      console.log(`Produto: ${produtos[i].nome_produto} - Quantidade: ${produtos[i].quantidade} - Em Estoque`)
    }else{
      console.log(`Produto: ${produtos[i].nome_produto} - Quantidade: ${produtos[i].quantidade} - Renovar Estoque`)
    }
  }
}
let produtos: Mercado[] =[
  {nome_produto: "Arroz", quantidade: 50},
  {nome_produto: "Feijão", quantidade: 30},
  {nome_produto: "Macarrão", quantidade: 20},
  {nome_produto: "Óleo", quantidade: 10},
  {nome_produto: "Açúcar", quantidade: 60},
  {nome_produto: "Sal", quantidade: 40},
  {nome_produto: "Sabonete", quantidade: 70},
  {nome_produto: "Shampoo", quantidade: 80},
  {nome_produto: "Desodorante", quantidade: 90},
  {nome_produto: "Papel Higiênico", quantidade: 100},
  {nome_produto: "Papel Toalha", quantidade: 110},
  {nome_produto: "Papel Sulfite", quantidade: 120},
  {nome_produto: "Condicionador", quantidade: 130}
];
listarProdutos(produtos);