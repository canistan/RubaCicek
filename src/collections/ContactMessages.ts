import { CollectionConfig } from 'payload'

export const ContactMessages: CollectionConfig = {
  slug: 'contact-messages',
  labels: { singular: 'İletişim Mesajı', plural: 'İletişim Mesajları' },
  admin: {
    useAsTitle: 'name',
    group: 'Bilgi Deposu',
    description: 'Bize ulaşın formundan gelen mesajlar.',
  },
  access: {
    create: () => false,
    update: () => false,
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Gönderen Adı' },
    { name: 'email', type: 'email', required: true, label: 'E-Posta' },
    { name: 'message', type: 'textarea', required: true, label: 'Mesaj İçeriği' },
    { name: 'createdAt', type: 'date', label: 'Gönderim Tarihi' },
  ],
}
