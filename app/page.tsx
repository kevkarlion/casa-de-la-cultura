import AgendaRapida from "@/components/home/AgendaRapida/AgendaRapida";
import Hero from "@/components/home/Hero/Hero";
import EventCarousel from "@/components/shared/eventos/EventosDestacados";
import PresentacionCdc from "@/components/home/PresentacionCdc/PresentacionCdc";
import Socio from "@/components/home/Socio/Socio";
import Novedades from "@/components/home/Novedades/Novedades";
import ContactoRapido from "@/components/home/ContactoRapido/ContactoRapido";
import { agendaRapidaMock } from "@/utils/agenda.mock";
import { eventsMock } from "@/utils/events.mock";
import ActividadesYEspacios from "@/components/home/ActEsp/ActEsp";


const Page = () => {
  return (
    <div className="bg-white">
      <Hero />
      <EventCarousel events={eventsMock} />
      <AgendaRapida items={agendaRapidaMock} />
      <PresentacionCdc />
      <ActividadesYEspacios />
      <Socio />
      <Novedades />
      <ContactoRapido />
    </div>
  );
}

export default Page;
