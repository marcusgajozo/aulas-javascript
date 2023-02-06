//                -5        -4       -3        -2         -1
//                 0         1        2         3          4
const nomes = ["Eduardo", "Maria", "Joana", "Wallace", "Rosana"];

//nomes.splice(indice inicio, apagar elems quant, elem1, elem2, elem3...)

// simulando pop
let removidos = nomes.splice(-1, 1);

//simulando shift
removidos = nomes.splice(0, 1);

//simulando push
removidos = nomes.splice(nomes.length, 0, "Marcus");

//simulando unshift
removidos = nomes.splice(0, 0, "Ana", "Felipe");

console.log(nomes);
