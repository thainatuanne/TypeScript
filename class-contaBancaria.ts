class ContaBancaria{
  numero: string;
  saldo: number;
  titular: string;

  constructor(numero: string, saldo: number, titular: string){
    this.numero = numero;
    this.saldo = saldo;
    this.titular = titular;
  }
  apresentar(){
    console.log("O numero da conta é: "+ this.numero);
    console.log("O saldo da conta é: "+ this.saldo);
    console.log("O titular da conta é: "+ this.titular);
  }
}
  class Deposito extends ContaBancaria{
    depositar: number;
    sacar: number;
    consultar_saldo: number;

    constructor(numero: string, saldo: number, titular: string, depositar: number, sacar: number, consultar_saldo: number){
      super(numero, saldo, titular);
      this.depositar = depositar;
      this.sacar = sacar;
      this.consultar_saldo = consultar_saldo;
    }
  apresentar(){
    console.log("Quanto quer depositar? "+ this.depositar);
    console.log("Quanto quer sacar? "+ this.sacar);
    console.log("O seu saldo é: "+ this.consultar_saldo);
  }
}
    const contaa = new ContaBancaria("12345-6", 1000, "João");
  contaa.apresentar();
    const depositoo = new Deposito("12345-6", 1000, "João", 200, 100, 1100);
    depositoo.apresentar();
    