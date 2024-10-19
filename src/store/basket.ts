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

  addToBasket: (item: ICatalogItem) => void;
  increaseCount: (item: ICatalogItem) => void;
  decreaseCount: (item: ICatalogItem) => void;
  removeFromBasket: (item: ICatalogItem) => void;
}

const calculateTotalCount = (basket: BasketItem[]) =>
  basket.reduce((acc, basketItem) => acc + basketItem.count, 0);

export const useBasketStore = create<State>((set) => ({
  basket: [],
  totalCount: 0,

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

      return {
        basket: updatedBasket,
        totalCount: calculateTotalCount(updatedBasket),
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

      return {
        basket: updatedBasket,
        totalCount: calculateTotalCount(updatedBasket),
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

      return {
        basket: updatedBasket,
        totalCount: calculateTotalCount(updatedBasket),
      };
    }),

  // Удаление товара из корзины
  removeFromBasket: (item: ICatalogItem) =>
    set((state) => {
      const updatedBasket = state.basket.filter(
        (basketItem) => basketItem.item.id !== item.id,
      );

      return {
        basket: updatedBasket,
        totalCount: calculateTotalCount(updatedBasket),
      };
    }),
}));
