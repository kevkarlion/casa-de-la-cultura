"use client";

import { useMemo, useState } from "react";
import { motion, easeOut } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Event {
  id: string | number;
  date?: string;
  startDate?: string;
  endDate?: string;
  title: string;
  time?: string;
  description?: string;
  image?: string;
  slug: string;
  category: "eventos";
  tags: string[];
}

interface AgendaAlmanaqueProps {
  events: Event[];
}

const WEEK_DAYS = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];

// --- UTIL: parse "YYYY-MM-DD" como fecha LOCAL ---
function parseLocalDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day); // month-1 porque en JS los meses van de 0 a 11
}

export default function AgendaAlmanaque({ events }: AgendaAlmanaqueProps) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const eventsByDay = useMemo(() => {
    const map = new Map<number, Event[]>();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    events.forEach((event) => {
      const start = event.startDate ? parseLocalDate(event.startDate) : parseLocalDate(event.date!);
      const end = event.endDate ? parseLocalDate(event.endDate) : parseLocalDate(event.date!);

      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        if (d.getFullYear() === year && d.getMonth() === month) {
          const day = d.getDate();
          if (!map.has(day)) map.set(day, []);
          map.get(day)!.push(event);
        }
      }
    });

    return map;
  }, [events, currentDate]);

  const monthLabel = currentDate.toLocaleDateString("es-AR", {
    month: "long",
    year: "numeric",
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  // Offset solo para desktop
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const desktopOffset = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;

  return (
    <main className="bg-white text-black min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-bold font-neue">
            Agenda cultural – {monthLabel}
          </h1>

          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={() =>
                setCurrentDate(
                  (d) => new Date(d.getFullYear(), d.getMonth() - 1, 1)
                )
              }
              className="px-4 py-2 rounded-md bg-black text-white hover:bg-primary transition"
            >
              Mes anterior
            </button>

            <button
              onClick={() =>
                setCurrentDate(
                  (d) => new Date(d.getFullYear(), d.getMonth() + 1, 1)
                )
              }
              className="px-4 py-2 rounded-md bg-black text-white hover:bg-primary transition"
            >
              Mes siguiente
            </button>
          </div>
        </div>

        {/* Desktop: cabecera de días */}
        <div className="hidden md:grid grid-cols-7 gap-2 text-center font-semibold text-sm">
          {WEEK_DAYS.map((wd) => (
            <div key={wd}>{wd}</div>
          ))}
        </div>

        {/* Grid de días */}
        <div className="grid md:grid-cols-7 gap-2 mt-2 flex-col md:flex-none">
          {Array.from({ length: daysInMonth + desktopOffset }, (_, i) => {
            const day = i - desktopOffset + 1;

            // Mobile: ignorar los vacíos antes del primer día
            if (day < 1) return <div key={`empty-${i}`} className="hidden md:block h-64 sm:h-72 md:h-80"></div>;

            const date = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day
            );

            const weekDayLabel = WEEK_DAYS[date.getDay() === 0 ? 6 : date.getDay() - 1];
            const dayEvents = eventsByDay.get(day) || [];

            return (
              <motion.div
                key={day}
                className="h-64 sm:h-72 md:h-80 overflow-hidden border border-neutral-300 rounded-md shadow-md relative flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {/* Fecha siempre arriba */}
                <div className="absolute top-1 left-1 bg-white/90 text-black px-2 py-0.5 rounded z-10 text-sm font-semibold shadow-sm flex flex-col items-start">
                  <span className="text-[10px]">{weekDayLabel}</span>
                  <span className="text-sm">{day}</span>
                </div>

                {/* Día sin eventos */}
                {dayEvents.length === 0 && (
                  <div className="flex flex-col justify-center items-center h-full p-2 text-center pt-8">
                    <span className="text-sm text-neutral-400 mt-2">Sin eventos</span>
                  </div>
                )}

                {/* Día con un solo evento */}
                {dayEvents.length === 1 && (
                  <Link
                    href={`/programacion/${dayEvents[0].slug}`}
                    className="relative block h-full w-full overflow-hidden pt-6"
                  >
                    {dayEvents[0].image && (
                      <Image
                        src={dayEvents[0].image}
                        alt={dayEvents[0].title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="absolute inset-0"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-end p-2 gap-1">
                      <span className="text-sm font-semibold">{dayEvents[0].title}</span>
                      {dayEvents[0].time && <span className="text-xs">{dayEvents[0].time}</span>}
                      <div className="flex flex-wrap gap-1">
                        {dayEvents[0].tags.map(tag => (
                          <span
                            key={tag}
                            className="text-[10px] bg-black px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                )}

                {/* Día con más de un evento */}
                {dayEvents.length > 1 && (
                  <div className="flex flex-col gap-2 p-2 h-full overflow-y-auto pt-8">
                    {dayEvents.map(event => (
                      <Link
                        key={event.id}
                        href={`/programacion/${event.slug}`}
                        className="relative block h-32 sm:h-36 md:h-40 overflow-hidden rounded-md shadow-sm hover:shadow-md transition"
                      >
                        {event.image && (
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            style={{ objectFit: "cover" }}
                            className="absolute inset-0"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-end p-2 gap-1">
                          <span className="text-sm font-semibold">{event.title}</span>
                          {event.time && <span className="text-xs">{event.time}</span>}
                          <div className="flex flex-wrap gap-1">
                            {event.tags.map(tag => (
                              <span
                                key={tag}
                                className="text-[10px] bg-black px-2 py-0.5 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
