"use client";

import { FC, useEffect, useRef } from "react";
import Image from "next/image";

interface HeroProps {
  title?: string;
  subtitle?: string;
  videoSrc?: string;
  fallbackImageSrc?: string;
  logoSrc?: string;
  logoAlt?: string;
  overlayOpacity?: number;
}

const Hero: FC<HeroProps> = ({
  title = "CDC - Casa de la Cultura",
  subtitle = "Desde 1972, un espacio de encuentro y producción cultural que alberga talleres, actividades artísticas y propuestas escénicas, promoviendo la participación comunitaria y el acceso a la cultura en todas las edades.",
  videoSrc = "/videos/hero.webm",
  fallbackImageSrc = "/imagenes/hero.webp",
  logoSrc = "/dibujos/Fachada.svg",
  logoAlt = "Logo Casa de la Cultura",
  overlayOpacity = 45,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Intentar reproducir video en mobile (iOS restringe autoplay)
  useEffect(() => {
    const handleUserInteraction = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Silenciar error de autoplay (comportamiento esperado en algunos navegadores)
        });
      }
    };

    // Intentar reproducir después de interacción del usuario
    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("touchstart", handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] xl:min-h-[85vh] overflow-hidden bg-black">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        {/* Imagen fallback */}
        <Image
          src={fallbackImageSrc}
          alt="Background fallback"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Video - MOSTRAR EN TODOS LOS DISPOSITIVOS */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={fallbackImageSrc}
        >
          <source src={videoSrc} type="video/webm" />
          <source src={videoSrc.replace(".webm", ".mp4")} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: `${overlayOpacity}%` }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-[75vh] lg:min-h-[80vh] xl:min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 pb-16">
        {/* ===== MOBILE TITLE ===== */}
        <h1
          className="
            mt-12
            text-center
            text-3xl
            font-extrabold
            uppercase
            text-brand-white-cdc
            font-neue
            md:hidden
          "
        >
          {title}
        </h1>

        <div
          className="
            grid
            w-auto
            grid-cols-1
            items-center
            gap-2
            md:grid-cols-[auto_auto_1fr]
            md:gap-14
            lg:gap-20
          "
        >
          {/* ================= LOGO ================= */}
          <div className="order-1 flex justify-center md:order-0 md:justify-start">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={300}
              height={200}
              priority
              sizes="
                (max-width: 640px) 260px,
                (max-width: 768px) 300px,
                (max-width: 1024px) 340px,
                (max-width: 1280px) 350px,
                400px
              "
              className="
                animate-float
                w-75
                sm:w-75
                md:w-85
                lg:w-100
              "
            />
          </div>

          {/* ================= LINE ================= */}
          <div className="hidden md:flex justify-center">
            <div className="h-56 lg:h-64 w-px bg-white/40 blur-[0.5px]" />
          </div>

          {/* ================= TEXT ================= */}
          <div className="order-2 flex flex-col text-center md:order-0 md:text-left text-brand-white-cdc font-neue">
            <h1
              className="
                mb-4
                hidden md:block
                text-4xl
                lg:text-4xl
                2xl:text-5xl
                font-extrabold
                uppercase
              "
            >
              {title}
            </h1>

            {subtitle && (
              <p className="mb-6 text-sm 2xl:text-base text-brand-white-cdc font-inter">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;