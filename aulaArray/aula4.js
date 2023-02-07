// Filter -> Sempre retorna um array, com a mesma quantidade de elementos

// Retorne os números maiores que 10
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const novoNumeros = [];

// usando for
for (let num of numeros) {
  if (num > 10) novoNumeros.push(num);
}

// usando o filter

// function callbackFilter(valor) {
//   return valor > 10;
// }

const numerosFiltrados = numeros.filter((valor, indice, array) => {
  //console.log(valor);
  // console.log(indice);
  return valor > 10;
});

const pessoas = [
  { nome: "Marcus", idade: 62 },
  { nome: "Ana", idade: 15 },
  { nome: "Gabriel", idade: 20 },
  { nome: "Lucas", idade: 35 },
  { nome: "Rosana", idade: 3 },
  { nome: "Hevila", idade: 8 },
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);

const pessoasComMaisDeCinquentaAnos = pessoas.filter((obj) => obj.idade > 50);

const nomeTerminaComA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("a")
);

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDeCinquentaAnos);
console.log(nomeTerminaComA);
