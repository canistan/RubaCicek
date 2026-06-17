import { GlobalConfig } from 'payload'

export const Refunds: GlobalConfig = {
  slug: 'refunds',
  label: 'İade Koşulları',
  admin: { group: 'Site Yönetimi' },
  access: { read: () => true },
  fields: [
    { name: 'content', type: 'richText', label: 'İade Koşulları Metni' },
  ],
}
