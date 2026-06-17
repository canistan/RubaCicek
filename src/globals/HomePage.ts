import { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Ana Sayfa',
  admin: { group: 'Site Yönetimi' },
  access: { read: () => true },
  fields: [
    { name: 'heroTitle', type: 'text', label: 'Ana Başlık (Örn: Nereye Göndermek İstersiniz?)' },
    { name: 'heroImage', type: 'upload', relationTo: 'media', label: 'Hero Arka Plan Görseli' },
  ],
}
