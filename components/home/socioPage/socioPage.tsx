"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      <div className="mx-auto max-w-6xl px-4 flex flex-col justify-center">
        <header className="container mx-auto px-6 text-center">
          <h1 className="text-5xl text-black md:text-6xl font-neue font-bold mb-12 tracking-tight uppercase">
            Socix cdc
          </h1>
        </header>

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

        {/* ================= CDC CLUB ================= */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 border border-neutral-200 bg-black"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Imagen CDC Club */}
            <div className="relative min-h-65 bg-black">
              {/* Reemplazar luego por <Image /> */}
              <Image
                src="/imagenes/cdc-club.webp"
                alt="CDC Club – Descuentos y beneficios culturales en comercios adheridos"
                fill
                className="object-contain"
              />
            </div>

            {/* Contenido */}
            <div className="flex flex-col justify-center p-6 md:p-10">
              <h3 className="font-neue text-2xl md:text-3xl font-bold uppercase text-brand-white-cdc mb-4">
                CDC Club
              </h3>

              <p className="text-sm md:text-base leading-relaxed text-brand-white-cdc mb-6">
                Al hacerte <strong>Socix CDC</strong>, también pasás a formar
                parte del <strong>CDC Club</strong>: una red de comercios
                adheridos con descuentos y beneficios culturales exclusivos para
                la comunidad.
              </p>

              {/* Links */}
              <div className="flex flex-col gap-4">
                {/* Mobile */}
                <a
                  href="https://www.figma.com/proto/PdSDrHKtLJDxD5WnUBLRXf/CLUB-CDC?page-id=0%3A1&node-id=5-11&p=f&viewport=726%2C102%2C0.11&t=Hi8EucOVm7l8xvnM-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5%3A11"
                  target="_blank"
                  className="block md:hidden border border-brand-white-cdc px-4 py-3 text-center text-sm font-bold uppercase text-brand-white-cdc transition hover:bg-brand-white-cdc hover:text-black"
                >
                  Ver beneficios CDC Club
                </a>

                {/* Desktop */}
                <a
                  href="https://www.figma.com/proto/PdSDrHKtLJDxD5WnUBLRXf/CLUB-CDC?page-id=125%3A62&node-id=125-1526&p=f&viewport=1630%2C-499%2C0.27&t=Jcgprhi4CtozFbjj-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=125%3A1526"
                  target="_blank"
                  className="hidden md:inline-block w-fit border border-brand-white-cdc px-6 py-3 text-sm font-bold uppercase text-brand-white-cdc transition hover:bg-brand-white-cdc hover:text-black"
                >
                  Ver descuentos y beneficios
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= CIERRE ================= */}
        <div className="mt-24 max-w-3xl">
          <p className="text-base leading-relaxed text-black">
            Ser <strong>Socix CDC</strong> es asumir un compromiso con la
            cultura como espacio de encuentro, producción y construcción
            colectiva.
          </p>

          <p className="mt-4 text-base leading-relaxed text-black">
            Tu participación hace posible que CDC siga siendo un proyecto vivo,
            abierto y en constante desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
}
