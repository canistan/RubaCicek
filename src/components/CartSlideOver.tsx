"use client";

import { useCart } from '@/store/useCart';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function CartSlideOver() {
  const { isCartOpen, closeCart, items, updateQuantity, removeItem } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-ruba-dark/40 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Slide-over */}
      <div 
        className={`fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-ruba-cream shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-ruba-earth/20 bg-ruba-cream">
          <h2 className="text-2xl font-serif text-ruba-dark">Sepetim</h2>
          <button 
            onClick={closeCart}
            className="text-ruba-dark/60 hover:text-ruba-dark transition-colors p-2"
          >
            <span className="sr-only">Kapat</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-70">
              <svg className="w-16 h-16 text-ruba-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="font-serif italic text-xl text-ruba-dark">Sepetiniz şu an boş.</p>
              <p className="text-sm text-ruba-earth">Doğanın zarafetini keşfetmek için koleksiyonumuza göz atın.</p>
              <button 
                onClick={closeCart}
                className="mt-6 px-6 py-2 border border-ruba-dark text-ruba-dark rounded-full hover:bg-ruba-dark hover:text-ruba-cream transition-colors"
              >
                Alışverişe Devam Et
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex py-2 border-b border-ruba-earth/10 pb-6">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-ruba-green/10 relative">
                    <Image
                      src={item.image || '/placeholder-image.jpg'}
                      alt={item.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  
                  <div className="ml-4 flex flex-1 flex-col justify-center">
                    <div>
                      <div className="flex justify-between text-base font-medium text-ruba-dark">
                        <h3>
                          <Link href={`/urunler/${item.slug}`} onClick={closeCart}>{item.title}</Link>
                        </h3>
                        <p className="ml-4 font-serif italic text-ruba-earth">{item.price?.toLocaleString('tr-TR')} ₺</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between mt-2">
                      <div className="flex items-center border border-ruba-earth/30 rounded-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-ruba-dark hover:bg-ruba-earth/10 transition-colors"
                        >-</button>
                        <span className="px-2 text-sm text-ruba-dark">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-ruba-dark hover:bg-ruba-earth/10 transition-colors"
                        >+</button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-ruba-salmon hover:text-ruba-dark font-medium underline underline-offset-2 transition-colors"
                      >
                        Kaldır
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-ruba-earth/20 px-6 py-6 bg-ruba-cream/50 backdrop-blur-md">
            <div className="flex justify-between text-lg font-serif text-ruba-dark mb-4">
              <p>Ara Toplam</p>
              <p>{totalAmount.toLocaleString('tr-TR')} ₺</p>
            </div>
            <p className="text-xs text-ruba-earth mb-6">Kargo ve vergiler ödeme adımında hesaplanacaktır.</p>
            <div className="mt-6">
              <Link
                href="/odeme"
                onClick={closeCart}
                className="flex items-center justify-center rounded-full border border-transparent bg-ruba-dark px-6 py-4 text-base font-medium text-ruba-cream shadow-sm hover:bg-ruba-green transition-colors"
              >
                Siparişi Tamamla
              </Link>
            </div>
            <div className="mt-4 flex justify-center text-center text-sm text-ruba-earth">
              <p>
                veya{' '}
                <button
                  type="button"
                  className="font-medium text-ruba-dark hover:text-ruba-salmon underline underline-offset-2"
                  onClick={closeCart}
                >
                  Alışverişe Devam Et
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
