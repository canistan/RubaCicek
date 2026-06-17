import { CollectionConfig } from 'payload'

export const Workshops: CollectionConfig = {
  slug: 'workshops',
  admin: {
    useAsTitle: 'title',
    group: 'Stüdyo',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Atölye Adı' },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'image', type: 'upload', relationTo: 'media', required: true, label: 'Kapak Görseli' },
    { name: 'instructor', type: 'text', required: true, label: 'Eğitmen' },
    { name: 'date', type: 'date', required: true, label: 'Tarih ve Saat' },
    { name: 'location', type: 'text', required: true, label: 'Konum (Adres veya Online Link)' },
    { name: 'capacity', type: 'number', required: true, label: 'Kontenjan' },
    { name: 'price', type: 'number', required: true, label: 'Bilet Fiyatı (₺)' },
    { name: 'content', type: 'richText', label: 'Atölye İçeriği' },
  ],
}
