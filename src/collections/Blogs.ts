import { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  labels: { singular: 'Blog', plural: 'Blog Yazıları' },
  admin: {
    useAsTitle: 'title',
    group: 'Ürün Yönetimi',
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Makale Başlığı' },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'coverImage', type: 'upload', relationTo: 'media', label: 'Kapak Görseli' },
    { name: 'content', type: 'richText', required: true, label: 'İçerik' },
    { name: 'isPublished', type: 'checkbox', defaultValue: true, label: 'Yayında mı?' },
  ],
}
