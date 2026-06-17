import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: { singular: 'Görsel', plural: 'Görseller (Ürünler)' },
  admin: {
    useAsTitle: 'title',
    group: 'Ürün Yönetimi',
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Görsel/Ürün Adı' },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'price', type: 'number', required: true, label: 'Fiyat (₺)' },
    { name: 'stock', type: 'number', label: 'Stok Miktarı' },
    {
      name: 'album',
      type: 'relationship',
      relationTo: 'albums',
      hasMany: true,
      required: true,
      label: 'Bağlı Olduğu Albümler',
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      label: 'Görseller',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media', required: true }],
    },
    { name: 'content', type: 'richText', label: 'Ürün Detayları' },
  ],
}
