function montarTabuada(numero) {
  let tabuadaMultiplicacao = numero;

  return function (x, y) {
    for (x; x <= y; x++) {
      result = x * tabuadaMultiplicacao;
      console.log(`${x} x ${numero} = ${result}`);
    }
  };
}

const tabuada2 = montarTabuada(2);
tabuada2(1, 10);
