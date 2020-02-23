/* E.6 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'. */

const axios = require('axios');


let meuCep = '96010020', url = 'https://viacep.com.br/ws/', numero = 1726;


axios.get(url + meuCep + '/json').then(function(dados){
    console.log(`Endereço: ${dados.data.logradouro}, Número: ${numero}, ${dados.data.localidade}/${dados.data.uf}`);
}).catch(function (error){
    if(error){
        console.log(error);
    }
});


