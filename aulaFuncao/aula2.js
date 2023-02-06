/*  a função definida com a palavra 'function'
    tem uma variavel especial arguments, que 
    sustenta todos os argumentos enviados*/

// function funcao(a, b, c) {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }

//   console.log(total, a, b, c);
// }

// function funcao(a, b = 1, c = 2) {
//   // b = b || 2; // b recebe um valor padão
//   console.log(a + b + c);
// }

// parametro via desestruturacao obj
// function funcao({ nome, sobremenome, falaoi }) {
//   console.log(nome, sobremenome, falaoi());
// }

// let obj = {
//   nome: "Marcus",
//   sobremenome: "Gajozo",
//   idade: 10,
//   falaoi: function () {
//     console.log("Ooi");
//   },
// };

// parametro via desestruturacao array
// function funcao([valor1, valor2, valor3, valor4]) {
//   console.log(valor1, valor2, valor3);
// }

// funcao(['Marcus', 'Miranda', 21]);

// rest operator
// function expression 
// const conta = function (operador, acumulador, ...numeros) {
//   console.log(arguments);
// };

const conta = (...args) => {
  console.log(args);
};

conta("+", 0, 20, 30, 40, 50);
