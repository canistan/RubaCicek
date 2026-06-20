"use client";

import { useCart } from '@/store/useCart';

interface AddToCartButtonProps {
  product: {
    id: string;
    slug: string;
    title: string;
    price: number;
    images?: any[];
  };
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent Link navigation if used inside a Link tag wrapper
    const imageUrl = product.images?.[0]?.image?.url || '/placeholder-image.jpg';
    
    addItem({
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      image: imageUrl,
    });
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="w-full bg-white border border-ruba-dark text-ruba-dark rounded-sm py-2 px-4 flex items-center justify-center text-sm font-medium hover:bg-ruba-dark hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ruba-green"
    >
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
      Sepete Ekle
    </button>
  );
}
