import { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'Hakkımızda',
  admin: { group: 'Site Yönetimi' },
  access: { read: () => true },
  fields: [
    { name: 'content', type: 'richText', label: 'Hakkımızda İçeriği' },
  ],
}
