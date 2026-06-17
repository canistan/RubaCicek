import { CollectionConfig } from 'payload'

export const Coupons: CollectionConfig = {
  slug: 'coupons',
  labels: { singular: 'Kupon', plural: 'Kuponlar' },
  admin: {
    useAsTitle: 'code',
    group: 'Ürün Yönetimi',
  },
  access: { read: () => true },
  fields: [
    { name: 'code', type: 'text', required: true, unique: true, label: 'Kupon Kodu' },
    {
      name: 'discountType',
      type: 'select',
      options: [
        { label: 'Yüzde (%)', value: 'percentage' },
        { label: 'Sabit Tutar (₺)', value: 'fixed' },
      ],
      required: true,
      label: 'İndirim Tipi',
    },
    { name: 'discountValue', type: 'number', required: true, label: 'İndirim Değeri' },
    { name: 'isActive', type: 'checkbox', defaultValue: true, label: 'Aktif mi?' },
  ],
}
