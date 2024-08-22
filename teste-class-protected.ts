class Animal {
  
  protected nome: string;
  protected som: string;

  constructor(nome: string, som: string){
    
    this.nome = nome;
    this.som = som;
  }
  // 
  protected fazSom (): void{
    console.log("O animal faz um som."); 
  }

  protected qualAnimal (): void{
    console.log(`Nome: ${this.nome} - Som: ${this.som}`);
  }
}

class habitat extends Animal{
  private habitat: string;

  constructor(nome: string, som: string, habitat: string) {
    super(nome, som);
    this.fazSom(); // acesso permitido à função protegida da classe pai
    
    this.habitat = habitat;
  }
  public qualAnimal2 (): void{
    super.qualAnimal(); // acesso permitido à função protegida da classe pai
    console.log(`Habitat: ${this.habitat}`);
  }
}

let gato = new habitat("Gato", "Miau", "Domestico");

gato.qualAnimal2();


