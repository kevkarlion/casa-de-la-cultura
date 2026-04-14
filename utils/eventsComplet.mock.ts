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
    id: 25,
    image: "/agenda/abril/taller-bebes-amar-la-mar.webp",
    date: "2026-04-01",
    startDate: "2026-04-01",
    endDate: "2026-04-01",
    time: "18:00",
    title: "Taller para Bebés: Amar la Mar",
    description:
      "Paisajes sonoros para fortalecer el vínculo a través del arte. Para niñxs de 0 a 3 años. | Entrada en entradaweb.com.",
    slug: "taller-bebes-amar-la-mar-las-magdalenas",
    category: "eventos",
    tags: ["Infancias", "Taller", "Música"],
    ticketeraUrl: "https://www.entradaweb.com.ar/",
  },

  // NUEVOS
  {
    id: 100,
    image: "/agenda/abril/breaker-morant.webp",
    date: "2026-04-14",
    startDate: "2026-04-14",
    endDate: "2026-04-14",
    time: "21:00",
    title:
      "Cineclub TYÖ: Después de la emboscada (Breaker Morant)",
    description:
      "En el vasto y polvoriento Veld sudafricano, tres soldados australianos enfrentan las reglas ocultas de la guerra. | Entradas en boletería.",
    slug: "cineclub-tyo-breaker-morant",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },
  {
    id: 101,
    image: "/agenda/abril/pena-semanal.webp",
    date: "2026-04-15",
    startDate: "2026-04-15",
    endDate: "2026-04-15",
    time: "21:30",
    title: "Noche de Peña",
    description:
      "El encuentro semanal que reúne música, raíces y comunidad. | Entrada en boletería.",
    slug: "noche-de-pena-semanal-abril-15",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
  },
  {
    id: 102,
    image: "/agenda/abril/expediente-culebra.webp",
    date: "2026-04-17",
    startDate: "2026-04-17",
    endDate: "2026-04-17",
    time: "22:00",
    title: "Expediente Culebra",
    description:
      "Trío que fusiona rock, hip hop y trap para crear un sonido único y potente. | Entradas en boletería y ticketera.",
    slug: "expediente-culebra",
    category: "eventos",
    tags: ["Música", "Rock"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/expediente-culebra/",
  },
  {
    id: 103,
    image: "/agenda/abril/memorias-latinoamericanas.webp",
    date: "2026-04-18",
    startDate: "2026-04-18",
    endDate: "2026-04-18",
    time: "21:00",
    title: "Memorias Latinoamericanas",
    description:
      "Obra teatral bilingüe inspirada en Eduardo Galeano que recorre el siglo XX latinoamericano. | Entradas en boletería y ticketera.",
    slug: "memorias-latinoamericanas",
    category: "eventos",
    tags: ["Teatro", "Escénicas"],
  },

  {
    id: 26,
    image: "/agenda/abril/pena-fer-vazquez-victor-gonzalez.webp",
    date: "2026-04-01",
    startDate: "2026-04-01",
    endDate: "2026-04-01",
    time: "21:30",
    title: "Noche de Peña: Fer Vázquez y Víctor González",
    description:
      "Celebramos la música y las raíces en una noche cargada de tradición y buena energía. | Entrada popular.",
    slug: "noche-de-pena-fer-vazquez-victor-gonzalez",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
  },

  {
    id: 27,
    image: "/agenda/abril/las-magdalenas-canciones-para-jugar.webp",
    date: "2026-04-02",
    startDate: "2026-04-02",
    endDate: "2026-04-02",
    time: "18:00",
    title: "Las Magdalenas – Canciones para jugar",
    description:
      "Espectáculo lleno de ternura y música para toda la familia. | Entrada en entradaweb.com.",
    slug: "las-magdalenas-canciones-para-jugar",
    category: "eventos",
    tags: ["Infancias", "Música", "Teatro"],
    ticketeraUrl:
      "https://www.entradaweb.com.ar/evento/25ea60b1/stop/1",
  },

  {
    id: 28,
    image: "/agenda/abril/muestra-madres-malvinas.webp",
    date: "2026-04-02",
    time: "20:30",
    title: "Muestra Fotográfica: Madres de Malvinas",
    description:
      "Visibilización del dolor y la lucha de las Madres de Malvinas. | Entrada libre.",
    slug: "muestra-fotografica-madres-de-malvinas",
    category: "eventos",
    tags: ["Comunidad", "Muestra", "Memoria"],
  },

  {
    id: 60,
    image: "/agenda/abril/testigo-cargo.webp",
    date: "2026-04-07",
    time: "21:00",
    title: "Cineclub TYÖ: Testigo de cargo",
    description:
      "Un abogado enfermo vuelve a los tribunales en un caso insólito. | Entradas en boletería.",
    slug: "cineclub-tyo-testigo-de-cargo",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },

  {
    id: 40,
    image: "/agenda/abril/milena-salamanca.webp",
    date: "2026-04-08",
    time: "22:00",
    title: "Noche de peña: Milena Salamanca",
    slug: "noche-de-pena-milena-salamanca-abril",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
    description: "",
    ticketeraUrl:
      "https://survivo.com.ar/evento/milena-salamanca/",
  },

  {
    id: 62,
    image: "/agenda/abril/madre-mia.webp",
    date: "2026-04-09",
    time: "21:00",
    title: "Mery Ceballos: Madre Mía",
    description: "",
    slug: "madre-mia-mery-ceballos",
    category: "eventos",
    tags: ["Música", "Teatro"],
  },

  {
    id: 64,
    image: "/agenda/abril/coronadas-de-gloria.webp",
    date: "2026-04-10",
    time: "21:00",
    title: "Coronadas de Gloria",
    description: "",
    slug: "coronadas-de-gloria",
    category: "eventos",
    tags: ["Humor"],
  },

  {
    id: 41,
    image: "/agenda/abril/mentiras-sobre-el-amor.webp",
    date: "2026-04-11",
    time: "23:00",
    title: "Nico Serna: Mentiras sobre el Amor",
    description: "",
    slug: "mentiras-sobre-el-amor-nico-serna",
    category: "eventos",
    tags: ["Teatro", "Humor"],
  },

  {
    id: 68,
    image: "/agenda/abril/feria-expo-viajera-domingo.webp",
    date: "2026-04-12",
    time: "16:00",
    title: "Feria Expo Viajera",
    description: "",
    slug: "feria-expo-viajera-abril",
    category: "eventos",
    tags: ["Comunidad"],
  },

  {
    id: 31,
    image: "/agenda/abril/pirulo-en-el-aire.webp",
    date: "2026-04-17",
    time: "21:00",
    title: "Pirulo en el Aire",
    description: "",
    slug: "pirulo-en-el-aire",
    category: "eventos",
    tags: ["Teatro", "Comedia"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/pirulo-en-el-aire/",
  },

  {
    id: 32,
    image: "/agenda/abril/hernan-piquin.webp",
    date: "2026-04-21",
    time: "21:00",
    title: "Hernán Piquín presenta: Me verás volver",
    description: "",
    slug: "hernan-piquin-me-veras-volver",
    category: "eventos",
    tags: ["Danza", "Música"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/hernan-piquin/",
  },

  // EXTRAS
  {
    id: 200,
    image: "/agenda/abril/festival-danza.webp",
    date: "2026-04-25",
    startDate: "2026-04-25",
    endDate: "2026-04-26",
    time: "15:00",
    title: "Festival de Danza: Intercambio Cultural",
    description:
      "Dos días de formación, intercambio y celebración de la danza con múltiples estilos. | Entradas en ticketera.",
    slug: "festival-danza-intercambio-cultural",
    category: "eventos",
    tags: ["Danza", "Festival"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/festival-cultural-por-la-danza/",
  },
  {
    id: 201,
    image: "/agenda/abril/por-siempre-fosse.webp",
    date: "2026-04-25",
    time: "20:00",
    title: "Por Siempre Fosse",
    description:
      "Espectáculo que homenajea el estilo del legendario coreógrafo Bob Fosse.",
    slug: "por-siempre-fosse",
    category: "eventos",
    tags: ["Danza", "Teatro"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/por-siempre-fosse/",
  },
  {
    id: 202,
    image: "/agenda/mayo/cervantes-se-muestra.webp",
    date: "2026-05-10",
    time: "20:00",
    title: "Cervantes se muestra",
    description:
      "Festival de danzas con artistas de todas las edades.",
    slug: "cervantes-se-muestra",
    category: "eventos",
    tags: ["Danza"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/cervantes-se-muestra/",
  },
  {
    id: 203,
    image: "/agenda/mayo/julieta-laso.webp",
    date: "2026-05-16",
    time: "20:30",
    title: "Julieta Laso",
    description:
      "Cantora con un estilo profundo que interpreta tangos, valses y boleros.",
    slug: "julieta-laso",
    category: "eventos",
    tags: ["Música", "Tango"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/julieta-laso/",
  },
  {
    id: 204,
    image: "/agenda/junio/leo-maiello.webp",
    date: "2026-06-06",
    time: "21:00",
    title: "Leo Maiello: Yo, sin culpa",
    description:
      "Charla en vivo que mezcla psicología, música y reflexión.",
    slug: "leo-maiello-yo-sin-culpa",
    category: "eventos",
    tags: ["Charla"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/maeillo-yo-sin-culpa/",
  },
  {
    id: 205,
    image: "/agenda/junio/cuarto-de-soda.webp",
    date: "2026-06-09",
    time: "21:00",
    title: "El Cuarto de Soda",
    description:
      "Homenaje a Soda Stereo con sus grandes clásicos.",
    slug: "el-cuarto-de-soda",
    category: "eventos",
    tags: ["Música", "Rock"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/el-cuarto-soda/",
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