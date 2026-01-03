"use client";

import { useMemo, useState } from "react";
import { motion, easeOut } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface AgendaItem {
  id: string | number;
  date: string;
  title: string;
  time?: string;
  description?: string;
  image?: string; // URL de la imagen del evento
  slug: string;
}

interface AgendaAlmanaqueProps {
  items: AgendaItem[];
}

const WEEK_DAYS = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];

export default function AgendaAlmanaque({ items }: AgendaAlmanaqueProps) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // Agrupar eventos por día
  const eventsByDay = useMemo(() => {
    const map = new Map<number, AgendaItem[]>();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    items.forEach((item) => {
      const d = new Date(item.date);
      if (d.getFullYear() === year && d.getMonth() === month) {
        const day = d.getDate();
        if (!map.has(day)) map.set(day, []);
        map.get(day)!.push(item);
      }
    });

    return map;
  }, [items, currentDate]);

  const monthLabel = currentDate.toLocaleDateString("es-AR", {
    month: "long",
    year: "numeric",
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <main className="bg-white text-black min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-bold font-neue">
            Agenda cultural - {monthLabel}
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

        {/* Grid de días */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-2">
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const date = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day
            );
            const weekDay = WEEK_DAYS[date.getDay()];
            const events = eventsByDay.get(day) || [];

            return (
              <motion.div
                key={day}
                className="h-64 sm:h-72 md:h-80 overflow-hidden rounded-lg shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {events.length === 0 ? (
                  <div className="flex flex-col justify-center items-center h-full border border-neutral-300 rounded-lg p-2 text-center">
                    <span className="font-semibold text-lg">{day}</span>
                    <span className="text-xs text-neutral-500">{weekDay}</span>
                    <span className="text-sm text-neutral-400 mt-2">
                      Sin eventos
                    </span>
                  </div>
                ) : (
                  events.map((event) => (
                    <Link
                      key={event.id}
                      href={`/agenda/${event.slug}`}
                      className="relative block h-full w-full rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
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

                      {/* Overlay con detalles */}
                      <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-end p-4 gap-2">
                        <span className="text-lg font-bold">{day} - {weekDay}</span>
                        <span className="text-sm font-semibold">{event.title}</span>
                        {event.time && (
                          <span className="text-xs">{event.time}</span>
                        )}
                        <button className="mt-2 px-3 py-1 bg-primary text-black rounded-md text-xs font-bold hover:bg-white hover:text-primary transition">
                          Ver más
                        </button>
                      </div>
                    </Link>
                  ))
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
