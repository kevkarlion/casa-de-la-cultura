import React from 'react';
import AgendaAlmanaque from '@/components/home/AgendaCompleta/AgendaCompleta';
import { eventosCompletMock } from '@/utils/eventsComplet.mock';

const Page = () => {
      return (
            <div id='#agenda'>
                  <AgendaAlmanaque events={eventosCompletMock} />
            </div>
      );
}

export default Page;
