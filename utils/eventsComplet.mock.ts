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
    id: 27,
    image: "/agenda/marzo/cineclub.webp",
    date: "2026-03-02",
    startDate: "2026-03-02",
    endDate: "2026-03-02",
    time: "21:30",
    title: "Cineclub TYÖ: Función sorpresa",
    description: `
El patio de nuestra Casa vuelve a transformarse en un espacio de encuentro para compartir cine al aire libre en el 7mo ciclo de verano de Cineclub Työ.

Para despedir este hermoso ciclo la función será sorpresa. Una invitación a disfrutar del cine bajo las estrellas junto a amigxs o familia y descubrir la película especial que preparamos para esta noche. | Entradas en boletería.
`,
    slug: "cineclub-tyo-funcion-sorpresa-lunes-02",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },

  {
    id: 28,
    image: "/agenda/marzo/demi-carabajal.webp",
    date: "2026-03-04",
    startDate: "2026-03-04",
    endDate: "2026-03-04",
    time: "21:00",
    title: "Peña con Demi Carabajal",
    description: `
Una noche de peña inolvidable para bailar y cantar junto al reconocido músico y cantautor Demi Carabajal.

Compositor, guitarrista y percusionista, presenta canciones que cruzan los límites entre el folklore y el rock. Sus temas han sido interpretados por grandes artistas como Mercedes Sosa, Raly Barrionuevo y Peteco Carabajal. | Entradas en boletería y ticketera.
`,
    slug: "pena-demi-carabajal-miercoles-04",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
    ticketeraUrl: "",
  },

  {
    id: 29,
    image: "/agenda/marzo/batalla-barberos.webp",
    date: "2026-03-05",
    startDate: "2026-03-05",
    endDate: "2026-03-05",
    time: "22:00",
    title: "Batalla de Barberos",
    description: `
Se viene una Batalla de Barberos en CDC con modelos en vivo y un jurado que evaluará cada detalle: impacto visual, precisión y velocidad.

Una jornada para mostrar talento, creatividad y técnica en la comunidad barber. | Inscripción al 2984728699.
`,
    slug: "batalla-de-barberos-jueves-05",
    category: "eventos",
    tags: ["Comunidad", "Barbería", "Competencia"],
  },

  {
    id: 30,
    image: "/agenda/marzo/conversaciones.webp",
    date: "2026-03-06",
    startDate: "2026-03-06",
    endDate: "2026-03-06",
    time: "20:30",
    title: "Conversaciones: Mónica García y Facundo Haag",
    description: `
Relatos de adultos enlazados en una conversación y acompañados por canciones.

Textos de Angélica Gorosdicher, Hernán Casciari y Liliana Bodoc se combinan con crónicas de vida narradas por Mónica García y el acompañamiento musical de Facundo Haag. | Entrada libre aporte consciente.
`,
    slug: "conversaciones-monica-garcia-facundo-haag",
    category: "eventos",
    tags: ["Escénicas", "Narración", "Música"],
  },

  {
    id: 31,
    image: "/agenda/marzo/cultura-sound.webp",
    date: "2026-03-06",
    startDate: "2026-03-06",
    endDate: "2026-03-06",
    time: "21:00",
    title: "Cultura Sound Festival – Vol. 1",
    description: `
La primera edición de un encuentro donde el ritmo y la hermandad son protagonistas.

Vuela Reggae: desde Cipolletti con lo mejor del reggae roots.

La Chirola SkaBand Ft. Sessiones: ska tradicional con metales, energía y la participación especial de Lucho Espinosa, guitarrista de Sessiones.

Una noche de música jamaiquina para celebrar el nacimiento de un nuevo clásico en la ciudad. | Entradas en boletería y ticketera.
`,
    slug: "cultura-sound-festival-vol-1",
    category: "eventos",
    tags: ["Música", "Reggae", "Ska"],
    ticketeraUrl: "",
  },

  {
    id: 32,
    image: "/agenda/marzo/tango.webp",
    date: "2026-03-07",
    startDate: "2026-03-07",
    endDate: "2026-03-07",
    time: "21:00",
    title: "Como dos extraños – Covatti & Lucero",
    description: `
Mariano Covatti y Carolina Lucero presentan un dúo de guitarra y voz dedicado al tango tradicional.

Un recorrido por clásicos del repertorio tanguero con una propuesta que pone en primer plano la palabra y la melodía como expresión viva de nuestra cultura. | Entrada libre aporte consciente.
`,
    slug: "como-dos-extranos-covatti-lucero",
    category: "eventos",
    tags: ["Música", "Tango", "Acústico"],
  },
];

// Funciones para el detalle y eventos relacionados

export function getEventoBySlug(slug: string) {
  return eventosCompletMock.find((evento) => evento.slug === slug);
}

export function getRelatedEventos(
  currentSlug: string,
  tags: string[],
  limit = 3,
) {
  return eventosCompletMock
    .filter(
      (evento) =>
        evento.slug !== currentSlug &&
        evento.tags.some((tag) => tags.includes(tag)),
    )
    .slice(0, limit);
}