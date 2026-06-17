import configPromise from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './admin/importMap'

const serverFunction: any = async function (args: any) {
  'use server'
  const { handleServerFunctions } = await import('@payloadcms/next/utilities')
  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction}>{children}</RootLayout>
}
