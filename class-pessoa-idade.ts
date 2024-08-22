class Pessoa{
  nome: string;
  data_Nasc: number;
  ano: number;
  idade: number;

  constructor(nome: string, data_Nasc: number, ano: number, idade: number){
    this.nome = nome;
    this.data_Nasc = data_Nasc;
    this.ano = ano;  
    this.idade = idade;
    if (ano - data_Nasc){
      this.idade = ano - data_Nasc;
    }
  }
  apresentar(){
    console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos");
  }
}
let pessoa = new Pessoa("José", 1996, 2024, 0);
//console.log(pessoa.nome);
//console.log(pessoa.idade);
//console.log(pessoa.data_Nasc);
//console.log(pessoa.ano);
pessoa.apresentar();

