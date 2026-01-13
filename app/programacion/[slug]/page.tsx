import React from 'react';
import ProgramacionDetail from '@/components/home/ProgramacionDetail/ProgramacionDetail';

interface PageProps {
  params: Promise<{
    slug: string
  }>
}


export default async function Page({ params }: PageProps) {
  const { slug } = await params

  return (
    <main className='bg-brand-white-cdc'>
      <ProgramacionDetail slug={slug} />
    </main>
  )
}