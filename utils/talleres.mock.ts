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

  // =====================
  // FESTIVAL OJITOS CURIOSOS AL TEATRO — 3ra edición
  // 14 al 25 de julio de 2026
  // =====================

  // --- GRILLA MULTIESPACIO 16 hs ---

  {
    id: 15,
    title: "Laboratorio de Malabares y Objetos",
    description:
      "Descubrí el arte de realizar ejercicios de agilidad, equilibrio y destreza con diferentes objetos: baleros, buggens, flower stick, cintas poi, triquetas, pelotas, clavas, aros y hulas. Un taller muy divertido donde cada vez que se domina un nuevo ejercicio, mejora la autoestima y proporciona una gran satisfacción personal.",
    teacher: "Ulises Salazar y Claudio Granados",
    age: "6 a 12 años",
    schedule: "Martes 14/07 — 16 hs",
    image: "/talleres/ojitos-laboratorio-de-malabares.webp",
    tags: ["ojitos-curiosos", "festival", "malabares", "infancias"],
  },

  {
    id: 16,
    title: "Dragones en Vuelo",
    description:
      "Varieté de juegos que promueven el movimiento y la imaginación con el vuelo de los dragones de tela y la creación de su propio dragón para poder llevárselo. Un espacio de disfrute lúdico y creativo abierto a las familias. Traer una varilla redonda Nº 8 o 10 para la construcción del dragón.",
    teacher: "Malena Alarcón",
    age: "Desde 4 años",
    schedule: "Jueves 16/07 — 16 hs",
    image: "/talleres/ojitos-dragones.webp",
    tags: ["ojitos-curiosos", "festival", "juego", "familias"],
  },

  {
    id: 17,
    title: "Narices Húmedas",
    description:
      "Nos encontramos en la ronda del invierno, con nuestras narices húmedas que nos regala esta época del año. Invitamos a nuestros amigos peludos a través de los cuentos, para dar paso a las manos a obrar entre tijeras, revistas, hojas y lápices y crear nuestro propio collage. Materiales incluidos.",
    teacher: "Valeria Resenite y Dana Gómez",
    age: "5 a 10 años",
    schedule: "Sábado 18/07 — 16 hs",
    image: "/talleres/ojitos-narices-humedas.webp",
    tags: ["ojitos-curiosos", "festival", "cuentos", "collage", "familias"],
  },

  {
    id: 18,
    title: "Jugarte — Taller de Arteterapia",
    description:
      "Espacio seguro y creativo donde las infancias pueden conocerse, expresarse y compartir con otros. La inclusión de herramientas como el arte, el juego y el yoga infantil permiten llegar a cada niño y niña respetando su singularidad, promoviendo la participación activa y fortaleciendo su bienestar emocional.",
    teacher: "Laura Roda",
    age: "5 a 10 años",
    schedule: "Martes 21/07 — 16 hs",
    image: "/talleres/ojitos-jugarte.webp",
    tags: ["ojitos-curiosos", "festival", "arteterapia", "bienestar", "familias"],
  },

  {
    id: 19,
    title: "Nidos Sonoros",
    description:
      "Espacio de encuentro destinado a niños y niñas de 1 a 3 años junto a sus adultos significativos. Experiencia musical compartida que incluye canciones, movimiento, escucha y recursos sonoros diversos. La música actúa como un entorno que contiene y favorece el desarrollo, donde el vínculo se construye, se fortalece y encuentra nuevas formas de expresión.",
    teacher: "Debora Andersen",
    age: "1 a 3 años",
    schedule: "Jueves 23/07 — 16 hs",
    image: "/talleres/ojitos-nido-de-sonidos.webp",
    tags: ["ojitos-curiosos", "festival", "música", "bebes", "familias"],
  },

  {
    id: 20,
    title: "Nidoteca — Juegos y Lecturas",
    description:
      "Propuesta que ofrece una programación diversa y de calidad contemplando distintas edades, intereses y formas de participación, garantizando una experiencia enriquecedora para toda la comunidad. Materiales incluidos.",
    teacher: "Marlys Fernández",
    age: "Desde 6 meses en adelante",
    schedule: "Sábado 25/07 — 16 hs",
    image: "/talleres/ojitos-nidoteca.webp",
    tags: ["ojitos-curiosos", "festival", "juegos", "lectura", "familias"],
  },

  // --- TALLERES TORRE ---

  {
    id: 21,
    title: "Expresión Libre con Cerámica",
    description:
      "Un espacio para jugar y crear desde el barro, lo que seamos capaces de imaginar. Cada participante realizará su proyecto asistido desde la técnica de cerámica. Traer 50 gr de arcilla. Cupo mínimo: 10. Cupo máximo: 20.",
    teacher: "—",
    age: "4 a 12 años",
    schedule: "Jueves 16/07 — 18:20 hs — Aula 201",
    image: "/talleres/ojitos-taller-para-infancias.webp",
    tags: ["ojitos-curiosos", "festival", "cerámica", "torre", "infancias"],
  },

  {
    id: 22,
    title: "Construcción de Marioneta de Mesa",
    description:
      "En cinco pasos te enseño a crear tu títere articulado, para que luego puedas recrear alguna historia, cuento o jugar con él. Materiales: dos cilindros de cartón, microfibra del color que más te guste, 1 m de cordón, 4 tapitas de botellas de plástico (2 perforadas en el medio), silicona fría, papeles, lanas y lo que tengas en casa para decorar.",
    teacher: "—",
    age: "4 a 8 años",
    schedule: "Viernes 24/07 — 16 hs — Aula 201",
    image: "/talleres/ojitos-ser-de-carton.webp",
    tags: ["ojitos-curiosos", "festival", "marionetas", "torre", "familias"],
  },

  // --- ESPACIOS COMPLEMENTARIOS ---

  {
    id: 23,
    title: "Paseo Origami — Muestra Inmersiva",
    description:
      "Muestra inmersiva con visitas interactivas y charlas. Del 13 al 27 de julio en la Galería de la CDC.",
    schedule: "Del 13/07 al 27/07 — Galería",
    image: "/talleres/ojitos-horarios.webp",
    tags: ["ojitos-curiosos", "festival", "galería", "origami", "muestra"],
  },

  {
    id: 24,
    title: "Rincón de Lectura — Zona de Cuentos",
    description:
      "Espacio de lectura y cuentos en la Biblioteca de la CDC durante el Festival Ojitos Curiosos al Teatro.",
    schedule: "Biblioteca",
    image: "/talleres/ojitos-nidoteca.webp",
    tags: ["ojitos-curiosos", "festival", "biblioteca", "lectura", "cuentos"],
  },

  {
    id: 25,
    title: "Espacio de Arte — Libre Creatividad",
    description:
      "Espacio de arte con diferentes materiales para la libre creatividad en el Multiespacio de la CDC durante el Festival Ojitos Curiosos al Teatro.",
    schedule: "Multiespacio",
    image: "/talleres/ojitos-taller-para-infancias.webp",
    tags: ["ojitos-curiosos", "festival", "multiespacio", "arte", "creatividad"],
  },
];