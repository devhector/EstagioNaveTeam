/* E.7 Imprima uma mensagem de saudação com o nome completo para cada um dos objetos. O nome deve ter a primeira letra maiúscula. */

let ObjArray = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
];

String.prototype.firstUp = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/*
function Prop(obj, nomeDoObj) {
    var resultado = "";
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          resultado += nomeDoObj + "." + i + " = " + obj[i];
      }
    }
    return resultado;
  }

*/

console.log(ObjArray[0].nome.firstUp());

