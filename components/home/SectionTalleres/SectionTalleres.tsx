"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
];

export default function SectionTalleres() {
  return (
    <section className="w-full pt-12 pb-20 bg-brand-white-cdc">
      {/* Header */}
      <header className="mb-16 text-center">
        <h2 className="text-5xl text-black font-neue md:text-6xl font-bold mb-12 tracking-tight">
          TALLERES
        </h2>
        <p className="mx-auto max-w-xl text-sm lg:text-xl text-black leading-relaxed">
          Propuestas formativas y recreativas para infancias, adolescentes y
          personas adultas.
        </p>
      </header>

      {/* Contenido largo */}
      <div className="mx-auto mt-24 max-w-4xl px-4">
        <h3 className="mb-6 font-neue text-2xl lg:text-3xl font-bold uppercase text-black">
          Talleres de Verano
        </h3>

        <div className="space-y-10 text-neutral-800 mb-16">
          {/* Dibujo y pintura */}{" "}
          <div>
            {" "}
            <h4 className="font-neue text-lg font-bold uppercase">
              Dibujo y pintura
            </h4>{" "}
            <p className="text-sm italic">Stefani Barrera · 📞 2984816241</p>{" "}
            <p className="mt-2 text-sm">
              <strong>Edad:</strong> 5 a 12 años
            </p>{" "}
            <p className="mt-2 text-sm leading-relaxed">
              {" "}
              Un espacio destinado a infancias donde la creatividad se convierte
              en juego y el arte en conversación. A través del dibujo y la
              pintura exploramos colores, formas y texturas, dejando que la
              imaginación nos guíe. Ideal para divertirse, explorar y compartir!{" "}
            </p>{" "}
          </div>{" "}
          {/* Coreo y cardio */}{" "}
          <div>
            {" "}
            <h4 className="font-neue text-lg font-bold uppercase">
              Coreo y Cardio
            </h4>{" "}
            <p className="text-sm italic">Jessica Quesada · 📞 2984504926</p>{" "}
            <p className="mt-2 text-sm">
              <strong>Edad:</strong> +16 años
            </p>{" "}
            <p className="text-sm">
              <strong>Días y horario:</strong> Miércoles y viernes de 19:30 a
              20:30 hs
            </p>{" "}
            <p className="mt-2 text-sm leading-relaxed">
              {" "}
              ¿Querés mejorar tu calidad de vida, potenciar el sistema
              inmunológico, aumentar tu autoestima, fortalecer tus músculos
              mientras te divertís? ¡Te invitamos a conocer Coreo y Cardio!{" "}
            </p>{" "}
          </div>{" "}
          {/* Baile Fitness */}{" "}
          <div>
            {" "}
            <h4 className="font-neue text-lg font-bold uppercase">
              Baile Fitness
            </h4>{" "}
            <p className="text-sm italic">Beba Díaz · 📞 2984892220</p>{" "}
            <p className="mt-2 text-sm">
              <strong>Edad:</strong> +16 años
            </p>{" "}
            <p className="text-sm">
              <strong>Días y horario:</strong> Miércoles y viernes de 20:30 a
              21:30 hs
            </p>{" "}
            <p className="mt-2 text-sm leading-relaxed">
              {" "}
              Es una forma divertida y efectiva de mantenerse en forma y mejorar
              la condición física.{" "}
            </p>{" "}
          </div>{" "}
          {/* Cerámica Infantil */}{" "}
          <div>
            {" "}
            <h4 className="font-neue text-lg font-bold uppercase">
              Cerámica infantil · “Arcilla en movimiento”
            </h4>{" "}
            <p className="text-sm italic">Julieta Santamaría</p>{" "}
            <p className="mt-2 text-sm">
              <strong>Edad:</strong> 8 a 12 años
            </p>{" "}
            <p className="text-sm">
              <strong>Fechas:</strong> Jueves 15, 22, 29 de enero y jueves 5 de
              febrero
            </p>{" "}
            <p className="text-sm">
              <strong>Horario:</strong> 10 a 11:45 hs
            </p>{" "}
            <p className="text-sm">
              <strong>Modalidad:</strong> 4 encuentros · cupos reducidos
            </p>{" "}
            <p className="text-sm">
              <strong>Valor:</strong> $60.000 (incluye materiales y horneada
              final)
            </p>{" "}
            <p className="mt-2 text-sm leading-relaxed">
              {" "}
              El taller propone una experiencia creativa centrada en el proceso,
              experimentar con arcilla, explorar texturas y desarrollar
              paciencia, concentración y creatividad.{" "}
            </p>{" "}
          </div>{" "}
          {/* Ritmos Latinos */}{" "}
          <div>
            {" "}
            <h4 className="font-neue text-lg font-bold uppercase">
              Ritmos Latinos
            </h4>{" "}
            <p className="text-sm italic">Beba Díaz · 📞 2984892220</p>{" "}
            <p className="mt-2 text-sm">
              <strong>Día y horario:</strong> Jueves de 19:30 a 21:00 hs
            </p>{" "}
            <p className="mt-2 text-sm leading-relaxed">
              {" "}
              Taller orientado al desarrollo artístico, corporal y emocional. Un
              espacio para conectar con el cuerpo y el estilo propio,
              fortaleciendo la confianza y la expresión desde la autenticidad.{" "}
            </p>{" "}
          </div>{" "}
          {/* Tango */}{" "}
          <div>
            {" "}
            <h4 className="font-neue text-lg font-bold uppercase">
              Tango
            </h4>{" "}
            <p className="text-sm italic">
              Martín Mezquita · 📞 2984570978 · Instagram: @martinmezquita_92
            </p>{" "}
            <p className="mt-2 text-sm">
              <strong>Edad:</strong> 18 años en adelante
            </p>{" "}
            <p className="mt-2 text-sm">
              <strong>Día y horario:</strong> Jueves de 19:30 a 21:00 hs
            </p>{" "}
            <p className="mt-2 text-sm leading-relaxed">
              {" "}
              Taller de tango con enfoque corporal y musical. Se trabajarán
              postura, caminata, interpretación musical y coordinación en
              pareja. Grupos reducidos y personalizados según franjas etarias.{" "}
            </p>{" "}
          </div>{" "}
          {/* Ukelele */}{" "}
          <div>
            {" "}
            <h4 className="font-neue text-lg font-bold uppercase">
              Ukeleando con Tin
            </h4>{" "}
            <p className="text-sm italic">Martín Mezquita</p>{" "}
            <p className="mt-2 text-sm">
              <strong>Edad:</strong> 8 a 16 años
            </p>{" "}
            <p className="text-sm">
              <strong>Día y horario:</strong> Viernes de 19:00 a 20:00 hs
            </p>{" "}
            <p className="mt-2 text-sm leading-relaxed">
              {" "}
              Taller de ukelele para principiantes con enfoque instrumental y
              musical. Se trabajarán acordes, rasgueos y canciones grupales.{" "}
            </p>{" "}
          </div>{" "}
          {/* Teatro */}{" "}
          <div>
            {" "}
            <h4 className="font-neue text-lg font-bold uppercase">
              Teatro
            </h4>{" "}
            <p className="text-sm italic">Micaela Ruiz</p>{" "}
            <p className="mt-2 text-sm leading-relaxed">
              {" "}
              Un espacio creativo para explorar el juego teatral, expresión
              corporal e imaginación. Actividades lúdicas, improvisaciones y
              construcción de escenas para todas las edades.{" "}
            </p>{" "}
          </div>{" "}
          {/* Taekwon-do Oriana */}{" "}
          <div>
            {" "}
            <h4 className="font-neue text-lg font-bold uppercase">
              Taekwon-do
            </h4>{" "}
            <p className="text-sm italic">Oriana Gil · 📞 2995222625</p>{" "}
            <p className="mt-2 text-sm">
              <strong>Edad:</strong> 4 a 12 años
            </p>{" "}
            <p className="text-sm">
              <strong>Días y horario:</strong> Miércoles y viernes de 20 a 21 hs
            </p>{" "}
            <p className="mt-2 text-sm leading-relaxed">
              {" "}
              Arte marcial que combina actividad física y desarrollo cognitivo,
              enseñado a través de juegos lúdicos y valores aplicados a la vida
              cotidiana.{" "}
            </p>{" "}
          </div>{" "}
          {/* Taekwon-do Darío */}{" "}
          <div>
            {" "}
            <h4 className="font-neue text-lg font-bold uppercase">
              Taekwon-do
            </h4>{" "}
            <p className="text-sm italic">Darío Jerez · 📞 2984133311</p>{" "}
            <p className="mt-2 text-sm">
              <strong>Edad:</strong> +13 años
            </p>{" "}
            <p className="mt-2 text-sm leading-relaxed">
              {" "}
              Taller dedicado a la enseñanza y difusión del taekwon-do ITF,
              técnicas, valores y seguimiento de graduación reconocida a nivel
              provincial, nacional e internacional.{" "}
            </p>{" "}
          </div>{" "}
          {/* Arquitectura para Infancias */}{" "}
          <div>
            {" "}
            <h4 className="font-neue text-lg font-bold uppercase">
              Arquitectura para Infancias
            </h4>{" "}
            <p className="text-sm italic">Belen Stefanich · 📞 2984630794</p>{" "}
            <p className="mt-2 text-sm">
              <strong>Edad:</strong> 6 a 12 años
            </p>{" "}
            <p className="text-sm">
              <strong>Día y horario:</strong> Sábados de 10 a 11:30 hs
            </p>{" "}
            <p className="mt-2 text-sm leading-relaxed">
              {" "}
              Taller de arquitectura de verano, con desafíos de construcción y
              maquetas, aprendiendo estructuras y contenidos de arquitectura
              mientras se divierten y se desafían.{" "}
            </p>{" "}
          </div>
        </div>
      </div>

      {/* Cards */}
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
            <div className="relative aspect-[3/4] w-full">
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
