export interface EventImage {
  src: string;
  alt?: string;
}

export interface Event {
  id: number;
  image: string;
  images?: EventImage[];
  date: string;
  startDate?: string;
  endDate?: string;
  time?: string;
  title: string;
  description: string;
  slug: string;
  category: "eventos";
  tags: string[];
  ticketeraUrl?: string;
}

export const eventosCompletMock: Event[] = [
  {
    id: 60,
    image: "/agenda/abril/testigo-cargo.webp",
    date: "2026-04-07",
    startDate: "2026-04-07",
    endDate: "2026-04-07",
    time: "21:00",
    title: "Cineclub TYÖ: Testigo de cargo",
    description: "Un abogado enfermo vuelve a los tribunales en un caso insólito. Obra que explora la naturaleza teatral del litigio. | Entradas en boletería.",
    slug: "cineclub-tyo-testigo-de-cargo",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },
  {
    id: 40,
    image: "/agenda/abril/milena-salamanca.webp",
    date: "2026-04-08",
    startDate: "2026-04-08",
    endDate: "2026-04-08",
    time: "22:00",
    title: "Noche de peña: Milena Salamanca",
    description: "La reconocida cantautora platense presenta una propuesta artística sensible y contemporánea dentro del folclore. | Entradas en boletería y Ticketera.",
    slug: "noche-de-pena-milena-salamanca-abril",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
    ticketeraUrl: "https://survivo.com.ar/evento/milena-salamanca/",
  },
  
  {
    id: 62,
    image: "/agenda/abril/madre-mia.webp",
    date: "2026-04-09",
    startDate: "2026-04-09",
    endDate: "2026-04-09",
    time: "21:00",
    title: "Mery Ceballos: Madre Mía",
    description: "Comedia musical con música en vivo que adapta la aclamada 'Mamma Mia!' en nuestro escenario. | Entradas en Casona de Arte.",
    slug: "madre-mia-mery-ceballos",
    category: "eventos",
    tags: ["Música", "Teatro", "Comedia"],
  },
  {
    id: 64,
    image: "/agenda/abril/coronadas-de-gloria.webp",
    date: "2026-04-10",
    startDate: "2026-04-10",
    endDate: "2026-04-10",
    time: "21:00",
    title: "Coronadas de Gloria",
    description: "Show que mezcla humor, transformismo, brillo y argentinidad. Una noche de risas y personajes inolvidables. | Entradas en h4ticket.com.",
    slug: "coronadas-de-gloria",
    category: "eventos",
    tags: ["Escénicas", "Humor", "Transformismo"],
    ticketeraUrl: "https://www.h4ticket.com",
  },
  {
    id: 41,
    image: "/agenda/abril/mentiras-sobre-el-amor.webp",
    date: "2026-04-11",
    startDate: "2026-04-11",
    endDate: "2026-04-11",
    time: "23:00",
    title: "Nico Serna: Mentiras sobre el Amor",
    description: "Humor, verdad y vulnerabilidad para exponer los mitos con los que aprendimos a amar. Función de las 23hs (21hs Agotada). | Entradas en Ticketera.",
    slug: "mentiras-sobre-el-amor-nico-serna",
    category: "eventos",
    tags: ["Teatro", "Humor", "Escénicas"],
    ticketeraUrl: "https://survivo.com.ar/evento/mentiras-sobre-el-amor-2/",
  },
  
  {
    id: 68,
    image: "/agenda/abril/feria-expo-viajera-domingo.webp",
    date: "2026-04-12",
    startDate: "2026-04-12",
    endDate: "2026-04-12",
    time: "16:00",
    title: "Feria Expo Viajera",
    description: "Paseo de emprendedores y artesanos con propuestas de arte, diseño, moda y deco. | Entrada libre.",
    slug: "feria-expo-viajera-abril",
    category: "eventos",
    tags: ["Comunidad", "Feria"],
  },
];

export function getEventoBySlug(slug: string) {
  return eventosCompletMock.find((evento) => evento.slug === slug);
}

export function getRelatedEventos(currentSlug: string, tags: string[], limit = 3) {
  return eventosCompletMock
    .filter((evento) => evento.slug !== currentSlug && evento.tags.some((tag) => tags.includes(tag)))
    .slice(0, limit);
}