interface CursoTecnico {
  nome_aluno: string;
  quantidade_atividades: number;
  atividades_enviadas: number;
}
function avaliacao(alunos: CursoTecnico[]){
  for(let i = 0; i < alunos.length; i++){
    const aluno = alunos[i];
    const resultado = `Nome do Aluno: ${aluno.nome_aluno} - Quantidade de atividades: ${aluno.quantidade_atividades} - Atividades enviadas: ${aluno.atividades_enviadas}`;
    const porcentagem = (aluno.atividades_enviadas / aluno.quantidade_atividades) * 100;
    if(porcentagem >= 50){
      console.log(resultado + ` APTO`)
  }else{
      console.log(resultado + ` NÃO APTO`)
    }
  }
}
let alunos: CursoTecnico[] =[
  {nome_aluno: "João", quantidade_atividades: 10, atividades_enviadas: 3},
  {nome_aluno: "Maria", quantidade_atividades: 10, atividades_enviadas: 4},
  {nome_aluno: "Pedro", quantidade_atividades: 10, atividades_enviadas: 10},
  {nome_aluno: "Ana", quantidade_atividades: 10, atividades_enviadas: 9}
];
avaliacao(alunos);