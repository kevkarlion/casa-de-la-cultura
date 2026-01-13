'use client';

import { useMemo, useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

interface AgendaItem {
  id: string | number;
  date: string;        // para compatibilidad
  startDate?: string;  // nueva
  endDate?: string;    // nueva
  title: string;
  time?: string;
  slug: string;
}

interface AgendaRapidaProps {
  items: AgendaItem[];
}

const WEEK_DAYS = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];
const TOOLTIP_WIDTH = 320;
const GAP = 10;

// --- UTIL: parse "YYYY-MM-DD" como fecha LOCAL ---
function parseLocalDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export default function AgendaRapida({ items }: AgendaRapidaProps) {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(
    null
  );

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hoverTooltipRef = useRef(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  /* --------- CERRAR AL SCROLL --------- */
  useEffect(() => {
    function handleScroll() {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setOpenDay(null);
      setTooltipPos(null);
      hoverTooltipRef.current = false;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  /* ----------------------------------- */

  const monthLabel = currentDate.toLocaleDateString("es-AR", {
    month: "long",
    year: "numeric",
  });

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

 const eventsByDay = useMemo(() => {
  const map = new Map<number, AgendaItem[]>();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  items.forEach((item) => {
    const start = item.startDate ? parseLocalDate(item.startDate) : parseLocalDate(item.date);
    const end = item.endDate ? parseLocalDate(item.endDate) : parseLocalDate(item.date);

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (d.getFullYear() === year && d.getMonth() === month) {
        const day = d.getDate();
        if (!map.has(day)) map.set(day, []);
        map.get(day)!.push(item);
      }
    }
  });

  return map;
}, [items, currentDate]);


  function openTooltip(day: number, el: HTMLElement) {
    const rect = el.getBoundingClientRect();

    if (isMobile) {
      setTooltipPos({
        x: window.innerWidth / 2,
        y: rect.bottom + GAP,
      });
      setOpenDay(day);
      return;
    }

    let x = rect.left;
    const y = rect.bottom + GAP;

    if (x + TOOLTIP_WIDTH > window.innerWidth) {
      x = window.innerWidth - TOOLTIP_WIDTH - GAP;
    }

    x = Math.max(GAP, x);

    setTooltipPos({ x, y });
    setOpenDay(day);
  }

  function scheduleCloseTooltip() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!hoverTooltipRef.current) {
        setOpenDay(null);
        setTooltipPos(null);
      }
    }, 300);
  }

  return (
    <section className="relative z-20 w-full py-12 bottom-30 lg:bottom-45">
      <div className="mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-black not-last:px-3 py-1">
              <Calendar className="text-primary" />
              <h2 className="text-lg font-neue font-semibold text-brand-white-cdc uppercase">
                Agenda cultural
              </h2>
            </div>

            <div className="flex gap-2 ml-4">
              <button
                onClick={() =>
                  setCurrentDate(
                    (d) => new Date(d.getFullYear(), d.getMonth() - 1, 1)
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-black text-neutral-200 transition hover:border-primary hover:text-primary"
                aria-label="Mes anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() =>
                  setCurrentDate(
                    (d) => new Date(d.getFullYear(), d.getMonth() + 1, 1)
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-black text-neutral-200 transition hover:border-primary hover:text-primary"
                aria-label="Mes siguiente"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* BOTÓN VER AGENDA COMPLETA */}
          <Link
            href="/agenda"
            className="group flex items-center gap-2 self-start sm:self-center px-4 py-2 bg-black text-brand-white-cdc border border-neutral-700 l hover:border-primary hover:text-primary transition-all duration-300"
          >
            <span className="text-sm font-medium tracking-wide">
              Ver agenda completa
            </span>
            <ArrowRight 
              size={16} 
              className="group-hover:translate-x-1 transition-transform duration-300" 
            />
          </Link>
        </div>

        <p className="font-neue mb-4 text-sm uppercase tracking-widest text-black">
          {monthLabel}
        </p>

        {/* GRID */}
        <div className="grid grid-cols-7 gap-0 sm:grid-cols-[repeat(auto-fit,minmax(48px,1fr))] sm:gap-2 border border-neutral-800 sm:border-0">
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const date = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day
            );
            const weekDay = WEEK_DAYS[date.getDay()];
            const events = eventsByDay.get(day);

            return (
              <button
                key={day}
                type="button"
                className={`
                  relative flex aspect-square sm:aspect-auto
                  flex-col items-center justify-center
                  border border-neutral-800
                  rounded-none sm:rounded-md
                  p-1 sm:px-1.5 sm:py-2
                  transition
                  ${events
                    ? "cursor-pointer bg-gray-300	 hover:border-amber-500"
                    : "bg-white text-neutral-500"
                  }
                `}
                onMouseEnter={(e) => {
                  if (!events || isMobile) return;
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  openTooltip(day, e.currentTarget);
                }}
                onMouseLeave={() => {
                  if (!isMobile) scheduleCloseTooltip();
                }}
                onClick={(e) => {
                  if (!events || !isMobile) return;
                  const el = e.currentTarget;
                  setOpenDay((prev) => {
                    if (prev === day) {
                      setTooltipPos(null);
                      return null;
                    }
                    openTooltip(day, el);
                    return day;
                  });
                }}
              >
                {events && (
                  <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                )}

                <span className="text-sm sm:text-base font-semibold text-black">
                  {day}
                </span>
                <span className="mt-0.5 text-[10px] sm:text-[11px] tracking-widest text-black">
                  {weekDay}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* OVERLAY MOBILE */}
      {isMobile && openDay && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setOpenDay(null);
            setTooltipPos(null);
          }}
        />
      )}

      {/* TOOLTIP */}
      {openDay && tooltipPos && (
        <div
          className="fixed z-50"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
            transform: isMobile ? "translateX(-50%)" : "none",
          }}
          onMouseEnter={() => {
            if (!isMobile) {
              hoverTooltipRef.current = true;
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={() => {
            if (!isMobile) {
              hoverTooltipRef.current = false;
              scheduleCloseTooltip();
            }
          }}
        >
          <div className="w-[90vw] max-w-sm md:w-[320px] rounded-lg border border-neutral-700 bg-brand-white-cdc p-4 shadow-2xl">
            <ul className="space-y-3">
              {eventsByDay.get(openDay)?.map((event) => (
  <li key={event.id}>
    <Link
      // PASAMOS el día clickeado como query "day"
      href={`/programacion/${event.slug}?day=${openDay}`}
      className="block rounded-md p-2 hover:bg-gray-300"
    >
      <p className="text-sm font-medium text-black leading-snug">
        {event.title}
      </p>
      {event.time && (
        <p className="mt-1 text-xs text-black">
          {event.time}
        </p>
      )}
    </Link>
  </li>
))}

            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
