class Empresa{
  nome_empresa: string;
  ramo_atividade: string;

  constructor(nome_empresa: string, ramo_atividade: string){
    this.nome_empresa = nome_empresa;
    this.ramo_atividade = ramo_atividade;
  }
apresentar(){
  console.log(`A empresa ${this.nome_empresa} atua no ramo de ${this.ramo_atividade}`);
  }
}

class Servicos extends Empresa{
  tipo_servico: string;
  telefone: number;
  email: string;

  constructor(nome_empresa: string, ramo_atividade: string, tipo_servico: string, telefone: number, email: string){
    super(nome_empresa, ramo_atividade); // chamando o construtor da classe pai
    this.tipo_servico = tipo_servico;
    this.telefone = telefone;
    this.email = email; 
  }
apresentar(){
  super.apresentar(); // Chamando o método da classe pai
  console.log(`Atendemos serviços de ${this.tipo_servico} no telefone ${this.telefone} - também temos email ${this.email}`);
  }
}

const empresa = new Servicos("Refrigeração Universal", "Refrigeração", "Manutenção", 5135631868, "refr.universal@terra.com.br")
empresa.apresentar();