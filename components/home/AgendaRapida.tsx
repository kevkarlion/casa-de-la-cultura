'use client'

import { useMemo, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import Link from 'next/link'

interface AgendaItem {
  id: string | number
  date: string
  title: string
  time?: string
  slug: string
}

interface AgendaRapidaProps {
  items: AgendaItem[]
}

const WEEK_DAYS = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB']
const TOOLTIP_WIDTH = 320
const GAP = 10

export default function AgendaRapida({ items }: AgendaRapidaProps) {
  const today = new Date()
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  )
  const [openDay, setOpenDay] = useState<number | null>(null)
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(
    null
  )
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const hoverTooltipRef = useRef(false)

  const isMobile =
    typeof window !== 'undefined' && window.innerWidth < 768

  const monthLabel = currentDate.toLocaleDateString('es-AR', {
    month: 'long',
    year: 'numeric',
  })

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()

  const eventsByDay = useMemo(() => {
    const map = new Map<number, AgendaItem[]>()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    items.forEach(item => {
      const d = new Date(item.date)
      if (d.getFullYear() === year && d.getMonth() === month) {
        const day = d.getDate()
        if (!map.has(day)) map.set(day, [])
        map.get(day)!.push(item)
      }
    })

    return map
  }, [items, currentDate])

  function openTooltip(day: number, el: HTMLElement) {
    const rect = el.getBoundingClientRect()

    if (isMobile) {
      const x = window.innerWidth / 2
      const y = rect.bottom + GAP
      setTooltipPos({ x, y })
      setOpenDay(day)
      return
    }

    let x = rect.left
    const y = rect.bottom + GAP

    if (x + TOOLTIP_WIDTH > window.innerWidth) {
      x = window.innerWidth - TOOLTIP_WIDTH - GAP
    }

    x = Math.max(GAP, x)

    setTooltipPos({ x, y })
    setOpenDay(day)
  }

  function scheduleCloseTooltip() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (!hoverTooltipRef.current) {
        setOpenDay(null)
        setTooltipPos(null)
      }
    }, 300)
  }

  return (
    <section className="relative z-20 w-full py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="text-amber-500" />
            <h2 className="text-xl font-neue text-black">
              Agenda cultural
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() =>
                setCurrentDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1))
              }
              className="nav-btn"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() =>
                setCurrentDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1))
              }
              className="nav-btn"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <p className="font-neue mb-8 text-sm uppercase tracking-widest text-black">
          {monthLabel}
        </p>

        {/* GRID */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(72px,1fr))] gap-4">
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1
            const date = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day
            )
            const weekDay = WEEK_DAYS[date.getDay()]
            const events = eventsByDay.get(day)

            return (
              <button
                key={day}
                type="button"
                className={`
                  relative flex w-full flex-col items-center rounded-xl border py-4 transition
                  ${
                    events
                      ? 'cursor-pointer border-neutral-800 bg-neutral-900/60 hover:border-amber-500'
                      : 'border-neutral-800 bg-neutral-900/40 text-neutral-500'
                  }
                `}
                onMouseEnter={e => {
                  if (!events || isMobile) return
                  if (timeoutRef.current) clearTimeout(timeoutRef.current)
                  openTooltip(day, e.currentTarget)
                }}
                onMouseLeave={() => {
                  if (!isMobile) scheduleCloseTooltip()
                }}
                onClick={e => {
                  if (!events || !isMobile) return
                  const el = e.currentTarget
                  setOpenDay(prev => {
                    if (prev === day) {
                      setTooltipPos(null)
                      return null
                    }
                    openTooltip(day, el)
                    return day
                  })
                }}
              >
                {events && (
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-amber-500" />
                )}

                <span className="text-lg font-semibold text-neutral-100">{day}</span>
                <span className="mt-1 text-xs tracking-widest text-neutral-400">
                  {weekDay}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* TOOLTIP */}
      {openDay && tooltipPos && (
        <div
          className="fixed z-9999"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
            transform: isMobile ? 'translate(-50%, 0)' : 'translateY(0)',
          }}
          onMouseEnter={() => {
            if (!isMobile) {
              hoverTooltipRef.current = true
              if (timeoutRef.current) clearTimeout(timeoutRef.current)
            }
          }}
          onMouseLeave={() => {
            if (!isMobile) {
              hoverTooltipRef.current = false
              scheduleCloseTooltip()
            }
          }}
        >
          <div className="w-[90vw] max-w-sm md:w-[320px] rounded-lg border border-neutral-700 bg-neutral-900 p-4 shadow-2xl">
            <ul className="space-y-3">
              {eventsByDay.get(openDay)?.map(event => (
                <li key={event.id}>
                  <Link
                    href={`/agenda/${event.slug}`}
                    className="block rounded-md p-2 hover:bg-neutral-800"
                  >
                    <p className="text-sm font-medium text-neutral-200 leading-snug">
                      {event.title}
                    </p>
                    {event.time && (
                      <p className="mt-1 text-xs text-neutral-400">{event.time}</p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}
