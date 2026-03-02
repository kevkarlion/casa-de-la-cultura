"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { talleresInfo } from "@/utils/talleresInfo";

const talleres = [
  {
    id: 1,
    image: "/imagenes/talleres/arquitectura-infancias.webp",
    title: "Arquitectura para Infancias",
    description:
      "Exploración del espacio, formas y estructuras a través del juego.",
  },
  {
    id: 2,
    image: "/imagenes/talleres/baile-fitness-adolescencias-y-adultxs.webp",
    title: "Baile Fitness",
    description:
      "Actividad física divertida para mejorar resistencia y coordinación.",
  },
  {
    id: 3,
    image: "/imagenes/talleres/ceramica-infancias.webp",
    title: "Cerámica Infancias",
    description: "Trabajo creativo con arcilla, texturas y formas.",
  },
  {
    id: 4,
    image: "/imagenes/talleres/coreo-y-cardio-adultxs.webp",
    title: "Coreo y Cardio",
    description: "Entrenamiento cardiovascular con coreografías dinámicas.",
  },
  {
    id: 5,
    image: "/imagenes/talleres/dibujo-y-pintura-infancias.webp",
    title: "Dibujo y Pintura",
    description: "Exploración artística a través del color y la imaginación.",
  },
  {
    id: 6,
    image: "/imagenes/talleres/ritmos-latinos-adolescencias-y-adultxs.webp",
    title: "Ritmos Latinos",
    description: "Movimiento, ritmo y expresión corporal.",
  },
  {
    id: 7,
    image: "/imagenes/talleres/taekwondo-adolescencias-y-adultxs.webp",
    title: "Taekwon-do",
    description: "Disciplina marcial orientada al desarrollo físico y mental.",
  },
  {
    id: 8,
    image: "/imagenes/talleres/taekwondo-infancias.webp",
    title: "Taekwon-do Infancias",
    description: "Aprendizaje lúdico de artes marciales y valores.",
  },
  {
    id: 9,
    image: "/imagenes/talleres/tango-adultos.webp",
    title: "Tango",
    description: "Conexión, musicalidad y expresión en pareja.",
  },
  {
    id: 10,
    image: "/imagenes/talleres/teatro-adolescencias.webp",
    title: "Teatro Adolescencias",
    description: "Improvisación, juego escénico y creatividad.",
  },
  {
    id: 11,
    image: "/imagenes/talleres/teatro-adultxs.webp",
    title: "Teatro Adultos",
    description: "Exploración actoral y expresión corporal.",
  },
  {
    id: 12,
    image: "/imagenes/talleres/teatro-infancias.webp",
    title: "Teatro Infancias",
    description: "Juego teatral para estimular la imaginación.",
  },
  {
    id: 13,
    image: "/imagenes/talleres/ukulele-infancias-y-adolescencias.webp",
    title: "Ukelele",
    description: "Primeros pasos musicales con instrumentos.",
  },
  {
    id: 14,
    image: "/imagenes/talleres/habitar-poesia.webp",
    title: "Habitar Poesía",
    description:
      "Escritura como práctica sostenida, en diálogo con otrxs. Un espacio para indagar en el propio lenguaje y encontrar la propia voz.",
  },
];

export default function SectionTalleres() {
  return (
    <section className="w-full pt-12 pb-20 bg-brand-white-cdc">
      {/* HEADER */}
      <header className="mb-16 text-center">
        <h2 className="text-5xl text-black font-neue md:text-6xl font-bold mb-12 tracking-tight">
          TALLERES
        </h2>

        <p className="mx-auto max-w-xl text-sm lg:text-xl text-black leading-relaxed">
          Propuestas formativas y recreativas para infancias, adolescentes y
          personas adultas.
        </p>
      </header>

      {/* DETALLE DE TALLERES */}
      <div className="mx-auto mt-24 max-w-6xl px-4 text-neutral-800">
        <h3 className="mb-10 font-neue text-2xl lg:text-3xl font-bold uppercase text-black">
          Talleres de Verano
        </h3>

        <div className="space-y-16 mb-16">
          {talleresInfo.map((taller, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-10 border-b border-black/10 pb-12"
            >
              {/* TEXTO */}
              <div className="flex-1 max-w-xl">
                <h4 className="font-neue text-lg font-bold uppercase">
                  {taller.title}
                </h4>

                {taller.teacher && (
                  <p className="text-sm italic">{taller.teacher}</p>
                )}

                {taller.age && (
                  <p className="mt-2 text-sm">
                    <strong>Edad:</strong> {taller.age}
                  </p>
                )}

                {taller.schedule && (
                  <p className="text-sm">
                    <strong>Día y horario:</strong> {taller.schedule}
                  </p>
                )}
                {taller.phone && (
                  <div className="mt-4">
                    <a
                      href={`https://wa.me/54${taller.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-medium underline hover:opacity-70 transition"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                )}

                {taller.description && (
                  <p className="mt-2 text-sm leading-relaxed whitespace-pre-line">
                    {taller.description}
                  </p>
                )}
              </div>

              {/* GALERIA GRANDE */}
              {taller.images && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {taller.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative shrink-0 w-[220px] aspect-3/4 rounded-md overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={taller.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CARDS VISUALES */}
      <div
        className="
        flex gap-5 overflow-x-auto px-4 pb-4
        snap-x snap-mandatory
        md:grid md:grid-cols-3 md:gap-8
        md:overflow-visible
        lg:max-w-6xl lg:mx-auto
      "
      >
        {talleres.map((taller) => (
          <motion.article
            key={taller.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
            snap-center shrink-0
            w-[78%] sm:w-[65%] md:w-auto
            rounded-xl overflow-hidden
            border border-neutral-200
            bg-white
          "
          >
            <div className="relative aspect-3/4 w-full">
              <Image
                src={taller.image}
                alt={taller.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-3 p-4 text-center">
              <h3 className="font-neue text-base font-semibold uppercase text-neutral-900">
                {taller.title}
              </h3>

              <p className="text-sm leading-relaxed text-neutral-600">
                {taller.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
