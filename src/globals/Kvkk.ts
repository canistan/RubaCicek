import { GlobalConfig } from 'payload'

export const Kvkk: GlobalConfig = {
  slug: 'kvkk',
  label: 'KVKK',
  admin: { group: 'Site Yönetimi' },
  access: { read: () => true },
  fields: [
    { name: 'content', type: 'richText', label: 'KVKK Metni' },
  ],
}
