"use client"

import React, { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import type { Event } from "@/utils/eventsComplet.mock"

const WEEK_DAYS = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];

function normalizeTime(t: string | undefined): string {
  if (!t) return "00:00";
  const [h, m] = t.split(":");
  return `${h.padStart(2, "0")}:${(m || "0").padStart(2, "0")}`;
}

function formatDateLocal(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

interface DayCellProps {
  day: number;
  weekDayLabel: string;
  dayEvents: { event: Event; dateStr: string }[];
  colStart: number;
}

const DayCell = React.memo(function DayCell({
  day,
  weekDayLabel,
  dayEvents,
  colStart,
}: DayCellProps) {
  return (
    <div
      className="h-64 sm:h-72 md:h-80 overflow-hidden border border-neutral-300 rounded-md shadow-md relative flex flex-col animate-fade-in-up"
      style={colStart > 1 && colStart <= 7 ? { gridColumnStart: colStart } : undefined}
    >
      <div className="absolute top-1 left-1 bg-white/90 text-black px-2 py-0.5 rounded z-10 text-sm font-semibold shadow-sm flex flex-col items-start">
        <span className="text-[10px]">{weekDayLabel}</span>
        <span className="text-sm">{day}</span>
      </div>

      {dayEvents.length === 0 && (
        <div className="flex flex-col justify-center items-center h-full p-2 text-center pt-8">
          <span className="text-sm text-neutral-400 mt-2">Sin eventos</span>
        </div>
      )}

      {dayEvents.length === 1 && (
        <SingleEvent event={dayEvents[0]} />
      )}

      {dayEvents.length > 1 && (
        <MultipleEvents events={dayEvents} />
      )}
    </div>
  );
});

const SingleEvent = React.memo(function SingleEvent({
  event
}: {
  event: { event: Event; dateStr: string }
}) {
  const { event: e, dateStr } = event;
  return (
    <Link
      href={`/programacion/${e.slug}?date=${dateStr}`}
      className="relative block h-full w-full overflow-hidden pt-6"
    >
      {e.image && (
        <Image
          src={e.image}
          alt={e.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 14vw"
          style={{ objectFit: "cover" }}
          loading="lazy"
          className="absolute inset-0"
        />
      )}
      <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-end p-2 gap-1">
        <span className="text-sm font-semibold">{e.title}</span>
        {e.time && <span className="text-xs">{e.time}</span>}
        <div className="flex flex-wrap gap-1">
          {e.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-black px-2 py-0.5 rounded">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
});

const MultipleEvents = React.memo(function MultipleEvents({
  events
}: {
  events: { event: Event; dateStr: string }[]
}) {
  return (
    <div className="flex flex-col gap-2 p-2 h-full overflow-y-auto pt-8">
      {events.map(({ event, dateStr }) => (
        <Link
          key={`${event.id}-${dateStr}`}
          href={`/programacion/${event.slug}?date=${dateStr}`}
          className="relative block h-32 sm:h-36 md:h-40 overflow-hidden rounded-md shadow-sm hover:shadow-md transition"
        >
          {event.image && (
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 14vw"
              style={{ objectFit: "cover" }}
              loading="lazy"
              className="absolute inset-0"
            />
          )}
          <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-end p-2 gap-1">
            <span className="text-sm font-semibold">{event.title}</span>
            {event.time && <span className="text-xs">{event.time}</span>}
            <div className="flex flex-wrap gap-1">
              {event.tags.map(tag => (
                <span key={tag} className="text-[10px] bg-black px-2 py-0.5 rounded">{tag}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
});

interface AgendaAlmanaqueProps {
  events: Event[];
  initialYear: number;
  initialMonth: number;
}

export default function AgendaAlmanaque({ events, initialYear, initialMonth }: AgendaAlmanaqueProps) {
  const [localMonth, setLocalMonth] = useState(
    () => new Date(initialYear, initialMonth, 1)
  );

  const daysInMonth = new Date(
    localMonth.getFullYear(),
    localMonth.getMonth() + 1,
    0
  ).getDate();

  // Compute events for the current visible month
  const allMonthEvents = useMemo(() => {
    const map = new Map<number, { event: Event; dateStr: string }[]>();
    const year = localMonth.getFullYear();
    const month = localMonth.getMonth();

    events.forEach((event) => {
      const start = event.startDate ? event.startDate : event.date;
      const end = event.endDate ? event.endDate : event.date;
      if (!start || !end) return;

      const s = new Date(start);
      const e = new Date(end);
      for (let d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
        if (d.getFullYear() === year && d.getMonth() === month) {
          const day = d.getDate();
          const dateStr = formatDateLocal(d);
          if (!map.has(day)) map.set(day, []);
          map.get(day)!.push({ event, dateStr });
        }
      }
    });

    return map;
  }, [localMonth, events]);

  const monthLabel = localMonth.toLocaleDateString("es-AR", {
    month: "long",
    year: "numeric",
  });

  const firstDayOfMonth = new Date(localMonth.getFullYear(), localMonth.getMonth(), 1);
  const desktopOffset = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;

  return (
    <main className="bg-white text-black min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-bold font-neue">
            Agenda cultural – {monthLabel}
          </h1>

          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={() => setLocalMonth(d => new Date(d.getFullYear(), d.getMonth() - 1, 1))}
              className="px-4 py-2 rounded-md bg-black text-white hover:bg-primary transition"
            >
              Mes anterior
            </button>
            <button
              onClick={() => setLocalMonth(d => new Date(d.getFullYear(), d.getMonth() + 1, 1))}
              className="px-4 py-2 rounded-md bg-black text-white hover:bg-primary transition"
            >
              Mes siguiente
            </button>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-7 gap-2 text-center mb-1 font-semibold">
          {WEEK_DAYS.map((wd) => (
            <div key={wd}>{wd}</div>
          ))}
        </div>

        <div className="grid md:grid-cols-7 gap-2 mt-2 flex-col md:flex-none">
          {Array.from({ length: daysInMonth + desktopOffset }, (_, i) => {
            const day = i - desktopOffset + 1;
            if (day < 1) return <div key={`empty-${i}`} className="hidden md:block md:h-80" />;

            const date = new Date(
              localMonth.getFullYear(),
              localMonth.getMonth(),
              day
            );
            const weekDayLabel = WEEK_DAYS[date.getDay() === 0 ? 6 : date.getDay() - 1];

            const sortedDayEvents = (allMonthEvents.get(day) || []).sort((a, b) => {
              return normalizeTime(a.event.time).localeCompare(normalizeTime(b.event.time));
            });

            return (
              <DayCell
                key={day}
                day={day}
                weekDayLabel={weekDayLabel}
                dayEvents={sortedDayEvents}
                colStart={day === 1 ? desktopOffset + 1 : 1}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
