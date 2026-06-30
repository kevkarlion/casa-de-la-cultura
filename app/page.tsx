import Hero from "@/components/home/Hero/Hero";
import AgendaRapida from "@/components/home/AgendaRapida/AgendaRapida";
import PresentacionCdc from "@/components/home/PresentacionCdc/PresentacionCdc";
import ActividadesYEspacios from "@/components/home/ActEsp/ActEsp";
import SocixCDCPreview from "@/components/home/Socio/Socio";
import Novedades from "@/components/home/Novedades/Novedades";
import ContactoRapido from "@/components/home/ContactoRapido/ContactoRapido";


import EventCarousel from "@/components/shared/eventos/EventosDestacados";


import { eventosCompletMock } from "@/utils/eventsComplet.mock";
import { novedades } from "@/utils/novedades.mock";

import { mapEventoToDestacado } from "@/lib/mappers/mapEventoToDestacado";
import { mapNovedadToDestacado } from "@/lib/mappers/mapNovedadadToDestacado";
import { getDestacadosByTag } from "@/lib/destacados";

// Filtrar noticias viejas que no queremos en home
const novedadesHome = novedades.filter(n =>
  n.title !== "Cineclub de Verano · 7° Ciclo TYÖ" &&
  n.title !== "Feria Agro Cultural 2026" &&
  n.title !== "Convocatoria · Espacio Gastronómico Cultural en CDC"
)

const Page = () => {
  // 🔥 destacados editoriales (eventos + novedades)
  const destacados = getDestacadosByTag(
    [
      ...eventosCompletMock.map(mapEventoToDestacado),
      ...novedadesHome.map(mapNovedadToDestacado),
    ],
    ["Música", "Artes visuales", 'convocatoria','Familia', 'Karaoke' ], // criterio editorial
    6
  );

  return (
    <div className="bg-white">
      <Hero />

      {/* Los más destacados */}
      <EventCarousel items={destacados} />

      <AgendaRapida items={eventosCompletMock} />

      <PresentacionCdc />

      <ActividadesYEspacios />

      <SocixCDCPreview />

      <Novedades novedades={novedadesHome} />

      <ContactoRapido />
    </div>
  );
};

export default Page;
