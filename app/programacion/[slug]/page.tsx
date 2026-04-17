import React from 'react';
import ProgramacionDetail from '@/components/home/ProgramacionDetail/ProgramacionDetail';

interface PageProps {
  params: Promise<{
    slug: string
  }>
  searchParams: Promise<{
    date?: string
  }>
}


export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = await params
  const { date } = await searchParams

  return (
    <main className='bg-brand-white-cdc'>
      <ProgramacionDetail slug={slug} initialDate={date} />
    </main>
  )
}