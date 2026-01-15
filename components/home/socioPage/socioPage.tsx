"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Percent,
  BookOpen,
  Home,
  Building2,
  Calendar,
  Ticket,
} from "lucide-react";

const beneficios = [
  {
    icon: BookOpen,
    value: "40%",
    title: "Talleres",
    description: "Descuento en talleres con una antigüedad mínima de 4 meses.",
  },
  {
    icon: Building2,
    value: "30%",
    title: "Espacios educativos",
    description: "Aulas y espacios de formación.",
  },
  {
    icon: Home,
    value: "10%",
    title: "Espacios generales",
    description: "Sala 2, hall y patio.",
  },
  {
    icon: Calendar,
    value: "15%",
    title: "Cuota anual",
    description: "Descuento en el pago anual.",
  },
  {
    icon: Percent,
    value: "10%",
    title: "Cuota semestral",
    description: "Descuento en el pago semestral.",
  },
  {
    icon: Ticket,
    value: "15%",
    title: "Entradas",
    description: "Actividades y espectáculos.",
  },
];

export default function CDCClubSection() {
  return (
    <section className="bg-brand-white-cdc py-12">
      <div className="mx-auto max-w-6xl px-4">
        <header className="container mx-auto px-6 text-center mb-16">
        <h1 className="text-5xl text-black md:text-6xl font-neue font-bold mb-12 tracking-tight uppercase">
          Socix cdc
        </h1>
      </header>

        {/* ================= HERO BANNER ================= */}
        <div className="mb-24">

          {/* Desktop / Tablet */}
          <div className="relative hidden md:block h-80 lg:h-100">
            <Image
              src="/imagenes/cdcclub-1280-400.webp"
              alt="CDC Club – membresía cultural"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Mobile – ALTURA REAL */}
          <div
            className="relative md:hidden mx-auto"
            style={{
              width: "300px",
              height: "250px",
            }}
          >
            <Image
              src="/imagenes/clubcdc-300.webp"
              alt="CDC Club – membresía cultural"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>

        {/* ================= TEXTO EDITORIAL ================= */}
        <div className="mb-24 max-w-3xl">
          <p className="text-base leading-relaxed text-black mb-6">
            <strong>CDC – Casa de la Cultura</strong> es mucho más que acceder a
            descuentos: es acompañar un proyecto cultural colectivo,
            independiente y con más de 50 años de historia.
          </p>

          <p className="text-base leading-relaxed text-black mb-6">
            Asociarte significa apoyar la producción cultural local, sostener un
            espacio abierto al encuentro y participar activamente de una
            institución que promueve el arte, la formación y el intercambio.
          </p>

          <p className="text-base leading-relaxed text-black">
            Estamos ampliando y fortaleciendo los beneficios para seguir
            acompañando a quienes forman parte de la comunidad CDC.
          </p>
        </div>

        {/* ================= BENEFICIOS ================= */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="border border-neutral-200 bg-black p-6 transition-all"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-neue text-4xl font-bold text-brand-white-cdc">
                    {item.value}
                  </span>
                  <Icon className="h-6 w-6 text-brand-white-cdc" />
                </div>

                <h3 className="mb-2 font-neue text-lg font-bold uppercase text-brand-white-cdc">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-brand-white-cdc">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ================= CIERRE ================= */}
        <div className="mt-24 max-w-3xl">
          <p className="text-base leading-relaxed text-black">
            Ser parte del <strong>CDC Club</strong> es elegir formar parte de
            una red que cree en la cultura como herramienta de transformación y
            encuentro.
          </p>

          <p className="mt-4 text-base leading-relaxed text-black">
            Te invitamos a sumarte y seguir construyendo CDC entre todxs.
          </p>
        </div>

      </div>
    </section>
  );
}
