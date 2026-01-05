"use client";

import { motion } from "framer-motion";
import EventCard from "@/components/shared/cards/EventCard";
import { Novedad } from "@/interfaces/novedades.interface";



interface NovedadesProps {
  novedades: Novedad[];
}

export default function Novedades({ novedades }: NovedadesProps) {
  return (
    <section className="relative w-full py-24 bg-white">
      
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-neue text-3xl font-bold uppercase text-neutral-900">
            Novedades
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-700">
            Noticias, anuncios y actualizaciones de la Casa de la Cultura.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {novedades.map((item, index) => (
            <motion.a
              key={item.id}
              href={`/novedades/${item.slug}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="block"
            >
              <EventCard
                variant="light"
                image={item.image}
                date={new Date(item.date).toLocaleDateString("es-AR")}
                title={item.title}
                description={item.summary}
                classNames={{
                  card: "rounded-none shadow-none",
                  title: "font-neue font-semibold text-black uppercase",
                  divider: "via-black",
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="/novedades"
            className="
              inline-flex items-center gap-2
              px-8 py-2
              font-neue text-xl font-medium uppercase
              bg-black text-white
              border border-black
              transition-all duration-300
              hover:bg-transparent hover:text-black
            "
          >
            Ver todas las novedades
          </a>
        </div>
      </div>
    </section>
  );
}
