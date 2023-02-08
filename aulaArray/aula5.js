// Dobre os números
//
const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map(function(valor, indice, array) {
//     return `Marcus -> ${valor}`
// })

// arrow function
// const numerosEmDobro = numeros.map((valor, indice, array) => {
//     return valor * 2;
// })

// simplificando mais ainda
const numerosEmDobro = numeros.map((valor) => valor * 2);

console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma id em objeto

const pessoas = [
  { nome: "Marcus", idade: 62 },
  { nome: "Ana", idade: 15 },
  { nome: "Gabriel", idade: 20 },
  { nome: "Lucas", idade: 35 },
  { nome: "Rosana", idade: 3 },
  { nome: "Hevila", idade: 8 },
];

// arrow function
const nomes = pessoas.map((obj) => obj.nome);
console.log(nomes);

// function
// const idades = pessoas.map(function (obj) {
//   return { idade: obj.idade };
// });
// console.log(idades);

// arrow funcion
const idades = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idades);

const comIds = pessoas.map((obj, indice) => {
  const objNovo = { ...obj };
  objNovo.id = indice;
  return objNovo;
});

console.log(pessoas);
console.log(comIds);
