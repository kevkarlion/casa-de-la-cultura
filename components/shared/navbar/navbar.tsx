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

  const programacionSubmenu = [
    { label: 'Teatro', href: '/programacion/teatro' },
    { label: 'Cine', href: '/programacion/cine' },
    { label: 'Música', href: '/programacion/musica' },
    { label: 'Danza', href: '/programacion/danza' },
    { label: 'Exposiciones', href: '/programacion/exposiciones' },
    { label: 'Conversatorios', href: '/programacion/conversatorios' },
  ]

  const agendaSubmenu = [
    { label: 'Mensual', href: '/agenda/mensual' },
    { label: 'Semanal', href: '/agenda/semanal' },
  ]

  const navItems = [
    { label: 'Casa', href: '/' },
    { label: 'Talleres', href: '/talleres' },
    { label: 'Agenda Cultural', href: '/agenda', submenu: agendaSubmenu },
    { label: 'Programación', href: '/programacion', submenu: programacionSubmenu },
    { label: 'Novedades', href: '/novedades' },
    { label: 'Quiénes Somos', href: '/quienes-somos' },
    { label: 'Socix CDC', href: '/socix-cdc' },
    { label: 'Espacios y Alquileres', href: '/espacios-y-alquileres' },
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
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.submenu && setDesktopSubOpen(item.label)}
                  onMouseLeave={() => item.submenu && setDesktopSubOpen(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-xs 2xl:text-sm hover:text-primary"
                  >
                    {item.label}
                    {item.submenu && (
                      <span
                        className={`text-xs transition-transform duration-300 ${
                          desktopSubOpen === item.label ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    )}
                  </Link>

                  {item.submenu && desktopSubOpen === item.label && (
                    <div className="absolute left-0 top-full pt-2">
                      <ul className="w-56 bg-white shadow-md border border-neutral-200 rounded-md">
                        {item.submenu.map(sub => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              className="block px-4 py-2 text-xs 2xl:text-sm hover:bg-black/5"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
            {navItems.map(item => {
              const isSubOpen = mobileSubOpen === item.label

              return (
                <li key={item.label}>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleNavigateMobile(item.href)}
                      className="text-xl font-bold text-black text-left"
                    >
                      {item.label}
                    </button>

                    {item.submenu && (
                      <button
                        onClick={() => setMobileSubOpen(isSubOpen ? null : item.label)}
                        className={`transition-transform duration-300 ${
                          isSubOpen ? 'rotate-180' : ''
                        } text-black`}
                      >
                        ▼
                      </button>
                    )}
                  </div>

                  {item.submenu && isSubOpen && (
                    <ul className="mt-2 ml-4 space-y-2">
                      {item.submenu.map(sub => (
                        <li key={sub.label}>
                          <button
                            onClick={() => handleNavigateMobile(sub.href)}
                            className="text-sm text-black/80 font-bold"
                          >
                            {sub.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
