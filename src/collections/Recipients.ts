import { CollectionConfig } from 'payload'

export const Recipients: CollectionConfig = {
  slug: 'recipients',
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
      label: 'Alıcı Tipi (Örn: Anneye)',
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
