interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno: PessoaProtocolo<string, number> = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 10,
};
