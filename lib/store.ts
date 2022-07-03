import create from "zustand";

interface StoreType {
  currentNumber?: number;
  updateNumber: (n: string) => void;
  clearNumber: () => void;
}

export const useStore = create<StoreType>((set) => {
  function updateNumber(input: string) {
    let nextNum: number;
    if (input) {
      nextNum = Number.parseInt(input);
    }
    set({ currentNumber: nextNum });
  }

  return {
    currentNumber: 0,
    updateNumber,
    clearNumber: () => set({ currentNumber: 0 }),
  };
});
