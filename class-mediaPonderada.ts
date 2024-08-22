class MediaPonderada{
  notaTrabalho: number;
  notaProva: number;
  mediaFinal: number;

  constructor(notaTrabalho: number, notaProva: number){
    this.notaTrabalho = notaTrabalho;
    this.notaProva = notaProva;
    this.mediaFinal = 0;
  }
  somaNotas(): void{
    this.notaTrabalho + this.notaProva
    return
  }
  media(): void{
    console.log(`Nota trabalho: ${this.notaTrabalho} Nota prova: ${this.notaProva}`);
    
  }
  
  mediaPonderada(): void{
    this.mediaFinal = (this.notaTrabalho * 4 + this.notaProva * 6) / 10;
    console.log(`A média ponderada é: ${this.mediaFinal}`);
    
  }
}
const media = new MediaPonderada(10, 8);
media.media();
media.mediaPonderada();

