'use client'

import { Landmark } from 'lucide-react'
import Link from 'next/link'

export default function PresentacionCdc() {
  return (
    <section className="relative w-full py-8 pb-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* Ícono */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-300">
            <Landmark className="h-6 w-6 text-neutral-800" />
          </div>
        </div>

        {/* Título */}
        <h2 className="mb-4 font-neue text-3xl font-medium text-neutral-900 uppercase">
          Centro cultural de las Artes y las Personas
        </h2>

        {/* Texto breve */}
        <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-neutral-700">
          Un espacio abierto a la comunidad donde el arte, la música, el teatro
          y la expresión cultural se encuentran. La Casa de la Cultura promueve
          el acceso, la participación y el encuentro a través de actividades
          para todas las edades.
        </p>

        {/* CTA opcional */}
        <Link
          href="/institucional"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition hover:border-neutral-900 hover:text-neutral-900"
        >
          Conocé más sobre la Casa
        </Link>
      </div>
    </section>
  )
}
