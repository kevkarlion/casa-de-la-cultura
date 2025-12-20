'use client';

import { FC } from 'react';
import Image from 'next/image';

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
  title = 'Casa de la Cultura',
  subtitle = 'Un espacio para crear, compartir y expresarse',
  videoSrc = '/videos/hero.webm',
  fallbackImageSrc = '/images/hero-fallback.jpg',
  logoSrc = '/logos/LogoHero.png',
  logoAlt = 'Logo Casa de la Cultura',
  overlayOpacity = 45,
}) => {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] xl:min-h-[85vh] overflow-hidden bg-black font-neue">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image (NO priority, no compite con logo) */}
        <Image
          src={fallbackImageSrc}
          alt="Background fallback"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* Video con poster */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={fallbackImageSrc}
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
        </video>

        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: `${overlayOpacity}%` }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-[75vh] lg:min-h-[80vh] xl:min-h-[85vh] max-w-7xl items-center justify-center px-6 pb-16">
        <div
          className="
            grid
            w-auto
            grid-cols-1
            items-center
            gap-10
            md:grid-cols-[auto_auto_1fr]
            md:gap-14
            lg:gap-20
          "
        >
          {/* ================= LOGO ================= */}
          <div className="flex justify-center md:justify-start">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={800}
              height={500}
              priority
              fetchPriority="high"
              decoding="sync"
              sizes="
                (max-width: 640px) 260px,
                (max-width: 768px) 300px,
                (max-width: 1024px) 340px,
                (max-width: 1280px) 400px,
                520px
              "
              className="
                animate-float
                w-75
                sm:w-75
                md:w-85
                lg:w-100
                xl:w-130
                2xl:w-130
              "
            />
          </div>

          {/* ================= LINE ================= */}
          <div className="hidden md:flex justify-center">
            <div className="h-56 lg:h-64 w-px bg-white/40 blur-[0.5px]" />
          </div>

          {/* ================= TEXT ================= */}
          <div className="flex flex-col text-center md:text-left text-white">
            <h1 className="
              mb-4
              hidden md:block
              text-3xl
              lg:text-4xl
              2xl:text-5xl
              font-extrabold
            ">
              {title}
            </h1>

            {subtitle && (
              <p className="mb-6 text-lg 2xl:text-xl text-neutral-200">
                {subtitle}
              </p>
            )}

            <ul className="flex flex-col gap-3 lg:gap-4 text-base text-neutral-300">
              <li>• Talleres artísticos y formativos</li>
              <li>• Teatro, música y exposiciones</li>
              <li>• Espacios comunitarios y culturales</li>
              <li>• Actividades para todas las edades</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
