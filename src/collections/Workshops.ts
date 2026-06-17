import { CollectionConfig } from 'payload'

export const Workshops: CollectionConfig = {
  slug: 'workshops',
  labels: { singular: 'Atölye', plural: 'Atölyeler' },
  admin: {
    useAsTitle: 'title',
    group: 'Ürün Yönetimi',
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Atölye Adı' },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Kapak Görseli' },
    { name: 'date', type: 'date', required: true, label: 'Tarih ve Saat' },
    { name: 'price', type: 'number', required: true, label: 'Bilet Fiyatı (₺)' },
    { name: 'content', type: 'richText', label: 'Atölye Detayları' },
  ],
}
