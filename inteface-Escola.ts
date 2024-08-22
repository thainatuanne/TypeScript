interface Alunos{
  nome: string;
  cpf: string;
  idade: number;
  email: string;
}
interface Turma{
  nome_turma: string;
  alunos: Alunos[];
}
class Escola implements Turma{
  nome_turma: string;
  alunos: Alunos[];

  constructor(nome_turma: string, alunos: Alunos[] = []){
    this.nome_turma = nome_turma;
    this.alunos = alunos;
    }
  public listarTurma(): void{
    console.log(`Turma: ${this.nome_turma}`);{
      for (let aluno of this.alunos){
        console.log("Aluno: " + aluno.nome);
        console.log("CPF: "  +  aluno.cpf);
        console.log("Idade: " + aluno.idade);
        console.log("Email: " + aluno.email);
      }
    }
  }
}
const turma_A: Alunos[] = [
  {nome: "João", cpf: "123.456.789-00", idade: 16, email: "plsgq@example.com"},
  {nome: "Maria", cpf: "987.654.321-00", idade: 17, email: "oqibz@example.com"}
];
const turma_B: Alunos[] = [
  {nome: "Pedro", cpf: "111.222.333-44", idade: 15, email: "tugrp@example.com"},
  {nome: "Ana", cpf: "555.666.777-88", idade: 18, email: "ejeyd@example.com"}
];
const turmaA = new Escola("Turma A", turma_A);
const turmaB = new Escola("Turma B", turma_B);
turmaA.listarTurma();
turmaB.listarTurma();