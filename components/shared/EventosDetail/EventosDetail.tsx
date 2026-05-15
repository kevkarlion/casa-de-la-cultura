"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import { getEventoBySlug, getRelatedEventos } from "@/utils/eventsComplet.mock";
import { Instagram, Facebook, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumb/Breadcrumbs";

interface EventosDetailProps {
  slug: string;
}

export default function EventosDetail({ slug }: EventosDetailProps) {
  const evento = getEventoBySlug(slug);
  const [isHorizontal, setIsHorizontal] = useState<boolean | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!evento) notFound();

  const related = evento.tags ? getRelatedEventos(evento.slug, evento.tags) : [];

  const hasGallery = Array.isArray(evento.images) && evento.images.length > 0;

  const goToPrevious = () => {
    if (evento.images) {
      setCurrentImageIndex((prev) => (prev === 0 ? evento.images!.length - 1 : prev - 1));
    }
  };

  const goToNext = () => {
    if (evento.images) {
      setCurrentImageIndex((prev) => (prev === evento.images!.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <article className="container mx-auto px-6 py-20 max-w-6xl bg-brand-white-cdc">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Eventos", href: "/eventos" },
            { label: evento.title },
          ]}
        />

        {/* HEADER */}
        <header className="mb-10 max-w-3xl">
          <p className="text-sm text-black mb-3">
            {new Date(evento.date).toLocaleDateString("es-AR")}
          </p>

          <h1 className="text-4xl md:text-5xl font-neue font-bold mb-6 leading-tight text-black">
            {evento.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {evento.tags?.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 bg-black text-brand-white-cdc">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* DETECTOR DE ORIENTACIÓN */}
        {!hasGallery && isHorizontal === null && (
          <Image
            src={evento.image}
            alt=""
            width={10}
            height={10}
            className="hidden"
            priority
            onLoadingComplete={(img) => setIsHorizontal(img.naturalWidth > img.naturalHeight)}
          />
        )}

        {/* MOBILE FIRST: TITLE → IMAGE → CONTENT */}
        <div className="flex flex-col gap-12">
          {/* IMAGEN / GALERÍA */}
          <div className="order-1">
            {hasGallery && evento.images && evento.images.length > 1 && (
              <div className="relative">
                {/* Carrusel */}
                <div className="relative bg-neutral-100 rounded-xl p-4 overflow-hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={evento.images[currentImageIndex].src}
                      alt={evento.images[currentImageIndex].alt || evento.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* Botones de navegación */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Indicadores (dots) */}
                <div className="flex justify-center gap-2 mt-4">
                  {evento.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        idx === currentImageIndex
                          ? "bg-black"
                          : "bg-neutral-300 hover:bg-neutral-400"
                      }`}
                      aria-label={`Ver imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Si solo hay una imagen o no hay galería, mostrar como antes */}
            {hasGallery && evento.images && evento.images.length === 1 && (
              <div className="bg-neutral-100 rounded-xl p-4 flex justify-center">
                <Image
                  src={evento.images[0].src}
                  alt={evento.images[0].alt || evento.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}

            {!hasGallery && isHorizontal !== null && (
              <div className="bg-neutral-100 rounded-xl p-4 flex justify-center">
                <Image
                  src={evento.image}
                  alt={evento.title}
                  width={isHorizontal ? 1280 : 800}
                  height={isHorizontal ? 960 : 1200}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            )}
          </div>

          {/* TEXTO */}
          <div className="order-2">
            <div className="max-w-3xl">
              <p className="font-inter text-lg leading-relaxed text-black whitespace-pre-line mb-10">
                {evento.description}
              </p>

              {/* Compartir */}
              {/* <div className="mt-12 border-t pt-6">
                <p className="text-sm uppercase tracking-widest text-black mb-4">
                  Compartir evento
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="p-3 rounded-full border text-black hover:bg-black hover:text-white transition"
                    aria-label="Compartir en Instagram"
                  >
                    <Instagram size={18} />
                  </a>

                  <a
                    href="#"
                    className="p-3 rounded-full border text-black hover:bg-black hover:text-white transition"
                    aria-label="Compartir en Facebook"
                  >
                    <Facebook size={18} />
                  </a>

                  <a
                    href="#"
                    className="p-3 rounded-full border text-black hover:bg-black hover:text-white transition"
                    aria-label="Copiar enlace"
                  >
                    <Share2 size={18} />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </article>

      {/* EVENTOS RELACIONADOS */}
      {related.length > 0 && (
        <section className="container mx-auto px-6 pb-24 max-w-6xl">
          <h2 className="text-2xl font-neue font-bold mb-8 text-black">
            Eventos relacionados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((item) => (
              <a
                key={item.slug}
                href={`/eventos/${item.slug}`}
                className="group bg-black block overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.images?.[0]?.src || item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 text-white">
                  <p className="text-xs opacity-70 mb-1">
                    {new Date(item.date).toLocaleDateString("es-AR")}
                  </p>
                  <h3 className="font-neue text-lg font-semibold leading-snug">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
