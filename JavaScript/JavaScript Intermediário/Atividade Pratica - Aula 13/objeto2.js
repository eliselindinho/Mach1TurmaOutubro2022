/*Desenvolva uma página HTML com um formulário com um campo number e 2 botões conforme o modelo (de baixa fidelidade) abaixo:

https://gyazo.com/6e16d776399ccabbcc9e98af6cda57f5 

a. Utilizar o botão Adicionar e Calcular para adicionar o valor digitado a um array.

b. Para executar o cálculo do triplo de cada valor do array usar o método .map() sobre os valores adicionados ao array.

c. Adicionar um evento ao limpar para limpar o array de valores adicionados.
*/

let botaoCalcular = document.getElementById("calcular");
let botaoLimpar = document.getElementById("limpar");
let numero = document.getElementById("numero");
let arrValores = [];
let resultadoDiv = document.getElementById("resultado");

  arrValores.map(function ());

botaoCalcular.addEventListener("click", calcularTriplo);

resultadoDiv.innerHTML = `${calcularTriplo}`;
