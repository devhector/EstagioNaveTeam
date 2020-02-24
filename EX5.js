/* E.5 Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} substitua os números na frase 'T35t3 d3 35t4g1o' conforme o dicionário. */

let dic = {4: 'a', 3: 'e', 1: 'i', 5: 's'}, str = 'T35t3 d3 35t4g1o';

String.prototype.troca = function (objeto){
    let strR = this, x ;
    for (x in objeto){
        strR = strR.replace(new RegExp(x, 'g'), objeto[x]);
    }
    return strR;
}

console.log(str.troca(dic));