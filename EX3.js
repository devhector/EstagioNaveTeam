/* E.3 Crie uma função que recebe vários argumentos do tipo string e imprime todos juntos */

function groupString(){
    let str = '', argumentos;
    for (argumentos of arguments)
        str += argumentos;
    return str;
}

console.log(groupString("Hello","World","Hi"));

