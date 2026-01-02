'use client'

import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative w-full bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Marca / Descripción */}
          <div>
            <h3 className="mb-4 font-neue text-2xl font-bold uppercase text-white">
              Casa de la Cultura
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
              Un espacio cultural abierto a la comunidad, donde el arte, la
              formación y el encuentro impulsan la identidad y la expresión
              colectiva.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Navegación
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="transition hover:text-white">
                  Agenda cultural
                </Link>
              </li>
              <li>
                <Link
                  href="/actividades"
                  className="transition hover:text-white"
                >
                  Actividades y espacios
                </Link>
              </li>
              <li>
                <Link href="/socios" className="transition hover:text-white">
                  Beneficios para socios
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Redes sociales
            </h4>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-10 w-10 items-center justify-center
                  border border-neutral-700
                  transition-all duration-300
                  hover:border-white hover:text-white
                "
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-10 w-10 items-center justify-center
                  border border-neutral-700
                  transition-all duration-300
                  hover:border-white hover:text-white
                "
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="my-12 h-px w-full bg-neutral-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-neutral-500 md:flex-row">
          <span>
            © {new Date().getFullYear()} Casa de la Cultura · Todos los derechos
            reservados
          </span>

          <span>
            Desarrollo{' '}
            <a
              href="https://tuweb.com"
              target="_blank"
              className="transition hover:text-white"
            >
              devweb PATAGONIA
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
