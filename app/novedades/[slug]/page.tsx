import NovedadesDetail from '@/components/shared/NovedadesDetail/NovedadesDetail'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  return (
    <main className='bg-brand-white-cdc'>
      <NovedadesDetail slug={slug} />
    </main>
  )
}
