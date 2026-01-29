"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Percent,
  BookOpen,
  Home,
  Building2,
  Calendar,
  Ticket,
  X,
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
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cerrar modal al presionar ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    if (showModal) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showModal]);

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

              {/* Botón para modal */}
              <button
                onClick={() => setShowModal(true)}
                className="border border-brand-white-cdc px-6 py-3 text-sm font-bold uppercase text-brand-white-cdc transition hover:bg-brand-white-cdc hover:text-black w-fit"
              >
                Ver descuentos y beneficios
              </button>
            </div>
          </div>
        </motion.div>

        {/* ================= MODAL ================= */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 overflow-auto">
            <div className="relative max-w-[90vw] max-h-[90vh]">
              {/* Botón de cierre siempre visible */}
              <button
                onClick={() => setShowModal(false)}
                className="fixed top-4 right-4 text-white p-2 hover:bg-white hover:text-black rounded-full z-50"
              >
                <X className="h-6 w-6" />
              </button>

              <Image
                src={
                  isMobile
                    ? "/imagenes/cdc-club-mobile.webp"
                    : "/imagenes/cdc-club-desktop.webp"
                }
                alt="Beneficios CDC Club"
                width={isMobile ? 350 : 800}
                height={isMobile ? 800 : 1200}
                className="object-contain"
              />
            </div>
          </div>
        )}

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
