/* E.4 Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as ocorrências de números pelo valor '[removido]'. */

let str1 = "teste 1 de 2 string 3", str2 = /[0-9]/gi, str3;

str3 = str1.replace(str2, '[removido]');

console.log(str3);