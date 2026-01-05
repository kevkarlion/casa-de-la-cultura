// import EventosNovedades from '@/components/shared/NovedadesDetail/NovedadesDetail'

import EventosDetail from "@/components/shared/EventosDetail/EventosDetail"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  return (
    <main className='bg-brand-white-cdc'>
      <EventosDetail slug={slug} />
    </main>
  )
}
