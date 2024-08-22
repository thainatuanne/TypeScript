interface Animal {
  
  especie: string;
  emitorSom(): void;
}

class Cachorro implements Animal {
  especie: string;
  
  constructor(especie: string) {
    
    this.especie = especie;
  }
  emitorSom(): void {
    console.log('Au au!');
  }
}
let meuCachoro = new Cachorro('Cachorro');
meuCachoro.emitorSom();