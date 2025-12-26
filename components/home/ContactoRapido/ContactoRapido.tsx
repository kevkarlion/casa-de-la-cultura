'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function ContactoRapido() {
  return (
    <section className="relative w-full bg-neutral-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Texto */}
          <div>
            <h2 className="mb-4 font-neue text-3xl font-medium">
              Contacto rápido
            </h2>
            <p className="mb-8 max-w-xl text-neutral-300">
              ¿Tenés una consulta, propuesta o querés comunicarte con la Casa de
              la Cultura? Estamos para escucharte.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-neutral-400" />
                <a
                  href="mailto:contacto@casadelacultura.com"
                  className="hover:underline"
                >
                  contacto@casadelacultura.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-neutral-400" />
                <a href="tel:+5491112345678" className="hover:underline">
                  +54 9 11 1234 5678
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-neutral-400" />
                <span>Av. Principal 123 · Ciudad</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-neutral-800 p-8">
            <h3 className="mb-3 font-neue text-xl font-medium">
              ¿Querés escribirnos?
            </h3>
            <p className="mb-6 text-sm text-neutral-300">
              Respondemos a la brevedad.
            </p>

            <Link
              href="/contacto"
              className="
                inline-flex items-center justify-center rounded-full
                bg-white px-6 py-3 text-sm font-medium text-neutral-900
                transition hover:bg-neutral-200
              "
            >
              Ir al formulario de contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
