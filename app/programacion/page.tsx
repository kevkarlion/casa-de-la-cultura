import React from 'react';
import { eventosCompletMock } from '@/utils/eventsComplet.mock';
import ProgramacionPage from '@/components/home/Programacion/Programacion';

// Filtrar solo eventos futuros
function isFutureEvent(dateStr: string): boolean {
  const eventDate = new Date(dateStr)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  eventDate.setHours(0, 0, 0, 0)
  return eventDate >= today
}

export default function Page() {
  const futureEvents = eventosCompletMock.filter(e => isFutureEvent(e.date));
  
  return (
    <div>
      <ProgramacionPage events={futureEvents}/>
    </div>
  );
}