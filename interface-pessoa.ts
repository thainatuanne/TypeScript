interface Pessoa {
  nome: string;
  idade: number;
  
}

class Aluno implements Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number){
    this.nome = nome;
    this.idade = idade;
  }
}
const novoAluno = new Aluno("João", 25);
console.log(`Nome Aluno: ${novoAluno.nome} - Idade: ${novoAluno.idade}`)