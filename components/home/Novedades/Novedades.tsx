"use client";

import { motion } from "framer-motion";
import EventCard from "@/components/shared/cards/EventCard"; // ajustá el path si hace falta

const novedades = [
  {
    id: 1,
    image: "/imagenes/novedad1.png",
    date: "15 de abril",
    title: "Nueva temporada de talleres culturales",
    description:
      "Se abre la inscripción a una nueva propuesta de talleres para todas las edades.",
    href: "/novedades/talleres-2025",
  },
  {
    id: 2,
    image: "/imagenes/novedad2.png",
    date: "8 de abril",
    title: "Convocatoria abierta a artistas locales",
    description:
      "Invitamos a creadores y creadoras a formar parte de la programación anual.",
    href: "/novedades/convocatoria-artistas",
  },
  {
    id: 3,
    image: "/imagenes/novedad3.png",
    date: "2 de abril",
    title: "La Casa de la Cultura renueva sus espacios",
    description:
      "Avanzan las mejoras en salas y espacios comunes para una mejor experiencia.",
    href: "/novedades/renovacion-espacios",
  },
  {
    id: 4,
    image: "/imagenes/novedad1.png",
    date: "15 de abril",
    title: "Nueva temporada de talleres culturales",
    description:
      "Se abre la inscripción a una nueva propuesta de talleres para todas las edades.",
    href: "/novedades/talleres-2025",
  },
  {
    id: 5,
    image: "/imagenes/novedad2.png",
    date: "8 de abril",
    title: "Convocatoria abierta a artistas locales",
    description:
      "Invitamos a creadores y creadoras a formar parte de la programación anual.",
    href: "/novedades/convocatoria-artistas",
  },
  {
    id: 6,
    image: "/imagenes/novedad3.png",
    date: "2 de abril",
    title: "La Casa de la Cultura renueva sus espacios",
    description:
      "Avanzan las mejoras en salas y espacios comunes para una mejor experiencia.",
    href: "/novedades/renovacion-espacios",
  },
];

export default function Novedades() {
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
              href={item.href}
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
                date={item.date}
                title={item.title}
                description={item.description}
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
