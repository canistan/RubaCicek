import { CollectionConfig } from 'payload'

export const Occasions: CollectionConfig = {
  slug: 'occasions',
  admin: {
    useAsTitle: 'title',
    group: 'Katalog',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Fırsat/Gün Adı (Örn: Doğum Günü)',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
