export interface ICatalogItem {
  id: number;
  img: string;
  title: string;
  category: string;
  description?: string[];
  price: number;
  weight: string;
  sale?: number;
}

export interface ICatalogItems {
  id: number;
  title: string;
  categories: string[];
  items: ICatalogItem[];
}

export const catalogItems: ICatalogItems[] = [
  {
    id: 0,
    title: "Шашлык",
    categories: ["Свинина", "Говядина", "Телятина", "Баранина"],
    items: [
      {
        id: 0,
        img: "/img/eat/1@2x.png",
        title: "Шашлык из свиной вырезки",
        description: ["Свиная вырезка", "лук", "лаваш", "аджика"],
        category: "Свинина",
        price: 570,
        weight: "200/50 г",
        sale: 20,
      },
      {
        id: 1,
        img: "/img/eat/1@2x.png",
        category: "Баранина",
        title: "Шашлык из баранины Семечки",
        description: ["Бараньи ребра", "лаваш", "лук", "аджика"],
        price: 850,
        weight: "200/50 г",
      },
      {
        id: 2,
        img: "/img/eat/1@2x.png",
        category: "Баранина",
        title: "Шашлык из баранины Яблочко",
        description: ["Баранье яблоко", "лаваш", "лук", "аджика"],
        price: 830,
        weight: "200/50 г",
      },
      {
        id: 3,
        img: "/img/eat/1@2x.png",
        category: "Баранина",
        title: "Шашлык из баранины Яблочко",
        description: ["Баранье яблоко", "лаваш", "лук", "аджика"],
        price: 830,
        weight: "200/50 г",
      },
      {
        id: 4,
        img: "/img/eat/1@2x.png",
        category: "Телятина",
        title: "Шашлык из корейки ягнёнка",
        description: [
          "Баранья корейка",
          "баранье яблочко",
          "лаваш",
          "лук",
          "аджика",
        ],
        price: 1100,
        weight: "200/50 г",
      },
      {
        id: 5,
        img: "/img/eat/1@2x.png",
        category: "Телятина",
        title: "Куриный шашлык",
        description: ["Курица", "лук", "лаваш", "аджика"],
        price: 450,
        weight: "200/50 г",
      },
      {
        id: 6,
        img: "/img/eat/1@2x.png",
        category: "Телятина",
        title: "Шашлык из куриных крыльев",
        description: ["Куриные крылья", "лаваш", "лук", "аджика"],
        price: 500,
        weight: "200/50 г",
      },
      {
        id: 7,
        img: "/img/eat/1@2x.png",
        category: "Говядина",
        title: "Шашлык из куриных крыльев",
        description: ["Куриные крылья", "лаваш", "лук", "аджика"],
        price: 500,
        weight: "200/50 г",
      },
    ],
  },
  {
    id: 1,
    title: "Люля-Кебаб",
    categories: ["Свинина", "Говядина", "Телятина", "Баранина"],
    items: [
      {
        id: 0,
        img: "/img/eat/1@2x.png",
        category: "Свинина",
        title: "Шашлык из свиной вырезки",
        description: ["Свиная вырезка", "лук", "лаваш", "аджика"],
        price: 570,
        weight: "200/50 г",
        sale: 20,
      },
      {
        id: 1,
        img: "/img/eat/1@2x.png",
        category: "Баранина",
        title: "Шашлык из баранины Семечки",
        description: ["Бараньи ребра", "лаваш", "лук", "аджика"],
        price: 850,
        weight: "200/50 г",
      },
      {
        id: 2,
        img: "/img/eat/1@2x.png",
        category: "Баранина",
        title: "Шашлык из баранины Яблочко",
        description: ["Баранье яблоко", "лаваш", "лук", "аджика"],
        price: 830,
        weight: "200/50 г",
      },
      {
        id: 3,
        img: "/img/eat/1@2x.png",
        category: "Баранина",
        title: "Шашлык из баранины Яблочко",
        description: ["Баранье яблоко", "лаваш", "лук", "аджика"],
        price: 830,
        weight: "200/50 г",
      },
      {
        id: 4,
        img: "/img/eat/1@2x.png",
        category: "Баранина",
        title: "Шашлык из корейки ягнёнка",
        description: [
          "Баранья корейка",
          "баранье яблочко",
          "лаваш",
          "лук",
          "аджика",
        ],
        price: 1100,
        weight: "200/50 г",
      },
      {
        id: 5,
        img: "/img/eat/1@2x.png",
        title: "Куриный шашлык",
        category: "Баранина",
        description: ["Курица", "лук", "лаваш", "аджика"],
        price: 450,
        weight: "200/50 г",
      },
      {
        id: 6,
        img: "/img/eat/1@2x.png",
        category: "Телятина",
        title: "Шашлык из куриных крыльев",
        description: ["Куриные крылья", "лаваш", "лук", "аджика"],
        price: 500,
        weight: "200/50 г",
      },
      {
        id: 7,
        img: "/img/eat/1@2x.png",
        category: "Говядина",
        title: "Шашлык из куриных крыльев",
        description: ["Куриные крылья", "лаваш", "лук", "аджика"],
        price: 500,
        weight: "200/50 г",
      },
    ],
  },

  {
    id: 2,
    title: "Напитки",
    categories: ["Газ", "Б/газ", "Соки", "Пиво"],
    items: [
      {
        id: 0,
        img: "/img/eat/1@2x.png",
        category: "Газ",
        title: "Кока-кола",
        price: 150,
        weight: "500 мл",
      },
      {
        id: 1,
        category: "Пиво",
        img: "/img/eat/1@2x.png",
        title: "Кока-кола",
        price: 150,
        weight: "500 мл",
      },
      {
        id: 2,
        category: "Б/газ",
        img: "/img/eat/1@2x.png",
        title: "Кока-кола",
        price: 150,
        weight: "500 мл",
      },
      {
        id: 3,
        category: "Соки",
        img: "/img/eat/1@2x.png",
        title: "Кока-кола",
        price: 150,
        weight: "500 мл",
      },
    ],
  },
];
