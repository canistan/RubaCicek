import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Sistem Ayarları',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'İletişim & Sosyal Medya',
          fields: [
            { name: 'contactEmail', type: 'text', label: 'İletişim E-Postası' },
            { name: 'contactPhone', type: 'text', label: 'Müşteri Hizmetleri Telefonu' },
            { name: 'instagramUrl', type: 'text', label: 'Instagram Profil Linki' },
          ],
        },
        {
          label: 'Kargo & Teslimat Kuralları',
          fields: [
            { name: 'freeShippingThreshold', type: 'number', label: 'Ücretsiz Kargo Barajı (₺)' },
            { name: 'flatShippingRate', type: 'number', label: 'Sabit Kargo Ücreti (₺)' },
            { name: 'sameDayCutoffTime', type: 'text', label: 'Aynı Gün Teslimat Kapanış Saati (Örn: 15:00)' },
          ],
        },
        {
          label: 'Hazır Kart Mesajları',
          fields: [
            {
              name: 'cardTemplates',
              type: 'array',
              label: 'Kart Mesajı Şablonları',
              fields: [
                { name: 'category', type: 'text', required: true, label: 'Kategori (Örn: Doğum Günü)' },
                { name: 'message', type: 'textarea', required: true, label: 'Mesaj İçeriği' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
