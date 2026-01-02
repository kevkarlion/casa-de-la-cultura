'use client'

import { motion } from 'framer-motion'
import EventCard from '@/components/shared/cards/EventCard'

export default function SectionEventos() {
  return (
    <section>
      <header className="mb-10 text-center">
        <h2 className="mb-2 font-neue text-3xl font-medium uppercase">
          Eventos
        </h2>
        <p className="text-sm text-neutral-600">
          Espectáculos, encuentros y propuestas especiales.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <EventCard
              image="/eventos/demo.webp"
              date="20 de abril"
              title="Concierto en el patio"
              description="Una noche de música en vivo al aire libre."
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
