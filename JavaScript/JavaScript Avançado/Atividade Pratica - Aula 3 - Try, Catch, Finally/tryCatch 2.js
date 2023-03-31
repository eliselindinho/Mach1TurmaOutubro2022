/*Criar um tratamento de erro que tenha 3 consoles.

● Primeiro ao entrar no escopo principal do tratamento de erro colocar um
console.log com o texto “Iniciando o processamento”;

● Segundo caso ocorra erro colocar um console.error com o erro que ocorreu.

● Terceiro no final da execução do tratamento colocar um console.log com o texto
“Fim do processo” */

try {
  console.log("Iniciando processamento.");
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Fim do processo!");
}
