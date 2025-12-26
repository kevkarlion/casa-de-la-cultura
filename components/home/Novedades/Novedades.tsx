'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const novedades = [
  {
    id: 1,
    title: 'Nueva temporada de talleres culturales',
    excerpt:
      'Se abre la inscripción a una nueva propuesta de talleres para todas las edades.',
    date: '15 de abril',
    href: '/novedades/talleres-2025',
  },
  {
    id: 2,
    title: 'Convocatoria abierta a artistas locales',
    excerpt:
      'Invitamos a creadores y creadoras a formar parte de la programación anual.',
    date: '8 de abril',
    href: '/novedades/convocatoria-artistas',
  },
  {
    id: 3,
    title: 'La Casa de la Cultura renueva sus espacios',
    excerpt:
      'Avanzan las mejoras en salas y espacios comunes para una mejor experiencia.',
    date: '2 de abril',
    href: '/novedades/renovacion-espacios',
  },
]

export default function Novedades() {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-neue text-3xl font-medium text-neutral-900">
            Novedades
          </h2>
          <p className="mx-auto max-w-2xl text-base text-neutral-700">
            Enterate de las últimas noticias, anuncios y novedades de la Casa de
            la Cultura.
          </p>
        </div>

        {/* Listado */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {novedades.map(({ id, title, excerpt, date, href }) => (
            <Link
              key={id}
              href={href}
              className="
                group rounded-2xl border border-neutral-200 bg-neutral-50 p-6
                transition hover:border-neutral-400
              "
            >
              <span className="mb-2 block text-xs text-neutral-500">
                {date}
              </span>

              <h3 className="mb-3 font-neue text-base font-medium text-neutral-900 group-hover:underline">
                {title}
              </h3>

              <p className="mb-4 text-sm text-neutral-600 leading-relaxed">
                {excerpt}
              </p>

              <span className="inline-flex items-center gap-1 text-sm text-neutral-800">
                Leer más
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/novedades"
            className="
              rounded-full border border-neutral-300
              px-6 py-3 text-sm font-medium text-neutral-800
              transition hover:border-neutral-900 hover:text-neutral-900
            "
          >
            Ver todas las novedades
          </Link>
        </div>
      </div>
    </section>
  )
}
