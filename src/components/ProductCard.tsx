import Link from 'next/link';
import Image from 'next/image';
import { AddToCartButton } from '@/components/AddToCartButton';

interface ProductCardProps {
  product: any;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images?.[0]?.image?.url || '/placeholder-image.jpg';
  const altText = product.images?.[0]?.image?.alt || product.title;

  return (
    <div className="group flex flex-col bg-white border border-ruba-earth/10 rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      
      {/* Image Container */}
      <Link href={`/urunler/${product.slug}`} className="relative w-full aspect-[4/5] bg-ruba-green/5 block overflow-hidden">
        {imageUrl !== '/placeholder-image.jpg' ? (
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-ruba-dark/30 font-serif italic text-sm">
            [Görsel Yok]
          </div>
        )}
        
        {/* Badges */}
        {product.stock && product.stock < 5 && (
          <div className="absolute top-2 left-2 bg-ruba-salmon text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm shadow-sm z-10">
            Son {product.stock} Ürün
          </div>
        )}
      </Link>
      
      {/* Product Info */}
      <div className="flex flex-col flex-grow p-4">
        <Link href={`/urunler/${product.slug}`} className="flex-grow">
          {/* Stars Placeholder */}
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-[10px] text-ruba-earth ml-1">(24)</span>
          </div>

          <h3 className="text-sm font-medium text-ruba-dark line-clamp-2 leading-snug hover:text-ruba-green transition-colors">
            {product.title}
          </h3>
          <p className="mt-2 text-lg font-semibold text-ruba-dark">
            {product.price?.toLocaleString('tr-TR')} <span className="text-sm">₺</span>
          </p>
        </Link>
        
        {/* Quick Add To Cart */}
        <div className="mt-4">
          <AddToCartButton product={product} />
        </div>
      </div>

    </div>
  );
}
