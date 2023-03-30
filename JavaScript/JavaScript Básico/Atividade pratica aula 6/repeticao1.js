/*Crie um arquivo chamado repeticao1_js.html, e vamos fazer um algoritmo para resolver um problema de negócio:

“A MACH1 Escola de aviação e pilotagem promove a reciclagem de 
seus pilotos (instrutores) a cada 2 anos.
Como base nessa informação, você deve construir um 
algoritmo que receba a informação de quantos anos o piloto está 
vinculado a escola, e, em contrapartida, deve devolver para o usuário qual 
o número de reciclagens que este piloto já participou.
Caso esse piloto tenha apenas 1 ano de vínculo com a escola você 
deve responder para o usuário que ele ainda não tem o tempo mínimo 
de 2 anos para ter uma reciclagem.
Se o usuário digitar um texto (“EX: 1 ano”), responda que 
ele deve digitar apenas números para receber o dado correto.”

Dicas importantes:
  ● Preste atenção nas palavras destacadas no texto do problema;
  ● Utilize prompt para receber o valor do usuário;
  ● Não esqueça de converter o valor recebido para o tipo adequado, pois o prompt sempre devolve uma string;
  ● Valide se o usuário realmente digitou um número;
  ● Utilize estrutura de repetição e o incremento correto para obter os valores;
  ● Utilize alert para exibir a resposta.
  ● Não deixe o usuário sem uma resposta adequada.*/

let tempoPiloto = prompt(
  "Há quantos anos você trabalha na Mach1 Escola de Aviação?"
);

if (isNaN(tempoPiloto)) {
  alert("Por favor, insira um número.");
} else {
  let reciclagem = 0;
  let cont = 0;
  let mensagem = "";
  while (cont <= tempoPiloto) {
    if (tempoPiloto < 2) {
      mensagem = "Usuário ainda não tem o tempo mínimo de 2 anos.";
    } else {
      mensagem = `Usuário já realizou ${reciclagem} reciclagem(ns).`;
      reciclagem++;
    }
    cont += 2;
  }
  alert(mensagem);
}
