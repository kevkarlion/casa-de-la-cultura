'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Novedad } from '@/interfaces/novedades.interface'

interface PageNovedadesProps {
  novedades: Novedad[]
}

const FeaturedCard = React.memo(function FeaturedCard({
  novedad,
  index,
}: {
  novedad: Novedad
  index: number
}) {
  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
    >
      {/* 🔑 CONTENEDOR REAL (NO animado) */}
      <div className="relative w-full h-105 md:h-130 rounded-xl overflow-hidden mb-10 shadow-lg">
        <Image
          src={novedad.image}
          alt={novedad.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority={index === 0}
          loading={index === 0 ? undefined : 'lazy'}
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {novedad.tags?.map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-black text-brand-white-cdc backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs text-neutral-200 mb-1">
            {novedad.date}
          </p>

          <h3 className="text-2xl font-bold text-white mb-2">
            {novedad.title}
          </h3>

          <p className="text-sm text-neutral-100 mb-4">
            {novedad.summary}
          </p>

          <Link
            href={`/novedades/${novedad.slug}`}
            className="inline-block px-4 py-2 bg-primary text-white font-semibold hover:bg-primary-dark transition"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  )
})

const NormalCard = React.memo(function NormalCard({
  novedad,
  index,
}: {
  novedad: Novedad
  index: number
}) {
  return (
    <article
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
    >
      {/* 🔑 CONTENEDOR REAL (NO animado) */}
      <div className="border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition">
        <div className="relative aspect-video w-full">
          <Image
            src={novedad.image}
            alt={novedad.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className="p-5 flex flex-col gap-2">
          <p className="text-xs text-neutral-500">
            {novedad.date}
          </p>

          <div className="flex flex-wrap gap-2">
            {novedad.tags?.map(tag => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 bg-black text-brand-white-cdc"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-neue text-lg font-semibold">
            {novedad.title}
          </h3>

          <p className="text-sm text-neutral-600">
            {novedad.summary}
          </p>

          <Link
            href={`/novedades/${novedad.slug}`}
            className="mt-3 inline-block px-4 py-2 bg-primary text-white font-semibold hover:bg-primary-dark transition"
          >
            Ver más
          </Link>
        </div>
      </div>
    </article>
  )
})

export default function PageNovedades({ novedades }: PageNovedadesProps) {
  const destacadas = novedades.filter(n => n.featured)
  const normales = novedades.filter(n => !n.featured)

  return (
    <main className="bg-white text-black min-h-screen py-12 overflow-x-hidden">
      {/* Header */}
      <header className="container mx-auto px-6 text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-neue font-bold mb-12 tracking-tight uppercase">
          Novedades
        </h1>
      </header>

      {/* DESTACADAS */}
      {destacadas.length > 0 && (
        <section className="container mx-auto px-6 mb-16">
          <h2 className="font-neue text-2xl lg:text-3xl font-bold mb-6">
            Destacado
          </h2>

          {destacadas.map((novedad, index) => (
            <FeaturedCard key={novedad.id} novedad={novedad} index={index} />
          ))}
        </section>
      )}

      {/* LISTADO */}
      <section className="container mx-auto px-6">
        <h2 className="font-neue text-2xl lg:text-3xl font-bold mb-6">
          Todas las novedades
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {normales.map((novedad, index) => (
            <NormalCard key={novedad.id} novedad={novedad} index={index} />
          ))}
        </div>
      </section>
    </main>
  )
}
