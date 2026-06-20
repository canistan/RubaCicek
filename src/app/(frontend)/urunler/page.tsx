import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const payload = await getPayload({ config: configPromise });
  
  // Ürünleri çekiyoruz
  const { docs: products } = await payload.find({
    collection: 'products',
    depth: 1, // Görselleri de getirmesi için
    limit: 50,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Sayfa Başlığı */}
        <div className="bg-ruba-green/10 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl tracking-tight font-serif text-ruba-dark sm:text-5xl">
              Koleksiyon
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-base text-ruba-earth">
              Wabi-sabi estetiğiyle tasarlanmış, doğanın kalbinden gelen eşsiz bitki ve çiçek aranjmanları.
            </p>
          </div>
        </div>

        {/* Ürün Izgarası */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="font-serif italic text-xl text-ruba-earth">
                Koleksiyonumuz şu an hazırlanıyor...
              </span>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
