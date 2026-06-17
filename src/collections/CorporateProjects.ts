import { CollectionConfig } from 'payload'

export const CorporateProjects: CollectionConfig = {
  slug: 'corporate-projects',
  admin: {
    useAsTitle: 'title',
    group: 'Stüdyo',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Proje Adı' },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'client', type: 'text', label: 'Müşteri / Marka' },
    { name: 'coverImage', type: 'upload', relationTo: 'media', required: true, label: 'Kapak Görseli' },
    {
      name: 'gallery',
      type: 'array',
      label: 'Proje Galerisi',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
      ],
    },
    { name: 'content', type: 'richText', label: 'Proje Detayları' },
  ],
}
