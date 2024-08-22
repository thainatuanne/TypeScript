class Pessoa{
  private nome: string;
  private cpf: string;

  constructor(nome: string, cpf: string){
    this.nome = nome;
    this.cpf = cpf;
  }

  public getNome(): string{
    return this.nome;
  }

  public getCpf(): string{
    return this.cpf;
  }
}

class ItemPedido {
  produto: Produto;
  quantidade: number;

  constructor(produto: Produto, quantidade: number){
    this.produto = produto;
    this.quantidade = quantidade;
  }

  // Método para calcular o valor total do item
 calcularPreco(): number{
    return this.quantidade * this.produto.getPreco();
 }
 }

class Pedidos {
  cliente: Pessoa;
  itens: ItemPedido[];

  constructor(nome: string, cpf: string, itens: ItemPedido[]){
    this.cliente = new Pessoa(nome, cpf);
    this.itens = itens;
  }

  faturar(){
    console.log(`Cliente: ${this.cliente.getNome()} - CPF: ${this.cliente.getCpf()}`);
  let valorTotal = 0;
  for (let item of this.itens){
    const valorItem = item.calcularPreco(); //Calcula o valor total do item usando o método calcularPreco

    console.log(`Produto: ${item.produto.getNome()} - Quantidade: ${item.quantidade} - Valor: R$${valorItem}`);
    valorTotal += valorItem;

  }

  console.log( `Valor total: R$${valorTotal}`);
  }
}
class Produto{
  private nome: string;
  private preco: number;

  constructor(nome: string, preco: number){
    this.nome = nome;
    this.preco = preco;
    
  }
  public getNome(): string{
    return this.nome;
  }
  public getPreco(): number{
    return this.preco;
  }
}
const produto1 = new Produto("Camiseta", 29.99);
const produto2 = new Produto("Calça", 49.99);
const produto3 = new Produto("Tênis", 99.99);

const itemPedido1 = new ItemPedido(produto1, 2);
const itemPedido2 = new ItemPedido(produto2, 3);
const itemPedido3 = new ItemPedido(produto3, 1);
const pedidos = new Pedidos("João", "123.456.789-00", [itemPedido1, itemPedido2, itemPedido3]);
pedidos.faturar()


