const path = require('path');

// ACHANDO O ARQUIVO USANDO PATH 
// const mod1 = require(path.resolve(__dirname, 'mod1.js'));

// ACHANDO O ARQUIVO USANDO CAMINHO RELATIVO
// const mod1 = require('./mod1');
// const falaNome = mod1..falaNome()

// ASSOCIACAO VIA DESTRUTURACAO
// const {nome, sobrenome, falaNome} = require('./mod1');

const {Pessoa} = require('./mod2');

const axios = require('axios');

const p1 = new Pessoa('Luiz');
console.log(p1);

// ISSO É UM EXEMPLO PARA AULA 
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));


// console.log(path);
// console.log(falaNome());
// console.log(nome, sobrenome);