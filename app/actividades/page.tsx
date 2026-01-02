'use client'

import { motion } from 'framer-motion'
import SectionProgramacion from '@/components/home/SectionProgramacion/SectionProgramacion'

export default function ActividadesPage() {
  return (
    <section className="relative w-full py-24 bg-brand-white-cdc">
      {/* Intro */}
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="mb-4 font-neue text-4xl lg:text-5xl font-bold uppercase text-black">
          Actividades y espacios
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-black">
          Talleres, muestras, espectáculos y espacios pensados para el
          encuentro cultural. Propuestas que conviven en salas, patios y
          escenarios abiertos a la comunidad.
        </p>
      </div>

      {/* Línea */}
      <div className="mx-auto my-20 max-w-6xl px-32">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="block h-px w-full origin-left bg-neutral-300"
        />
      </div>

      {/* Programación */}
      <SectionProgramacion />
    </section>
  )
}
