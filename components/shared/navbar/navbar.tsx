'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NavbarMinimal() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Eventos', href: '/eventos' },
    { label: 'Agenda', href: '/agenda' },
    { label: 'Programación', href: '/programacion' },
    { label: 'Noticias', href: '/noticias' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ]

  return (
    <header>
      <nav>
        {/* Top bar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">LOGO</Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-4">
            {navItems.map(item => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Hamburger (solo mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul>
              {navItems.map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
