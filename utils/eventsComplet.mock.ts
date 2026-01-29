export interface EventImage {
  src: string;
  alt?: string;
}

export interface Event {
  id: number;
  image: string;
  images?: EventImage[];
  date: string; // mantenemos para compatibilidad
  startDate?: string;
  endDate?: string;
  time?: string;
  title: string;
  description: string;
  slug: string;
  category: "eventos";
  tags: string[];
  ticketeraUrl?: string; // NUEVO: link de compra de ticket
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
    ticketeraUrl:
      "https://survivo.com.ar/evento/la-magia-de-un-dia-cualquiera/",
  },
  {
    id: 12,
    image: "/agenda/toch.webp",
    date: "2026-02-06",
    startDate: "2026-02-06",
    endDate: "2026-02-06",
    time: "21:00",
    title: "Toch",
    description: `
        CDC recibe a Toch, un trío nacido en Córdoba con una formación tan particular como su sonido: bandoneón, bajo y batería al servicio de una propuesta potente, sensible y profundamente latinoamericana.

        Su música cruza la energía del rock, la cadencia del reggae y la calidez del folklore, dando forma a un estilo propio construido desde la emoción, el ritmo y el compromiso. En cada presentación, Toch transforma el escenario en una celebración colectiva: una verdadera fiesta popular donde conviven el baile, la escucha atenta y el encuentro.

        Sus canciones hablan de amor y amistad, pero también de lucha, conciencia y transformación, reflejando una mirada sensible sobre la realidad y los vínculos.

        Formado en 2007, el grupo cuenta con una trayectoria sólida y sostenida en el tiempo: seis discos de estudio, dos singles y un álbum en vivo, además de más de quince años recorriendo escenarios de Argentina, Uruguay y España.

        Su formato de trío les permite viajar y producir de manera autogestiva, adaptándose tanto a espacios íntimos y acústicos como a grandes festivales, sin perder nunca la cercanía con el público.

        Una noche para dejarse llevar por la música, el baile y la energía de una banda que sigue creciendo sin perder su esencia.
            `,
    slug: "toch-viernes-06",
    category: "eventos",
    tags: ["Música", "Concierto"],
    // ticketeraUrl:
    //   "https://survivo.com.ar/evento/tux-luch-ono-band/",
  },
  {
    id: 13,
    image: "/agenda/karaoke.webp", // la principal
    images: [{ src: "/agenda/karaoke.webp" }, { src: "/agenda/karaoke2.webp" }],
    date: "2026-02-07",
    startDate: "2026-02-07",
    endDate: "2026-02-07",
    time: "21:30",
    title: "Noche de Karaoke en CDC",
    description: `
        Desde el CDC seguimos imaginando espacios para encontrarnos, divertirnos y compartir. Por eso llega una nueva producción de la casa: la Noche de Karaoke, una propuesta pensada para todas las edades y para todas las personas que tengan ganas de animarse, cantar, bailar o simplemente disfrutar del ambiente.

        Este verano nos encontramos en el patio para vivir una noche sin jurados, sin filtros y sin vergüenza. Una invitación a soltarse, reírse, equivocarse, aplaudir y acompañar a quienes se suben al micrófono.

        No importa si cantás bien, regular o “solo en la ducha”. Lo importante es participar, pasarla bien y ser parte de una experiencia colectiva, con tu gente, con barra, música y premios que suman a la noche.

        La Noche de Karaoke es un espacio multiedad, abierto y cuidado, donde celebramos el encuentro a través de la música.

        La entrada es gratuita, con modalidad de colaboración consciente.

        Produce: CDC – La casita de tus sueños.
            `,
    slug: "karaoke-sabado-07",
    category: "eventos",
    tags: ["Karaoke", "Música"],
    // ticketeraUrl:
    //   "https://survivo.com.ar/evento/tux-luch-ono-band/",
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
