import { getPayload } from 'payload';
import configPromise from '@/payload.config';

export async function GET() {
  const payload = await getPayload({ config: configPromise });

  try {
    const products = [
      {
        title: 'Bahar Esintisi Teraryumu',
        price: 850,
        slug: 'bahar-esintisi-teraryumu',
      },
      {
        title: 'Sukulent Bahçesi',
        price: 640,
        slug: 'sukulent-bahcesi',
      },
      {
        title: 'Wabi-Sabi Orkide',
        price: 1200,
        slug: 'wabi-sabi-orkide',
      },
      {
        title: 'Kurutulmuş Çiçek Aranjmanı',
        price: 450,
        slug: 'kurutulmus-cicek-aranjmani',
      },
    ];

    for (const p of products) {
      await payload.create({
        collection: 'products',
        data: p,
      });
    }

    return Response.json({ success: true, message: 'Örnek ürünler başarıyla eklendi!' });
  } catch (err: any) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
