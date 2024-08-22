class listaNomes {
  private exibirnomes: string[] = [];

  constructor(exibirnomes: string[] =[]){
    this.exibirnomes = exibirnomes;
    
  }
  public exibir(): void{
    console.log(`Lista de nomes:`);
    for(let exibirnome of this.exibirnomes){
      console.log(exibirnome);
    }
  }
}
const lista = new listaNomes(["João", "Maria", "Pedro", "Ana", "Carlos"]);
lista.exibir();