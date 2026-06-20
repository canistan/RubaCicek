import { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  labels: { singular: 'Sipariş', plural: 'Siparişler' },
  admin: {
    useAsTitle: 'orderNumber',
    group: 'Bilgi Deposu',
    description: 'Siteden gelen siparişler. Sistem otonom kaydeder.',
  },
  access: {
    create: () => false,
    delete: () => false,
    read: () => true,
    update: () => true, // Status needs to be updated by admin
  },
  fields: [
    { name: 'orderNumber', type: 'text', required: true, label: 'Sipariş No', admin: { readOnly: true } },
    { name: 'member', type: 'relationship', relationTo: 'members', label: 'Siparişi Veren Üye', admin: { readOnly: true } },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Ödeme Bekliyor', value: 'pending' },
        { label: 'Hazırlanıyor', value: 'processing' },
        { label: 'Yola Çıktı', value: 'shipped' },
        { label: 'Teslim Edildi', value: 'delivered' },
        { label: 'İptal Edildi', value: 'cancelled' },
        { label: 'İade Edildi', value: 'refunded' },
      ],
      defaultValue: 'pending',
      label: 'Sipariş Durumu',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Satın Alınan Ürünler',
      admin: { readOnly: true },
      fields: [
        { name: 'product', type: 'relationship', relationTo: 'products', required: true },
        { name: 'quantity', type: 'number', required: true },
        { name: 'price', type: 'number', required: true },
      ],
    },
    { name: 'totalAmount', type: 'number', required: true, label: 'Toplam Tutar (₺)', admin: { readOnly: true } },
    { name: 'contactName', type: 'text', label: 'Alıcı Adı Soyadı', admin: { readOnly: true } },
    { name: 'contactPhone', type: 'text', label: 'İletişim Numarası', admin: { readOnly: true } },
    { name: 'shippingAddress', type: 'textarea', label: 'Teslimat Adresi', admin: { readOnly: true } },
    { name: 'orderNote', type: 'textarea', label: 'Çiçek Notu / Sipariş Notu', admin: { readOnly: true } },
  ],
}
