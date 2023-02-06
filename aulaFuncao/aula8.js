// factory function (Função Fábrica)
// Constructor function (Função Construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome}  ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join();
    },

    fala: function (assusto) {
      return `${nome} está ${assusto}`;
    },
    altura: altura,
    peso: peso,
    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Maria", "Gajozo", 1.75, 72);
console.log(p1.nomeCompleto);
p1.nomeCompleto = "Marcus Borges Gajozo";
console.log(p1.nomeCompleto);
