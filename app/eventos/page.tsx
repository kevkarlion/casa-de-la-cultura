import EventsPage from '@/components/home/SectionEventos/SectionEventos';
import  { eventosCompletMock } from '@/utils/eventsComplet.mock';
import React from 'react';

const Page = () => {
      return (
            <div id='#eventos'>
                  <EventsPage events={eventosCompletMock} />
            </div>
      );
}

export default Page;
