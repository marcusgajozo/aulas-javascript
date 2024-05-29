const objeto1: Record<string, string> = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: "30",
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Deixa tudo obrigatorio
type PessoaRequired = Required<PessoaProtocol>;

// Deixa tudo opcional
type PessoaPartil = Partial<PessoaRequired>;

// Deixa tudo readonly
type PessoaReadonly = Readonly<PessoaRequired>;

// Escola o que você quer usar
type PessoaPick = Pick<PessoaProtocol, "nome" | "sobrenome">;

const objeto2: PessoaRequired = {
  nome: "marcus",
  sobrenome: "vinicius",
  idade: 23,
};

console.log(objeto2);

// Extract e Exclude
type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: "asddadasddrf3sdasdad",
  nome: "Marcus",
  idade: 23,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log("API:");
console.log(accountApi);
