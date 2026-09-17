'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useMemo, useState } from 'react'
import { Ticket, FileText, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Event } from '@/utils/eventsComplet.mock'
import {
  applyRangeFilter,
  eventDisciplines,
  groupEvents,
  inMonth,
  isVisibleToday,
  monthKey,
  monthLabel,
  monthsWithEvents,
  pickHero,
  sortEvents,
  todayStr,
} from '@/utils/programacion'

/** Descarga archivo - abrir URL directa */
function downloadDocument(url: string | undefined, fileName?: string) {
  if (!url) return;
  window.open(url + (url.includes("?") ? "&" : "?") + "fl_attachment=true", "_blank");
}

interface Props {
  events: Event[]
}

function parseLocalDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day)
}

// Re-render ONLY when the event changes. `index` only shapes the mount
// animation, so switching filters (which keeps the same event references)
// never re-runs `animate-fade-in-up`.
const EventCard = React.memo(
  function EventCard({ event, index }: { event: Event; index: number }) {
    return (
      <div
        className="animate-fade-in-up"
        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
      >
        <article className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition">
          <Image
            src={event.image}
            alt={event.title}
            width={500}
            height={300}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className="w-full h-48 md:h-56 object-cover"
          />

          <div className="absolute inset-0 z-10 bg-black/25 flex flex-col justify-end p-4">
            <span className="text-xs text-white">
              {parseLocalDate(event.date).toLocaleDateString('es-AR', {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
              })}
            </span>

            <h3 className="text-lg font-bold text-white mt-1">
              {event.title}
            </h3>

            <div className="flex flex-wrap gap-1 mt-2">
              {event.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] bg-black text-brand-white-cdc px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              <Link
                href={`/programacion/${event.slug}`}
                className="text-xs font-bold bg-primary px-3 py-1 rounded hover:bg-[#cc4e1d] transition-colors"
              >
                Ver más
              </Link>

              {event.ticketeraUrl && (
                <a
                  href={event.ticketeraUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-white-cdc inline-flex items-center gap-1 text-xs font-bold bg-primary px-3 py-1 rounded hover:bg-[#cc4e1d] transition-colors"
                >
                  <Ticket size={14} />
                  Entradas
                </a>
              )}

              {event.documentUrl && (
                <button
                  onClick={() => downloadDocument(event.documentUrl, event.documentName)}
                  className="text-brand-white-cdc inline-flex items-center gap-1 text-xs font-bold bg-black px-3 py-1 rounded hover:bg-gray-800 transition-colors"
                >
                  <FileText size={14} />
                  {event.documentName || 'PDF'}
                </button>
              )}
            </div>
          </div>
        </article>
      </div>
    )
  },
  (prev, next) => prev.event === next.event,
)

const RANGE_OPTIONS = [
  { key: 'all', label: 'Todos' },
  { key: 'week', label: 'Esta semana' },
  { key: 'month', label: 'Este mes' },
] as const

type RangeKey = (typeof RANGE_OPTIONS)[number]['key']

const chipBase =
  'text-xs px-4 min-h-11 inline-flex items-center justify-center rounded cursor-pointer transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

function toggleDiscipline(
  discipline: string,
  setSelected: React.Dispatch<React.SetStateAction<string[]>>,
) {
  setSelected(prev =>
    prev.includes(discipline) ? prev.filter(d => d !== discipline) : [...prev, discipline],
  )
}

type Section = { key: string; label: string | null; events: Event[] }

// Zero props -> never re-renders once mounted.
const PageHeader = React.memo(function PageHeader() {
  return (
    <header className="max-w-6xl mx-auto px-2 text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-neue font-bold tracking-tight uppercase">
        Programación
      </h1>
    </header>
  )
})

// Renders the hero block; memoized so it only re-renders when the hero event
// itself changes (month navigation), never on range/discipline filters.
const HeroSection = React.memo(function HeroSection({ event }: { event: Event }) {
  return (
    <section className="max-w-6xl mx-auto px-4 mb-20">
      <div className="animate-fade-in-up">
        <div className="relative w-full h-105 md:h-130 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="100vw"
            priority
            className="object-cover brightness-90"
          />

          <div className="absolute inset-0 z-10 bg-black/30 flex flex-col justify-end p-6 md:p-10">
            <span className="text-sm text-white">
              {parseLocalDate(event.date).toLocaleDateString('es-AR', {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
              })}
            </span>

            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">
              {event.title}
            </h2>

            <div className="flex flex-wrap gap-2 mt-3">
              {event.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs bg-black/80 text-brand-white-cdc px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-5">
              <Link
                href={`/programacion/${event.slug}`}
                className="px-5 py-2 bg-primary text-brand-white-cdc font-semibold rounded-lg hover:bg-[#cc4e1d] transition-colors"
              >
                Ver más
              </Link>

              {event.ticketeraUrl && (
                <a
                  href={event.ticketeraUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-brand-white-cdc font-semibold rounded-lg hover:bg-[#cc4e1d] transition-colors"
                >
                  <Ticket size={18} />
                  Compra tu entrada
                </a>
              )}

              {event.documentUrl && (
                <button
                  onClick={() => downloadDocument(event.documentUrl, event.documentName)}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-black text-brand-white-cdc font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <FileText size={18} />
                  {event.documentName || 'Descargar'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

interface MonthNavigatorProps {
  label: string
  prevDisabled: boolean
  nextDisabled: boolean
  prevTitle: string
  nextTitle: string
  onPrev: () => void
  onNext: () => void
}

const MonthNavigator = React.memo(function MonthNavigator({
  label,
  prevDisabled,
  nextDisabled,
  prevTitle,
  nextTitle,
  onPrev,
  onNext,
}: MonthNavigatorProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <button
        type="button"
        aria-label="Mes anterior"
        title={prevTitle}
        disabled={prevDisabled}
        onClick={onPrev}
        className="w-11 h-11 flex items-center justify-center rounded bg-black text-brand-white-cdc hover:bg-gray-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} />
      </button>

      <span
        aria-live="polite"
        className="font-neue text-base lg:text-lg font-bold min-w-32 text-center"
      >
        {label}
      </span>

      <button
        type="button"
        aria-label="Mes siguiente"
        title={nextTitle}
        disabled={nextDisabled}
        onClick={onNext}
        className="w-11 h-11 flex items-center justify-center rounded bg-black text-brand-white-cdc hover:bg-gray-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
})

interface FilterBarProps {
  range: RangeKey
  onRangeChange: (key: RangeKey) => void
  disciplines: string[]
  disciplineOptions: { name: string; count: number }[]
  onToggleDiscipline: (name: string) => void
}

const FilterBar = React.memo(function FilterBar({
  range,
  onRangeChange,
  disciplines,
  disciplineOptions,
  onToggleDiscipline,
}: FilterBarProps) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
        {RANGE_OPTIONS.map(option => (
          <button
            key={option.key}
            type="button"
            aria-pressed={range === option.key}
            onClick={() => onRangeChange(option.key)}
            className={`${chipBase} ${
              range === option.key
                ? 'bg-primary text-brand-white-cdc'
                : 'bg-black text-brand-white-cdc hover:bg-gray-800'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {disciplineOptions.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {disciplineOptions.map(({ name, count }) => (
            <button
              key={name}
              type="button"
              aria-pressed={disciplines.includes(name)}
              onClick={() => onToggleDiscipline(name)}
              className={`${chipBase} ${
                disciplines.includes(name)
                  ? 'bg-primary text-brand-white-cdc'
                  : 'bg-black text-brand-white-cdc hover:bg-gray-800'
              }`}
            >
              {name} ({count})
            </button>
          ))}
        </div>
      )}
    </>
  )
})

export default function ProgramacionPage({ events }: Props) {
  const today = useMemo(() => todayStr(), [])

  const [range, setRange] = useState<RangeKey>('all')
  const [disciplines, setDisciplines] = useState<string[]>([])
  const [month, setMonth] = useState<string | null>(null)

  const visible = useMemo(
    () => sortEvents(events).filter(e => isVisibleToday(e, today)),
    [events, today],
  )

  const currentMonthKey = useMemo(() => monthKey(today), [today])

  // Meses (ascendentes) con eventos dentro del pool visible
  const months = useMemo(() => monthsWithEvents(visible), [visible])

  const ranged = useMemo(
    () => applyRangeFilter(visible, range, today),
    [visible, range, today],
  )

  // Pool previo al filtro de disciplinas: visto -> rango -> mes
  const monthPool = useMemo(
    () => (month === null ? ranged : ranged.filter(e => inMonth(e, month))),
    [ranged, month],
  )

  const disciplineOptions = useMemo(() => {
    const counts = new Map<string, number>()
    monthPool.forEach(e => {
      eventDisciplines(e).forEach(d => counts.set(d, (counts.get(d) ?? 0) + 1))
    })
    return Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [monthPool])

  const filtered = useMemo(() => {
    if (disciplines.length === 0) return monthPool
    return monthPool.filter(e =>
      eventDisciplines(e).some(d => disciplines.includes(d)),
    )
  }, [monthPool, disciplines])

  const hasActiveFilters = disciplines.length > 0 || range !== 'all' || month !== null

  // Navegación entre meses: la flecha solo aterriza en meses con eventos
  const canNavigate = range === 'all'
  const prevDisabled = !canNavigate || month === null
  const nextDisabled =
    !canNavigate || !months.some(m => m > (month ?? currentMonthKey))

  const goPrev = useCallback(() => {
    setRange('all')
    if (month === null) return
    const before = months.filter(m => m < month)
    const target = before.length > 0 ? before[before.length - 1] : null
    // Si el mes anterior con eventos quedó atrás del mes actual, volver a "Todos"
    setMonth(target !== null && target < currentMonthKey ? null : target)
  }, [months, month, currentMonthKey])

  const goNext = useCallback(() => {
    setRange('all')
    const base = month ?? currentMonthKey
    const target = months.find(m => m > base) ?? null
    setMonth(target)
  }, [months, month, currentMonthKey])

  const handleRangeChange = useCallback((key: RangeKey) => {
    setRange(key)
    setMonth(null)
  }, [])

  const handleToggleDiscipline = useCallback(
    (discipline: string) => toggleDiscipline(discipline, setDisciplines),
    [],
  )

  const prevTitle = 'Disponible en Todos'
  const nextTitle = nextDisabled
    ? range === 'all'
      ? 'No hay más meses con eventos'
      : 'Disponible en Todos'
    : ''

  // El hero solo existe en la vista "Todos" inicial (sin filtros ni mes
  // navegado). Con cualquier filtro o mes activo se muestran TODOS los
  // resultados como cards, para que el hero nunca oculte un resultado.
  const showHero = disciplines.length === 0 && range === 'all' && month === null

  // Hero estable: depende SOLO del mes (visible x mes), nunca del rango o las
  // disciplinas, así no se desmonta/re-monta al filtrar.
  const hero = useMemo(() => {
    if (!showHero) return undefined
    const heroMonth = month ?? currentMonthKey
    const heroPool = visible.filter(e => inMonth(e, heroMonth))
    return pickHero(heroPool).hero
  }, [showHero, visible, month, currentMonthKey])

  // Nunca mostrar el hero duplicado en el grid.
  const listEvents = useMemo(
    () => filtered.filter(e => e !== hero),
    [filtered, hero],
  )

  const sections = useMemo<Section[]>(() => {
    if (!hasActiveFilters) {
      return groupEvents(listEvents, today)
    }
    return [{ key: 'results', label: null, events: listEvents }]
  }, [hasActiveFilters, listEvents, today])

  if (!events || events.length === 0) return null

  return (
    <main className="bg-white text-black min-h-screen py-12 overflow-x-hidden">
      {/* Header */}
      <PageHeader />

      {/* HERO */}
      {hero && <HeroSection event={hero} />}

      {/* FILTROS + GRID */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <h2 className="font-neue text-2xl lg:text-3xl font-bold mb-10 text-center">
          Próximos eventos
        </h2>

        <FilterBar
          range={range}
          onRangeChange={handleRangeChange}
          disciplines={disciplines}
          disciplineOptions={disciplineOptions}
          onToggleDiscipline={handleToggleDiscipline}
        />

        <MonthNavigator
          label={monthLabel(month ?? currentMonthKey)}
          prevDisabled={prevDisabled}
          nextDisabled={nextDisabled}
          prevTitle={prevTitle}
          nextTitle={nextTitle}
          onPrev={goPrev}
          onNext={goNext}
        />

        {hasActiveFilters && filtered.length === 0 && (
          <p className="text-center text-gray-600 mt-10">
            {month !== null && disciplines.length === 0
              ? 'No hay eventos en este mes.'
              : 'No hay eventos para estos filtros.'}
          </p>
        )}

        {/*
          Grid único y permanente: las cards son hijos DIRECTOS del grid,
          headerizado por su event.id. Los títulos de grupo son hermanos
          col-span-full dentro del mismo grid. Así React MUEVE las cards
          existentes al cambiar de vista (no las desmonta y vuelve a montar).
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.flatMap(section => [
            ...(section.label
              ? [
                  <h3
                    key={`heading-${section.key}`}
                    className="col-span-full font-neue text-xl lg:text-2xl font-bold mb-6 text-center"
                  >
                    {section.label}
                  </h3>,
                ]
              : []),
            ...section.events.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            )),
          ])}
        </div>
      </section>
    </main>
  )
}