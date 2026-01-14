'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { Novedad } from '@/interfaces/novedades.interface'

interface PageNovedadesProps {
  novedades: Novedad[]
}

/* 🔹 MISMO EFECTO QUE PROGRAMACIÓN */
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function PageNovedades({ novedades }: PageNovedadesProps) {
  const destacadas = novedades.filter(n => n.featured)
  const normales = novedades.filter(n => !n.featured)

  return (
    <main className="bg-white text-black min-h-screen py-12 overflow-x-hidden">
      {/* Header */}
      <header className="container mx-auto px-6 text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-neue font-bold mb-12 tracking-tight uppercase">
          Novedades
        </h1>
      </header>

      {/* Destacadas */}
      {destacadas.length > 0 && (
        <section className="container mx-auto px-6 mb-16">
          <h2 className="font-neue text-2xl lg:text-3xl font-bold mb-6">
            Destacado
          </h2>

          {destacadas.map((novedad, index) => (
            <motion.div
              key={novedad.id}
              className="relative w-full h-80 rounded-xl overflow-hidden mb-10 shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={index}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            >
              <Image
                src={novedad.image}
                alt={novedad.title}
                fill
                className="object-cover"
                priority={index === 0}
              />

              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {novedad.tags?.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-black text-brand-white-cdc"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-neutral-200 mb-1">
                  {novedad.date}
                </p>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {novedad.title}
                </h3>

                <p className="text-sm text-neutral-100 mb-4">
                  {novedad.summary}
                </p>

                <Link
                  href={`/novedades/${novedad.slug}`}
                  className="inline-block px-4 py-2 bg-primary text-white font-semibold hover:bg-[#cc4e1d] transition-colors"
                >
                  Ver más
                </Link>
              </div>
            </motion.div>
          ))}
        </section>
      )}

      {/* Listado */}
      <section className="container mx-auto px-6">
        <h2 className="font-neue text-2xl lg:text-3xl font-bold mb-6">
          Todas las novedades
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {normales.map((novedad, index) => (
            <motion.article
              key={novedad.id}
              className="border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={index}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={novedad.image}
                  alt={novedad.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col gap-2">
                <p className="text-xs text-neutral-500">
                  {novedad.date}
                </p>

                <div className="flex flex-wrap gap-2">
                  {novedad.tags?.map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 bg-black text-brand-white-cdc"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-neue text-lg font-semibold">
                  {novedad.title}
                </h3>

                <p className="text-sm text-neutral-600">
                  {novedad.summary}
                </p>

                <Link
                  href={`/novedades/${novedad.slug}`}
                  className="mt-3 inline-block px-4 py-2 bg-primary text-white font-semibold hover:bg-[#cc4e1d] transition-colors"
                >
                  Ver más
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
