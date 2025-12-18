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

  // Cerrar menú al cambiar tamaño de pantalla
  useEffect(() => {
    if (!isMobile && isOpen) {
      // Defer the state update to avoid synchronous setState inside the effect
      const id = window.setTimeout(() => setIsOpen(false), 0)
      return () => clearTimeout(id)
    }
  }, [isMobile, isOpen])

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const logoConfig = {
    mobile: {
      src: '/logos/Logo-nav-mob.png',
      alt: 'Logo Mobile',
      width: 40,
      height: 40
    },
    desktop: {
      src: '/logos/Logo-nav-desk.png',
      alt: 'Logo Desktop',
      width: 180,
      height: 80
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="w-full">
        {/* Top bar */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-24 md:h-32 flex items-center">
          <div className="flex justify-between items-center w-full">
            
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
                    className="h-auto"
                  />
                </div>
                <div className="md:hidden">
                  <Image
                    src={logoConfig.mobile.src}
                    alt={logoConfig.mobile.alt}
                    width={logoConfig.mobile.width}
                    height={logoConfig.mobile.height}
                    priority
                    className="h-auto"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop menu - Se adapta mejor en tablet */}
            <ul className="hidden md:flex items-center justify-center gap-3 lg:gap-6 text-black flex-wrap">
              {navItems.map(item => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className="transition-colors duration-200 font-inter font-semibold hover:text-[#e85c23] text-sm lg:text-base px-2 py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hamburger button solo mobile */}
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

          </div>
        </div>

        {/* Full-screen Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white pt-24">
            {/* Close button */}
            <div className="absolute top-6 right-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Cerrar menú"
              >
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Items - Distribución uniforme */}
            <div className="h-full flex flex-col items-center justify-center px-6">
              <ul className="w-full max-w-sm space-y-8 text-center">
                {navItems.map((item, index) => (
                  <li key={item.label} className="opacity-0 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 text-2xl font-inter font-bold text-gray-800 hover:text-[#e85c23] transition-all duration-300 hover:scale-105"
                    >
                      {item.label}
                    </Link>
                    {index < navItems.length - 1 && (
                      <div className="mx-auto w-24 h-0.5 bg-gray-200 opacity-50 mt-2"></div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Optional: Add some spacing at the bottom */}
              <div className="mt-auto py-8">
                <div className="text-sm text-gray-500 text-center">
                  © {new Date().getFullYear()} Todos los derechos reservados
                </div>
              </div>
            </div>

            {/* Add CSS for animations */}
            <style jsx>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-fadeInUp {
                animation: fadeInUp 0.5s ease-out forwards;
              }
            `}</style>
          </div>
        )}
      </nav>
    </header>
  )
}