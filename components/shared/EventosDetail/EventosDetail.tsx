import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  getEventoBySlug,
  getRelatedEventos,
} from '@/utils/eventsComplet.mock'
import { Instagram, Facebook, Share2 } from 'lucide-react'
import Breadcrumbs from "@/components/shared/Breadcrumb/Breadcrumbs"


interface EventosDetailProps {
  slug: string
}

export default function EventosDetail({ slug }: EventosDetailProps) {
  const evento = getEventoBySlug(slug)

  if (!evento) {
    notFound()
  }

  const related = evento.tags
    ? getRelatedEventos(evento.slug, evento.tags)
    : []

  return (
    <>
      {/* ARTÍCULO */}
      <article className="container mx-auto px-6 py-20 max-w-6xl bg-brand-white-cdc">
            <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Eventos", href: "/eventos" },
          { label: evento.title },
        ]}
      />
        {/* Header */}
        <header className="mb-12 max-w-3xl">
          <p className="text-sm text-black mb-3">
            {new Date(evento.date).toLocaleDateString('es-AR')}
          </p>

          <h1 className="text-4xl md:text-5xl font-neue font-bold mb-6 leading-tight text-black">
            {evento.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {evento.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-black text-brand-white-cdc"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Cuerpo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Texto */}
          <div className="lg:col-span-8">
            <p className="font-inter text-lg leading-relaxed text-black whitespace-pre-line">
              {evento.description}
            </p>

            {/* Compartir */}
            <div className="mt-12 border-t pt-6">
              <p className="text-sm uppercase tracking-widest text-black mb-4">
                Compartir evento
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
                  aria-label="Copiar enlace"
                >
                  <Share2 size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Columna visual */}
          <aside className="lg:col-span-4">
            <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden">
              <Image
                src={evento.image}
                alt={evento.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </aside>
        </div>
      </article>

      {/* EVENTOS RELACIONADOS */}
      {related.length > 0 && (
        <section className="container mx-auto px-6 pb-24 max-w-6xl">
          <h2 className="text-2xl font-neue font-bold mb-8 text-black">
            Eventos relacionados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map(item => (
              <a
                key={item.slug}
                href={`/eventos/${item.slug}`}
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

                  <p className="text-sm text-neutral-300 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.slice(0, 2).map(tag => (
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
