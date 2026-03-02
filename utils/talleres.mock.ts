import { Taller } from "@/interfaces/taller.interface";

export const talleresMock: Taller[] = [
  {
    id: 14,
    title: "Habitar Poesía",
    description:
      "Habitar Poesía es un taller grupal que propone transitar la escritura como práctica sostenida, en diálogo con otrxs. Un espacio para indagar en el propio lenguaje y encontrar la propia voz.",

    teacher: "—",
    phone: "2984653721",

    image: "/imagenes/talleres/habitar-poesia.webp",

    images: [
      {
        src: "/imagenes/talleres/habitar-poesia.webp",
        alt: "Taller Habitar Poesía",
      },
      {
        src: "/imagenes/talleres/habitar-poesia-2.webp",
        alt: "Encuentro de escritura colectiva",
      },
    ],

    tags: ["literatura", "escritura"],
    featured: true,
  },

  {
    id: 1,
    image: "/imagenes/talleres/arquitectura-infancias.webp",
    title: "Arquitectura para Infancias",
    description:
      "Exploración del espacio, formas y estructuras a través del juego.",
    teacher: "Belén Stefanich",
    age: "6 a 12 años",
    schedule: "Sábados 10 a 11:30 hs",
  },

  {
    id: 2,
    image: "/imagenes/talleres/baile-fitness-adolescencias-y-adultxs.webp",
    title: "Baile Fitness",
    description:
      "Actividad física divertida para mejorar resistencia y coordinación.",
    teacher: "Beba Díaz",
    age: "+16",
  },

  {
    id: 3,
    image: "/imagenes/talleres/ceramica-infancias.webp",
    title: "Cerámica Infancias",
    description: "Trabajo creativo con arcilla, texturas y formas.",
  },

  {
    id: 4,
    image: "/imagenes/talleres/coreo-y-cardio-adultxs.webp",
    title: "Coreo y Cardio",
    description: "Entrenamiento cardiovascular con coreografías dinámicas.",
    teacher: "Jessica Quesada",
  },

  {
    id: 5,
    image: "/imagenes/talleres/dibujo-y-pintura-infancias.webp",
    title: "Dibujo y Pintura",
    description:
      "Exploración artística a través del color y la imaginación.",
  },

  {
    id: 6,
    image: "/imagenes/talleres/ritmos-latinos-adolescencias-y-adultxs.webp",
    title: "Ritmos Latinos",
    description: "Movimiento, ritmo y expresión corporal.",
  },

  {
    id: 7,
    image: "/imagenes/talleres/taekwondo-adolescencias-y-adultxs.webp",
    title: "Taekwon-do",
    description:
      "Disciplina marcial orientada al desarrollo físico y mental.",
  },

  {
    id: 8,
    image: "/imagenes/talleres/taekwondo-infancias.webp",
    title: "Taekwon-do Infancias",
    description:
      "Aprendizaje lúdico de artes marciales y valores.",
  },

  {
    id: 9,
    image: "/imagenes/talleres/tango-adultos.webp",
    title: "Tango",
    description:
      "Conexión, musicalidad y expresión en pareja.",
  },

  {
    id: 10,
    image: "/imagenes/talleres/teatro-adolescencias.webp",
    title: "Teatro Adolescencias",
    description:
      "Improvisación, juego escénico y creatividad.",
  },

  {
    id: 11,
    image: "/imagenes/talleres/teatro-adultxs.webp",
    title: "Teatro Adultos",
    description:
      "Exploración actoral y expresión corporal.",
  },

  {
    id: 12,
    image: "/imagenes/talleres/teatro-infancias.webp",
    title: "Teatro Infancias",
    description:
      "Juego teatral para estimular la imaginación.",
  },

  {
    id: 13,
    image: "/imagenes/talleres/ukulele-infancias-y-adolescencias.webp",
    title: "Ukelele",
    description:
      "Primeros pasos musicales con instrumentos.",
  },
];