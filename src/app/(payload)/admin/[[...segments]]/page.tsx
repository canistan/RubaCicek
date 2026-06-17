import configPromise from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'

export const generateMetadata = ({ params, searchParams }: any) =>
  generatePageMetadata({ config: configPromise, params, searchParams })

const Page = ({ params, searchParams }: any) =>
  RootPage({ config: configPromise, importMap, params, searchParams })

export default Page
