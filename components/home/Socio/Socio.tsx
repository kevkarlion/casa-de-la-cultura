'use client'

import {
  Ticket,
  Star,
  CalendarCheck,
  HeartHandshake,
} from 'lucide-react'
import Link from 'next/link'

const beneficios = [
  {
    icon: Ticket,
    title: 'Descuentos exclusivos',
    description: 'Accedé a entradas con beneficios especiales en eventos y espectáculos.',
  },
  {
    icon: CalendarCheck,
    title: 'Acceso prioritario',
    description: 'Enterate antes y reservá lugar en actividades con cupos limitados.',
  },
  {
    icon: Star,
    title: 'Propuestas especiales',
    description: 'Disfrutá de funciones, talleres y encuentros pensados para socios.',
  },
  {
    icon: HeartHandshake,
    title: 'Acompañás la cultura',
    description: 'Tu aporte fortalece el desarrollo cultural local y comunitario.',
  },
]

export default function Socio() {
  return (
    <section className="relative w-full py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-neue text-3xl font-medium text-neutral-900">
            Beneficios por ser socio
          </h2>
          <p className="mx-auto max-w-2xl text-base text-neutral-700">
            Ser socio de la Casa de la Cultura es formar parte activa de la vida
            cultural, con beneficios pensados para disfrutar y acompañar.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                group rounded-2xl border border-neutral-200 bg-white p-6
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
            href="/socios"
            className="
              rounded-full border border-neutral-300
              px-6 py-3 text-sm font-medium text-neutral-800
              transition hover:border-neutral-900 hover:text-neutral-900
            "
          >
            Quiero ser socio
          </Link>
        </div>
      </div>
    </section>
  )
}
