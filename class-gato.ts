class Gato implements Animal {
  nome: string;

  constructor(nome: string) {
      this.nome = nome;
    }
  emitirSom(): void{
      console.log("Miau");
  }
}
const gato = new Gato("Garfield");
gato.emitirSom();