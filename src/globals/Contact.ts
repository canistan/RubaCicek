import { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  label: 'İletişim',
  admin: { group: 'Site Yönetimi' },
  access: { read: () => true },
  fields: [
    { name: 'address', type: 'textarea', label: 'Adres' },
    { name: 'phone', type: 'text', label: 'Telefon' },
    { name: 'whatsapp', type: 'text', label: 'WhatsApp Destek Hattı' },
    { name: 'email', type: 'email', label: 'E-Posta' },
  ],
}
