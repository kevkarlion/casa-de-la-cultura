import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getNovedadBySlug, getRelatedNovedades  } from '@/utils/novedades.mock'
import { Instagram, Facebook, Share2 } from 'lucide-react'
import Breadcrumbs from "@/components/shared/Breadcrumb/Breadcrumbs";

interface NovedadesDetailProps {
  slug: string
}




export default function NovedadesDetail({ slug }: NovedadesDetailProps) {
  const novedad = getNovedadBySlug(slug)

  const related = novedad?.tags
  ? getRelatedNovedades(novedad.slug, novedad.tags)
  : []

  if (!novedad) {
    notFound()
  }

  return (
    <>
    <article className="container mx-auto px-6 py-20 max-w-6xl bg-brand-white-cdc">
       <Breadcrumbs
  items={[
    { label: "Inicio", href: "/" },
    { label: "Novedades", href: "/novedades" },
    { label: novedad.title },
  ]}
/>

      {/* Header editorial */}
      <header className="mb-12 max-w-3xl">
        <p className="text-sm text-black mb-3">
          {new Date(novedad.date).toLocaleDateString('es-AR')}
        </p>

        <h1 className="text-4xl md:text-5xl font-neue font-bold mb-6 leading-tight text-black">
          {novedad.title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {novedad.tags?.map(tag => (
            <span
              key={tag}
              className="text-xs px-3 py-1  bg-black text-brand-white-cdc"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Cuerpo tipo diario */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Columna izquierda – texto */}
        <div className="lg:col-span-8">
          <p className="font-inter text-lg leading-relaxed text-black whitespace-pre-line">
            {novedad.excerpt}
          </p>
        </div>

        {/* Columna derecha – visual / social */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
          {/* Imagen destacada */}
          <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden">
            <Image
              src={novedad.image}
              alt={novedad.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Redes / compartir */}
          <div className="border-t pt-6">
            <p className="text-sm uppercase tracking-widest text-black mb-4">
              Compartir
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-3 rounded-full border text-black hover:bg-black hover:text-white transition"
                aria-label="Compartir en Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="p-3 rounded-full border text-black hover:bg-black hover:text-white transition"
                aria-label="Compartir en Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="p-3 rounded-full border text-black hover:bg-black hover:text-white transition"
                aria-label="Compartir enlace"
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </article>
    {related.length > 0 && (
  <section className="container mx-auto px-6 pb-24 max-w-6xl">
    <h2 className="text-2xl font-neue font-bold mb-8 text-black">
      Noticias relacionadas
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {related.map(item => (
        <a
          key={item.slug}
          href={`/novedades/${item.slug}`}
          className="group block bg-black overflow-hidden transition hover:shadow-xl"
        >
          {/* Imagen */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Contenido */}
          <div className="p-5 flex flex-col gap-2">
            <p className="text-xs text-neutral-400">
              {new Date(item.date).toLocaleDateString('es-AR')}
            </p>

            <h3 className="font-neue font-semibold text-lg leading-snug text-brand-white-cdc group-hover:underline">
              {item.title}
            </h3>

            {/* Tags (opcional, suma mucho) */}
            <div className="flex flex-wrap gap-2 mt-2">
              {item.tags?.slice(0, 2).map(tag => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 border border-white/20 text-white/80"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
)}


    </>
    



    
  )
}
