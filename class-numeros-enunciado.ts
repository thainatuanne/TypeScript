class Numeros{
  imprimirNumeros(numeros: [number, number, number, number, number]): void{
    console.log("Listar números: ");
    for(const numero of numeros){
      console.log(numero);
    }
  }
}
const numeros = new Numeros();
const listarNumeros: [number, number, number, number, number] = [1, 6, 10, 7, 5];
numeros.imprimirNumeros(listarNumeros);