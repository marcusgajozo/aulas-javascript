// valor por referência
//                0          1         2
const nomes = ["Eduardo", "Maria", "Joana", "Wallace", "Rosana"];
nomes[2] = "Marcus";

// copia o array
const novo = [...nomes];

// remove do final do array
novo.pop();

// remove do comeco do array
novo.shift();

//add no final do array
novo.push("Marcus", "Ana", "Gabriel");

//add no comeco do array
novo.unshift("teste", "fiz", 1);

// remove o ultimo elemento vai do indice 0...n-1;
const novo2 = nomes.slice(0, -1);

const nome = "Marcus Vinicius Borges Gajozo";

// separa em array usando o parametro no caso coloquei espaço
const nomes2 = nome.split(' ');

// junta um array em um string e usa parametro para uniao
const nomeJunto = nomes2.join('1');
console.log(nomeJunto);
