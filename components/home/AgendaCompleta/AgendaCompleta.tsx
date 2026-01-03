'use client'

import { useMemo, useState } from "react";
import { motion, easeOut } from "framer-motion"; // <-- Importamos easeOut
import Link from "next/link";

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
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

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

  const monthLabel = currentDate.toLocaleDateString("es-AR", { month: "long", year: "numeric" });

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: easeOut } // <-- Corregido
    }
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
              onClick={() => setCurrentDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1))}
              className="px-4 py-2 rounded-md bg-black text-white hover:bg-primary transition"
            >
              Mes anterior
            </button>
            <button
              onClick={() => setCurrentDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1))}
              className="px-4 py-2 rounded-md bg-black text-white hover:bg-primary transition"
            >
              Mes siguiente
            </button>
          </div>
        </div>

        {/* Grid de días */}
        <div className="grid grid-cols-7 gap-4">
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const weekDay = WEEK_DAYS[date.getDay()];
            const events = eventsByDay.get(day) || [];

            return (
              <motion.div
                key={day}
                className="border border-neutral-300 rounded-lg p-2 flex flex-col h-62.5 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {/* Header día */}
                <div className="mb-2 flex justify-between items-center">
                  <span className="font-semibold">{day}</span>
                  <span className="text-xs text-neutral-500">{weekDay}</span>
                </div>

                {/* Eventos */}
                <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-1">
                  {events.length === 0 && <span className="text-xs text-neutral-400">Sin eventos</span>}

                  {events.map(event => (
                    <Link
                      key={event.id}
                      href={`/agenda/${event.slug}`}
                      className="flex flex-col border border-neutral-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                      {event.image && (
                        <div className="w-full h-16 md:h-20 overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-2 flex flex-col gap-1">
                        <span className="text-sm font-medium">{event.title}</span>
                        {event.time && <span className="text-xs text-neutral-500">{event.time}</span>}
                        {event.description && <span className="text-xs text-neutral-600 line-clamp-2">{event.description}</span>}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
