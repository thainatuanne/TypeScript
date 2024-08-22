class Revisao{
  // atributos
  public nome: string;
  public idade: number;
  
  // metodo construtor
  constructor(nome: string, idade: number){
    this.nome = nome;
    this.idade = idade;
  }
  // metodo classe
  public exibirInformacoes(): void{
    console.log(`Nome: ${this.nome}` + ` Idade: ${this.idade}`);
  }
}
// objeto da classe
let revisao = new Revisao("João", 30);
//console.log(revisao.exibirInformacoes());
// inicialização do objeto
revisao.exibirInformacoes();