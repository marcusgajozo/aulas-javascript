// função construtura -> objetos
// função fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
  //atributos ou metodos privados
  const ID = 1235;
  const metodoInterno = () => {};

  //atributos ou metodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ": sou um método");
  };
}

const p1 = new Pessoa("Marcus", "Gajozo");
const p2 = new Pessoa("Ana", "Gajozo");

p1.metodo();
