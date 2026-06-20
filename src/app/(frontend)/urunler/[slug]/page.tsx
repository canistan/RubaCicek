import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AddToCartButton } from '@/components/AddToCartButton';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: { slug: string };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const payload = await getPayload({ config: configPromise });
  
  // Ürünü slug ile çekiyoruz
  const { docs: products } = await payload.find({
    collection: 'products',
    where: { slug: { equals: params.slug } },
    depth: 1,
    limit: 1,
  });

  if (!products || products.length === 0) {
    notFound();
  }

  const product = products[0];
  const imageUrl = product.images?.[0]?.image?.url || '/placeholder-image.jpg';
  const altText = product.images?.[0]?.image?.alt || product.title;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            
            {/* Sol: Görsel */}
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-ruba-green/10">
              {imageUrl !== '/placeholder-image.jpg' ? (
                <Image
                  src={imageUrl}
                  alt={altText}
                  fill
                  className="object-cover object-center"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-ruba-dark/30 font-serif italic text-lg">
                  [Görsel Yok]
                </div>
              )}
            </div>

            {/* Sağ: Detaylar */}
            <div className="mt-10 px-4 sm:px-0 lg:mt-0 flex flex-col justify-center">
              <h1 className="text-3xl font-serif tracking-tight text-ruba-dark sm:text-4xl">
                {product.title}
              </h1>
              
              <div className="mt-4">
                <h2 className="sr-only">Ürün Bilgisi</h2>
                <p className="text-3xl tracking-tight text-ruba-earth font-serif italic">
                  {product.price?.toLocaleString('tr-TR')} ₺
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Açıklama</h3>
                <div className="text-base text-ruba-dark/80 space-y-4 leading-relaxed">
                  {/* RichText içeriği ileride Payload'ın Lexical render'ı ile basılacak. Şimdilik text olarak mock yapıyoruz */}
                  <p>
                    Doğanın kalbinden özenle seçilmiş, Wabi-Sabi ruhunu yansıtan bu özel tasarım, mekanınıza zarafet katacak.
                  </p>
                </div>
              </div>

              {/* Sepete Ekle */}
              <div className="mt-10 flex">
                <AddToCartButton product={product} />
              </div>

              <div className="mt-8 border-t border-ruba-earth/20 pt-8">
                <div className="flex items-center text-sm text-ruba-earth">
                  <svg className="flex-shrink-0 mr-2 h-5 w-5 text-ruba-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>İstanbul İçi Aynı Gün Teslimat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
