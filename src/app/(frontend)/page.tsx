import { getPayload } from 'payload';
import Link from 'next/link';
import configPromise from '@/payload.config';
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ProductCard } from '@/components/ProductCard';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise });
  
  // Ana sayfa için örnek 4 ürün çekiyoruz
  const { docs: products } = await payload.find({
    collection: 'products',
    depth: 1,
    limit: 4,
  });

  return (
    <>
      <Header />
      
      <main className="flex-grow bg-white">
        <Hero />
        
        {/* Güven Rozetleri (Trust Badges) */}
        <div className="border-b border-ruba-earth/10 bg-ruba-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-ruba-earth/10">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-ruba-green mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                <h4 className="text-sm font-semibold text-ruba-dark">Aynı Gün Teslimat</h4>
                <p className="text-xs text-ruba-earth mt-1">İstanbul İçi Siparişlerde</p>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-ruba-green mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <h4 className="text-sm font-semibold text-ruba-dark">Güvenli Ödeme</h4>
                <p className="text-xs text-ruba-earth mt-1">256-bit SSL Koruması</p>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-ruba-green mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                <h4 className="text-sm font-semibold text-ruba-dark">Taze Çiçekler</h4>
                <p className="text-xs text-ruba-earth mt-1">Özenle Seçilmiş Aranjmanlar</p>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-ruba-green mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h4 className="text-sm font-semibold text-ruba-dark">7/24 Destek</h4>
                <p className="text-xs text-ruba-earth mt-1">Müşteri Hizmetleri</p>
              </div>
            </div>
          </div>
        </div>

        {/* Çok Satanlar / Öne Çıkanlar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-serif text-ruba-dark font-medium">Çok Satanlar</h2>
              <p className="text-sm text-ruba-earth mt-1">Sevdiklerinizi mutlu etmenin en popüler yolları.</p>
            </div>
            <Link href="/urunler" className="hidden sm:block text-sm font-medium text-ruba-dark hover:text-ruba-salmon transition-colors underline underline-offset-4">
              Tümünü Gör
            </Link>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-ruba-cream/50 border border-dashed border-ruba-earth/30 rounded-md p-12 text-center">
              <p className="text-ruba-dark font-medium mb-2">Koleksiyon Hazırlanıyor</p>
              <p className="text-sm text-ruba-earth">Çok yakında en özel tasarımlarımız burada olacak.</p>
            </div>
          )}
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/urunler" className="inline-block text-sm font-medium text-ruba-dark hover:text-ruba-salmon transition-colors border border-ruba-dark px-6 py-2 rounded-sm w-full">
              Tümünü Gör
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
