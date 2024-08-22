class Loteria{
  private numero_sorteado: number;

  constructor(numero_sorteado: number){
    this.numero_sorteado = numero_sorteado;
    
  }
  public sorteio(): void {
    console.log(`Nº SORTEADO: ${this.numero_sorteado}`);
  }
}

for (let i = 0; i < 6; i++){
  let numero_sorteado = Math.floor(Math.random() * 100) +1;
  let loteria = new Loteria(numero_sorteado);
  loteria.sorteio();
}
