interface Pessoa {
  nome: string;
  cpf: string;
  idade: number;
  email: string;
}
function listarPessoas(pessoas: Pessoa[] ): void{
  for(const pessoa of pessoas){
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`CPF: ${pessoa.cpf}`);
    console.log(`Idade: ${pessoa.idade}`);
    console.log(`Email: ${pessoa.email}`);  
  }
}
const pessoas: Pessoa[] = [
  {nome: `João`, cpf: '123.456.789-00', idade: 30, email: 'joaop@example.com'},
  {nome: `Maria`, cpf: '987.654.321-00', idade: 25, email: 'mynbi@example.com'},
  {nome: `Pedro`, cpf: '111.222.333-44', idade: 35, email: 'pedbz@example.com'}  
];
listarPessoas(pessoas);