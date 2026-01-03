/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useState, useEffect, startTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function NavbarMinimal() {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const programacionSubmenu = [
    { label: "Eventos", href: "/programacion/eventos" },
    { label: "Talleres", href: "/programacion/talleres" },
    { label: "Exposiciones", href: "/programacion/exposiciones" },
    {
      label: "Actividades permanentes",
      href: "/programacion/actividades-permanentes",
    },
  ];

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Eventos", href: "/eventos" },
    { label: "Agenda", href: "/agenda" },
    {
      label: "Programación",
      href: "/programacion",
      submenu: programacionSubmenu,
    },
    { label: "Noticias", href: "/noticias" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ];

  /* Detectar mobile */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* Bloquear scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  /**
   * ✅ CERRAR MENÚ CUANDO LA RUTA YA CAMBIÓ
   * - No hay flash
   * - No hay warning
   * - Next 15 / React 19 friendly
   */
  useEffect(() => {
    if (!isOpen) return;

    startTransition(() => {
      setIsOpen(false);
      setOpenSubmenu(null);
    });
  }, [pathname]);

  const logoConfig = {
    mobile: {
      src: "/logos/LogoHeroBlackMobile.png",
      width: 60,
      height: 32,
      alt: "Logo Casa de la Cultura Mobile",
    },
    desktop: {
      src: "/logos/LogoHeroBlack.png",
      width: 180,
      height: 80,
      alt: "Logo Casa de la Cultura Desktop",
    },
  };

  /**
   * Navegar SIN cerrar el menú
   * El overlay se mantiene hasta que cambia la ruta
   */
  const handleNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="w-full">
        {/* Top bar */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-24 md:h-32 flex items-center">
          <div className="flex justify-between items-center w-full pl-8">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <div className="hidden md:block">
                <Image {...logoConfig.desktop} priority />
              </div>
              <div className="md:hidden">
                <Image {...logoConfig.mobile} priority />
              </div>
            </Link>

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center gap-6 text-black font-neue font-light uppercase">
              {navItems.map((item) => (
                <li key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm hover:text-primary"
                  >
                    {item.label}
                    {item.submenu && (
                      <span className="text-xs transition-transform group-hover:rotate-180">
                        ▼
                      </span>
                    )}
                  </Link>

                  {item.submenu && (
                    <div className="absolute left-0 top-full pt-2">
                      {/* puente invisible */}
                      <div className="h-2" />

                      <ul
                        className="
                        w-56
                        bg-white
                        shadow-md
                        opacity-0
                        invisible
                        group-hover:opacity-100
                        group-hover:visible
                        transition-all
                        pointer-events-none
                        group-hover:pointer-events-auto
                      "
                                        >
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              className="block px-4 py-2 text-sm hover:bg-black/5"
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
              className="md:hidden p-3"
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

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-primary pt-20 overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6"
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
              {navItems.map((item) => {
                const isSubOpen = openSubmenu === item.label;

                return (
                  <li key={item.label}>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleNavigate(item.href)}
                        className="text-xl font-bold text-black text-left"
                      >
                        {item.label}
                      </button>

                      {item.submenu && (
                        <button
                          onClick={() =>
                            setOpenSubmenu(isSubOpen ? null : item.label)
                          }
                          className={`transition-transform ${
                            isSubOpen ? "rotate-180" : ""
                          } text-black`}
                        >
                          ▼
                        </button>
                      )}
                    </div>

                    {item.submenu && isSubOpen && (
                      <ul className="mt-2 ml-4 space-y-2">
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <button
                              onClick={() => handleNavigate(sub.href)}
                              className="text-sm text-black/80 font-bold"
                            >
                              {sub.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
