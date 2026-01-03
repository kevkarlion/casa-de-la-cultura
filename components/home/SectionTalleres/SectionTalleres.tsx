'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const talleres = [
  {
    id: 1,
    image: '/imagenes/talleres/img1.PNG',
    title: 'Taller de Teatro',
    description:
      'Un espacio de exploración escénica y expresión corporal para jóvenes y adultos.',
  },
  {
    id: 2,
    image: '/imagenes/talleres/img2.PNG',
    title: 'Taller de Cerámica',
    description:
      'Aprendizaje de técnicas básicas y experimentación con materiales.',
  },
  {
    id: 3,
    image: '/imagenes/talleres/img3.PNG',
    title: 'Taller de Música',
    description:
      'Encuentro musical colectivo, orientado a la práctica y creación sonora.',
  },
  // … el resto igual
]

export default function SectionTalleres() {
  return (
    <section className="w-full pt-16 pb-20 bg-brand-white-cdc">
      {/* Header */}
      <header className="mb-16 text-center">
        <h2 className="mb-2 font-neue text-3xl lg:text-5xl font-bold uppercase text-black">
          Talleres
        </h2>
        <p className="mx-auto max-w-xl text-sm lg:text-xl text-black leading-relaxed">
          Propuestas formativas y recreativas para infancias, adolescentes y personas adultas.
        </p>
      </header>

       <div className="mx-auto mt-24 max-w-4xl px-4">
        <h3 className="mb-6 font-neue text-2xl lg:text-3xl font-bold uppercase text-black">
          Talleres de Verano
        </h3>

        <div className="space-y-10 text-neutral-800 mb-16">
          {/* Taller */}
          <div>
            <h4 className="font-neue text-lg font-bold uppercase">
              Dibujo y pintura
            </h4>
            <p className="text-sm italic">
              Stefani Barrera · 📞 2984816241
            </p>
            <p className="mt-2 text-sm">
              <strong>Edad:</strong> 5 a 12 años
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Un espacio destinado a infancias donde la creatividad se convierte en juego.
              A través del dibujo y la pintura exploramos colores, formas y texturas,
              dejando que la imaginación guíe cada encuentro.
            </p>
          </div>

          <div>
            <h4 className="font-neue text-lg font-bold uppercase">
              Coreo y Cardio
            </h4>
            <p className="text-sm italic">
              Jessica Quesada · 📞 2984504926
            </p>
            <p className="mt-2 text-sm">
              <strong>Edad:</strong> +16 años
            </p>
            <p className="text-sm">
              <strong>Días y horario:</strong> Miércoles y viernes · 19:30 a 20:30 hs
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Un espacio dinámico para mejorar la condición física, fortalecer músculos
              y aumentar la autoestima mientras te divertís.
            </p>
          </div>

          <div>
            <h4 className="font-neue text-lg font-bold uppercase">
              Baile Fitness
            </h4>
            <p className="text-sm italic">
              Beba Díaz · 📞 2984892220
            </p>
            <p className="mt-2 text-sm">
              <strong>Edad:</strong> +16 años
            </p>
            <p className="text-sm">
              <strong>Días y horario:</strong> Miércoles y viernes · 20:30 a 21:30 hs
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Una forma divertida y efectiva de mantenerse en forma y mejorar la
              condición física a través del baile.
            </p>
          </div>

          <div>
            <h4 className="font-neue text-lg font-bold uppercase">
              Cerámica infantil · “Arcilla en movimiento”
            </h4>
            <p className="text-sm italic">
              Julieta Santamaría
            </p>
            <p className="mt-2 text-sm">
              <strong>Edad:</strong> 8 a 12 años
            </p>
            <p className="text-sm">
              <strong>Fechas:</strong> Jueves 15, 22 y 29 de enero · 5 de febrero
            </p>
            <p className="text-sm">
              <strong>Horario:</strong> 10 a 11:45 hs
            </p>
            <p className="text-sm">
              <strong>Modalidad:</strong> 4 encuentros · cupos reducidos
            </p>
            <p className="text-sm">
              <strong>Valor:</strong> $60.000 (incluye materiales y horneada)
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Un taller centrado en el proceso creativo, la experimentación con la
              arcilla y el desarrollo de la paciencia y la concentración.
            </p>
          </div>

          {/* Podés seguir agregando los demás con este mismo patrón */}
        </div>
      </div>

      {/* Cards */}
      <div
        className="
          flex gap-6 overflow-x-auto pb-4
          snap-x snap-mandatory
          md:grid md:grid-cols-3
        "
      >
        {talleres.map((taller) => (
          <motion.article
            key={taller.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="
              snap-center shrink-0
              w-[85%] md:w-auto
              border border-neutral-200
              bg-white overflow-hidden
            "
          >
            <div className="relative aspect-9/16 w-full">
              <Image
                src={taller.image}
                alt={taller.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-3 p-5 text-center">
              <h3 className="font-neue text-lg font-semibold uppercase text-neutral-900">
                {taller.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {taller.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Agenda Talleres de Verano */}
     
    </section>
  )
}
