import { create } from "zustand";
export interface Nutrition {
  fats: number;
  proteins: number;
  carbs: number;
  energy: number;
  organizations: string[];
  saturatedFattyAcid: number | null;
  salt: number | null;
  sugar: number | null;
}

export interface Price {
  organizationId: string;
  price: number;
}

export interface ItemSize {
  sku: string;
  sizeCode: string;
  sizeName: string;
  isDefault: boolean;
  portionWeightGrams: number;
  itemModifierGroups: unknown[]; // Типизируйте, если известна структура
  sizeId: string | null;
  nutritionPerHundredGrams: Nutrition;
  prices: Price[];
  nutritions: Nutrition[];
  measureUnitType: string;
  buttonImageCroppedUrl: {
    "475x250": {
      url: string;
      hash: string;
    };
    "475x250-webp": {
      url: string;
      hash: string;
    };
  } | null;
  // buttonImageCroppedUrl: string | null;
  buttonImageUrl: string | null;
}

export interface Item {
  sku: string;
  name: string;
  description: string;
  allergens: unknown[]; // Типизируйте, если известна структура
  tags: unknown[]; // Типизируйте, если известна структура
  labels: { code: string; name: string }[]; // Типизируйте, если известна структура
  itemSizes: ItemSize[];
  itemId: string;
  modifierSchemaId: string | null;
  taxCategory: string | null;
  modifierSchemaName: string;
  type: string;
  canBeDivided: boolean;
  canSetOpenPrice: boolean;
  useBalanceForSell: boolean;
  measureUnit: string;
  productCategoryId: string | null;
  customerTagGroups: unknown[]; // Типизируйте, если известна структура
  paymentSubject: string;
  outerEanCode: string | null;
  isHidden: boolean;
  orderItemType: string;
}

export interface ItemCategory {
  id: string;
  name: string;
  description: string;
  buttonImageUrl: string | null;
  headerImageUrl: string | null;
  iikoGroupId: string | null;
  items: Item[];
  scheduleId: string | null;
  scheduleName: string | null;
  schedules: unknown[]; // Типизируйте, если известна структура
  isHidden: boolean;
}

interface CatalogStore {
  itemCategories: ItemCategory[];
  setItemCategories: (categories: ItemCategory[]) => void;
}

export const useStoreCatalog = create<CatalogStore>((set) => ({
  itemCategories: [],
  setItemCategories: (categories) => set({ itemCategories: categories }),
}));
