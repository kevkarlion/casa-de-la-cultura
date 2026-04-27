// talleresInfo.ts
// Actualizado: 23/04/2026 - info desde Prezi
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
  // =====================
  // DANZAS ESPAÑOLAS
  // =====================
  {
    title: "Danzas Españolas",
    teacher: "Elena Ledesma",
    description:
      "Un espacio para descubrir la danza española jugando, creando y moviéndose con libertad. Recorremos sus cuatro estilos: escuela bolera, regional, estilización y flamenco. Trabajamos el respeto, el compañerismo y la confianza en el propio cuerpo. Aprendemos a expresarnos, interpretar y disfrutar del baile en grupo.",
    images: [
      {
        src: "/talleres-nuevos/danzas-infancias.webp",
        alt: "Danzas Españolas - Infancias",
      },
    ],
    horarios: [
      {
        age: "5 a 12 años",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Danzas Españolas",
    teacher: "Elena Ledesma",
    description:
      "Un encuentro con la fuerza y la expresión de la danza española. Exploramos estilización, flamenco y fusiones con herramientas de danza teatro. No hace falta experiencia, solo ganas de moverse y conectar. Un espacio para soltarse, recargar energía y disfrutar bailando.",
    images: [
      {
        src: "/talleres-nuevos/danzas-españolas-adultos.webp",
        alt: "Danzas Españolas - Adultos",
      },
    ],
    horarios: [
      {
        age: "Adult@s",
        schedule: "Consultar horarios",
      },
    ],
  },

  // =====================
  // DANZA CLÁSICA
  // =====================
  {
    title: "Danza Clásica - Iniciación",
    teacher: "Andrea Basconcelo",
    description:
      "Un primer encuentro con la danza clásica lleno de juego, música e imaginación. Se despierta el movimiento, la coordinación y la expresión desde lo lúdico. Cada infancia explora a su ritmo, en un entorno cuidado y creativo. Una puerta de entrada al mundo del ballet desde el disfrute.",
    images: [
      {
        src: "/talleres-nuevos/d-clasicas-i.webp",
        alt: "Danza Clásica - Iniciación",
      },
    ],
    horarios: [
      {
        age: "3 a 5 años",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Danza Clásica - Primeros pasos",
    teacher: "Andrea Basconcelo",
    description:
      "Comenzamos a construir el lenguaje del ballet de forma dinámica y accesible. Se trabajan postura, coordinación y musicalidad con propuestas estimulantes. Un espacio para ganar confianza, técnica y amor por la danza. Aprender ballet puede ser tan desafiante como divertido.",
    images: [
      {
        src: "/talleres-nuevos/d-clasicas-i.webp",
        alt: "Danza Clásica - Primeros pasos",
      },
    ],
    horarios: [
      {
        age: "6 a 10 años",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Danza Clásica - Adolescentes",
    teacher: "Andrea Basconcelo",
    description:
      "Un espacio para potenciar la técnica y la expresión en la danza clásica. Se profundiza en el trabajo corporal, la musicalidad y la presencia escénica. Clases adaptadas a cada proceso, acompañando el crecimiento artístico. Para quienes quieren ir más allá y disfrutar el desafío.",
    images: [
      {
        src: "/talleres-nuevos/d-c-ado.webp",
        alt: "Danza Clásica - Adolescentes",
      },
    ],
    horarios: [
      {
        age: "11 a 16 años",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Danza Clásica",
    teacher: "Andrea Basconcelo",
    description:
      "Nunca es tarde para empezar o volver al ballet. Un espacio pensado para conectar con el cuerpo desde la técnica y el disfrute. Se trabaja de forma progresiva, sin necesidad de experiencia previa. Movimiento, energía y bienestar en cada clase.",
    images: [
      {
        src: "/talleres-nuevos/d-c-adultos.webp",
        alt: "Danza Clásica - +16 años",
      },
    ],
    horarios: [
      {
        age: "+16 años / Adultxs",
        schedule: "Consultar horarios",
      },
    ],
  },

  // =====================
  // FLAMENCO
  // =====================
  {
    title: "Flamenco - Nivel Inicial",
    teacher: "Cindy Mayorquín",
    description:
      "Un espacio paramergirse en la fuerza y la intensidad del flamenco. A partir de la técnica, se recorren distintos palos flamencos para comprender su estructura y su carácter. Se explora el movimiento desde una mirada consciente, conectando cuerpo, emoción e interpretación. Una propuesta para descubrir nuevas formas de expresarse y habitar la danza.",
    images: [
      {
        src: "/talleres-nuevos/flamenco-inicial-adultos.webp",
        alt: "Flamenco - Nivel Inicial",
      },
    ],
    horarios: [
      {
        age: "Nivel inicial",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Flamenco - Nivel Intermedio/Avanzado",
    teacher: "Cindy Mayorquín",
    description:
      "Un espacio para profundizar en la técnica y la interpretación dentro del flamenco. Se trabajan secuencias coreográficas, presencia corporal y musicalidad en el lenguaje propio del flamenco.",
    images: [
      {
        src: "/talleres-nuevos/flamenco-ad-avanzado.webp",
        alt: "Flamenco - Nivel Intermedio/Avanzado",
      },
    ],
    horarios: [
      {
        age: "Nivel intermedio/avanzado",
        schedule: "Consultar horarios",
      },
    ],
  },

  // =====================
  // DANZAS ÁRABES - Escuela Al'Adhra
  // =====================
  {
    title: "Danzas Árabes - Kids",
    teacher: "Jessica Rodríguez",
    description:
      "Una invitación a descubrir la belleza y la profundidad de la danza árabe. Iniciación lúdica a través del juego y la música. Se estimulan coordinación, expresión y creatividad. Aprender bailando y desfrutando en grupo.",
    images: [
      {
        src: "/talleres-nuevos/danza-arabe-infancias.webp",
        alt: "Danzas Árabes - Kids",
      },
    ],
    horarios: [
      {
        age: "Desde los 4 años",
        schedule: "Kids - Consultar horarios",
      },
    ],
  },
  {
    title: "Danzas Árabes - Teens",
    teacher: "Jessica Rodríguez",
    description:
      "Introducción a la técnica y el lenguaje de la danza árabe. Se trabaja musicalidad, secuencias y expresión. Un espacio para ganar confianza y presencia.",
    // images: [
    //   {
    //     src: "/talleres-nuevos/arabes-infancias.webp",
    //     alt: "Danzas Árabes - Teens",
    //   },
    // ],
    horarios: [
      {
        age: "10 a 14 años",
        schedule: "Teens - Consultar horarios",
      },
    ],
  },
  {
    title: "Danzas Árabes",
    teacher: "Jessica Rodríguez",
    description:
      "Una invitación a descubrir la belleza y la profundidad de la danza árabe. Clases para conectar con el cuerpo y la expresión personal. Se incorporan herramientas técnicas de la danza árabe. No se requiere experiencia previa.",
    images: [
      {
        src: "/talleres-nuevos/arabes-hobbie-adol-adultos.webp",
        alt: "Danzas Árabes - Jóvenes y Adultxs",
      },
    ],
    horarios: [
      {
        age: "Desde 14 años",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Danzas Árabes - Formación / Profesorado",
    teacher: "Jessica Rodríguez",
    description:
      "Propuesta para profundizar en la técnica y la enseñanza. Un camino de formación dentro de la danza árabe. Consultanos para más información.",
    horarios: [
      {
        age: "Formación / Profesorado",
        schedule: "Consultar horarios",
      },
    ],
  },

  // =====================
  // DANZAS URBANAS
  // =====================
  {
    title: "Danzas Urbanas - Just Dance Free",
    teacher: "Amira Pinolli",
    description:
      "Un espacio pensado para que las infancias descubran las danzas urbanas desde el movimiento y la diversión. Se aprenden técnicas y pasos adaptados a cada edad, en un entorno cuidado. A través del baile se promueven el compañerismo, el respeto y la conciencia corporal. Reggaetón, hip hop, dancehall y más para expresarse con libertad.",
    images: [
      {
        src: "/talleres-nuevos/urbanas-infancias.webp",
        alt: "Danzas Urbanas - Kids/Pre Teens",
      },
    ],
    horarios: [
      {
        age: "3 a 6 años",
        schedule: "Kids - Consultar horarios",
      },
      {
        age: "7 a 10 años",
        schedule: "Pre Teens - Consultar horarios",
      },
    ],
  },
  {
    title: "Danzas Urbanas - Delta Crew",
    teacher: "Tami Gómez",
    description:
      "Explorá Dancehall y Waacking: ritmo, actitud y mucha expresión. Clases intensas para conectar con la música y tu propio estilo. Movimiento, presencia y libertad en cada encuentro. No necesitás experiencia previa, solo ganas de bailar.",
    images: [
      {
        src: "/talleres-nuevos/urbanas-adol-adultos.webp",
        alt: "Danzas Urbanas - Delta Crew",
      },
    ],
    horarios: [
      {
        age: "+16 años",
        schedule: "Consultar horarios",
      },
    ],
  },

  // =====================
  // DANZAS FOLKLÓRICAS
  // =====================
  {
    title: "Danzas Folklóricas Argentinas",
    teacher: "Sonia Martínez",
    description:
      "Un espacio para conectar con nuestras raíces a través del movimiento. Zamba, chacarera, gato y chamamé desde el trabajo corporal y expresivo. Se abordan postura, musicalidad y coordinación en grupo. Una propuesta para compartir, disfrutar y habitar la danza.",
    images: [
      {
        src: "/talleres-nuevos/fol-adol-adultos.webp",
        alt: "Danzas Folklóricas Argentinas",
      },
    ],
    horarios: [
      {
        age: "+16 años",
        schedule: "Consultar horarios",
      },
    ],
  },

  // =====================
  // ARTES PLÁSTICAS
  // =====================
  {
    title: "Dibujo Artístico y Pintura Creativa",
    teacher: "Stefani Barrera",
    description:
      "Un espacio donde la creatividad se vuelve juego y el arte, expresión. A través del dibujo y la pintura exploramos colores, formas y texturas. La imaginación guía cada proceso, dando lugar a creaciones únicas. Un taller para experimentar, compartir y disfrutar del mundo visual.",
    images: [
      {
        src: "/talleres-nuevos/dibujo-infancias.webp",
        alt: "Dibujo Artístico y Pintura Creativa",
      },
    ],
    horarios: [
      {
        age: "5 a 12 años",
        schedule: "Infancias - Consultar horarios",
      },
    ],
  },
  {
    title: "Artes y Manualidades - Primero Yo",
    teacher: "María José Romera",
    description:
      "Un espacio para crear, aprender y disfrutar haciendo con las manos. Se exploran distintas técnicas: pintura decorativa, decoupage, reciclado creativo y más. También se trabaja sobre tela, lacas vitrales y bordado chino. Propuestas variadas para desarrollar creatividad y estilo propio.",
    images: [
      {
        src: "/talleres-nuevos/arte-manualidad-adultos.webp",
        alt: "Artes y Manualidades - Primero Yo",
      },
    ],
    horarios: [
      {
        age: "Adultxs",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Stop Motion",
    teacher: "Stefani Barrera",
    description:
      "Un laboratorio creativo donde las ideas se transforman en movimiento. Aprendemos la técnica de stop motion: fotografiar y mover objetos cuadro a cuadro para crear la ilusión de movimiento. Combinamos arte, narrativa, objetos e imagen para crear historias propias. Trabajamos con celular o cámara para producir nuestras animaciones.",
    images: [
      {
        src: "/talleres-nuevos/stop-motion-adol.webp",
        alt: "Stop Motion",
      },
    ],
    horarios: [
      {
        age: "Niños y adolescentes",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Arte para Nada",
    teacher: "Emilse Finessi",
    description:
      "Crear sin reglas, sin presión, sin expectativas. Dibujo y collage para explorar, probar y soltarse. Ejercicios para destrabar la mano y liberar la exigencia. Producción de una pieza en cada encuentro. Incluye materiales.",
    images: [
      {
        src: "/talleres-nuevos/dibujo-colage-adol-adultos.webp",
        alt: "Arte para Nada",
      },
    ],
    horarios: [
      {
        age: "Jóvenes y adultxs",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Dibujo Manga y Cómic",
    teacher: "Gino Barsotti",
    description:
      "Un espacio para crear personajes e historias propias. Aprendemos figura humana, rostros, perspectiva y narrativa visual. Combinamos técnica y creatividad para darle vida a tus ideas. Dibujo para imaginar, contar y expresarte.",
    images: [
      {
        src: "/talleres-nuevos/comic-manga-inf-adol.webp",
        alt: "Dibujo Manga y Cómic",
      },
    ],
    horarios: [
      {
        age: "Niñxs (+10) y adolescentes",
        schedule: "Consultar horarios",
      },
    ],
  },

  // =====================
  // PRÁCTICAS DEL BUEN VIVIR
  // =====================
  {
    title: "Taekwon-Do",
    teacher: "Oriana Gil",
    description:
      "Un arte marcial que combina disciplina, técnica y valores para la vida. Se trabajan defensa personal, coordinación, fuerza y resistencia. Clases adaptadas a cada edad, acompañando el desarrollo individual. Entrenamiento integral: cuerpo, mente y confianza.",
    images: [
      {
        src: "/talleres-nuevos/tkd-infancias.webp",
        alt: "Taekwon-Do - Infancias",
      },
    ],
    horarios: [
      {
        age: "3 a 12 años",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Taekwon-Do - Mujeres",
    teacher: "Oriana Gil",
    description:
      "Un espacio para entrenar, fortalecerse y ganar seguridad. No se requiere experiencia previa.",
    images: [
      {
        src: "/talleres-nuevos/tkd-mujeres+17.webp",
        alt: "Taekwon-Do - Mujeres +17",
      },
    ],
    horarios: [
      {
        age: "Mujeres +17",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Taekwon-Do ITF",
    teacher: "Darío Jeréz",
    description:
      "Formación en taekwon-do ITF desde la técnica, la disciplina y los valores. Se trabajan defensa personal, coordinación, fuerza y precisión. Entrenamientos adaptados a cada persona y nivel. Una práctica integral para desarrollar cuerpo, mente y confianza. Las graduaciones están avaladas a nivel provincial, nacional e internacional.",
    images: [
      {
        src: "/talleres-nuevos/tkd-adol-adultos.webp",
        alt: "Taekwon-Do ITF",
      },
    ],
    horarios: [
      {
        age: "+12 años",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Fotografía",
    teacher: "Dana Gómez",
    description:
      "Un espacio para descubrir la fotografía como forma de expresión. Se trabajan técnica, composición, mirada y edición. Exploramos el movimiento, la narrativa y la creatividad personal. Un taller para observar, crear y compartir en grupo.",
    images: [
      {
        src: "/talleres-nuevos/fotografia-adultos.webp",
        alt: "Fotografía",
      },
    ],
    horarios: [
      {
        age: "Jóvenes y adultxs",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Arquitectura para Infancias",
    teacher: "Belén Stefanich",
    description:
      "Un espacio para descubrir y crear a partir del entorno que nos rodea. Exploramos el espacio, las formas y los materiales a través del dibujo y maquetas. Aprendemos a imaginar, diseñar y construir con intención. Incluye materiales para experimentar y crear.",
    images: [
      {
        src: "/talleres-nuevos/arquit-infancias.webp",
        alt: "Arquitectura para Infancias",
      },
    ],
    horarios: [
      {
        age: "6 a 12 años",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "ActivaMente - Gimnasia Cerebral",
    teacher: "Adriana Bucci",
    description:
      "Un espacio para estimular la mente y disfrutar en grupo. Ejercitamos la memoria, la atención y distintas funciones cognitivas. Conocemos cómo funciona el cerebro y cómo mantenerlo activo. Propuestas dinámicas para compartir, aprender y sentirse mejor.",
    images: [
      {
        src: "/talleres-nuevos/gimn-cerebral-adultos.webp",
        alt: "ActivaMente - Gimnasia Cerebral",
      },
    ],
    horarios: [
      {
        age: "+60 años",
        schedule: "Consultar horarios",
      },
    ],
  },

  // =====================
  // ARTES ESCÉNICAS
  // =====================
  {
    title: "Taller de Teatro Cada muerte de obispo",
    teacher: "Emilio Ziaurriz",
    description:
      "Un espacio para jugar, explorar y crear desde el teatro. A través de dinámicas escénicas, se desarrolla expresión, presencia y creatividad. Cada persona descubre su propio lenguaje y forma de estar en escena. Una propuesta para experimentar, compartir y disfrutar en grupo.",
    images: [
      {
        src: "/talleres-nuevos/teatro-ad-adu.webp",
        alt: "Taller de Teatro Cada muerte de obispo",
      },
    ],
    horarios: [
      {
        age: "Jóvenes y adultxs",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Taller de Teatro",
    teacher: "Micaela Ruiz",
    description:
      "Un espacio para jugar, crear y expresarse a través del teatro. Se promueve la imaginación, la empatía y el trabajo en grupo. Exploramos escenas, personajes y dinámicas teatrales. Una propuesta para divertirse y potenciar la creatividad.",
    images: [
      {
        src: "/talleres-nuevos/teatro-inf-.webp",
        alt: "Taller de Teatro - Infancias",
      },
    ],
    horarios: [
      {
        age: "Infancias (+8 años)",
        schedule: "Consultar horarios",
      },
    ],
  },

  // =====================
  // MÚSICA
  // =====================
  {
    title: "Coro Como Pájaros en el Aire",
    teacher: "Sergio Mondaca",
    description:
      "Un espacio para compartir la música a través de la voz. Trabajamos técnica vocal, armonía y repertorio en grupo. La voz como instrumento para crear, conectar y disfrutar. Una experiencia colectiva llena de energía y emoción.",
    images: [
      {
        src: "/talleres-nuevos/coro-todas-edades.webp",
        alt: "Coro Como Pájaros en el Aire",
      },
    ],
    horarios: [
      {
        age: "Todas las edades",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Freestyle e Improvisación",
    teacher: "Juan Segundo Martín",
    description:
      "Un espacio para jugar con las palabras, el ritmo y la creatividad. Aprendemos rimas, flow, métricas y herramientas de improvisación. Exploramos la expresión, la confianza y la presencia al comunicar. Dinámicas para crear, improvisar y soltarse.",
    images: [
      {
        src: "/talleres-nuevos/frees-inf-adol.webp",
        alt: "Freestyle e Improvisación",
      },
    ],
    horarios: [
      {
        age: "De 8 a 16 años",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Canto",
    teacher: "Agustina Zapata",
    description:
      "Entrenamiento vocal con enfoque técnico y expresivo. Trabajamos respiración, vocalización, afinación y proyección. Exploramos la interpretación y la conexión con el repertorio. Una propuesta para desarrollar tu voz y ganar confianza escénica.",
    images: [
      {
       src: "/talleres-nuevos/canto-adol-adultos.webp",
        alt: "Canto",
      },
    ],
    horarios: [
      {
        age: "Jóvenes y adultxs - Niveles inicial e intermedio/avanzado",
        schedule: "Consultar horarios",
      },
    ],
  },
  {
    title: "Guitarra",
    teacher: "Juan Zubeldía",
    description:
      "Aprendé a tocar guitarra desde cero y a tu ritmo. Trabajamos técnica, postura y acordes para tocar canciones. Exploramos distintos estilos: rock, folklore, pop y más. Lectura musical y herramientas para acompañarte en el proceso. Un espacio para aprender, tocar y disfrutar la música.",
    images: [
      {
        src: "/talleres-nuevos/guitarra-inf-adol.webp",
        alt: "Guitarra",
      },
    ],
    horarios: [
      {
        age: "+8 años",
        schedule: "Consultar horarios",
      },
    ],
  },

  // =====================
  // MOVIMIENTO CORPORAL
  // =====================
  {
    title: "Coreo y Cardio",
    teacher: "Jessica Quesada",
    description:
      "Un taller que combina baile y entrenamiento para activar todo el cuerpo. Coreografías dinámicas junto a trabajo muscular y coordinación. Movimiento, energía y ritmo para mejorar tu estado físico. Una propuesta para entrenar, divertirse y liberar estrés.",
    images: [
      {
        src: "/talleres-nuevos/coreo-cardio-adultos.webp",
        alt: "Coreo y Cardio",
      },
    ],
    horarios: [
      {
        age: "Jóvenes y adultxs",
        schedule: "Consultar horarios",
      },
    ],
  },

  // =====================
  // LITERATURA
  // =====================
  {
    title: "Taller Literario Entre las Hojas",
    teacher: "Valeria Resenite",
    description:
      "Un espacio para descubrir el mundo de los libros y las historias. Leemos, imaginamos y creamos a partir de la literatura. Propuestas de escritura y lectura en voz alta. Una invitación a jugar con las palabras y la imaginación.",
    images: [
      {
        src: "/talleres-nuevos/taller-literario-inf.webp",
        alt: "Taller Literario Entre las Hojas",
      },
    ],
    horarios: [
      {
        age: "Infancias (7 a 11 años)",
        schedule: "Consultar horarios",
      },
    ],
  },

  // =====================
  // WORKSHOPS
  // =====================
  {
    title: "Workshop: Sellos para Emprendedores",
    teacher: "Guadalupe Olivarez",
    description:
      "Desarrollá la identidad de tu emprendimiento de forma creativa y accesible. Aprendé a crear sellos con acetato, goma eva, tela y linóleo. Exploramos el diseño y el packaging desde lo artesanal y experimental. Una propuesta para potenciar tu marca con recursos propios.",
    images: [
      {
        src: "/talleres-nuevos/sellos-adultos.webp",
        alt: "Workshop: Sellos para Emprendedores",
      },
    ],
    horarios: [
      {
        age: "Jóvenes y adultxs",
        schedule: "MAYO - Consultar horarios",
      },
    ],
  },
  {
    title: "Seminario Fotografía con Celular - Click Móvil",
    teacher: "Victoria Peralta",
    description:
      "Aprendé a sacar el máximo provecho a la cámara de tu celular. Enfoque, exposición, composición y uso de la luz. Edición básica y narrativa visual para crear imágenes con intención. Un espacio técnico-práctico para desarrollar tu mirada.",
    horarios: [
      {
        age: "+13 años y adultxs",
        schedule: "MAYO - Consultar horarios",
      },
    ],
  },
];