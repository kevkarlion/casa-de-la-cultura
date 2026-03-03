"use client";

import Image from "next/image";
import { talleresInfo } from "@/utils/talleresInfo";

export default function SectionTalleres() {
  return (
    <section className="w-full pt-12 pb-20 bg-brand-white-cdc">

      {/* HEADER */}
      <header className="mb-16 text-center">
        <h2 className="text-5xl text-black font-neue md:text-6xl font-bold mb-12 tracking-tight">
          TALLERES
        </h2>

        <p className="mx-auto max-w-xl text-sm lg:text-xl text-black leading-relaxed">
          Propuestas formativas y recreativas para infancias, adolescentes y
          personas adultas.
        </p>
      </header>

      {/* FLYER PRINCIPAL */}
      {/* 
      <div className="mx-auto max-w-md lg:max-w-lg px-4 mb-24">
        <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/talleres/talleres.webp"
            alt="Flyer talleres Casa de la Cultura"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div> 
      */}

      {/* LISTADO */}
      <div className="mx-auto mt-24 max-w-6xl px-4 text-neutral-800">

        <div className="space-y-32">

          {talleresInfo.map((taller, index) => {

            const hasImages = taller.images && taller.images.length > 0;
            const hasDescription = taller.description && taller.description.length > 0;

            return (
              <article
                key={index}
                className="border-b border-black/10 pb-20"
              >

                <div
                  className={`
                  flex flex-col gap-10
                  ${hasImages && hasDescription ? "lg:flex-row" : ""}
                  `}
                >

                  {/* TEXTO */}
                  {(hasDescription || taller.teacher || taller.horarios) && (
                    <div className="flex-1 max-w-xl">

                      <h3 className="font-neue text-2xl font-bold uppercase mb-2">
                        {taller.title}
                      </h3>

                      {taller.teacher && (
                        <p className="text-sm italic mb-4">
                          {taller.teacher}
                        </p>
                      )}

                      {/* HORARIOS */}
                      {taller.horarios && (
                        <div className="space-y-1 text-sm mb-4">
                          {taller.horarios.map((h, i) => (
                            <div key={i}>
                              {h.age && (
                                <span className="font-semibold">
                                  {h.age}
                                </span>
                              )}
                              {h.age && " · "}
                              <span>{h.schedule}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {taller.phone && (
                        <div className="mb-4">
                          <a
                            href={`https://wa.me/54${taller.phone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm underline hover:opacity-70"
                          >
                            Consultar por WhatsApp
                          </a>
                        </div>
                      )}

                      {hasDescription && (
                        <p className="text-sm leading-relaxed whitespace-pre-line">
                          {taller.description}
                        </p>
                      )}

                    </div>
                  )}

                  {/* GALERÍA */}
                  {hasImages && (
                    <div
                      className={`
                      flex gap-8 overflow-x-auto pb-4
                      ${!hasDescription ? "mx-auto" : "flex-1"}
                      `}
                    >

                      {taller.images?.map((img, i) => (
                        <figure
                          key={i}
                          className="
                          shrink-0
                          w-[360px]
                          md:w-[420px]
                          lg:w-[460px]
                          "
                        >

                          <div className="relative w-full aspect-4/5 rounded-lg overflow-hidden">
                            <Image
                              src={img.src}
                              alt={img.alt || taller.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {img.caption && (
                            <figcaption className="text-xs mt-2 text-neutral-600">
                              {img.caption}
                            </figcaption>
                          )}

                        </figure>
                      ))}

                    </div>
                  )}

                </div>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}