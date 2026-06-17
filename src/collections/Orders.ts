import { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderNumber',
    group: 'E-Ticaret',
  },
  access: {
    read: () => true, // Gelişmiş aşamada sadece adminler/ilgili kullanıcı görecek şekilde ayarlanmalı.
  },
  fields: [
    { name: 'orderNumber', type: 'text', required: true, unique: true, label: 'Sipariş Numarası', admin: { readOnly: true } },
    
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Müşteri & Tutar',
          fields: [
            { name: 'customerName', type: 'text', required: true, label: 'Müşteri Adı Soyadı' },
            { name: 'customerEmail', type: 'email', required: true, label: 'E-Posta' },
            { name: 'customerPhone', type: 'text', required: true, label: 'Telefon' },
            { name: 'totalAmount', type: 'number', required: true, label: 'Nihai Tutar (₺)' },
            { name: 'paymentId', type: 'text', label: 'İyzico Referans ID' },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Ödeme Bekliyor', value: 'pending' },
                { label: 'Ödendi / Hazırlanıyor', value: 'paid' },
                { label: 'Yola Çıktı', value: 'shipped' },
                { label: 'Teslim Edildi', value: 'delivered' },
                { label: 'İptal Edildi', value: 'cancelled' },
              ],
              defaultValue: 'pending',
              label: 'Sipariş Durumu',
            },
          ],
        },
        {
          label: 'Teslimat Bilgileri',
          fields: [
            {
              name: 'deliveryType',
              type: 'select',
              options: [
                { label: 'Özel Kurye (İstanbul İçi)', value: 'courier' },
                { label: 'Kargo (Türkiye Geneli)', value: 'shipping' },
              ],
              required: true,
              label: 'Teslimat Tipi',
            },
            { name: 'recipientName', type: 'text', required: true, label: 'Alıcı Adı Soyadı' },
            { name: 'recipientPhone', type: 'text', required: true, label: 'Alıcı Telefonu' },
            { name: 'deliveryAddress', type: 'textarea', required: true, label: 'Teslimat Adresi' },
            { name: 'deliveryDate', type: 'date', label: 'İstenen Teslimat Tarihi' },
            { name: 'deliveryTimeSlot', type: 'text', label: 'İstenen Saat Aralığı (Örn: 09:00 - 13:00)' },
          ],
        },
        {
          label: 'Sipariş Detayı & Notlar',
          fields: [
            {
              name: 'items',
              type: 'array',
              label: 'Satın Alınan Ürünler',
              fields: [
                { name: 'product', type: 'relationship', relationTo: 'products', required: true },
                { name: 'quantity', type: 'number', required: true },
                { name: 'priceAtPurchase', type: 'number', required: true },
                { name: 'selectedPot', type: 'text', label: 'Seçilen Saksı' },
                { name: 'selectedSize', type: 'text', label: 'Seçilen Boyut' },
              ],
            },
            { name: 'cardMessage', type: 'textarea', label: 'Hediye Kartı Mesajı' },
            { name: 'isAnonymous', type: 'checkbox', defaultValue: false, label: 'İsmim Gizli Kalsın' },
          ],
        },
      ],
    },
  ],
}
