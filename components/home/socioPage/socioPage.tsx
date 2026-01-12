'use client'

import { motion } from 'framer-motion'
import {
  Percent,
  BookOpen,
  Home,
  Building2,
  Calendar,
  Ticket
} from 'lucide-react'

const beneficios = [
  {
    icon: BookOpen,
    value: '40%',
    title: 'Talleres',
    description: 'Descuento en talleres con 4 meses de antigüedad como socix.',
  },
  {
    icon: Building2,
    value: '30%',
    title: 'Espacios educativos',
    description: 'Aulas y espacios de formación.',
  },
  {
    icon: Home,
    value: '10%',
    title: 'Espacios generales',
    description: 'Sala 2, hall y patio.',
  },
  {
    icon: Calendar,
    value: '15%',
    title: 'Cuota anual',
    description: 'Descuento en el pago anual de la cuota social.',
  },
  {
    icon: Percent,
    value: '10%',
    title: 'Cuota semestral',
    description: 'Beneficio en el pago semestral.',
  },
  {
    icon: Ticket,
    value: '15%',
    title: 'Entradas',
    description: 'Actividades y espectáculos culturales.',
  },
]

export default function SocixCDCPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-12 bg-brand-white-cdc">
      {/* ================= HEADER ================= */}
      <header className="mb-20 text-center">
        <h1 className="
          mb-6
          font-neue
          text-5xl md:text-6xl
          font-bold
          uppercase
          text-black
        ">
          Socix CDC
        </h1>

        <p className="
          mx-auto
          max-w-3xl
          text-base
          leading-relaxed
          text-black
          font-inter
        ">
          Ser parte de CDC es acompañar un proyecto cultural colectivo con más de
          50 años de historia. Es apoyar la producción cultural local y sostener
          un espacio abierto al encuentro, la formación y la expresión artística.
        </p>
      </header>

      {/* ================= BENEFICIOS ================= */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {beneficios.map((item, i) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: i * 0.06,
              }}
              whileHover={{ y: -6 }}
              className="
                group
                rounded-xl
                border border-neutral-200
                bg-black
                p-6
                transition-all
              "
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="
                  font-neue
                  text-4xl
                  font-bold
                  text-brand-white-cdc
                ">
                  {item.value}
                </span>

                <Icon className="
                  h-6 w-6
                  text-brand-white-cdc
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                " />
              </div>

              <h3 className="
                mb-2
                font-neue
                text-lg
                font-bold
                uppercase
                text-brand-white-cdc
              ">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-brand-white-cdc">
                {item.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* ================= CIERRE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto mt-20  max-w-3xl text-center"
      >
        <p className="text-base leading-relaxed text-black">
          Ser socix de CDC es formar parte de una red que cree en la cultura
          como herramienta de transformación y encuentro.
        </p>

        <p className="mt-4 text-base leading-relaxed text-black">
          Te invitamos a sumarte y seguir construyendo CDC entre todxs.
        </p>
      </motion.div>
    </section>
  )
}
