interface CursoTecnico {
  nome_aluno: string;
  quantidade_atividades: number;
  atividades_enviadas: number;
}
function avaliacao(alunos: CursoTecnico[]){
  for(let i = 0; i < alunos.length; i++){
    const aluno = alunos[i];
    const resultado = `Nome do Aluno: ${aluno.nome_aluno} - Quantidade de atividades: ${aluno.quantidade_atividades} `;
    const porcentagem = (aluno.atividades_enviadas / aluno.quantidade_atividades) * 100;
    if(porcentagem >= 50){
      console.log(resultado + `APTO`)
  }else{
      console.log(resultado + `NÃO APTO`)
    }
  }
}
let alunos: CursoTecnico[] =[
  {nome_aluno: "João", quantidade_atividades: 100, atividades_enviadas: 50},
  {nome_aluno: "Maria", quantidade_atividades: 100, atividades_enviadas: 40},
  {nome_aluno: "Pedro", quantidade_atividades: 100, atividades_enviadas: 100},
  {nome_aluno: "Ana", quantidade_atividades: 80, atividades_enviadas: 90}
];
avaliacao(alunos);