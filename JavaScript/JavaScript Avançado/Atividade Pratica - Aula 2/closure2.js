function criarContadorNumerico(n) {
  function contador() {
    return n++;
  }
  return contador;
}

const contador = criarContadorNumerico(1);

const idPrimeiroAluno = contador();
console.log(idPrimeiroAluno);
const idSegundoAluno = contador();
console.log(idSegundoAluno);
const idTerceiroAluno = contador();
console.log(idTerceiroAluno);

const novoContador = criarContadorNumerico(6);

console.log(novoContador());
console.log(novoContador());
