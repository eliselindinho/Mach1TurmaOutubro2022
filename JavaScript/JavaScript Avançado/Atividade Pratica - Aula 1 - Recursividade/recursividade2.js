/*
Estamos trabalhando em um sistema o qual o menu possui muito níveis, com vários submenus um dentro do outro. Pensando em facilitar a vida dos usuários foi solicitado criar um buscador para exibir o caminho completo até menu desejado. 

Crie uma função recursiva que retorne o caminho completo do menu desejado, buscando o mesmo na estrutura de dados abaixo. A função deverá fazer a busca com base no nome do menu.
a. A função receberá por parâmetro um array de menus e o nome do item a ser buscado.
b. Caso a função encontre o Menu que foi passado ela deve retornar o caminho completo de como se chegar ao Menu desejado.
c. Caso a função não encontre o Menu desejado a mesma deve retornar null.

Ex.: Para exemplificar a função recursiva que será criada, abaixo 3 exemplos com os resultados esperados a cada execução:
 o funcaoRecursiva(“Menu 1”, itens);
    ▪ “Menu 1”
 o funcaoRecursiva(“Menu 2.1.1.1.2”, itens);
    ▪ “Menu 2 > Menu 2.1 > Menu 2.1.1 > Menu 2.1.1.1 > Menu 2.1.1.1.2”
 o funcaoRecursiva(“Menu 3.1”, itens);
    ▪ null – “Pois não existe Menu 3.1 nos itens do menu.”   
*/

const itens = [
  {
    nome: "Menu 1",
    itens: [
      {
        nome: "Menu 1.1",
        itens: [],
      },
      { nome: "Menu 1.2", itens: [] },
      { nome: "Menu 1.3", itens: [{ nome: "Menu 1.3.1", itens: [] }] },
    ],
  },
  {
    nome: "Menu 2",
    itens: [
      {
        nome: "Menu 2.1",
        itens: [
          {
            nome: "Menu 2.1.1",
            itens: [
              {
                nome: "Menu 2.1.1.1",
                itens: [
                  { nome: "Menu 2.1.1.1.1", itens: [] },
                  { nome: "Menu 2.1.1.1.2", itens: [] },
                ],
              },
            ],
          },
          { nome: "Menu 2.1.2", itens: [] },
        ],
      },
      { nome: "Menu 2.2", itens: [{ nome: "Menu 2.2.1", itens: [] }] },
    ],
  },
];

function mapearMenu(itens, nome) {
  if (itens.nome === nome) {
    return [itens.nome];
  }

  if (itens.itens) {
    for (let i = 0; i < itens.itens.lenght; i++) {
      const encontrarMenu = mapearMenu(itens.itens[i], nome);
      if (encontrarMenu) {
        encontrarMenu.unshift(itens.itens);
        return encontrarMenu;
      }
    }
  }
  return null;
}

const buscarMenu1 = mapearMenu(itens, "Menu 1");
console.log(buscarMenu1);

const buscarMenu2 = mapearMenu("Menu 2.1.1.1.2", itens);
console.log(buscarMenu2);

const buscarMenu3 = mapearMenu("Menu 3.1", itens);
console.log(buscarMenu3);

buscarMenu1();
buscarMenu2();
buscarMenu3();
