'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const items = [
  {
    title: 'Eventos',
    description: 'Espectáculos, funciones y propuestas escénicas.',
    href: '/programacion/eventos',
  },
  {
    title: 'Talleres',
    description: 'Propuestas formativas para todas las edades.',
    href: '/programacion/talleres',
  },
  {
    title: 'Exposiciones',
    description: 'Muestras artísticas y recorridos culturales.',
    href: '/programacion/exposiciones',
  },
  {
    title: 'Actividades permanentes',
    description:
      'Espacios y propuestas que forman parte de la vida cotidiana.',
    href: '/programacion/actividades-permanentes',
  },
]

export default function Programacion() {
  return (
    <section className="mx-auto pt-16 max-w-6xl px-4">
      {/* ================= HEADER ================= */}
      <header className="mb-16 text-center">
        <h1 className="
          mb-4
          font-neue
          text-4xl
          lg:text-5xl
          font-bold
          uppercase
          text-brand-white-cdc
        ">
          Programación
        </h1>

        <p className="
          mx-auto
          max-w-2xl
          text-base
          leading-relaxed
          text-brand-white-cdc
          font-inter
        ">
          La programación de la Casa de la Cultura reúne talleres, eventos,
          exposiciones y actividades permanentes pensadas para el encuentro,
          la formación y la expresión artística. Propuestas abiertas a la
          comunidad que conviven durante todo el año en salas, patios y
          escenarios.
        </p>
      </header>

      {/* ================= GRID DE ENLACES ================= */}
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: i * 0.05,
            }}
          >
            <Link
              href={item.href}
              className="
                group flex h-full flex-col justify-between
                rounded-xl border border-neutral-200
                bg-white p-6
                transition-all duration-300
                hover:border-neutral-400 hover:bg-neutral-50
              "
            >
              <div>
                <h3 className="
                  mb-2
                  font-neue
                  text-xl
                  font-bold
                  uppercase
                  text-black
                ">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>

              <span className="
                mt-6
                inline-flex items-center gap-2
                text-sm font-medium text-black
              ">
                Ver más
                <ArrowRight className="
                  h-4 w-4
                  transition-transform
                  group-hover:translate-x-1
                " />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
