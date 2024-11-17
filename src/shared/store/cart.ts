import { create } from "zustand";
import { IProduct } from "../components/product";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface CartItem extends IProduct {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
  addItem: (product: Omit<CartItem, "quantity">) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  calculateTotal: () => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        totalAmount: 0,

        addItem: (product) => {
          const { items } = get();
          const existingItem = items.find(
            (item) => item.article === product.article
          );

          if (existingItem) {
            set({
              items: items.map((item) =>
                item.article === product.article
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            });
          } else {
            set({ items: [...items, { ...product, quantity: 1 }] });
          }

          get().calculateTotal();
        },

        updateItemQuantity: (id, quantity) => {
          if (quantity <= 0) {
            get().removeItem(id);
          } else {
            set({
              items: get().items.map((item) =>
                item.article === id ? { ...item, quantity } : item
              ),
            });
          }

          get().calculateTotal();
        },

        removeItem: (id) => {
          set({ items: get().items.filter((item) => item.article !== id) });
          get().calculateTotal();
        },

        clearCart: () => set({ items: [], totalAmount: 0 }),

        calculateTotal: () => {
          const total = get().items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
          set({ totalAmount: total });
        },
      }),
      {
        name: "cart",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
