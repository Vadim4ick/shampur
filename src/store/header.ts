import { create } from "zustand";

interface State {
  fixed: boolean;
  setFixed: (val: boolean) => void;
}

export const useHeaderStore = create<State>((set) => ({
  fixed: false,
  setFixed: (val: boolean) => set({ fixed: val }),
}));
