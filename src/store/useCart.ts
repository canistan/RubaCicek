import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string; // Product ID
  slug: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  
  // Actions
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  
  // UI Actions
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,

      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            items: currentItems.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...currentItems, { ...item, quantity: 1 }] });
        }
        
        // Sepete eklendiğinde sepeti otomatik açalım
        set({ isCartOpen: true });
      },

      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        if (quantity < 1) {
          get().removeItem(id);
          return;
        }
        
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleCart: () => {
        set({ isCartOpen: !get().isCartOpen });
      },
      
      openCart: () => {
        set({ isCartOpen: true });
      },
      
      closeCart: () => {
        set({ isCartOpen: false });
      },
    }),
    {
      name: 'ruba-cart-storage',
      // Sadece `items` state'ini persist edelim, `isCartOpen` sayfa yenilemede false gelsin
      partialize: (state) => ({ items: state.items }),
    }
  )
);
