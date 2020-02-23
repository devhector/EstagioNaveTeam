/* E.5 Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} substitua os números na frase 'T35t3 d3 35t4g1o' conforme o dicionário. */

let dic = {4: 'a', 3: 'e', 1: 'i', 5: 's'}, str = 'T35t3 d3 35t4g1o';

String.prototype.troca = function (obj){
    let reStr = this, x;
    for (x in obj){
        reStr = reStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return reStr;
};

console.log(str.troca(dic));