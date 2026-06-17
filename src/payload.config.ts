import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Categories } from './collections/Categories';
import { Occasions } from './collections/Occasions';
import { Recipients } from './collections/Recipients';
import { Products } from './collections/Products';
import { Workshops } from './collections/Workshops';
import { CorporateProjects } from './collections/CorporateProjects';
import { Coupons } from './collections/Coupons';
import { Orders } from './collections/Orders';
import { Pages } from './collections/Pages';
import { SiteSettings } from './globals/SiteSettings';
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- Ruba Çiçekçilik Yönetim',
    },
    components: {
      graphics: {
        Logo: '@/components/admin/Logo.tsx#Logo',
        Icon: '@/components/admin/Logo.tsx#Icon',
      },
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        // Ekstra rol (Admin/User) vb. alanları buraya ekleyeceğiz.
      ],
    },
    {
      slug: 'media',
      upload: {
        disableLocalStorage: true, // Sadece Blob'a gitsin
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 300,
            position: 'centre',
          },
          {
            name: 'card',
            width: 768,
            height: 1024,
            position: 'centre',
          },
          {
            name: 'hero',
            width: 1920,
            height: 1080,
            position: 'centre',
          },
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
    Categories,
    Occasions,
    Recipients,
    Products,
    Workshops,
    CorporateProjects,
    Coupons,
    Orders,
    Pages,
  ],
  globals: [
    SiteSettings,
  ],
  editor: lexicalEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || 'ruba-secret',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
