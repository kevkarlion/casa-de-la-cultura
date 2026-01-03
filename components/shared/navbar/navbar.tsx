/* eslint-disable jsx-a11y/alt-text */
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NavbarMinimal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const programacionSubmenu = [
    { label: 'Eventos', href: '/programacion/eventos' },
    { label: 'Talleres', href: '/programacion/talleres' },
    { label: 'Exposiciones', href: '/programacion/exposiciones' },
    { label: 'Actividades permanentes', href: '/programacion/actividades-permanentes' },
  ]

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Eventos', href: '/eventos' },
    { label: 'Agenda', href: '/agenda' },
    {
      label: 'Programación',
      href: '/programacion',
      submenu: programacionSubmenu,
    },
    { label: 'Noticias', href: '/noticias' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ]

  /* Detectar tamaño de pantalla */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  /* Cerrar menú al pasar a desktop */
  useEffect(() => {
    if (!isMobile && isOpen) {
      const id = window.setTimeout(() => setIsOpen(false), 0)
      return () => clearTimeout(id)
    }
  }, [isMobile, isOpen])

  /* Bloquear scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const logoConfig = {
    mobile: {
      src: '/logos/LogoHeroBlackMobile.png',
      alt: 'Logo Mobile',
      width: 60,
      height: 40,
    },
    desktop: {
      src: '/logos/LogoHeroBlack.png',
      alt: 'Logo Desktop',
      width: 180,
      height: 80,
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
                  <Image {...logoConfig.desktop} priority />
                </div>
                <div className="md:hidden">
                  <Image {...logoConfig.mobile} priority />
                </div>
              </Link>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center justify-center gap-3 lg:gap-6 text-black flex-wrap font-neue font-light uppercase">
              {navItems.map(item => (
                <li key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm px-2 py-1 hover:text-primary"
                  >
                    {item.label}
                    {item.submenu && (
                      <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
                        ▼
                      </span>
                    )}
                  </Link>

                  {/* Submenu desktop */}
                  {item.submenu && (
                    <ul className="absolute left-0 top-full mt-2 w-56 bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map(sub => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 text-sm normal-case hover:bg-black/5"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="px-6 py-6">
              <ul className="space-y-4 text-left">
                {navItems.map(item => {
                  const isSubOpen = openSubmenu === item.label

                  return (
                    <li key={item.label}>
                      <button
                        className="flex items-center gap-2 text-xl font-inter font-bold text-black w-full"
                        onClick={() => {
                          if (item.submenu) {
                            setOpenSubmenu(isSubOpen ? null : item.label)
                          } else {
                            setIsOpen(false)
                          }
                        }}
                      >
                        {item.label}
                        {item.submenu && (
                          <span
                            className={`text-sm transition-transform ${
                              isSubOpen ? 'rotate-180' : ''
                            }`}
                          >
                            ▼
                          </span>
                        )}
                      </button>

                      {/* Submenu mobile */}
                      {item.submenu && isSubOpen && (
                        <ul className="mt-2 ml-4 space-y-2">
                          {item.submenu.map(sub => (
                            <li key={sub.label}>
                              <Link
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-sm text-black/80"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
