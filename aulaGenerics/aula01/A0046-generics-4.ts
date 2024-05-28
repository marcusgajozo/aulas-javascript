type ObterChave = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChave = (objeto, chave) => objeto[chave];

const animal = {
  cor: "Rosa",
  vacina: ["vacina 1"],
};

const vacina = obterChave(animal, "vacina");
const cor = obterChave(animal, "cor");
