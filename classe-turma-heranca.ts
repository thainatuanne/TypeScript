class Turma{
  cod_turma: number;
  qtd_alunos: number;

  constructor(cod_turma: number, qtd_alunos: number){
    this.cod_turma = cod_turma;
    this.qtd_alunos = qtd_alunos;
  }
  
apresentar(){
  console.log(`Codigo da turma: ${this.cod_turma} Quantidade de alunos: ${this.qtd_alunos}`);
  
  }
}

class Escola extends Turma{
  nome_escola: string;

  constructor(nome_escola: string, cod_turma: number, qtd_alunos: number){
    super(cod_turma, qtd_alunos);
    this.nome_escola = nome_escola;
  }

  apresentar(){
    super.apresentar();
    console.log(`Nome da escola: ${this.nome_escola}`);
    
  }
}

const relatorio = new Escola("Escola 19 de Outubro", 4, 15);

relatorio.apresentar();


