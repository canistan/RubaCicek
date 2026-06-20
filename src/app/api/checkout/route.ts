import { getPayload } from 'payload';
import configPromise from '@/payload.config';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const payload = await getPayload({ config: configPromise });

    // Sipariş No oluştur (Ruba-YYYYMMDD-Random)
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `RUBA-${date}-${random}`;

    // Payload Local API üzerinden yeni sipariş oluşturma (Auth olmadan oluşturabilmek için overrideAccess: true gerekli olabilir, ama create: false olduğu için kesinlikle overrideAccess: true olmalı)
    const order = await payload.create({
      collection: 'orders',
      overrideAccess: true, // Collection access create: false olduğu için zorunlu
      data: {
        orderNumber,
        status: 'pending',
        totalAmount: data.totalAmount,
        contactName: data.contactName,
        contactPhone: data.contactPhone,
        shippingAddress: data.shippingAddress,
        orderNote: data.orderNote,
        items: data.items.map((item: any) => ({
          product: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    });

    return Response.json({ success: true, orderNumber });
  } catch (error) {
    console.error('Checkout error:', error);
    return Response.json({ success: false, error: 'Sipariş oluşturulamadı.' }, { status: 500 });
  }
}
