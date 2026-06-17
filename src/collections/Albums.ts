import { CollectionConfig } from 'payload'

export const Albums: CollectionConfig = {
  slug: 'albums',
  labels: { singular: 'Albüm', plural: 'Albümler' },
  admin: {
    useAsTitle: 'title',
    group: 'Ürün Yönetimi',
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Albüm (Kategori) Adı' },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'description', type: 'textarea', label: 'SEO Açıklaması' },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Kapak Görseli' },
  ],
}
