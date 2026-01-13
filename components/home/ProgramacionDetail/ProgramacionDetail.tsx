"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import { getEventoBySlug, getRelatedEventos } from "@/utils/eventsComplet.mock";
import { Instagram, Facebook, Share2 } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumb/Breadcrumbs";

interface EventosDetailProps {
  slug: string;
}

// --- UTIL: parse "YYYY-MM-DD" como fecha LOCAL ---
function parseLocalDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day); // month-1 porque en JS los meses van de 0 a 11
}

export default function ProgramacionDetail({ slug }: EventosDetailProps) {
  const evento = getEventoBySlug(slug);
  const [isHorizontal, setIsHorizontal] = useState<boolean | null>(null);

  if (!evento) notFound();

  const related = evento.tags
    ? getRelatedEventos(evento.slug, evento.tags)
    : [];

  const hasGallery = Array.isArray(evento.images) && evento.images.length > 0;

  return (
    <>
      <article className="container mx-auto px-6 py-20 max-w-6xl bg-brand-white-cdc">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Programación", href: "/programacion" },
            { label: evento.title },
          ]}
        />

        {/* HEADER */}
        <header className="mb-10 max-w-3xl">
          <p className="text-sm text-black mb-3">
            {parseLocalDate(evento.date).toLocaleDateString("es-AR")}
          </p>

          <h1 className="text-4xl md:text-5xl font-neue font-bold mb-6 leading-tight text-black">
            {evento.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {evento.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-black text-brand-white-cdc"
              >
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
            onLoadingComplete={(img) =>
              setIsHorizontal(img.naturalWidth > img.naturalHeight)
            }
          />
        )}

        {/* MOBILE FIRST: TITLE → IMAGE → CONTENT */}
        <div className="flex flex-col gap-12">
          {/* IMAGEN / GALERÍA */}
          <div className="order-1">
            {hasGallery && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {evento.images?.map((img, idx) => (
                  <div
                    key={idx}
                    className="bg-neutral-100 rounded-xl p-4 flex justify-center"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || evento.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
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
                href={`/programacion/${item.slug}`}
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

                <div className="p-5 text-white flex flex-col gap-3">
                  <p className="text-xs opacity-70">
                    {parseLocalDate(item.date).toLocaleDateString("es-AR")}
                  </p>

                  <h3 className="font-neue text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>

                  {/* TAGS */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wide px-2 py-1 bg-white/10 border border-white/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
