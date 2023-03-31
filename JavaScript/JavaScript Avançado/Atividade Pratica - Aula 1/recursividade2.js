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
