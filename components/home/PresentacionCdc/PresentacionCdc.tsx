"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { MousePointer2, Fingerprint } from "lucide-react";

export default function PresentacionCdc() {
  return (
    <section className="relative w-full  overflow-hidden bottom-40">
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
          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-65 w-full overflow-hidden rounded-xl md:h-90"
          >
            <Image
              src="/dibujos/Patio.webp"
              alt="Escenario de la Casa de la Cultura"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
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

          {/* CONTENIDO */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.45, // 👈 espera a que la línea termine
            }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="mb-4 font-neue text-3xl font-bold uppercase text-neutral-900">
              CDC
            </h2>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-neutral-700">
              Un espacio abierto a la comunidad donde el arte, la música, el
              teatro y la expresión cultural se encuentran. Promovemos el
              acceso, la participación y el encuentro a través de propuestas
              para todas las edades.
            </p>

            <a
              href="/nosotros"
              className="
                inline-flex items-center gap-2
                text-xl font-medium uppercase font-neue
                bg-black text-white
                px-8 py-2
                border border-black
                transition-all duration-300
                hover:bg-transparent hover:text-black
              "
            >
              <span>Conocé más</span>

              {/* Desktop icon */}
              <span className="hidden md:inline-flex">
                <MousePointer2 size={18} className="opacity-80" />
              </span>

              {/* Mobile icon */}
              <span className="inline-flex md:hidden">
                <Fingerprint size={18} className="opacity-80" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
