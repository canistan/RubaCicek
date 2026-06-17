import { CollectionConfig } from 'payload'

export const Coupons: CollectionConfig = {
  slug: 'coupons',
  admin: {
    useAsTitle: 'code',
    group: 'E-Ticaret',
  },
  access: {
    read: () => true,
  },
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
    { name: 'minOrderAmount', type: 'number', label: 'Minimum Sepet Tutarı (₺)' },
    { name: 'expiryDate', type: 'date', label: 'Son Geçerlilik Tarihi' },
    { name: 'isActive', type: 'checkbox', defaultValue: true, label: 'Aktif mi?' },
  ],
}
