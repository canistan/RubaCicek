import { CollectionConfig } from 'payload'

export const Members: CollectionConfig = {
  slug: 'members',
  labels: { singular: 'Üye', plural: 'Üyeler' },
  admin: {
    useAsTitle: 'email',
    group: 'Bilgi Deposu',
    description: 'Sisteme kayıt olan üyeler (Kişi Kartları). Bu alan otomatik dolar.',
  },
  access: {
    create: () => false, // Only API creates this
    update: () => false, // Read only in admin panel
    delete: () => false,
    read: () => true,
  },
  fields: [
    { name: 'fullName', type: 'text', label: 'Ad Soyad' },
    { name: 'email', type: 'email', required: true, label: 'E-Posta Adresi' },
    { name: 'phone', type: 'text', label: 'Telefon' },
    {
      name: 'addresses',
      type: 'array',
      label: 'Kayıtlı Adresler',
      fields: [
        { name: 'title', type: 'text', label: 'Adres Başlığı' },
        { name: 'address', type: 'textarea', label: 'Açık Adres' },
      ],
    },
  ],
}
