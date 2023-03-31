let nomeCliente = ["Jorge", "Maria", "Manoel", "João", "Roberto", "Vera"];
let tempoEntrega = 15;

function calcularTempoEntrega(array, nome, i = 0) {
  if (nomeCliente.length <= i) {
    return null;
  }
  if (nome == nomeCliente[i]) {
    return (nomeCliente.length - i) * tempoEntrega;
  } else {
    return calcularTempoEntrega(nomeCliente, nome, ++i);
  }
}
calcularTempoEntrega("João");
