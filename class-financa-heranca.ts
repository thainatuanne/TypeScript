class Financa {
  protected percentual_lucro: number;
  
  constructor(percentual_lucro: number){
    this.percentual_lucro = percentual_lucro;

  }
  public calcular_lucro(capital_aplicado: number): number{
    return capital_aplicado * (this.percentual_lucro / 100);
  } 
}
class Banco extends Financa{
   private nome_cliente: string;
   private cpf: string;
   private capital_aplicado: number;
   private lucro: number;

  constructor(percentual_lucro: number, nome_cliente: string, cpf: string, capital_aplicado: number){
    super(percentual_lucro);
    this.nome_cliente = nome_cliente;
    this.cpf = cpf;
    this.capital_aplicado = capital_aplicado;
    this.lucro = this.calcular_lucro(capital_aplicado);
    
  }
  public resultado(): void{
    console.log(`Nome do cliente: ${this.nome_cliente} -CPF: ${this.cpf} - Capital Aplicado:  ${this.capital_aplicado} - Lucro: ${this.lucro}`);
    
  }
}

const lucros = new Banco(10, "Mario Jucelino", "123.456.789-10", 200000);
lucros.resultado();
