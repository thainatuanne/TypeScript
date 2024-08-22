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

class Biblioteca {
  
  private livros: Livro[] = [];
  
  adicionarLivro(livro: Livro){
    
    this.livros.push(livro);
  }
  
  buscarLivroPorTitulo(titulo: string): Livro[]{
    
    return this.livros.filter(livro => livro.getTitulo() === titulo);
  }
  buscarLivroPorAutor(autor: string): Livro[]{
    
    return this.livros.filter(livro => livro.getAutor() === autor);
  }
}
let biblioteca = new Biblioteca();

let livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Fantasia"); biblioteca.adicionarLivro(livro1);
let livro2 = new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997, "Fantasia"); biblioteca.adicionarLivro(livro2);

console.log(biblioteca.buscarLivroPorTitulo(`O Senhor dos Anéis`));
console.log(biblioteca.buscarLivroPorAutor(`J.R.R. Tolkien`));