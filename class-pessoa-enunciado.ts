class Pessoa{
  private idade: number;

  constructor(idade: number){
    this.idade = idade;
  }
  public imprimirIdade(): void{
      console.log(`Idade: ${this.idade} anos`)
      }
    }
for(let i = 0; i < 3; i++){
  const idadeAleatoria = Math.floor(Math.random() * 100) + 1;
const pessoa = new Pessoa(idadeAleatoria);
pessoa.imprimirIdade();
}