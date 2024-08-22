class Notas {
  protected nota1: number;
  protected nota2: number;
  protected nota3: number;

  constructor(nota1: number, nota2: number, nota3: number){
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    
  }
}

class Aluno extends Notas {
 public nome_aluno: string;
 public idade: number;
 public media: number;
 public resultado: string;

  constructor(nota1: number, nota2: number, nota3: number, nome_aluno: string, idade: number){
    super(nota1, nota2, nota3);
    this.nome_aluno = nome_aluno;
    this.idade = idade;
    this.media = 0;
    this.resultado = "";
    this.somaMedia();
    this.definirResultado(); 
  }

  private somaMedia(): void{
    this.media = (this.nota1 + this.nota2 + this.nota3) / 3;
  }
  private definirResultado(): void{
  if(this.media >= 75){
    this.resultado = "Aprovado";
  } else {
    this.resultado = "Reprovado"
  }
}
  public informacoes(): void{
    console.log(`Nome do aluno: ${this.nome_aluno} -Idade: ${this.idade} anos`);
    console.log("Média do aluno: " + this.media);
    console.log("Resultado: " + this.resultado);            
  }
}
 const aluno1 = new Aluno(80, 70, 60, "João Da Silva", 15);
  aluno1.informacoes();
  
  
