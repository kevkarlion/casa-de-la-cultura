import React from 'react';
import AgendaAlmanaque from '@/components/home/AgendaCompleta/AgendaCompleta';
import { agendaRapidaMock } from '@/utils/agenda.mock';

const Page = () => {
      return (
            <div id='#agenda'>
                  <AgendaAlmanaque items={agendaRapidaMock} />
            </div>
      );
}

export default Page;
