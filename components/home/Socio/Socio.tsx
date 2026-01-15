'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MousePointer2, Fingerprint } from 'lucide-react'

export default function SocixCDCPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="
          grid
          overflow-hidden
          rounded-2xl
          border border-neutral-200
          bg-white
          lg:grid-cols-2
        "
      >
        {/* ================= TEXTO ================= */}
        <div className="relative p-8 lg:p-12">

          {/* Imagen CDC Club – mobile */}
          <div
            className="relative mb-8 mx-auto lg:hidden"
            style={{ width: 180, height: 180 }}
          >
            <Image
              src="/imagenes/clubcdc-1080.webp"
              alt="CDC Club"
              fill
              className="object-cover"
            />
          </div>

          {/* línea editorial */}
          <span className="
            absolute left-0 top-8 hidden h-24 w-0.5
            bg-brand-white-cdc lg:block
          " />

          <h2 className="
            mb-4
            font-neue
            text-center
            text-3xl lg:text-4xl
            font-bold
            uppercase
            text-black
          ">
            Socix CDC
          </h2>

          <p className="
            mb-6
            max-w-xl
            text-base
            leading-relaxed
            text-black
            font-inter
          ">
            Ser parte de CDC – Casa de la Cultura es acompañar un proyecto
            cultural colectivo, independiente y con más de 50 años de historia.
          </p>

          <p className="
            mb-10
            max-w-xl
            text-base
            leading-relaxed
            text-black
            font-inter
          ">
            Asociarte es apoyar la producción cultural local, sostener un espacio
            abierto al encuentro y formar parte activa de una comunidad que cree
            en el arte como herramienta de transformación.
          </p>

          {/* ================= CTA DESKTOP ================= */}
          <div className='flex justify-center'>

            <Link
              href="/socix-cdc"
              className="
                hidden lg:inline-flex items-center gap-2
                
                px-8 py-2
                font-neue text-xl font-medium uppercase
                bg-black text-white
                border border-black
                transition-all duration-300
                hover:bg-transparent hover:text-black
              "
            >
              <span>Conocé los beneficios</span>
              <MousePointer2 size={18} className="opacity-80" />
            </Link>
          </div>
        </div>

        {/* ================= IMAGEN PRINCIPAL ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative min-h-65 lg:min-h-full"
        >
          <Image
            src="/dibujos/boleteria.png"
            alt="Boletería CDC"
            fill
            className="object-cover"
          />

          {/* Imagen CDC Club – desktop (overlay) */}
          <div
            className="absolute bottom-6 right-6 hidden lg:block"
            style={{ width: 140, height: 140 }}
          >
            <Image
              src="/imagenes/clubcdc-1080.webp"
              alt="CDC Club"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* ================= CTA MOBILE ================= */}
        <div className="flex justify-center px-8 pb-10 lg:hidden">
          <Link
            href="/socix-cdc"
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
            <span>Conocé los beneficios</span>
            <Fingerprint size={18} className="opacity-80" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
