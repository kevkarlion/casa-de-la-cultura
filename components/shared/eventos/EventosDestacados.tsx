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
    <section className="relative w-full py-8  bottom-20 lg:not-only-of-type:bottom-45 z-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header: título + flechas a la derecha */}
        <div className="mb-6 flex items-center gap-4">
          <h2 className="text-lg font-neue font-semibold tracking-wide text-neutral-100 uppercase bg-brand-magenta px-3 py-1">
            Los más destacados
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-brand-magenta text-white backdrop-blur transition hover:border-amber-500 hover:text-amber-400"
              aria-label="Eventos anteriores"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-brand-magenta text-white backdrop-blur transition hover:border-amber-500 hover:text-amber-400"
              aria-label="Eventos siguientes"
            >
              <ChevronRight size={20} />
            </button>
          </div>
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
