class Livro {
  
  private titulo: string;
  private autor: string;
  private ano_dePublicacao: number;
  private genero: string;

  constructor(titulo: string, autor: string, ano_dePublicacao: number, genero: string){
    
    this.titulo = titulo;
    this.autor = autor;
    this.ano_dePublicacao = ano_dePublicacao;
    this.genero = genero;
    
  }
  getTitulo(): string{
    
    return this.titulo;
  }
  getAutor(): string{
    
    return this.autor;
  }
  getAno_dePublicacao(): number{
    
    return this.ano_dePublicacao;
  }
  getGenero(): string{
    
    return this.genero;
  }
  getInformacoes(): string{
    
    return (`Titulo: ${this.titulo} - Autor: ${this.autor} - Ano de Publicação: ${this.ano_dePublicacao} - Gênero: ${this.genero}`);
  }
}

let livro1 = new Livro (`O Senhor dos Anéis`, `J. R. R. Tolkien`, 1954, `Fantasia`);
let livro2 = new Livro (`Harry Potter e a Pedra Filosofal`, `J. K. Rowling`, 1996, `Fantasia`);
let livro3 = new Livro (`Crepúsculo`, `Stephenie Meyer`, 1950, `Romance`);
console.log(`${livro1.getInformacoes()}`) 
console.log(`${livro2.getInformacoes()}`);
console.log(`${livro3.getInformacoes()}`);

