class Cliente{
  private nome: string;
  private cpf: string;
  private endereco: string;

  constructor(nome: string, cpf: string, endereco: string){
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
  }
  public listarCliente(): void{
    console.log(this.nome);
    console.log(this.cpf);
    console.log(this.endereco);
  } 
}
const nome = new Cliente("Marina da Silva", "123.456.789-00", "Rua A, 123, Vila Rosa, Novo Hamburgo - RS/BR")
nome.listarCliente();

