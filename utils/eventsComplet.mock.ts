// Mock de eventos destacados – Casa de la Cultura
// Simula datos que luego pueden venir de un CMS o API

export interface Event {
  id: number
  image: string
  date: string // ISO
  title: string
  description: string
  slug: string

  // Arquitectura de información
  category: 'eventos'
  tags: string[]
}

export const eventosCompletMock: Event[] = [
  {
    id: 1,
    image: "/imagenes/expo.png",
    date: "2026-01-12",
    title: "Muestra de Arte Contemporáneo",
    description:
      "Artistas locales presentan obras que dialogan con la identidad cultural y el territorio.",
    slug: "muestra-arte-contemporaneo",
    category: "eventos",
    tags: ["Artes visuales", "Exposición", "Muestra"],
  },
  {
    id: 2,
    image: "/imagenes/teatro.webp",
    date: "2026-01-18",
    title: "Teatro Independiente",
    description:
      "Una obra íntima que cruza humor, drama y relatos cotidianos del barrio.",
    slug: "teatro-independiente",
    category: "eventos",
    tags: ["Teatro", "Función"],
  },
  {
    id: 3,
    image: "/imagenes/noche-musica.webp",
    date: "2026-01-25",
    title: "Noche de Música en Vivo",
    description:
      "Bandas emergentes y sonidos experimentales se encuentran en una noche única.",
    slug: "noche-musica-en-vivo",
    category: "eventos",
    tags: ["Música", "Concierto"],
  },
  {
    id: 4,
    image: "/imagenes/ceramica.png",
    date: "2026-01-02",
    title: "Taller Abierto de Cerámica",
    description:
      "Un espacio participativo para explorar técnicas cerámicas y procesos creativos.",
    slug: "taller-abierto-ceramica",
    category: "eventos",
    tags: ["Artes visuales", "Taller", "Actividad participativa"],
  },
  {
    id: 5,
    image: "/imagenes/cine.png",
    date: "2026-01-09",
    title: "Cine Debate",
    description:
      "Proyección y charla colectiva en torno al cine como expresión cultural y social.",
    slug: "cine-debate",
    category: "eventos",
    tags: ["Cine", "Debate"],
  },
]
