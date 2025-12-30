"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MousePointer2, Fingerprint } from "lucide-react";

export default function ActividadesEspacios() {
  return (
    <section className="relative w-full pb-24 overflow-hidden bootom-40">
      {/* LINEA SUPERIOR */}
      <div className="mx-auto mb-20 max-w-6xl px-4">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block h-px w-full origin-left bg-neutral-300"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto_1fr]">
          
          {/* CONTENIDO */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
              order-2 md:order-0
              flex flex-col items-center text-center
            "
          >
            <h2 className="mb-4 font-neue text-3xl font-bold uppercase text-neutral-900">
              Actividades y espacios
            </h2>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-neutral-700">
              Talleres, muestras, espectáculos y espacios pensados para el
              encuentro cultural. Propuestas que conviven en salas, patios y
              escenarios abiertos a la comunidad.
            </p>

            <a
              href="/actividades"
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
              <span>Ver actividades</span>

              {/* Desktop */}
              <span className="hidden md:inline-flex">
                <MousePointer2 size={18} className="opacity-80" />
              </span>

              {/* Mobile */}
              <span className="inline-flex md:hidden">
                <Fingerprint size={18} className="opacity-80" />
              </span>
            </a>
          </motion.div>

          {/* SEPARADOR */}
          <div className="relative hidden md:flex h-full items-center justify-center">
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="block h-36 w-px bg-black origin-center"
            />
          </div>

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              order-1 md:order-0
              relative h-65 w-full overflow-hidden rounded-xl md:h-90
            "
          >
            <Image
              src="/dibujos/SalaDos.webp"
              alt="Actividades y espacios culturales"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
