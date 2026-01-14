export interface EventImage {
  src: string
  alt?: string
}

export interface Event {
  id: number
  image: string
  images?: EventImage[]
  date: string // mantenemos para compatibilidad
  startDate?: string
  endDate?: string
  time?: string
  title: string
  description: string
  slug: string
  category: "eventos"
  tags: string[]
  ticketeraUrl?: string // NUEVO: link de compra de ticket
}

export const eventosCompletMock: Event[] = [
  {
    id: 1,
    image: "/agenda/colonia.webp",
    date: "2026-01-12",
    startDate: "2026-01-12",
    endDate: "2026-01-16",
    time: "09:00 - 12:00",
    title: "Colonia Artística de verano para infancias",
    description: `
Las infancias de 4 a 11 años podrán disfrutar nuevamente de una experiencia única llena de arte, ¡danza, música, expresión corporal y más! 

Una oportunidad perfecta para volver a explorar su creatividad y conectarse con su cuerpo e imaginación en un espacio seguro y divertido. | Inscripciones en boletería
    `,
    slug: "colonia-artistica-verano-lunes-12",
    category: "eventos",
    tags: ["Infancias", "Arte", "Taller"],
  },
  {
    id: 2,
    image: "/agenda/cine-club-2.webp",
    date: "2026-01-19",
    startDate: "2026-01-19",
    endDate: "2026-01-19",
    time: "21:30",
    title: `Cineclub TYÖ: "Grizzly Man". Dir. Werner Herzog`,
    description: `
En esta ocasión se proyectará “Grizzly Man”: Sigue la historia de Timothy Treadwell, el "Hombre Grizzly", y cómo fueron los trece veranos que pasó en un Parque Nacional de Alaska en su intento de proteger a los osos grizzly. | Entradas en boletería
    `,
    slug: "cineclub-tyo-los-reyes-lunes-12",
    category: "eventos",
    tags: ["Cine", "Cineclub"],
  },
  {
    id: 3,
    image: "/agenda/mochi.webp",
    date: "2026-01-16",
    startDate: "2026-01-16",
    endDate: "2026-01-16",
    time: "21:30",
    title: "Mocchi + Noelia Sinkunas – Música",
    description: `
Desde Uruguay, Mocchi, un artista trans y una de las voces más personales de la canción rioplatense, nos trae un concierto íntimo junto a la pianista Noelia Sinkunas con canciones de todos sus discos. | Entradas en boletería y ticketera
    `,
    slug: "mocchi-noelia-sinkunas-viernes-16",
    category: "eventos",
    tags: ["Música", "Concierto"],
  },
  {
    id: 4,
    image: "/agenda/verdun.webp",
    date: "2026-01-18",
    startDate: "2026-01-18",
    endDate: "2026-01-18",
    time: "20:30",
    title: "El vibráfono en el Tango Argentino – Dúo Verdún – Rivero",
    description: `
El dúo Verdún - Rivero presenta un recorrido por la historia del tango a través del vibráfono, desde sus primeras apariciones hasta su consolidación como instrumento solista. | Colaboración consciente
    `,
    slug: "vibrafono-tango-verdun-rivero-domingo-18",
    category: "eventos",
    tags: ["Música", "Tango"],
  },
  {
    id: 5,
    image: "/agenda/colonia.webp",
    date: "2026-01-19",
    startDate: "2026-01-19",
    endDate: "2026-01-23",
    time: "09:00 - 12:00",
    title: "Colonia Artística de verano para infancias",
    description: `
Repetimos la experiencia artística para niños de 4 a 11 años con danza, música, expresión corporal y más. | Inscripciones en boletería
    `,
    slug: "colonia-artistica-verano-lunes-19",
    category: "eventos",
    tags: ["Infancias", "Arte", "Taller"],
  },
  {
    id: 6,
    image: "/agenda/cine-club.webp",
    date: "2026-01-12",
    startDate: "2026-01-12",
    endDate: "2026-01-12",
    time: "21:30",
    title: `"Los reyes". Dir. Bettina Perut, Iván Osnovikoff`,
    description: `
Arranca el cine bajo las estrellas, el 7mo ciclo de verano de Cineclub Työ. Chola y Fútbol son una pareja de perros callejeros que viven en un skatepark en Santiago de Chile, rodeados de jóvenes adolescentes en conflicto con un mundo adulto.
    `,
    slug: "cineclub-tyo-grizzly-man-lunes-19",
    category: "eventos",
    tags: ["Cine", "Cineclub"],
  },
  {
    id: 7,
    image: "/agenda/duo.webp",
    date: "2026-01-23",
    startDate: "2026-01-23",
    endDate: "2026-01-23",
    time: "20:30",
    title: "Pablo Rey & Nico Villagra dúo – Música",
    description: `
Un espectáculo acústico con grandes clásicos del rock internacional: Sting, Phil Collins, John Mayer, Kiss y muchos más. | Colaboración consciente
    `,
    slug: "pablo-rey-nico-villagra-viernes-23",
    category: "eventos",
    tags: ["Música", "Concierto"],
  },
  {
    id: 8,
    image: "/agenda/las.webp",
    date: "2026-01-23",
    startDate: "2026-01-23",
    endDate: "2026-01-23",
    time: "22:00",
    title: "L.A.S Habladurías del mundo – Homenaje a Luis Alberto Spinetta",
    description: `
Jornada cultural y musical en homenaje a Spinetta. Con artistas invitados: Claudio Bertone, Luci Fernandez, Cristian Coken, Guillermo Ochonga, Dana Gomez. | Entradas en boletería y ticketera
    `,
    slug: "las-habladurias-spinetta-viernes-23",
    category: "eventos",
    tags: ["Música", "Homenaje"],
    ticketeraUrl: "https://survivo.com.ar/evento/l-a-s-habladurias-homenaje-a-spinetta/",
  },
  {
    id: 9,
    image: "/agenda/tux.webp",
    date: "2026-01-24",
    startDate: "2026-01-24",
    endDate: "2026-01-24",
    time: "20:30",
    title: "TUX & Luch Ono Band – Música",
    description: `
TUX presenta su EP y Luch Ono Band presenta su segundo álbum en un show híbrido de DJ set y live performance, bailable e inmersivo. | Entradas en boletería y ticketera
    `,
    slug: "tux-luch-ono-sabado-24",
    category: "eventos",
    tags: ["Música", "Concierto"],
    ticketeraUrl: "https://survivo.com.ar/evento/tux-luch-ono-band/",
  },
  {
    id: 11,
    image: "/agenda/tasio.webp",
    date: "2026-01-26",
    startDate: "2026-01-26",
    endDate: "2026-01-26",
    time: "21:30",
    title: `Cineclub TYÖ: "Tasio".Dir. Motxo Armendáriz`,
    description: `
Cine bajo las estrellas, el 7mo ciclo de verano de Cineclub Työ.
 “Tasio”, en plena España de la transición, Tasio elige quedarse en el monte mientras el país avanza hacia la modernidad. Retrato sensible de un carbonero en la sierra de Urbasa, donde el tiempo lo marca la naturaleza y un oficio en extinción se vuelve símbolo de identidad, dignidad y libertad personal.
    `,
    slug: "tasio-lunes-26",
    category: "eventos",
    tags: ["Cine", "Cineclub"],
  },
  {
    id: 10,
    image: "/agenda/circo.webp",
    date: "2026-01-31",
    startDate: "2026-01-31",
    endDate: "2026-01-31",
    time: "20:30",
    title: "Circo del Valle",
    description: `
La compañía Circo del Valle vuelve con un show increíble para toda la familia: malabares, equilibrio, teatro y mucho más. | Entradas en boletería y ticketera
    `,
    slug: "circo-del-valle-sabado-31",
    category: "eventos",
    tags: ["Circo", "Familia"],
    ticketeraUrl: "https://survivo.com.ar/evento/la-magia-de-un-dia-cualquiera/",
  },
]

// Funciones para el detalle y eventos relacionados
export function getEventoBySlug(slug: string) {
  return eventosCompletMock.find(evento => evento.slug === slug)
}

export function getRelatedEventos(currentSlug: string, tags: string[], limit = 3) {
  return eventosCompletMock
    .filter(evento => evento.slug !== currentSlug && evento.tags.some(tag => tags.includes(tag)))
    .slice(0, limit)
}
