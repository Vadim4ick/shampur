export interface ICatalogItem {
  id: number;
  img: string;
  title: string;
  description: string[];
  price: number;
  weight: string;
  sale?: number;
}

export const catalogItems = [
  {
    id: 0,
    title: "Шашлык",
    categories: ["Свинина", "говядина", "Телятина", "баранина"],
    items: [
      {
        id: 0,
        img: "/img/eat/1@2x.png",
        title: "Шашлык из свиной вырезки",
        description: ["Свиная вырезка", "лук", "лаваш", "аджика"],
        price: 1000,
        weight: "200/50 г",
        sale: 20,
      },
      {
        id: 1,
        img: "/img/eat/1@2x.png",
        title: "Шашлык из баранины Семечки",
        description: ["Бараньи ребра", "лук", "лаваш", "аджика"],
        weight: "200/50 г",
        price: 850,
      },
    ],
  },
];
