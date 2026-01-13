import React from 'react';
import { eventosCompletMock } from '@/utils/eventsComplet.mock';
import ProgramacionPage from '@/components/home/Programacion/Programacion';
const Page = () => {
  return (
    <div>
      <ProgramacionPage events={eventosCompletMock}/>
    </div>
  );
}

export default Page;
