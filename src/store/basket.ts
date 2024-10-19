import { ICatalogItem } from "@/shared/const/catalogItems";
import { create } from "zustand";

export interface BasketItem {
  count: number;
  item: ICatalogItem;
  totalPrice: number;
}

interface State {
  basket: BasketItem[];
  totalCount: number;

  totalPrice: number;

  addToBasket: (item: ICatalogItem) => void;
  increaseCount: (item: ICatalogItem) => void;
  decreaseCount: (item: ICatalogItem) => void;
  removeFromBasket: (item: ICatalogItem) => void;

  initializeBasket: () => void;
}

const calculateTotalCount = (basket: BasketItem[]) =>
  basket.reduce((acc, basketItem) => acc + basketItem.count, 0);

const calculateTotalPrice = (basket: BasketItem[]) =>
  basket.reduce((acc, basketItem) => acc + basketItem.totalPrice, 0);

const saveBasketToLocalStorage = (basket: BasketItem[]) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

const getBasketFromLocalStorage = (): BasketItem[] => {
  const storedBasket = localStorage.getItem("basket");
  return storedBasket ? JSON.parse(storedBasket) : [];
};

export const useBasketStore = create<State>((set) => ({
  basket: [], // Initially empty on the server
  totalCount: 0,
  totalPrice: 0,

  initializeBasket: () => {
    const storedBasket = getBasketFromLocalStorage();

    set({
      basket: storedBasket,
      totalCount: calculateTotalCount(storedBasket),
      totalPrice: calculateTotalPrice(storedBasket),
    });
  },

  // Добавление товара в корзину
  addToBasket: (item: ICatalogItem) =>
    set((state) => {
      const existingItem = state.basket.find(
        (basketItem) => basketItem.item.id === item.id,
      );

      let updatedBasket;

      if (existingItem) {
        const newCount = existingItem.count + 1;

        updatedBasket = state.basket.map((basketItem) =>
          basketItem.item.id === item.id
            ? {
                ...basketItem,
                count: newCount,
                totalPrice: item.price * newCount,
              }
            : basketItem,
        );
      } else {
        updatedBasket = [
          ...state.basket,
          { item, count: 1, totalPrice: item.price },
        ];
      }

      saveBasketToLocalStorage(updatedBasket);

      return {
        basket: updatedBasket,
        totalCount: calculateTotalCount(updatedBasket),
        totalPrice: calculateTotalPrice(updatedBasket),
      };
    }),

  // Увеличение количества товара в корзине
  increaseCount: (item: ICatalogItem) =>
    set((state) => {
      const updatedBasket = state.basket.map((basketItem) => {
        if (basketItem.item.id === item.id) {
          const newCount = basketItem.count + 1;

          return {
            ...basketItem,
            count: newCount,
            totalPrice: item.price * newCount,
          };
        } else {
          return basketItem;
        }
      });

      saveBasketToLocalStorage(updatedBasket);

      return {
        basket: updatedBasket,
        totalCount: calculateTotalCount(updatedBasket),
        totalPrice: calculateTotalPrice(updatedBasket),
      };
    }),

  // Уменьшение количества товара в корзине
  decreaseCount: (item: ICatalogItem) =>
    set((state) => {
      const existingItem = state.basket.find(
        (basketItem) => basketItem.item.id === item.id,
      );

      let updatedBasket;

      if (existingItem && existingItem.count > 1) {
        const newCount = existingItem.count - 1;

        updatedBasket = state.basket.map((basketItem) =>
          basketItem.item.id === item.id
            ? {
                ...basketItem,
                count: newCount,
                totalPrice: item.price * newCount,
              }
            : basketItem,
        );
      } else {
        updatedBasket = state.basket.filter(
          (basketItem) => basketItem.item.id !== item.id,
        );
      }

      saveBasketToLocalStorage(updatedBasket);

      return {
        basket: updatedBasket,
        totalCount: calculateTotalCount(updatedBasket),
        totalPrice: calculateTotalPrice(updatedBasket),
      };
    }),

  // Удаление товара из корзины
  removeFromBasket: (item: ICatalogItem) =>
    set((state) => {
      const updatedBasket = state.basket.filter(
        (basketItem) => basketItem.item.id !== item.id,
      );

      saveBasketToLocalStorage(updatedBasket);

      return {
        basket: updatedBasket,
        totalCount: calculateTotalCount(updatedBasket),
        totalPrice: calculateTotalPrice(updatedBasket),
      };
    }),
}));
