// Mock de eventos destacados – Casa de la Cultura
// Simula datos que luego pueden venir de un CMS o API

export interface Event {
  id: number;
  image: string;
  date: string; // ISO
  time?: string; // Hora del evento (opcional)
  title: string;
  description: string;
  slug: string;

  // Arquitectura de información
  category: "eventos";
  tags: string[];
}

export const eventosCompletMock: Event[] = [
  {
    id: 1,
    image: "/imagenes/expo.png",
    date: "2026-01-12",
    time: "19:00",
    title: "Muestra de Arte Contemporáneo",
    description: `
La Casa de la Cultura presenta una nueva muestra de arte contemporáneo que reúne a artistas locales y regionales en una propuesta colectiva.

Las obras expuestas dialogan con la identidad cultural, el territorio y los procesos sociales actuales, abordando distintas miradas estéticas y conceptuales. Pintura, escultura, fotografía e instalaciones conviven en un recorrido pensado para invitar a la reflexión y al intercambio.

La muestra propone un espacio abierto al público donde el arte se convierte en una herramienta para pensar el presente, reconocer las producciones locales y fortalecer el vínculo entre artistas y comunidad.
`,
    slug: "muestra-arte-contemporaneo",
    category: "eventos",
    tags: ["Artes visuales", "Exposición", "Muestra"],
  },
  {
    id: 2,
    image: "/imagenes/teatro.webp",
    date: "2026-01-18",
    time: "21:00",
    title: "Teatro Independiente",
    description: `
Una propuesta teatral íntima y cercana que invita al público a sumergirse en historias cotidianas atravesadas por el humor, el drama y la emoción.

La obra pone en escena relatos del barrio y situaciones reconocibles, construidas desde una mirada sensible y honesta. A través de actuaciones potentes y una puesta minimalista, el espectáculo busca generar identificación y diálogo con los espectadores.

El teatro independiente se presenta aquí como un espacio de encuentro, expresión y reflexión colectiva.
`,
    slug: "teatro-independiente",
    category: "eventos",
    tags: ["Teatro", "Función"],
  },
  {
    id: 3,
    image: "/imagenes/noche-musica.webp",
    date: "2026-01-25",
    time: "20:30",
    title: "Noche de Música en Vivo",
    description: `
Una noche dedicada a la música en vivo donde bandas emergentes y proyectos musicales locales se encuentran para compartir escenario.

La propuesta combina distintos estilos y sonidos, generando una experiencia dinámica y abierta a la exploración musical. Cada presentación busca destacar la identidad artística de los proyectos participantes y fomentar la circulación de nuevas expresiones sonoras.

Un evento pensado para disfrutar de la música, descubrir nuevas bandas y fortalecer la escena cultural local.
`,
    slug: "noche-musica-en-vivo",
    category: "eventos",
    tags: ["Música", "Concierto"],
  },
  {
    id: 4,
    image: "/imagenes/ceramica.png",
    date: "2026-01-02",
    time: "16:00",
    title: "Taller Abierto de Cerámica",
    description: `
La Casa de la Cultura abre sus puertas para un taller participativo de cerámica, destinado a personas con o sin experiencia previa.

Durante el encuentro se explorarán técnicas básicas de modelado y procesos creativos, poniendo en valor el trabajo manual y la experimentación con materiales. El taller propone un espacio de aprendizaje colectivo, intercambio y expresión personal.

Una actividad pensada para acercarse al arte desde la práctica, el hacer y el disfrute del proceso creativo.
`,
    slug: "taller-abierto-ceramica",
    category: "eventos",
    tags: ["Artes visuales", "Taller", "Actividad participativa"],
  },
  {
    id: 5,
    image: "/imagenes/cine.png",
    date: "2026-01-09",
    time: "19:30",
    title: "Cine Debate",
    description: `
Proyección de una película seleccionada especialmente por su valor artístico y social, seguida de un espacio de intercambio y debate abierto.

La actividad invita a reflexionar colectivamente sobre los temas abordados en el film, compartir miradas y generar diálogo entre los asistentes. El cine se propone como una herramienta cultural para pensar la realidad y promover el pensamiento crítico.

Un encuentro para disfrutar del cine y la conversación en un ambiente participativo y accesible.
`,
    slug: "cine-debate",
    category: "eventos",
    tags: ["Cine", "Debate"],
  },
];

export function getEventoBySlug(slug: string) {
  return eventosCompletMock.find((evento) => evento.slug === slug);
}

export function getRelatedEventos(
  currentSlug: string,
  tags: string[],
  limit = 3
) {
  return eventosCompletMock
    .filter(
      (evento) =>
        evento.slug !== currentSlug &&
        evento.tags.some((tag) => tags.includes(tag))
    )
    .slice(0, limit);
}