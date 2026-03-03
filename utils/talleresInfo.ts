export interface TallerHorario {
  age?: string;
  schedule: string;
}

export interface TallerInfo {
  title: string;
  teacher?: string;
  description: string;
  phone?: string;
  images?: string[];
  horarios?: TallerHorario[];
}

export const talleresInfo: TallerInfo[] = [

{
  title: "Iniciación musical con guitarra",
  teacher: "Lucas Aguilera",
  description:
    "Primer acercamiento al lenguaje musical utilizando la guitarra como herramienta principal. A través de actividades prácticas y grupales se trabajan ritmo, melodía y armonía desarrollando escucha, coordinación y expresión musical.",
  images: ["/talleres/iniciacion-guitarra.webp"],
  horarios: [
    {
      age: "Desde 8 años",
      schedule: "Lunes · 18 a 19 hs (8 a 13) · 19 a 20 hs (+13)"
    }
  ]
},

{
  title: "Freestyle",
  teacher: "Juan Segundo Martín (Juanse)",
  description:
    "Espacio creativo para desarrollar expresión, imaginación y comunicación a través del freestyle. Se trabajan rimas, juegos de palabras, ritmo y musicalidad mediante dinámicas grupales.",
  images: ["/talleres/taller-freestyle.webp"],
  horarios: [
    {
      age: "8 a 16 años",
      schedule: "Miércoles · 19:30 a 21 hs"
    }
  ]
},

{
  title: "Canto para infancias",
  teacher: "Sergio Mondaca · Antonella Perugini",
  description:
    "Taller de canto donde se trabaja técnica vocal, repertorio y expresión corporal a través del juego. No se requieren conocimientos previos.",
    images: ["/talleres/canto-infantes.webp"],
  horarios: [
    {
      age: "6 a 12 años",
      schedule: "Miércoles · 18:30 a 20 hs"
    }
  ]
},

{
  title: "Teatro (Infancias)",
  teacher: "Micaela Ruiz",
  description:
    "Espacio para jugar, crear y expresarse a través del teatro. Se desarrollan improvisaciones, juegos escénicos y dinámicas de grupo que fortalecen la creatividad y la confianza.",
  horarios: [
    {
      age: "Desde 8 años",
      schedule: "Miércoles y Viernes · 18 a 19 hs"
    }
  ]
},

{
  title: "Teatro – Cada muerte de Obispo",
  teacher: "Emilio Ziaurriz",
  description:
    "Taller de teatro que propone explorar el lenguaje escénico desde el juego y la experimentación. Un espacio de creación colectiva para descubrir el propio lenguaje teatral.",
  horarios: [
    {
      age: "Jóvenes y adultxs",
      schedule: "Lunes y Jueves · 19 a 21 hs"
    }
  ]
},

{
  title: "Taekwon-do",
  teacher: "Oriana Gil",
  description:
    "Arte marcial que combina actividad física y desarrollo cognitivo. A través de dinámicas lúdicas se trabajan disciplina, coordinación y valores.",
  horarios: [
    {
      age: "4 a 11 años",
      schedule: "Miércoles y Viernes · 20 a 21 hs"
    }
  ]
},

{
  title: "Taekwon-do ITF",
  teacher: "Darío Jerez",
  description:
    "Taller dedicado a la enseñanza del Taekwon-do ITF con desarrollo técnico, valores marciales y seguimiento de graduaciones reconocidas.",
  images: ["/talleres/taekwondo-itf.webp"],
  horarios: [
    {
      age: "+12 años",
      schedule: "Lunes, Miércoles y Viernes · 19 a 20 hs"
    }
  ]
},

{
  title: "Gimnasia cerebral – ActivaMente",
  teacher: "Adriana Bucci",
  description:
    "Programa de estimulación cognitiva para personas mayores donde se trabajan memoria, atención y agilidad mental mediante dinámicas grupales.",
  images: ["/talleres/gimnasia-cerebral.webp"],
  horarios: [
    {
      age: "+60 años",
      schedule: "Jueves · 10 a 12 hs"
    }
  ]
},

{
  title: "Arquitectura para infancias",
  teacher: "Belén Stefanich",
  description:
    "Taller creativo donde las infancias exploran arquitectura mediante maquetas, estructuras y desafíos de construcción.",
  horarios: [
    {
      age: "6 a 12 años",
      schedule: "Sábados · 18 a 19:30 hs"
    }
  ]
},

{
  title: "Danzas urbanas",
  teacher: "Amira Pinolli",
  description:
    "Taller de danza urbana con estilos como hip hop, reggaetón y rock. Espacio para desarrollar coordinación, ritmo y expresión corporal.",
  images: ["/talleres/danzas-urbanas-niños.webp"],
  horarios: [
    {
      age: "+16",
      schedule: "Adolescenias y adultos | Lunes · 19:30 a 20:30 hs · Viernes · 18:30 a 19:30 hs"
    }
  ]
},

{
  title: "Danzas árabes",
  teacher: "Jessica Rodríguez",
  description:
    "Escuela de danzas árabes Al'Adhra. Formación artística en danza oriental para todas las edades, explorando técnica, expresión y tradición.",
  images: ["/talleres/danzas-arabes-infantes.webp"],
  horarios: [
    {
      age: "4 a 9 años",
      schedule: "KIDS · Martes y Jueves 19:00 a 20:00 hs"
    },
    {
      age: "10 a 14 años",
      schedule: "TEENS · Lunes y Jueves 19:00 a 20:00 hs"
    }
  ]
},

{
  title: "Danzas españolas",
  teacher: "Elena Ledesma",
  description:
    "Clases que recorren estilos como escuela bolera, flamenco, estilización y danza regional. Un espacio de aprendizaje artístico y disfrute del movimiento.",
  // images: ["/talleres/danzas-espanolas.webp"],
  horarios: [
    {
      age: "Infancias y adultxs",
      schedule: "Lunes y miércoles · 18:30 a 21:30 hs"
    }
  ]
},

{
  title: "Danzas clásicas (Ballet)",
  teacher: "Andrea Basconcello",
  description:
    "Clases de ballet para diferentes edades y niveles enfocadas en técnica, expresión y desarrollo corporal.",
  // images: ["/talleres/ballet.webp"],
  horarios: [
    {
      age: "Desde 3 años",
      schedule: "Lunes a viernes · distintos grupos"
    }
  ]
},

{
  title: "Flamenco Intermedio",
  teacher: "Cindy Mayorquin",
  description:
    "Clase de flamenco nivel intermedio enfocada en técnica, compás y expresión escénica.",
  // images: ["/talleres/flamenco.webp"],
  horarios: [
    {
      age: "Jóvenes y adultxs",
      schedule: "Jueves · 18:30 a 20 hs"
    }
  ]
},

{
  title: "Flamenco Inicial",
  teacher: "Cindy Mayorquin",
  description:
    "Introducción al flamenco para personas sin experiencia previa, trabajando compás, postura y técnica básica.",
  // images: ["/talleres/flamenco.webp"],
  horarios: [
    {
      age: "Adultxs",
      schedule: "Viernes · 18 a 19:30 hs"
    }
  ]
},

{
  title: "Danzas folklóricas argentinas",
  teacher: "Sonia Martínez",
  description:
    "Espacio para aprender y practicar danzas tradicionales argentinas en un ambiente participativo y cultural.",
  images: ["/talleres/danzas-folkloricas.webp"],
  horarios: [
    {
      age: "+16 años",
      schedule: "Martes · 19 a 21 hs"
    }
  ]
},

{
  title: "Danzas urbanas – Dancehall & Waacking",
  teacher: "Tamara Gómez",
  description:
    "Exploración de estilos urbanos como Dancehall y Waacking, trabajando ritmo, presencia escénica y expresión corporal.",
  images: ["/talleres/danzas-urbanas.webp"],
  horarios: [
    {
      age: "+16 años",
      schedule: "Martes y jueves · 20 a 21 hs"
    }
  ]
},

{
  title: "Stop Motion",
  teacher: "Stefani Barrera",
  description:
    "Laboratorio creativo audiovisual donde se crean historias mediante técnicas de animación stop motion combinando arte, narrativa y tecnología.",
  images: ["/talleres/stop-motion.webp"],
  horarios: [
    {
      age: "12 a 17 años",
      schedule: "Sábados · 10:30 a 12:30 hs"
    }
  ]
},

{
  title: "Dibujo para cómic y manga",
  teacher: "Gino Barsotti",
  description:
    "Taller de ilustración enfocado en técnicas de cómic y manga abordando figura humana, perspectiva y narrativa visual.",
  // images: ["/talleres/manga-comic.webp"],
  horarios: [
    {
      age: "+10 años",
      schedule: "Martes y jueves · 18:30 a 20 hs"
    }
  ]
},

{
  title: "Dibujo y pintura creativa",
  teacher: "Stefani Barrera",
  description:
    "Espacio artístico donde las infancias exploran colores, formas y texturas desarrollando creatividad e imaginación.",
  // images: ["/talleres/dibujo-pintura.webp"],
  horarios: [
    {
      age: "5 a 12 años",
      schedule: "Miércoles y viernes · 18:30 a 20 hs"
    }
  ]
},

{
  title: "Coreo y Cardio",
  teacher: "Jessica Quesada",
  description:
    "Entrenamiento que combina baile y ejercicio cardiovascular para fortalecer el cuerpo, mejorar coordinación y disfrutar del movimiento.",
  // images: ["/talleres/coreo-cardio.webp"],
  horarios: [
    {
      age: "+16 años",
      schedule: "Lunes, miércoles y viernes · 19:30 a 20:30 hs"
    }
  ]
},

{
  title: "Baile Fitness",
  teacher: "Beba Díaz",
  description:
    "Actividad física divertida basada en coreografías que mejora resistencia, coordinación y bienestar general.",
  // images: ["/talleres/baile-fitness.webp"],
  horarios: [
    {
      age: "Jóvenes y adultxs",
      schedule: "Lunes, miércoles y viernes · 20:30 a 21:30 hs"
    }
  ]
}

];