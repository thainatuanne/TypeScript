const pessoa = {
    nome: 'João',
    idade: 18,
    profissao: 'Desenvolvedor',
    habilidades: ['JavaScript', 'TypeScript', 'Python'] 
};

for (const propriedade in pessoa){
  console.log(`${propriedade} : ${pessoa[propriedade]}`);
}
