'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import EventCard from '../cards/EventCard'
import { DestacadoItem } from '@/types/DestacadoItem'

interface Props {
  items: DestacadoItem[]
}

export default function EventCarousel({ items }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [index, setIndex] = useState(0)

  const scrollToCard = (i: number) => {
    if (!containerRef.current || !cardsRef.current[i]) return

    const container = containerRef.current
    const card = cardsRef.current[i]
    
    // Obtener el ancho de la tarjeta incluyendo márgenes/padding
    const cardWidth = card.offsetWidth
    const cardStyle = window.getComputedStyle(card)
    const cardMarginLeft = parseFloat(cardStyle.marginLeft || '0')
    const cardMarginRight = parseFloat(cardStyle.marginRight || '0')
    const totalCardWidth = cardWidth + cardMarginLeft + cardMarginRight
    
    // Calcular la posición de desplazamiento
    const scrollPosition = i * totalCardWidth
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    })

    setIndex(i)
  }

  const prev = () => scrollToCard(Math.max(index - 1, 0))
  const next = () => scrollToCard(Math.min(index + 1, items.length - 1))

  return (
    <section className="relative w-full py-8 z-20 bottom-20 md:bottom-45 xl:bottom-40">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <h2 className="bg-brand-white-cdc px-3 py-1 font-neue text-lg font-semibold uppercase tracking-wide text-black">
            Los más destacados
          </h2>

          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={index === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-brand-white-cdc text-black disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              disabled={index === items.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-brand-white-cdc text-black disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carrusel */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, i) => (
            <div
              key={`${item.type}-${item.id}`}
              ref={(el) => {
                if (el) cardsRef.current[i] = el
              }}
              // Ancho fijo en todos los breakpoints pero responsive
              className="w-64 sm:w-72 md:w-80 lg:w-96 flex-shrink-0 snap-start"
            >
              <EventCard
                image={item.image}
                date={item.date}
                title={item.title}
                description={item.summary}
                href={item.slug}
                classNames={{
                  imageWrapper: "aspect-square", // Esto hace que sea cuadrado perfecto
                  content: "p-3",
                  title: "text-lg sm:text-xl",
                  description: "text-sm line-clamp-2",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}