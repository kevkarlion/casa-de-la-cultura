import React from 'react';
import { getEventosOrdenados } from '@/utils/eventsComplet.mock';
import AgendaAlmanaque from '@/components/home/AgendaCompleta/AgendaCompleta';

export default function Page() {
  const sortedEvents = getEventosOrdenados();
  const now = new Date();

  return (
    <div id='agenda'>
      <AgendaAlmanaque
        events={sortedEvents}
        initialYear={now.getFullYear()}
        initialMonth={now.getMonth()}
      />
    </div>
  );
}
