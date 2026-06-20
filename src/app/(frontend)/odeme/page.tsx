"use client";

import { useCart } from '@/store/useCart';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderNo, setOrderNo] = useState('');

  const [formData, setFormData] = useState({
    contactName: '',
    contactPhone: '',
    shippingAddress: '',
    orderNote: '',
  });

  const totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setLoading(true);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          totalAmount,
          items,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSuccess(true);
        setOrderNo(result.orderNumber);
        clearCart();
      } else {
        alert('Sipariş oluşturulurken bir hata oluştu.');
      }
    } catch (err) {
      alert('Sipariş oluşturulurken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center bg-ruba-cream px-4">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm text-center border border-ruba-earth/20">
            <svg className="mx-auto h-16 w-16 text-ruba-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="mt-6 text-3xl font-serif text-ruba-dark tracking-tight">Siparişiniz Alındı</h2>
            <p className="mt-4 text-ruba-earth">Sipariş numaranız: <span className="font-semibold text-ruba-dark">{orderNo}</span></p>
            <p className="mt-2 text-sm text-ruba-earth/80">Sipariş detaylarınız bize ulaştı, en kısa sürede özenle hazırlanıp teslim edilecektir.</p>
            <div className="mt-8">
              <button
                onClick={() => router.push('/urunler')}
                className="w-full bg-ruba-dark text-ruba-cream py-3 rounded-full hover:bg-ruba-green transition-colors"
              >
                Mağazaya Dön
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-ruba-cream">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
          
          {/* Form Alanı */}
          <div className="lg:col-span-7">
            <div>
              <h2 className="text-2xl font-serif text-ruba-dark tracking-tight">Teslimat & İletişim Bilgileri</h2>
              <p className="mt-2 text-sm text-ruba-earth">Siparişinizin sorunsuz ulaşması için lütfen bilgileri eksiksiz doldurun.</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-ruba-dark">Alıcı Adı Soyadı</label>
                <input
                  type="text"
                  id="contactName"
                  required
                  className="mt-1 block w-full rounded-sm border-ruba-earth/30 shadow-sm focus:border-ruba-green focus:ring-ruba-green bg-white p-3 border outline-none"
                  value={formData.contactName}
                  onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-ruba-dark">İletişim Numarası</label>
                <input
                  type="tel"
                  id="contactPhone"
                  required
                  className="mt-1 block w-full rounded-sm border-ruba-earth/30 shadow-sm focus:border-ruba-green focus:ring-ruba-green bg-white p-3 border outline-none"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({...formData, contactPhone: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="shippingAddress" className="block text-sm font-medium text-ruba-dark">Açık Teslimat Adresi</label>
                <textarea
                  id="shippingAddress"
                  rows={3}
                  required
                  className="mt-1 block w-full rounded-sm border-ruba-earth/30 shadow-sm focus:border-ruba-green focus:ring-ruba-green bg-white p-3 border outline-none"
                  value={formData.shippingAddress}
                  onChange={(e) => setFormData({...formData, shippingAddress: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="orderNote" className="block text-sm font-medium text-ruba-dark">Çiçek Notu (Opsiyonel)</label>
                <textarea
                  id="orderNote"
                  rows={2}
                  className="mt-1 block w-full rounded-sm border-ruba-earth/30 shadow-sm focus:border-ruba-green focus:ring-ruba-green bg-white p-3 border outline-none"
                  placeholder="Sevdiklerinize iletmek istediğiniz mesaj..."
                  value={formData.orderNote}
                  onChange={(e) => setFormData({...formData, orderNote: e.target.value})}
                />
              </div>

              {/* Gizli submit butonu */}
              <button id="submitForm" type="submit" className="hidden">Gönder</button>
            </form>
          </div>

          {/* Sipariş Özeti */}
          <div className="mt-10 lg:mt-0 lg:col-span-5">
            <div className="bg-white border border-ruba-earth/20 rounded-lg shadow-sm px-6 py-8">
              <h2 className="text-xl font-serif text-ruba-dark mb-6">Sipariş Özeti</h2>
              
              {items.length === 0 ? (
                <p className="text-sm text-ruba-earth">Sepetiniz boş.</p>
              ) : (
                <>
                  <ul className="space-y-4 mb-6">
                    {items.map((item) => (
                      <li key={item.id} className="flex justify-between text-sm">
                        <span className="text-ruba-dark font-medium">{item.title} <span className="text-ruba-earth">x{item.quantity}</span></span>
                        <span className="text-ruba-dark">{(item.price * item.quantity).toLocaleString('tr-TR')} ₺</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-ruba-earth/20 pt-6 flex justify-between items-center text-lg font-serif font-medium text-ruba-dark mb-8">
                    <span>Toplam</span>
                    <span>{totalAmount.toLocaleString('tr-TR')} ₺</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => document.getElementById('submitForm')?.click()}
                    disabled={loading || items.length === 0}
                    className="w-full bg-ruba-dark text-ruba-cream py-4 rounded-full hover:bg-ruba-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'İşleniyor...' : 'Siparişi Onayla'}
                  </button>
                  <p className="mt-4 text-xs text-center text-ruba-earth/80">
                    Ödeme altyapısı (İyzico) entegrasyonu tamamlanana kadar siparişler kapıda ödeme olarak kaydedilir.
                  </p>
                </>
              )}
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
