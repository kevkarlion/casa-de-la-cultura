'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const talleres = [
  {
    id: 1,
    image: '/imagenes/talleres/img1.PNG',
    title: 'Taller de Teatro',
    description:
      'Un espacio de exploración escénica y expresión corporal para jóvenes y adultos.',
  },
  {
    id: 2,
    image: '/imagenes/talleres/img2.PNG',
    title: 'Taller de Cerámica',
    description:
      'Aprendizaje de técnicas básicas y experimentación con materiales.',
  },
  {
    id: 3,
    image: '/imagenes/talleres/img3.PNG',
    title: 'Taller de Música',
    description:
      'Encuentro musical colectivo, orientado a la práctica y creación sonora.',
  },
  {
    id: 4,
    image: '/imagenes/talleres/img4.PNG',
    title: 'Taller de Teatro',
    description:
      'Un espacio de exploración escénica y expresión corporal para jóvenes y adultos.',
  },
  {
    id: 5,
    image: '/imagenes/talleres/img5.PNG',
    title: 'Taller de Cerámica',
    description:
      'Aprendizaje de técnicas básicas y experimentación con materiales.',
  },
  {
    id: 6,
    image: '/imagenes/talleres/img6.PNG',
    title: 'Taller de Música',
    description:
      'Encuentro musical colectivo, orientado a la práctica y creación sonora.',
  },
]

export default function SectionTalleres() {
  return (
    <section className="w-full py-20">
      {/* Header */}
      <header className="mb-12 text-center">
        <h2 className="mb-2 font-neue text-3xl lg:text-5xl font-bold uppercase text-brand-white-cdc">
          Talleres
        </h2>
        <p className="mx-auto max-w-xl text-sm text-brand-white-cdc">
          Propuestas formativas para todas las edades.
        </p>
      </header>

      {/* Listado */}
      <div
        className="
          flex gap-6 overflow-x-auto pb-4
          snap-x snap-mandatory
          md:grid md:grid-cols-3 md:overflow-visible
        "
      >
        {talleres.map((taller) => (
          <motion.article
            key={taller.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="
              snap-center shrink-0
              w-[85%] md:w-auto
              rounded-xl border border-neutral-200
              bg-white overflow-hidden
            "
          >
            {/* Imagen / Flyer */}
            <div className="relative aspect-9/16 w-full">
              <Image
                src={taller.image}
                alt={taller.title}
                fill
                className="object-cover"
                priority
              />
</div>


            {/* Info */}
            <div className="flex flex-col gap-3 p-5 text-center">
              <h3 className="font-neue text-lg font-semibold uppercase text-neutral-900">
                {taller.title}
              </h3>

              <p className="text-sm leading-relaxed text-neutral-600">
                {taller.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
