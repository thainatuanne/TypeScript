class Som{
  som: string;

  constructor(som: string){
    this.som = som;
  }
  fazerSom(){
    console.log(this.som);
  }
}

class Animal extends Som{
    especie: string;
    classe: string;

    constructor(som: string, especie: string, classe: string){
      super(som); 
      this.especie = especie;
      this.classe = classe;
    }
}

let vaca = new Animal("MUUUU", "Bovino", "Mamifero");
vaca.fazerSom();
let cachorro = new Animal("AU, AU", "Canino", "Mamifero");
cachorro.fazerSom();
let gato = new Animal("MIAU", "Felino", "Mamifero");
gato.fazerSom();
let cavalo = new Animal("POCOTÓ, POCOTÓ", "Equino", "Mamifero")
cavalo.fazerSom();
