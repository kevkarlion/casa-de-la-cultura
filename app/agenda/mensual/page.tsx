import React from 'react';
import { getEventosOrdenados } from '@/utils/eventsComplet.mock';
import AgendaAlmanaque from '@/components/home/AgendaCompleta/AgendaCompleta';

function getBuenosAiresDate(): { year: number; month: number } {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Argentina/Buenos_Aires",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .formatToParts(now)
    .reduce(
      (acc, p) => ({ ...acc, [p.type]: p.value }),
      {} as Record<string, string>
    );
  return {
    year: Number(parts.year),
    month: Number(parts.month) - 1, // 0-indexed for Date constructor
  };
}

export default function Page() {
  const sortedEvents = getEventosOrdenados();
  const { year, month } = getBuenosAiresDate();

  return (
    <div id='agenda'>
      <AgendaAlmanaque
        events={sortedEvents}
        initialYear={year}
        initialMonth={month}
      />
    </div>
  );
}
