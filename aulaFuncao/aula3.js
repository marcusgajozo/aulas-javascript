// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(2, 5));

// function criaPessoa(nome, sobremenome){
//     return {nome, sobremenome};
// }

// const p1 = criaPessoa('Marcus', 'Otávio');
// console.log(p1);

// function falaFrase(comeco) {
//   function falaResto(resto) {
//     return comeco + " " + resto;
//   }
//   return falaResto;
// }

// const olaMundo = falaFrase("Olá");
// const resto = olaMundo("mundo!");
// console.log(resto);

// function duplica(n){
//     return n * 2;
// }

// function triplica(n){
//     return n * 3;
// }

// function quadriplica(n){
//     return n * 4;
// }

function criaMultiplicador(multiplicador) {
  // multiplicador
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
