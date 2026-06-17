import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    group: 'Katalog',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Temel Bilgiler',
          fields: [
            { name: 'title', type: 'text', required: true, label: 'Ürün Adı' },
            { name: 'slug', type: 'text', required: true, unique: true },
            { name: 'price', type: 'number', required: true, label: 'Fiyat (₺)' },
            { name: 'stock', type: 'number', required: true, defaultValue: 10, label: 'Stok Miktarı' },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Yayında', value: 'published' },
                { label: 'Taslak', value: 'draft' },
              ],
              defaultValue: 'published',
              label: 'Durum',
            },
            {
              name: 'deliveryType',
              type: 'select',
              options: [
                { label: 'Sadece Kurye (Hassas)', value: 'courier_only' },
                { label: 'Kargo ile Tüm Türkiye', value: 'nationwide_shipping' },
              ],
              defaultValue: 'courier_only',
              label: 'Teslimat Şartı',
              admin: { description: 'Teraryum gibi hassas bitkiler sadece kurye ile taşınabilir.' },
            },
          ],
        },
        {
          label: 'Görseller & Metin',
          fields: [
            {
              name: 'images',
              type: 'array',
              required: true,
              label: 'Ürün Görselleri',
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media', required: true },
              ],
            },
            { name: 'shortDescription', type: 'textarea', label: 'Kısa Açıklama' },
            { name: 'content', type: 'richText', label: 'Detaylı Açıklama' },
          ],
        },
        {
          label: 'Sınıflandırma',
          fields: [
            { name: 'categories', type: 'relationship', relationTo: 'categories', hasMany: true, label: 'Kategoriler' },
            { name: 'occasions', type: 'relationship', relationTo: 'occasions', hasMany: true, label: 'Fırsatlar (Doğum Günü vb.)' },
            { name: 'recipients', type: 'relationship', relationTo: 'recipients', hasMany: true, label: 'Kime? (Anneye, Sevgiliye)' },
          ],
        },
        {
          label: 'Varyasyon & Ekstralar',
          fields: [
            {
              name: 'potOptions',
              type: 'array',
              label: 'Saksı Seçenekleri',
              fields: [
                { name: 'name', type: 'text', required: true, label: 'Saksı Adı (Örn: Terracotta)' },
                { name: 'priceAdjustment', type: 'number', defaultValue: 0, label: 'Fiyat Farkı (+₺)' },
              ],
            },
            {
              name: 'sizeOptions',
              type: 'array',
              label: 'Boyut Seçenekleri',
              fields: [
                { name: 'name', type: 'text', required: true, label: 'Boyut (Örn: L - 21cm Saksı Çapı)' },
                { name: 'priceAdjustment', type: 'number', defaultValue: 0, label: 'Fiyat Farkı (+₺)' },
              ],
            },
            {
              name: 'addons',
              type: 'relationship',
              relationTo: 'products',
              hasMany: true,
              label: 'Çapraz Satış (Yan Ürünler)',
              admin: { description: 'Çikolata, Ayıcık gibi ürünleri buraya ekleyin.' },
            },
          ],
        },
        {
          label: 'Bitki Bakım Kartı',
          fields: [
            { name: 'lightRequirement', type: 'text', label: 'Işık İhtiyacı', admin: { placeholder: 'Örn: Dolaylı güneş ışığı sever' } },
            { name: 'waterRequirement', type: 'text', label: 'Su İhtiyacı', admin: { placeholder: 'Örn: Toprağı tamamen kurudukça sulayın' } },
            {
              name: 'isPetFriendly',
              type: 'select',
              options: [
                { label: 'Evet (Toksik Değil)', value: 'yes' },
                { label: 'Hayır (Toksik Olabilir)', value: 'no' },
              ],
              label: 'Evcil Hayvan Dostu mu?',
            },
            { name: 'plantStory', type: 'textarea', label: 'Bitkinin Hikayesi / Anlamı' },
          ],
        },
      ],
    },
  ],
}
