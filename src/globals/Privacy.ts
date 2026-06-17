import { GlobalConfig } from 'payload'

export const Privacy: GlobalConfig = {
  slug: 'privacy',
  label: 'Gizlilik Politikası',
  admin: { group: 'Site Yönetimi' },
  access: { read: () => true },
  fields: [
    { name: 'content', type: 'richText', label: 'Gizlilik Politikası Metni' },
  ],
}
