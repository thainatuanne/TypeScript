class Pessoa{
  // atributo variaveis
  nome: string;
  idade: number;
  cidade: string;

  // metodos - funcoes

  constructor(nome: string, idade: number, cidade: string){
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }  
apresentar(){
  console.log("Olá, meu nome é " + this.nome + " tenho " + this.idade + " anos e moro em " + this.cidade);
  }
}
// criando um objeto de pessoa

let pessoa1 = new Pessoa ("Mabele", 25, "Ivoti");

// acessando atributos dos objetos

//console.log(pessoa1.nome);

//console.log(pessoa1.idade);

//console.log(pessoa1.cidade);

// chamando um método de objeto

pessoa1.apresentar();