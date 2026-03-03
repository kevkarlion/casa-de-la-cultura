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

      {/* DETALLE DE TALLERES */}
      <div className="mx-auto mt-24 max-w-6xl px-4 text-neutral-800">

        {/* 
        <h3 className="mb-12 font-neue text-2xl lg:text-3xl font-bold uppercase text-black">
          Talleres de Verano
        </h3>
        */}

        <div className="space-y-24">

          {talleresInfo.map((taller, index) => {

            const hasImages = taller.images && taller.images.length > 0;

            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-12 border-b border-black/10 pb-16"
              >

                {/* TEXTO */}
                <div className={`flex-1 ${!hasImages ? "max-w-3xl" : "max-w-xl"}`}>

                  <h4 className="font-neue text-xl font-bold uppercase mb-2">
                    {taller.title}
                  </h4>

                  {taller.teacher && (
                    <p className="text-sm italic mb-3">{taller.teacher}</p>
                  )}

                  {/* HORARIOS */}
                  {taller.horarios && (
                    <div className="space-y-1 text-sm mb-3">
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
                    <div className="mt-4">
                      <a
                        href={`https://wa.me/54${taller.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-medium underline hover:opacity-70 transition"
                      >
                        Consultar por WhatsApp
                      </a>
                    </div>
                  )}

                  {taller.description && (
                    <p className="mt-4 text-sm leading-relaxed whitespace-pre-line">
                      {taller.description}
                    </p>
                  )}

                </div>

                {/* GALERÍA */}
                {hasImages && (
                  <div className="flex-1 flex gap-6 overflow-x-auto pb-4">

                    {taller.images?.map((img, i) => (
                      <div
                        key={i}
                        className="
                        relative
                        shrink-0
                        w-[320px]
                        md:w-[380px]
                        lg:w-[420px]
                        aspect-4/5
                        rounded-lg
                        overflow-hidden
                      "
                      >
                        <Image
                          src={img}
                          alt={taller.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}