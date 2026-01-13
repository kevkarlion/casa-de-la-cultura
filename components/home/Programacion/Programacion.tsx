'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Event {
  id: number | string
  title: string
  date: string
  time?: string
  image: string
  description?: string
  slug: string

  category: 'eventos'
  tags: string[]
}

interface Props {
  events: Event[]
}

export default function ProgramacionPage({ events }: Props) {
  const heroEvent = events[0]
  const otherEvents = events.slice(1)

  return (
    <main className="bg-white text-black min-h-screen py-12 px-4 lg:px-20">

      <h1 className="text-5xl font-neue md:text-6xl font-bold mb-12 text-center tracking-tight uppercase    ">
      Programación
      </h1>
      {/* Hero: evento destacado */}
      <section className="relative w-full h-100 md:h-125 mb-16 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={heroEvent.image}
          alt={heroEvent.title}
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-90"
        />

        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 md:p-12">
          <span className="text-sm text-white">
            {new Date(heroEvent.date).toLocaleDateString('es-AR', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
            })}
          </span>

          <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">
            {heroEvent.title}
          </h1>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-2">
            {heroEvent.tags.map(tag => (
              <span
                key={tag}
                className="text-xs bg-black text-brand-white-cdc px-2 py-0.5 "
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/programacion/${heroEvent.slug}`}
            className="mt-4 inline-block px-5 py-2 bg-primary text-white font-semibold  hover:bg-primary-dark transition"
          >
            Ver más
          </Link>
        </div>
      </section>

      {/* Grid de eventos */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Próximos Eventos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherEvents.map(event => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={300}
                className="w-full h-48 md:h-56 object-cover"
              />

              <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-4">
                <span className="text-xs text-white">
                  {new Date(event.date).toLocaleDateString('es-AR', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short',
                  })}
                </span>

                <h3 className="text-lg font-bold text-white mt-1">
                  {event.title}
                </h3>

                {/* TAGS */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {event.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] bg-black text-brand-white-cdc px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/programacion/${event.slug}`}
                  className="mt-2 inline-block text-xs font-bold bg-primary px-3 py-1 hover:bg-primary-dark transition w-max"
                >
                  Ver más
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  )
}
