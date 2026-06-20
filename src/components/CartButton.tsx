"use client";

import { useCart } from '@/store/useCart';
import { useEffect, useState } from 'react';

export function CartButton() {
  const { toggleCart, items } = useCart();
  const [mounted, setMounted] = useState(false);

  // Zustand persist hydrate error prevention
  useEffect(() => {
    setMounted(true);
  }, []);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <button 
      onClick={toggleCart}
      className="relative text-ruba-dark hover:text-ruba-green transition-colors flex items-center justify-center p-2 rounded-full hover:bg-ruba-earth/10"
    >
      <span className="sr-only">Sepet</span>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      
      {mounted && itemCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold leading-none text-ruba-cream bg-ruba-salmon rounded-full border-2 border-ruba-cream">
          {itemCount}
        </span>
      )}
    </button>
  );
}
