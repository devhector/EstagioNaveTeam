/* E.11 Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id. */

let ObjArray = [
    {id: 0, nome: 'felipe', sobrenome: 'vieira',  idade: 21},
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
];

console.log(ObjArray);

console.log(ObjArray.sort((a,b) => {
    if(a.idade == b.idade && a.id < b.id)
    return (a.idade - b.idade) - 1;

    return b.idade - a.idade;
}));