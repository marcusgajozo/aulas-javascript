// Declaração de função (Function hoisting)

// falaOie();

// function falaOie(){
//     console.log('Oie');
// }

// First-class objects (Objetos de primeira classe)
// Function expression

// const souUmDado = function () {
//   console.log("Sou um dado.");
// };

// function executaFuncao(funcao) {
//   funcao();
// }

// executaFuncao(souUmDado);

// // Arrow function

// const funcaoArrow = () => {
//   console.log("Sou uma arrow funcion");
// };

// funcaoArrow();

// //Dentro de um objeto

const obj = {
  falar: function () {
    console.log("Estou falando...");
  },
};
  
obj.falar();
