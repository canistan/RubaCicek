import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    group: 'İçerik',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Sayfa Başlığı' },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'content', type: 'richText', label: 'İçerik' },
  ],
}
