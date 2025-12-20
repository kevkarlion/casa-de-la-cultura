'use client';

import { useRef } from "react";
import EventCard from "../cards/EventCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Event {
  id: string | number;
  image: string;
  date: string;
  title: string;
  description: string;
}

interface EventCarouselProps {
  events: Event[];
}

export default function EventCarousel({ events }: EventCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = scrollRef.current.offsetWidth * 0.8;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full py-8 bottom-23  md:bottom-50   z-20 ">
      {/* Fondo artístico */}
      <div className="pointer-events-none absolute inset-0 " />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Controles */}
        <div className="mb-6 flex justify-end gap-2">
          <button
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 text-neutral-200 backdrop-blur transition hover:border-amber-500 hover:text-amber-400"
            aria-label="Eventos anteriores"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 text-neutral-200 backdrop-blur transition hover:border-amber-500 hover:text-amber-400"
            aria-label="Eventos siguientes"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="snap-start min-w-70 sm:min-w-90 lg:min-w-105"
            >
              <EventCard
                image={event.image}
                date={event.date}
                title={event.title}
                description={event.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
