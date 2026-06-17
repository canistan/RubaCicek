import { GlobalConfig } from 'payload'

export const SalesAgreement: GlobalConfig = {
  slug: 'sales-agreement',
  label: 'Satış Sözleşmesi',
  admin: { group: 'Site Yönetimi' },
  access: { read: () => true },
  fields: [
    { name: 'content', type: 'richText', label: 'Mesafeli Satış Sözleşmesi Metni' },
  ],
}
