"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactoRapido() {
  return (
    <section className="relative w-full bg-neutral-900 py-24 text-neutral-100">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-neue text-3xl font-bold uppercase tracking-tight">
            Contacto
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-neutral-400">
            La Casa de la Cultura es un espacio abierto al diálogo, las ideas y
            las propuestas. Acercate o escribinos.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-neutral-400" />
              <a
                href="casadelaculturagr@gmail.com"
                className="text-sm transition hover:text-white"
              >
                casadelaculturagr@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-neutral-400" />
              <a
                href="https://wa.me/5492984590848"
                className="text-sm transition hover:text-white"
              >
                (0298) 59-0848
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-neutral-400" />
              <span className="text-sm text-neutral-300">
                9 de Julio 1043, General Roca / Fiske Menuco, Río Negro, Argentina
              </span>
            </div>

            {/* Separador */}
            <div className="pt-6">
              <span className="block h-px w-24 bg-neutral-700" />
            </div>

            <p className="max-w-md text-sm leading-relaxed text-neutral-400">
              Actividades culturales, talleres, muestras y espacios pensados
              para la comunidad.
            </p>
          </div>

          {/* Mapa */}
          <div className="relative h-95 w-full overflow-hidden rounded-xl border border-neutral-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.4044682557324!2d-67.58192162527531!3d-39.02889650445608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33b7888cdbe1%3A0xd2149a9cf28b4415!2sCDC%20%7C%20Casa%20de%20la%20Cultura!5e0!3m2!1ses!2sar!4v1767318063379!5m2!1ses!2sar"
              className="h-full w-full  contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
