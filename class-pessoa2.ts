class Pessoa{
  // atributo variaveis
  nome: string;
  idade: number;
  oes

  constructor(nome: string, idade: number){
    this.nome = nome;
    this.idade = idade;

  }  
apresentar(){
  console.log("Olá, meu nome é " + this.nome + " tenho " + this.idade + " anos");
  }
}
// criando um objeto de pessoa

let pessoa1 = new Pessoa ("Mabele", 25);

// acessando atributos dos objetos

//console.log(pessoa1.nome);

//console.log(pessoa1.idade);

//console.log(pessoa1.cidade);

// chamando um método de objeto

pessoa1.apresentar();