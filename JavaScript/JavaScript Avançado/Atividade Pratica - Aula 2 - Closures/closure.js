/*Criar uma função usando o conceito de closure que prepare e exiba uma tabuada seguindo as seguintes regras.

a. A primeira função seja montarTabuada(numero) – Que será responsável por receber o número e preparar a tabuada.

b. Após armazenar a chamada do montarTabuada()  */

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
