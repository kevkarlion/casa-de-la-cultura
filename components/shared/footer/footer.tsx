'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Marca */}
          <div>
            <h3 className="mb-3 font-neue text-xl text-white">
              Casa de la Cultura
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Un espacio de encuentro, creación y expresión cultural para toda
              la comunidad.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-400">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="hover:text-white">
                  Agenda
                </Link>
              </li>
              <li>
                <Link href="/actividades" className="hover:text-white">
                  Actividades
                </Link>
              </li>
              <li>
                <Link href="/socios" className="hover:text-white">
                  Ser socio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-400">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-neutral-500" />
                <a
                  href="mailto:contacto@casadelacultura.com"
                  className="hover:text-white"
                >
                  contacto@casadelacultura.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-neutral-500" />
                <a
                  href="tel:+5491112345678"
                  className="hover:text-white"
                >
                  +54 9 11 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-neutral-500" />
                <span>Av. Principal 123 · Ciudad</span>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-400">
              Seguinos
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-neutral-700 p-2 transition hover:border-white hover:text-white"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-neutral-700 p-2 transition hover:border-white hover:text-white"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-500 md:flex-row">
          <span>
            © {new Date().getFullYear()} Casa de la Cultura. Todos los derechos
            reservados.
          </span>
          <span>
            Desarrollado por {''} 
            <a
              href="https://tuweb.com"
              target="_blank"
              className="hover:text-white"
            >
              devweb PATAGONIA
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
