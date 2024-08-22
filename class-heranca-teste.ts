class Animal { //classe base ou super classe

  constructor(private nome: string){

  } 
  getNome(): string { 
    return this.nome;
    
  }

  comer(): void {
    console.log(`${this.nome} está comendo.`);
    
  }
}
// classe derivada ou subclasse

class Cachorro extends Animal {
  constructor(nome: string) {
    super(nome);
  }

  latir(): void {
    console.log(`${this.getNome()} está latindo.`);
    
  }
}
const cachorro = new Cachorro("Rex");
cachorro.comer();
cachorro.latir();