import { GlobalConfig } from 'payload'

export const BankAccounts: GlobalConfig = {
  slug: 'bank-accounts',
  label: 'Banka Hesap Bilgisi',
  admin: { group: 'Site Yönetimi' },
  access: { read: () => true },
  fields: [
    {
      name: 'accounts',
      type: 'array',
      label: 'Banka Hesapları (Havale/EFT için)',
      fields: [
        { name: 'bankName', type: 'text', required: true, label: 'Banka Adı' },
        { name: 'accountHolder', type: 'text', required: true, label: 'Alıcı Adı Soyadı' },
        { name: 'iban', type: 'text', required: true, label: 'IBAN' },
      ],
    },
  ],
}
