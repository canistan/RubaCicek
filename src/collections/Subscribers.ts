import { CollectionConfig } from 'payload'

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  labels: { singular: 'Abone', plural: 'Aboneler' },
  admin: {
    useAsTitle: 'email',
    group: 'Bilgi Deposu',
    description: 'Bültene kayıt olan e-posta adresleri. (Dışarı aktarılabilir)',
  },
  access: {
    create: () => false,
    update: () => false,
    read: () => true,
  },
  fields: [
    { name: 'email', type: 'email', required: true, unique: true, label: 'Abone E-Posta' },
  ],
}
