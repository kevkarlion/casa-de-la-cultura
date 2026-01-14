'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Ticket } from 'lucide-react'

interface Event {
  id: number | string
  title: string
  date: string
  time?: string
  image: string
  description?: string
  slug: string
  ticketeraUrl?: string // <- nuevo, si tiene link de ticketera

  category: 'eventos'
  tags: string[]
}

interface Props {
  events: Event[]
}

// --- UTIL: parse "YYYY-MM-DD" como fecha LOCAL ---
function parseLocalDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day) // month-1 porque en JS los meses van de 0 a 11
}

export default function ProgramacionPage({ events }: Props) {
  const heroEvent = events[0]
  const otherEvents = events.slice(1)

  return (
    <main className="bg-white text-foreground min-h-screen py-12 px-4 lg:px-20">
      <h1 className="text-5xl text-center text-black md:text-6xl font-neue font-bold mb-12 tracking-tight uppercase">
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
            {parseLocalDate(heroEvent.date).toLocaleDateString('es-AR', {
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
                className="text-xs bg-black text-brand-white-cdc px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* BOTONES */}
          <div className="flex flex-wrap gap-2 mt-4">
            <Link
              href={`/programacion/${heroEvent.slug}`}
              className="inline-block px-5 py-2 bg-primary text-brand-white-cdc font-semibold rounded-lg hover:bg-[#cc4e1d] transition-colors"
            >
              Ver más
            </Link>

            {heroEvent.ticketeraUrl && (
              <a
                href={heroEvent.ticketeraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-brand-white-cdc font-semibold rounded-lg hover:bg-[#cc4e1d] transition-colors shadow-lg"
              >
                <Ticket size={18} color="var(--brand-white-cdc)" />
                Compra tu entrada
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Grid de eventos */}
      <section className="mb-16">
        <h2 className="text-3xl text-black md:text-4xl font-bold mb-8 text-center">
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
                  {parseLocalDate(event.date).toLocaleDateString('es-AR', {
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

                {/* BOTONES */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href={`/programacion/${event.slug}`}
                    className="inline-block text-xs font-bold bg-primary px-3 py-1 hover:bg-[#cc4e1d] transition-colors rounded"
                  >
                    Ver más
                  </Link>

                  {event.ticketeraUrl && (
                    <a
                      href={event.ticketeraUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold bg-primary px-3 py-1 hover:bg-[#cc4e1d] transition-colors rounded"
                    >
                      <Ticket size={14} color="var(--brand-white-cdc)" />
                      Entradas
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
