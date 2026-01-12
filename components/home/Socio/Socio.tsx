'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function SocixCDCPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-2xl border border-neutral-200 bg-white p-8 lg:p-12"
      >
        <h2 className="
          mb-4
          font-neue
          text-3xl
          lg:text-4xl
          font-bold
          uppercase
          text-black
        ">
          Socix CDC
        </h2>

        <p className="
          mb-6
          max-w-3xl
          text-base
          leading-relaxed
          text-neutral-700
          font-inter
        ">
          Ser parte de CDC – Casa de la Cultura es acompañar un proyecto cultural
          colectivo, independiente y con más de 50 años de historia.
          Asociarte es apoyar la producción cultural local, sostener un espacio
          abierto al encuentro y formar parte activa de una comunidad que cree
          en el arte como herramienta de transformación.
        </p>

        <Link
          href="/socix-cdc"
          className="
            inline-flex items-center gap-2
            text-sm font-medium text-black
            group
          "
        >
          Conocé los beneficios
          <ArrowRight className="
            h-4 w-4
            transition-transform
            group-hover:translate-x-1
          " />
        </Link>
      </motion.div>
    </section>
  )
}
