import React from 'react';
import { eventosCompletMock } from '@/utils/eventsComplet.mock';
import ProgramacionPage from '@/components/home/Programacion/Programacion';

export default function Page() {
  // La visibilidad (eventos futuros y en curso) y el orden los resuelve el
  // pipeline en Programacion.tsx — una sola fuente de verdad.
  return (
    <div>
      <ProgramacionPage events={eventosCompletMock}/>
    </div>
  );
}