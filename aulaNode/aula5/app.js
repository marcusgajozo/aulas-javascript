const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

const escreve = require(path.resolve(__dirname, 'modules', 'escreve'));
const ler = require(path.resolve(__dirname, 'modules', 'ler'));

const pessoas = [
    {nome: 'João'},
    {nome: 'Marcus'},
    {nome: 'Ana'},
    {nome: 'Lucas'},
];

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);

async function leArquivo(caminho){
    const dados = await ler(caminho);
    return dados;
} 

const dadosAquivos =  leArquivo(caminhoArquivo).then(response => console.log(response)).catch(e => e);
console.log(dadosAquivos);