'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getNovedadBySlug, getRelatedNovedades } from '@/utils/novedades.mock';
import { ExternalLink } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumb/Breadcrumbs';

interface NovedadesDetailProps {
  slug: string;
}

// --- UTIL: parse "YYYY-MM-DD" como fecha LOCAL ---
function parseLocalDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day); // month - 1 porque JS cuenta de 0 a 11
}

export default function NovedadesDetail({ slug }: NovedadesDetailProps) {
  const searchParams = useSearchParams();
  const dayParam = searchParams.get('day'); // <-- día clickeado en el tooltip
  const clickedDay = dayParam ? Number(dayParam) : null;

  const novedad = getNovedadBySlug(slug);
  const [isHorizontal, setIsHorizontal] = useState<boolean | null>(null);

  if (!novedad) notFound();

  const related = novedad?.tags
    ? getRelatedNovedades(novedad.slug, novedad.tags)
    : [];

  const hasGallery = Array.isArray(novedad.images) && novedad.images.length > 0;

  // --- Fecha que mostramos: si hay day en query, usamos ese día del mes de novedad.date ---
  const baseDate = parseLocalDate(novedad.date);
  const displayDate = clickedDay
    ? new Date(baseDate.getFullYear(), baseDate.getMonth(), clickedDay)
    : baseDate;

  return (
    <>
      <article className="container mx-auto px-6 py-20 max-w-6xl bg-brand-white-cdc">
        <Breadcrumbs
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Novedades', href: '/novedades' },
            { label: novedad.title },
          ]}
        />

        {/* HEADER */}
        <header className="mb-10 max-w-3xl">
          <p className="text-sm text-black mb-3">
            {displayDate.toLocaleDateString('es-AR')}
          </p>

          <h1 className="text-4xl md:text-5xl font-neue font-bold mb-6 leading-tight text-black">
            {novedad.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {novedad.tags?.map((tag) => (
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
            src={novedad.image}
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
                {novedad.images?.map((img, idx) => (
                  <div
                    key={idx}
                    className="bg-neutral-100 rounded-xl p-4 flex justify-center"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || novedad.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {!hasGallery && isHorizontal && (
              <div className="bg-neutral-100 rounded-xl p-4 flex justify-center">
                <Image
                  src={novedad.image}
                  alt={novedad.title}
                  width={1280}
                  height={960}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            )}

            {!hasGallery && isHorizontal === false && (
              <div className="bg-neutral-100 rounded-xl p-4 flex justify-center lg:hidden">
                <Image
                  src={novedad.image}
                  alt={novedad.title}
                  width={800}
                  height={1200}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            )}
          </div>

          {/* TEXTO */}
          <div className="order-2">
            {!hasGallery && isHorizontal === false ? (
              <div className="lg:grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-7">
                  <p className="font-inter text-lg leading-relaxed text-black whitespace-pre-line mb-10">
                    {novedad.excerpt}
                  </p>

                  {novedad.links && novedad.links.length > 0 && (
                    <div className="mb-12">
                      <h3 className="text-sm uppercase tracking-widest text-black mb-4">
                        Enlaces
                      </h3>

                      <div className="flex flex-col gap-3 not-prose">
                        {novedad.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sky-400! hover:text-sky-300! underline underline-offset-4 transition-colors"
                          >
                            {link.label}
                            <ExternalLink size={16} />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* IMAGEN VERTICAL → DESKTOP */}
                <div className="hidden lg:block lg:col-span-5">
                  <div className="bg-neutral-100 rounded-xl p-4 flex justify-center">
                    <Image
                      src={novedad.image}
                      alt={novedad.title}
                      width={800}
                      height={1200}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-3xl">
                <p className="font-inter text-lg leading-relaxed text-black whitespace-pre-line mb-10">
                  {novedad.excerpt}
                </p>

                <div className="flex flex-col gap-3 not-prose">
                  {novedad.links?.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sky-400! hover:text-sky-300! underline underline-offset-4 transition-colors"
                    >
                      {link.label}
                      <ExternalLink size={16} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* RELACIONADAS */}
      {related.length > 0 && (
        <section className="container mx-auto px-6 pb-24 max-w-6xl">
          <h2 className="text-2xl font-neue font-bold mb-8 text-black">
            Noticias relacionadas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((item) => (
              <a
                key={item.slug}
                href={`/novedades/${item.slug}`}
                className="group bg-black block overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 text-white flex flex-col gap-3">
                  <p className="text-xs opacity-70">
                    {parseLocalDate(item.date).toLocaleDateString('es-AR')}
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
