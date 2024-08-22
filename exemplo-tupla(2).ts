class Numeros{
  imprimirNumeros(numeros: [number, number, string, number, number]): void{
    console.log("Listar números: ");
    for(const numero of numeros){
      console.log(numero);
    }
  }
}
const numeros = new Numeros();
const listarNumeros: [number, number, string, number, number] = [1, 6, "Caneta", 7, 5];
numeros.imprimirNumeros(listarNumeros);