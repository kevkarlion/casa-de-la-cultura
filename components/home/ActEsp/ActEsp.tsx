'use client'

import {
  Theater,
  Music,
  Film,
  Palette,
  Users,
} from 'lucide-react'
import Link from 'next/link'

const actividades = [
  {
    icon: Theater,
    title: 'Teatro',
    description: 'Obras locales, regionales y ciclos especiales.',
  },
  {
    icon: Music,
    title: 'Música',
    description: 'Conciertos, ensambles y propuestas acústicas.',
  },
  {
    icon: Film,
    title: 'Cine',
    description: 'Proyecciones, ciclos temáticos y cine nacional.',
  },
  {
    icon: Palette,
    title: 'Artes visuales',
    description: 'Muestras, exposiciones y recorridos culturales.',
  },
  {
    icon: Users,
    title: 'Talleres y encuentros',
    description: 'Espacios de formación y participación comunitaria.',
  },
]

export default function ActividadesYEspacios() {
  return (
    <section className="relative w-full py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-neue text-3xl font-medium text-neutral-900">
            Actividades y espacios
          </h2>
          <p className="mx-auto max-w-2xl text-base text-neutral-700">
            La Casa de la Cultura ofrece una programación diversa y espacios
            pensados para el encuentro, la creación y la expresión artística.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {actividades.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                group rounded-2xl border border-neutral-200 p-6
                transition hover:border-neutral-400
              "
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300">
                <Icon className="h-5 w-5 text-neutral-800" />
              </div>

              <h3 className="mb-2 font-neue text-base font-medium text-neutral-900">
                {title}
              </h3>

              <p className="text-sm text-neutral-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/actividades"
            className="
              rounded-full border border-neutral-300
              px-6 py-3 text-sm font-medium text-neutral-800
              transition hover:border-neutral-900 hover:text-neutral-900
            "
          >
            Ver todas las actividades
          </Link>
        </div>
      </div>
    </section>
  )
}
