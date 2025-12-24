import AgendaRapida from "@/components/home/AgendaRapida";
import Hero from "@/components/home/Hero/Hero";
import EventCarousel from "@/components/shared/eventos/EventosDestacados";
import { agendaRapidaMock } from "@/utils/agenda.mock";
import { eventsMock } from "@/utils/events.mock";


const Page = () => {
  return (
    <div className="bg-white">
      <Hero />
      <EventCarousel events={eventsMock} />
      <AgendaRapida items={agendaRapidaMock} />
    </div>
  );
}

export default Page;
