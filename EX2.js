/* Crie uma função que recebe três argumentos, uma função e duas string, aplique a função nas duas string e imprima o resultado. */

const primeiroArg = function (str1,str2){
    return (str1 + " " + str2);
}

function FuncPrincipal(func, str1, str2){
    return func(str1,str2);
}

let str = "Olá", str1 = "Mundo";

console.log (FuncPrincipal(primeiroArg, str, str1));
