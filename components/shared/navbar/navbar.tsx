'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NavbarMinimal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Eventos', href: '/eventos' },
    { label: 'Agenda', href: '/agenda' },
    { label: 'Programación', href: '/programacion' },
    { label: 'Noticias', href: '/noticias' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ]

  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Cerrar menú al pasar a desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      const id = window.setTimeout(() => setIsOpen(false), 0)
      return () => clearTimeout(id)
    }
  }, [isMobile, isOpen])

  // Bloquear scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const logoConfig = {
    mobile: {
      src: '/dibujos/Fachada.webp',
      alt: 'Logo Mobile',
      width: 60,
      height: 40,
    },
    desktop: {
      src: '/dibujos/Fachada.webp',
      alt: 'Logo Desktop',
      width: 100,
      height: 50,
    },
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="w-full">
        {/* Top bar */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-24 md:h-32 flex items-center">
          <div className="flex justify-between items-center w-full pl-8">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/">
                <div className="hidden md:block">
                  <Image
                    src={logoConfig.desktop.src}
                    alt={logoConfig.desktop.alt}
                    width={logoConfig.desktop.width}
                    height={logoConfig.desktop.height}
                    priority
                  />
                </div>
                <div className="md:hidden">
                  <Image
                    src={logoConfig.mobile.src}
                    alt={logoConfig.mobile.alt}
                    width={logoConfig.mobile.width}
                    height={logoConfig.mobile.height}
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center justify-center gap-3 lg:gap-6 text-black flex-wrap font-neue font-light uppercase">
              {navItems.map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200  hover:text-primary text-sm lg:text-sm  px-2 py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Abrir menú"
              aria-expanded={isOpen}
            >
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-primary pt-20 min-h-svh overflow-y-auto">
            {/* Close */}
            <div className="absolute top-6 right-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-full hover:bg-black/10 transition-colors"
                aria-label="Cerrar menú"
              >
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="min-h-[calc(100svh-5rem)] flex flex-col items-center justify-center px-6 py-6">
              <ul className="w-full max-w-sm space-y-4 text-center">
                {navItems.map((item, index) => (
                  <li
                    key={item.label}
                    className="opacity-0 animate-fadeInUp"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-xl font-inter font-bold text-black transition-transform duration-300 hover:scale-105"
                    >
                      {item.label}
                    </Link>

                    {index < navItems.length - 1 && (
                      <div className="mx-auto w-20 h-0.5 bg-black/30 mt-1" />
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pb-2">
                <div className="text-xs text-black/70 text-center">
                  © {new Date().getFullYear()} Todos los derechos reservados
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(16px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-fadeInUp {
                animation: fadeInUp 0.45s ease-out forwards;
              }
            `}</style>
          </div>
        )}
      </nav>
    </header>
  )
}
