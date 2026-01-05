'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Novedad {
  id: number
  title: string
  date: string
  excerpt: string
  image: string
  slug: string
  featured?: boolean
}

const novedades: Novedad[] = [
  {
    id: 1,
    title: 'Inauguración de la muestra de arte contemporáneo',
    date: '2026-01-05',
    excerpt: 'Vení a descubrir obras de artistas locales en nuestra nueva exposición de arte contemporáneo.',
    image: '/imagenes/novedades/arte1.jpg',
    slug: 'inauguracion-muestra-arte',
    featured: true,
  },
  {
    id: 2,
    title: 'Taller de música para jóvenes',
    date: '2026-01-10',
    excerpt: 'Aprendé técnicas musicales con profesionales y participá en jam sessions semanales.',
    image: '/imagenes/novedades/musica1.jpg',
    slug: 'taller-musica-jovenes',
  },
  {
    id: 3,
    title: 'Ciclo de cine independiente',
    date: '2026-01-15',
    excerpt: 'Proyecciones semanales de cine independiente con debate posterior sobre cada película.',
    image: '/imagenes/novedades/cine1.jpg',
    slug: 'ciclo-cine-independiente',
  },
  {
    id: 4,
    title: 'Clases abiertas de danza',
    date: '2026-01-20',
    excerpt: 'Sumate a nuestras clases de danza para todas las edades y niveles, abiertas y gratuitas.',
    image: '/imagenes/novedades/danza1.jpg',
    slug: 'clases-abiertas-danza',
  },
]

export default function PageNovedades() {
  return (
    <main className="bg-white text-black min-h-screen py-12">
      {/* Header */}
      <header className="container mx-auto px-6 text-center mb-16">
        <h1 className="font-neue text-4xl lg:text-5xl font-bold uppercase mb-2">
          Novedades
        </h1>
        <p className="text-neutral-700 max-w-2xl mx-auto text-sm lg:text-lg leading-relaxed">
          Enterate de las últimas noticias, actividades y eventos de nuestra Casa de la Cultura.
        </p>
      </header>

      {/* Destacada */}
      <section className="container mx-auto px-6 mb-16">
        <h2 className="font-neue text-2xl lg:text-3xl font-bold mb-6">Destacado</h2>
        {novedades.filter(n => n.featured).map(novedad => (
          <motion.div
            key={novedad.id}
            className="relative w-full h-80 rounded-xl overflow-hidden mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={novedad.image}
              alt={novedad.title}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <p className="text-xs text-neutral-200 mb-1">{novedad.date}</p>
              <h3 className="text-2xl font-bold text-white mb-2">{novedad.title}</h3>
              <p className="text-sm text-neutral-100 mb-4">{novedad.excerpt}</p>
              <Link
                href={`/novedades/${novedad.slug}`}
                className="inline-block px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition"
              >
                Ver más
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Listado de novedades */}
      <section className="container mx-auto px-6">
        <h2 className="font-neue text-2xl lg:text-3xl font-bold mb-6">Todas las novedades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {novedades.map(novedad => (
            <motion.article
              key={novedad.id}
              className="border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={novedad.image}
                  alt={novedad.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <p className="text-xs text-neutral-500">{novedad.date}</p>
                <h3 className="font-neue text-lg font-semibold">{novedad.title}</h3>
                <p className="text-sm text-neutral-600">{novedad.excerpt}</p>
                <Link
                  href={`/novedades/${novedad.slug}`}
                  className="mt-3 inline-block px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition"
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
