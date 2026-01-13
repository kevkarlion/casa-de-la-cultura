'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function NavbarMinimal() {
  const router = useRouter()
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [desktopSubOpen, setDesktopSubOpen] = useState<string | null>(null)
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null)

  const navItems = [
    { label: 'Casa', href: '/' },
    { label: 'Talleres', href: '/talleres' },
    { label: 'Agenda Mensual', href: '/agenda/mensual' },
    { label: 'Programación', href: '/programacion' },
    { label: 'Novedades', href: '/novedades' },
    { label: 'Quiénes Somos', href: '/quienes-somos' },
    { label: 'Socix CDC', href: '/socix-cdc' },
    { label: 'Contacto', href: '/contacto' },
  ]

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const logoConfig = {
    mobile: { src: '/logos/LogoHeroBlackMobile.png', width: 60, height: 32, alt: 'Logo Mobile' },
    desktop: { src: '/logos/LogoHeroBlack.png', width: 180, height: 80, alt: 'Logo Desktop' },
  }

  const handleNavigateMobile = (href: string) => {
    if (href === pathname) return
    router.push(href)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false)
      setMobileSubOpen(null)
      setDesktopSubOpen(null)
    }, 0)

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-24 md:h-32 flex items-center">
          <div className="flex justify-between items-center w-full pl-8">

            {/* Logo */}
            <Link href="/" className="shrink-0">
              <div className="hidden lg:block">
                <Image {...logoConfig.desktop} alt={logoConfig.desktop.alt} priority />
              </div>
              <div className="lg:hidden">
                <Image {...logoConfig.mobile} alt={logoConfig.mobile.alt} priority />
              </div>
            </Link>

            {/* Desktop menu */}
            <ul className="hidden lg:flex items-center gap-6 text-black font-neue font-light uppercase">
              {navItems.map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-xs 2xl:text-sm hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3"
            >
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>
        </div>

        {/* Mobile / Tablet menu */}
        <div
          className={`
            lg:hidden
            fixed
            inset-0
            z-50
            bg-primary
            pt-20
            overflow-y-auto
            transition-opacity
            duration-300
            ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          `}
        >
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2"
            >
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          <div className="flex justify-center mb-10">
            <Image
              src="/logos/LogoHeroBlack.png"
              alt="Logo CDC"
              width={250}
              height={40}
              priority
            />
          </div>

          <ul className="px-6 space-y-4">
            {navItems.map(item => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavigateMobile(item.href)}
                  className="text-xl font-bold text-black text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
