'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { getNovedadBySlug, getRelatedNovedades } from '@/utils/novedades.mock';
import { ExternalLink } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumb/Breadcrumbs';

interface NovedadesDetailProps {
  slug: string;
}

// --- UTIL: formatear "YYYY-MM-DD" SIN depender de zona horaria ---
function formatDateStr(dateStr: string) {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

function getDateComponents(dateStr: string) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return { year, month, day };
}

export default function NovedadesDetail({ slug }: NovedadesDetailProps) {
  const searchParams = useSearchParams();
  const dayParam = searchParams.get('day'); // <-- día clickeado en el tooltip
  const clickedDay = dayParam ? Number(dayParam) : null;

  const novedad = getNovedadBySlug(slug);

  if (!novedad) notFound();

  const related = novedad?.tags
    ? getRelatedNovedades(novedad.slug, novedad.tags)
    : [];

  const hasGallery = Array.isArray(novedad.images) && novedad.images.length > 0;

  // --- Fecha que mostramos: si hay day en query, usamos ese día del mes ---
  const dateComponents = getDateComponents(novedad.date);
  const displayDateStr = clickedDay
    ? `${String(clickedDay).padStart(2, '0')}/${String(dateComponents.month).padStart(2, '0')}/${dateComponents.year}`
    : formatDateStr(novedad.date);

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
            {displayDateStr}
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
                      sizes="(max-width: 640px) calc(100vw - 3rem), calc((100vw - 7.5rem) / 2)"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {!hasGallery && (
              <div className="bg-neutral-100 rounded-xl p-4 flex justify-center">
                <Image
                  src={novedad.image}
                  alt={novedad.title}
                  width={1536}
                  height={1920}
                  sizes="(max-width: 1280px) calc(100vw - 3rem), 1100px"
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            )}
          </div>

          {/* TEXTO */}
          <div className="order-2">
            <div className="max-w-3xl">
              <div
                className="font-inter text-lg leading-relaxed text-black whitespace-pre-line mb-10 [&_strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: novedad.excerpt }}
              />

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
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 text-white flex flex-col gap-3">
                  <p className="text-xs opacity-70">
                    {formatDateStr(item.date)}
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
