import { buildConfig } from 'payload'
import path from 'path'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

// Collections
import { Albums } from './collections/Albums'
import { Products } from './collections/Products'
import { Coupons } from './collections/Coupons'
import { Blogs } from './collections/Blogs'
import { Workshops } from './collections/Workshops'
import { Members } from './collections/Members'
import { Orders } from './collections/Orders'
import { Subscribers } from './collections/Subscribers'
import { ContactMessages } from './collections/ContactMessages'

// Globals
import { HomePage } from './globals/HomePage'
import { About } from './globals/About'
import { Kvkk } from './globals/Kvkk'
import { Privacy } from './globals/Privacy'
import { Refunds } from './globals/Refunds'
import { SalesAgreement } from './globals/SalesAgreement'
import { Contact } from './globals/Contact'
import { BankAccounts } from './globals/BankAccounts'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret',
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(process.cwd(), 'src'),
    },
  },
  collections: [
    {
      slug: 'users',
      labels: { singular: 'Yönetici', plural: 'Yöneticiler' },
      admin: {
        useAsTitle: 'email',
        group: 'Bilgi Deposu',
      },
      auth: true,
      fields: [],
    },
    {
      slug: 'media',
      labels: { singular: 'Medya', plural: 'Medya (Tüm Görseller)' },
      admin: { group: 'Site Yönetimi' },
      upload: {
        disableLocalStorage: true,
        imageSizes: [
          { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
          { name: 'card', width: 768, height: 1024, position: 'centre' },
          { name: 'hero', width: 1920, height: 1080, position: 'centre' },
        ],
        adminThumbnail: 'thumbnail',
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: true,
          label: 'Otonom SEO Alt Metni (Alt Text)',
        },
      ],
    },
    Albums,
    Products,
    Coupons,
    Blogs,
    Workshops,
    Members,
    Orders,
    Subscribers,
    ContactMessages,
  ],
  globals: [
    HomePage,
    About,
    Kvkk,
    Privacy,
    Refunds,
    SalesAgreement,
    Contact,
    BankAccounts,
  ],
  editor: lexicalEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
})
