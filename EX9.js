/* E.9 Imprima o objeto se existir alguem com menos 25 anos. */

let ObjArray = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
];

//Primeira interpretação que eu tive com o Exercício.

let MenorI = ObjArray.filter((obj) => {
    if (obj.idade < 25) return true;
});

if (MenorI) console.log(ObjArray);

//Outras possíveis resoluções que pensei depois

for (let i = 0; i < ObjArray.length; i++){
    if (ObjArray[i].idade < 25)
        console.log(ObjArray[i]);
}

let idadeMenor = ObjArray.filter((obj) => {
    return obj.idade < 25;
});

console.log(idadeMenor);
