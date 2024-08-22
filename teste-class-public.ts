class Pessoa{
  public nome: string;

  constructor(nome: string){
    this.nome = nome;
}
    public getNome(): string{
      return this.nome;
  }	
}

let pessoa = new Pessoa("João");

// acessando nome através do método público
console.log(`Nome: ${pessoa.getNome()}`);
