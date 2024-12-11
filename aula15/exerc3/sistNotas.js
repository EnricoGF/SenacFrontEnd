const alunos = [
    { nome: "Ana", notas: [8, 9, 7] },
    { nome: "João", notas: [6, 8, 5] },
    { nome: "Maria", notas: [7, 7, 6] },
    { nome: "Pedro", notas: [9, 9, 8] },
    { nome: "Carlos", notas: [5, 6, 7] },
    { nome: "Luana", notas: [10, 9, 9] },
    { nome: "Ricardo", notas: [6, 6, 5] }
];

const medias = [];
for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    let somaNotas = 0;
    for (let j = 0; j < aluno.notas.length; j++) {
        somaNotas += aluno.notas[j];
    }
    const media = somaNotas / aluno.notas.length;
    medias.push({ nome: aluno.nome, media: media });
}

const aprovados = [];
for (let i = 0; i < medias.length; i++) {
    if (medias[i].media >= 7) {
        aprovados.push(medias[i]);
    }
}

console.log("Alunos aprovados:", aprovados);