function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Luiz");
const funcao2 = retornaFuncao("Marcus");

console.dir(funcao);
console.log(funcao());
console.log(funcao2());
