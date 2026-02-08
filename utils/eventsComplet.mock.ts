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
    ticketeraUrl: "https://survivo.com.ar/evento/toch-pulso-inicial/",
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
  {
    id: 14,
    image: "/agenda/colonia.webp",
    date: "2026-02-02",
    startDate: "2026-02-02",
    endDate: "2026-02-06",
    time: "09:00 - 12:00",
    title: "Colonia Artística de verano para infancias",
    description: `
Repetimos la experiencia artística para niños de 4 a 11 años con danza, música, expresión corporal y más. | Inscripciones en boletería
    `,
    slug: "colonia-artistica-verano-lunes-02",
    category: "eventos",
    tags: ["Infancias", "Arte", "Taller"],
  },
  {
    id: 15,
    image: "/agenda/febrero/esp-repercusion.webp", // la principal
    date: "2026-02-05",
    startDate: "2026-02-05",
    endDate: "2026-02-05",
    time: "20:00",
    title: "Prácticas de verano de bombo - Música",
    description: `
        Ritmo, aire y encuentro en el patio de CDC, dejate llevar por la percusión y aprende a sentir las vibraciones de estos instrumentos. | Inscripción en Espacio Percusión.
            `,
    slug: "practica-verano-bombo-jueves-05",
    category: "eventos",
    tags: ["Música", "Percusión", "Folklore", "Taller"],
    // ticketeraUrl:
    //   "https://survivo.com.ar/evento/tux-luch-ono-band/",
  },
  {
    id: 19,
    image: "/agenda/febrero/esp-repercusion.webp", // la principal
    date: "2026-02-12",
    startDate: "2026-02-12",
    endDate: "2026-02-12",
    time: "20:00",
    title: "Prácticas de verano de bombo - Música",
    description: `
        Ritmo, aire y encuentro en el patio de CDC, dejate llevar por la percusión y aprende a sentir las vibraciones de estos instrumentos. | Inscripción en Espacio Percusión.`,
    slug: "practica-verano-bombo-jueves-05",
    category: "eventos",
    tags: ["Música", "Percusión", "Folklore", "Taller"],
    // ticketeraUrl:
    //   "https://survivo.com.ar/evento/tux-luch-ono-band/",
  },
  {
    id: 16,
    image: "/agenda/febrero/nadhir.webp", // la principal
    date: "2026-02-06",
    startDate: "2026-02-06",
    endDate: "2026-02-06",
    time: "20:30",
    title: "Nadhir Suarez - Música",
    description: `
        Músico, compositor y cantautor patagónico nacido en Villa La Angostura con una larga trayectoria dejando huella en diferentes zonas de la Patagonia y el Alto Valle presenta un show con música de autor para disfrutar al aire libre. |Entrada libre a colaboración.`,
    slug: "nadhir-suarez-viernes-06",
    category: "eventos",
    tags: ["Música", "Show Live", "Cultura Regional"],
    // ticketeraUrl:
    //   "https://survivo.com.ar/evento/tux-luch-ono-band/",
  },
  {
    id: 17,
    image: "/agenda/febrero/cineclub-la-boda.webp", // la principal
    date: "2026-02-09",
    startDate: "2026-02-09",
    endDate: "2026-02-09",
    time: "21:30",
    title: "Cineclub TYÖ: La boda de Muriel dir. J.P. Hogan",
    description: `
        En esta ocasión se proyectará “La boda de Muriel”: Bajo una capa de colores chillones, canciones de ABBA y kitsch australiano, se esconde una de las sátiras más afiladas sobre la presión social y la vacuidad del éxito provinciano. Muriel Heslop no busca el amor, busca la validación que otorga el estatus de "casada". | Entradas en boletería.`,
    slug: "cineclub-tyo-la-boda-de-mi-muer-lunes-09",
    category: "eventos",
    tags: ["Cine", "Proyección", "Comedia Dramática"],
    // ticketeraUrl:
    //   "https://survivo.com.ar/evento/tux-luch-ono-band/",
  },
  {
    id: 20,
    image: "/agenda/febrero/mati-auka.webp", // la principal
    date: "2026-02-11",
    startDate: "2026-02-11",
    endDate: "2026-02-11",
    time: "21:30",
    title: "Ciclo de Peña: Auka Folk & Mati Rivas",
    description: `
        El encuentro de cada semana que nos trae música, raíces y comunidad. 
        Auka Folk & Mati Rivas, llega con un repertorio bien tradicional pensado para peñas, que va de la zamba y la chacarera a la cueca y el gato.`,
    slug: "ciclo-pena-miercoles-11",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
    // ticketeraUrl:
    //   "https://survivo.com.ar/evento/tux-luch-ono-band/",
  },
  {
    id: 21,
    image: "/agenda/febrero/angeles-trinidad.webp", // la principal
    date: "2026-02-12",
    startDate: "2026-02-12",
    endDate: "2026-02-12",
    time: "20:30",
    title: "Angeles Trinidad – Música",
    description: `
        La cantante y compositora Angeles Trinidad presenta un show con canciones de autor y un repertorio de sus temas favoritos de artistas reconocidos desde Fabiana Cantilo y Julieta Venegas hasta clásicos del rock como Los Abuelos de la Nada. | Entrada libre a colaboración.`,
    slug: "angeles-trinidad-jueves-12",
    category: "eventos",
    tags: ["Música", "Show", "Acústico"],
    // ticketeraUrl:
    //   "https://survivo.com.ar/evento/tux-luch-ono-band/",
  },
  {
    id: 22,
    image: "/agenda/febrero/son-violeta.webp", // la principal
    date: "2026-02-13",
    startDate: "2026-02-13",
    endDate: "2026-02-13",
    time: "20:30",
    title: "Son violeta - Música",
    description: `
        Un proyecto musical compuesto de canciones propias de ritmos argentinos, aires rioplatenses y latinoamericanos que busca transmitir con sus canciones a la música como una energía transformadora para la vida. | Entrada libre a colaboración.`,
    slug: "son-violeta-viernes-13",
    category: "eventos",
    tags: ["Música", "Show", "Latinoamericano"],
    // ticketeraUrl:
    //   "https://survivo.com.ar/evento/tux-luch-ono-band/",
  },
  {
    id: 23,
    image: "/agenda/febrero/entre-acordes.webp", // la principal
    date: "2026-02-14",
    startDate: "2026-02-14",
    endDate: "2026-02-14",
    time: "20:30",
    title: "Entre acordes románticos - Música",
    description: `
        Entre acordes es un dúo de voz y guitarra que presenta un repertorio recorriendo distintos estilos y épocas de la música nacional e internacional.
        En un show temático por San Valentín, el grupo propone un viaje a través de las canciones de amor de todos los tiempos, interpretadas de forma íntima y con arreglos acústicos propios | Entrada libre a colaboración.`,
    slug: "entre-acordes-sabado-14",
    category: "eventos",
    tags: ["Música", "Show", "Acústico"],
    // ticketeraUrl:
    //   "https://survivo.com.ar/evento/tux-luch-ono-band/",
  },
  {
    id: 24,
    image: "/agenda/febrero/noche-boleros.webp", // la principal
    date: "2026-02-14",
    startDate: "2026-02-14",
    endDate: "2026-02-14",
    time: "22:00",
    title:
      "Amor(es) noche de boleros con “Al Viento, boleros y otras hierbas” - Música",
    description: `Una propuesta musical y cultural pensada para celebrar el amor en todas sus formas.
        A través de una noche de boleros, el evento invita a reflexionar, sentir y compartir el amor como experiencia humana universal | Entradas en boletería.`,
    slug: "noche-de-boleros-sabado-14",
    category: "eventos",
    tags: ["Música", "Show", "Boleros"],
    // ticketeraUrl:
    //   "https://survivo.com.ar/evento/tux-luch-ono-band/",
  },
  {
    id: 25,
    image: "/agenda/febrero/retro-visual.webp", // la principal
    date: "2026-02-15",
    startDate: "2026-02-15",
    endDate: "2026-02-15",
    time: "21:30",
    title: "Fiesta retro audiovisual",
    description: `Volvemos a los 80 y 90 con clásicos que marcaron una época, visuales en pantalla y pista encendida.
      Una noche para disfrutar como las de antes. | Entradas en boletería.`,
    slug: "fiesta-retro-visual-domingo-15",
    category: "eventos",
    tags: ["Música", "Fiesta", "Retro"],
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
