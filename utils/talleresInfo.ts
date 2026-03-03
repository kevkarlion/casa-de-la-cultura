export interface TallerHorario {
  age?: string;
  schedule: string;
}

export interface TallerImage {
  src: string;
  alt?: string;
  caption?: string;
}

export interface TallerInfo {
  title: string;
  teacher?: string;
  description: string;
  phone?: string;
  images?: TallerImage[];
  horarios?: TallerHorario[];
}

export const talleresInfo: TallerInfo[] = [
  {
    title: "Iniciación musical con guitarra",
    teacher: "Lucas Aguilera",
    description:
      "Primer acercamiento al lenguaje musical utilizando la guitarra como herramienta principal. A través de actividades prácticas y grupales se trabajan ritmo, melodía y armonía desarrollando escucha, coordinación y expresión musical.",
    images: [
      {
        src: "/talleres/iniciacion-guitarra.webp",
        alt: "Taller de iniciación musical con guitarra",
      },
    ],
    horarios: [
      {
        age: "Desde 8 años",
        schedule: "Lunes · 18 a 19 hs (8 a 13) · 19 a 20 hs (+13)",
      },
    ],
  },

  {
    title: "Freestyle",
    teacher: "Juan Segundo Martín (Juanse)",
    description:
      "Espacio creativo para desarrollar expresión, imaginación y comunicación a través del freestyle. Se trabajan rimas, juegos de palabras, ritmo y musicalidad mediante dinámicas grupales.",
    images: [
      {
        src: "/talleres/taller-freestyle.webp",
        alt: "Taller de freestyle",
      },
    ],
    horarios: [
      {
        age: "8 a 16 años",
        schedule: "Miércoles · 19:30 a 21 hs",
      },
    ],
  },

  {
    title: "Canto para infancias",
    teacher: "Sergio Mondaca · Antonella Perugini",
    description:
      "Taller de canto donde se trabaja técnica vocal, repertorio y expresión corporal a través del juego. No se requieren conocimientos previos.",
    images: [
      {
        src: "/talleres/canto-infantes.webp",
        alt: "Taller de canto para infancias",
      },
    ],
    horarios: [
      {
        age: "6 a 12 años",
        schedule: "Miércoles · 18:30 a 20 hs",
      },
    ],
  },

  {
    title: "Teatro (Infancias)",
    teacher: "Micaela Ruiz",
    description:
      "Espacio para jugar, crear y expresarse a través del teatro. Se desarrollan improvisaciones, juegos escénicos y dinámicas de grupo que fortalecen la creatividad y la confianza.",
    horarios: [
      {
        age: "Desde 8 años",
        schedule: "Miércoles y Viernes · 18 a 19 hs",
      },
    ],
  },

  {
    title: "Teatro – Cada muerte de Obispo",
    teacher: "Emilio Ziaurriz",
    description:
      "Taller de teatro que propone explorar el lenguaje escénico desde el juego y la experimentación. Un espacio de creación colectiva para descubrir el propio lenguaje teatral.",
    horarios: [
      {
        age: "Jóvenes y adultxs",
        schedule: "Lunes y Jueves · 19 a 21 hs",
      },
    ],
  },

  {
    title: "Taekwon-do",
    teacher: "Oriana Gil",
    description:
      "Arte marcial que combina actividad física y desarrollo cognitivo. A través de dinámicas lúdicas se trabajan disciplina, coordinación y valores.",
    images: [
      {
        src: "/talleres/taekwondo-17.webp",
        alt: "Clase de Taekwon-do para mujeres",
      },
    ],
    horarios: [
      {
        age: "+17 años · Solo para mujeres",
        schedule: "Martes y Jueves · 10 a 11 hs",
      },
    ],
  },

  {
    title: "Taekwon-do ITF",
    teacher: "Darío Jerez",
    description:
      "Taller dedicado a la enseñanza del Taekwon-do ITF con desarrollo técnico, valores marciales y seguimiento de graduaciones reconocidas.",
    images: [
      {
        src: "/talleres/taekwondo-itf.webp",
        alt: "Clase de Taekwon-do ITF",
      },
    ],
    horarios: [
      {
        age: "+12 años",
        schedule: "Lunes, Miércoles y Viernes · 19 a 20 hs",
      },
    ],
  },

  {
    title: "Gimnasia cerebral – ActivaMente",
    teacher: "Adriana Bucci",
    description:
      "Programa de estimulación cognitiva para personas mayores donde se trabajan memoria, atención y agilidad mental mediante dinámicas grupales.",
    images: [
      {
        src: "/talleres/gimnasia-cerebral.webp",
        alt: "Taller de gimnasia cerebral",
      },
    ],
    horarios: [
      {
        age: "+60 años",
        schedule: "Jueves · 10 a 12 hs",
      },
    ],
  },

  {
    title: "Arquitectura para infancias",
    teacher: "Belén Stefanich",
    description:
      "Taller creativo donde las infancias exploran arquitectura mediante maquetas, estructuras y desafíos de construcción.",
    horarios: [
      {
        age: "6 a 12 años",
        schedule: "Sábados · 18 a 19:30 hs",
      },
    ],
  },

  {
    title: "Danzas urbanas",
    teacher: "Amira Pinolli",
    description:
      "Taller de danza urbana con estilos como hip hop, reggaetón y rock. Espacio para desarrollar coordinación, ritmo y expresión corporal.",
    images: [
      {
        src: "/talleres/danzas-urbanas-niños.webp",
        alt: "Clases de danzas urbanas",
      },
    ],
    horarios: [
      {
        age: "+16",
        schedule:
          "Adolescencias y adultos | Lunes · 19:30 a 20:30 hs · Viernes · 18:30 a 19:30 hs",
      },
    ],
  },

  {
    title: "Danzas árabes",
    teacher: "Jessica Rodríguez",
    description:
      "Escuela de danzas árabes Al'Adhra. Formación artística en danza oriental para todas las edades, explorando técnica, expresión y tradición.",
    images: [
      {
        src: "/talleres/danzas-arabes-infantes.webp",
        alt: "Clases de danzas árabes",
      },
    ],
    horarios: [
      {
        age: "4 a 9 años",
        schedule: "KIDS · Martes y Jueves 19:00 a 20:00 hs",
      },
      {
        age: "10 a 14 años",
        schedule: "TEENS · Lunes y Jueves 19:00 a 20:00 hs",
      },
    ],
  },

  {
    title: "Habitar Poesía",
    description:
      "Habitar Poesía es un taller grupal que propone transitar la escritura como práctica sostenida, en diálogo con otrxs. Un espacio para indagar en el propio lenguaje, explorar la palabra en su dimensión más profunda y encontrar la propia voz.\n\nA través de consignas, lecturas y trabajo compartido, se acompañan los procesos individuales con una mirada respetuosa, identificando fortalezas y posibles líneas de reescritura. Escribir como escucha, como búsqueda y como experiencia colectiva.",
    phone: "2984653721",
    images: [
      {
        src: "/talleres/habitar-poesia.webp",
        alt: "Taller Habitar Poesía",
      },
    ],
  },
  {
  title: "Guitarra – Adolescencias y adultxs",
  teacher: "Lucas Aguilera",
  description:
    "Taller de guitarra destinado a adolescentes y personas adultas que deseen comenzar o profundizar su vínculo con el instrumento. Se trabajan acordes, ritmo, acompañamiento y repertorio en un formato grupal que favorece el aprendizaje progresivo y el disfrute de la música.",
  images: [
    {
      src: "/talleres/taller-guitarra.webp",
      alt: "Taller de guitarra en Casa de la Cultura",
      caption: "Clases grupales de guitarra con Lucas Aguilera"
    }
  ],
  horarios: [
    {
      age: "+13 años",
      schedule: "Lunes · 19 a 20 hs"
    }
  ]
},
{
  title: "Flamenco avanzado",
  teacher: "Cindy Mayorquin",
  description:
    "Clase de flamenco orientada a personas con experiencia previa que desean profundizar en técnica, compás y expresión escénica. El taller propone trabajar secuencias coreográficas, presencia corporal y musicalidad dentro del lenguaje propio del flamenco.",
    images: [
      {
        src: "/talleres/flamenco-avanzado.webp",
        alt: "Taller de Flamenco avanzado",
      }
    ],
  horarios: [
    {
      age: "+16 años",
      schedule: "Jueves · 18:30 a 20 hs"
    }
  ]
},
{
  title: "Danzas árabes – Hobbie",
  teacher: "Jessica Rodríguez",
  description:
    "Espacio para explorar la danza árabe desde el disfrute, la conexión corporal y la expresión artística. El taller propone un acercamiento a los movimientos y la musicalidad de esta danza milenaria en un ambiente abierto a adolescentes y personas adultas.",
    images: [
      {
        src: "/talleres/danzas-arabes.webp",
        alt: "Taller de Danzas Arabes",
      }
    ],
  horarios: [
    {
      age: "+14 años",
      schedule: "Sábados · 18 a 19:45 hs"
    }
  ]
},
{
  title: "Danzas clásicas – Adolescencias",
  teacher: "Andrea Basconcello",
  description:
    "Clase de ballet destinada a adolescentes que desean desarrollar técnica, coordinación y expresión corporal dentro del lenguaje de la danza clásica. El taller propone un trabajo progresivo sobre postura, musicalidad y secuencias coreográficas, fomentando la disciplina artística y el disfrute del movimiento.",
    images: [
      {
        src: "/talleres/danza-clasica.webp",
        alt: "Taller de Danza clasica niños",
      }
    ],
  horarios: [
    {
      age: "12 a 18 años",
      schedule: "Miércoles y Viernes · 19:00 a 20:15 hs"
    },
    {
      age: "+16",
      schedule: "Miércoles y Viernes · 20:15 a 21:30 hs"
    }
  ]
},
{
  title: "Danzas folklóricas argentinas",
  teacher: "Sonia Martínez",
  description:
    "Taller dedicado al aprendizaje y práctica de danzas tradicionales argentinas. A través del movimiento, la música y el trabajo grupal se exploran ritmos y coreografías del folklore, fortaleciendo la expresión corporal, la memoria coreográfica y el vínculo con nuestra identidad cultural.",
  images: [
    {
      src: "/talleres/danzas-folkloricas.webp",
      alt: "Taller de danzas folklóricas argentinas en Casa de la Cultura"
    }
  ],
  horarios: [
    {
      age: "Adolescencias y adultxs +16",
      schedule: "Martes · 19:00 a 21:00 hs"
    }
  ]
}
];
