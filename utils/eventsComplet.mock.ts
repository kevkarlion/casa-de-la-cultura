export interface EventImage {
  src: string;
  alt?: string;
}

export interface Event {
  id: number;
  image: string;
  images?: EventImage[];
  date: string;
  startDate?: string;
  endDate?: string;
  time?: string;
  title: string;
  description: string;
  slug: string;
  category: "eventos";
  tags: string[];
  ticketeraUrl?: string;
}

export const eventosCompletMock: Event[] = [
  {
    id: 27,
    image: "/agenda/marzo/cineclub.webp",
    date: "2026-03-02",
    startDate: "2026-03-02",
    endDate: "2026-03-02",
    time: "21:30",
    title: "Cineclub TYÖ: Función sorpresa",
    description: `
El patio de nuestra Casa vuelve a transformarse en un espacio de encuentro para compartir cine al aire libre en el 7mo ciclo de verano de Cineclub Työ.

Para despedir este hermoso ciclo la función será sorpresa. Una invitación a disfrutar del cine bajo las estrellas junto a amigxs o familia y descubrir la película especial que preparamos para esta noche. | Entradas en boletería.
`,
    slug: "cineclub-tyo-funcion-sorpresa-lunes-02",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },

  {
    id: 28,
    image: "/agenda/marzo/demi-carabajal.webp",
    date: "2026-03-04",
    startDate: "2026-03-04",
    endDate: "2026-03-04",
    time: "21:00",
    title: "Peña con Demi Carabajal",
    description: `
Una noche de peña inolvidable para bailar y cantar junto al reconocido músico y cantautor Demi Carabajal.

Compositor, guitarrista y percusionista, presenta canciones que cruzan los límites entre el folklore y el rock. Sus temas han sido interpretados por grandes artistas como Mercedes Sosa, Raly Barrionuevo y Peteco Carabajal. | Entradas en boletería y ticketera.
`,
    slug: "pena-demi-carabajal-miercoles-04",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
    ticketeraUrl: "",
  },

  {
    id: 29,
    image: "/agenda/marzo/batalla-barberos.webp",
    date: "2026-03-05",
    startDate: "2026-03-05",
    endDate: "2026-03-05",
    time: "22:00",
    title: "Batalla de Barberos",
    description: `
Se viene una Batalla de Barberos en CDC con modelos en vivo y un jurado que evaluará cada detalle: impacto visual, precisión y velocidad.

Una jornada para mostrar talento, creatividad y técnica en la comunidad barber. | Inscripción al 2984728699.
`,
    slug: "batalla-de-barberos-jueves-05",
    category: "eventos",
    tags: ["Comunidad", "Barbería", "Competencia"],
  },

  {
    id: 30,
    image: "/agenda/marzo/conversaciones.webp",
    date: "2026-03-06",
    startDate: "2026-03-06",
    endDate: "2026-03-06",
    time: "20:30",
    title: "Conversaciones: Mónica García y Facundo Haag",
    description: `
Relatos de adultos enlazados en una conversación y acompañados por canciones.

Textos de Angélica Gorosdicher, Hernán Casciari y Liliana Bodoc se combinan con crónicas de vida narradas por Mónica García y el acompañamiento musical de Facundo Haag. | Entrada libre aporte consciente.
`,
    slug: "conversaciones-monica-garcia-facundo-haag",
    category: "eventos",
    tags: ["Escénicas", "Narración", "Música"],
  },

  {
    id: 31,
    image: "/agenda/marzo/cultura-sound.webp",
    date: "2026-03-06",
    startDate: "2026-03-06",
    endDate: "2026-03-06",
    time: "21:00",
    title: "Cultura Sound Festival – Vol. 1",
    description: `
La primera edición de un encuentro donde el ritmo y la hermandad son protagonistas.

Vuela Reggae: desde Cipolletti con lo mejor del reggae roots.

La Chirola SkaBand Ft. Sessiones: ska tradicional con metales, energía y la participación especial de Lucho Espinosa, guitarrista de Sessiones.

Una noche de música jamaiquina para celebrar el nacimiento de un nuevo clásico en la ciudad. | Entradas en boletería y ticketera.
`,
    slug: "cultura-sound-festival-vol-1",
    category: "eventos",
    tags: ["Música", "Reggae", "Ska"],
    ticketeraUrl: "",
  },

  {
    id: 32,
    image: "/agenda/marzo/tango.webp",
    date: "2026-03-07",
    startDate: "2026-03-07",
    endDate: "2026-03-07",
    time: "21:00",
    title: "Como dos extraños – Covatti & Lucero",
    description: `
Mariano Covatti y Carolina Lucero presentan un dúo de guitarra y voz dedicado al tango tradicional.

Un recorrido por clásicos del repertorio tanguero con una propuesta que pone en primer plano la palabra y la melodía como expresión viva de nuestra cultura. | Entrada libre aporte consciente.
`,
    slug: "como-dos-extranos-covatti-lucero",
    category: "eventos",
    tags: ["Música", "Tango", "Acústico"],
  },
  {
    id: 33,
    image: "/agenda/marzo/cineclub-juicio.webp",
    date: "2026-03-10",
    startDate: "2026-03-10",
    endDate: "2026-03-10",
    time: "21:00",
    title:
      "Cineclub TYÖ – Ciclo Las películas de juicios: Un grito en la oscuridad",
    description: `
Cineclub TYÖ inaugura este nuevo ciclo de películas nuevamente en Sala 2 con la proyección de “Un grito en la oscuridad” (A Cry in the Dark), dir. Fred Schepisi.

Basada en la historia real de Lindy Chamberlain, quien, durante una acampada familiar en el centro de Australia, afirmó haber visto cómo un dingo se llevaba a su hija pequeña de su tienda de campaña. Acusada de asesinato deberá demostrar su versión de los hechos de lo que pasó aquella noche. | Entradas en boletería.
`,
    slug: "cineclub-tyo-ciclo-juicios-un-grito-en-la-oscuridad",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },
  {
    id: 34,
    image: "/agenda/marzo/ciclo-peñas.webp",
    date: "2026-03-11",
    startDate: "2026-03-11",
    endDate: "2026-03-11",
    time: "21:30",
    title: "Noche de Peña",
    description: `
El encuentro de cada semana que nos trae música, raíces y comunidad.

Una noche llena de folklore para bailar, cantar y disfrutar al aire libre. | Entrada libre aporte consciente.
`,
    slug: "noche-de-pena-miercoles-11",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
  },
  {
    id: 35,
    image: "/agenda/marzo/trio-escabeche.webp",
    date: "2026-03-12",
    startDate: "2026-03-12",
    endDate: "2026-03-12",
    time: "20:30",
    title:
      "Trío Escabeche, picante y sabroso (Reversiones del rock nacional)",
    description: `
El grupo musical conformado por Ulises Giménez, Elvis Damián Jakimezuk y Matías Solorza presentan un show donde, a través del bajo, la guitarra y la trompeta, reversionarán clásicos del rock nacional. | Entrada libre aporte consciente.
`,
    slug: "trio-escabeche-reversiones-rock-nacional",
    category: "eventos",
    tags: ["Música", "Rock Nacional", "Acústico"],
  },
  {
    id: 36,
    image: "/agenda/marzo/orquesta-bacan.webp",
    date: "2026-03-13",
    startDate: "2026-03-13",
    endDate: "2026-03-13",
    time: "20:00",
    title: "Orquesta Bacán + Akelarre e’cumbia + Reventón Tropical",
    description: `
Orquesta Bacán junto a Akelarre e' cumbia presentan una noche de pura celebración en el patio de CDC para despedir el verano con tambores y ritmos afrolatinos. | Entradas en boletería y ticketera.
`,
    slug: "orquesta-bacan-akelarre-e-cumbia-reventon-tropical",
    category: "eventos",
    tags: ["Música", "Cumbia", "Afrolatino", "Fiesta"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/orquesta-bacan-akelarre-e-cumbia-reventon-tropica/",
  },
  {
    id: 37,
    image: "/agenda/marzo/pasaporte.webp",
    date: "2026-03-14",
    startDate: "2026-03-14",
    endDate: "2026-03-14",
    time: "20:30",
    title: "Pasaporte TANGONOVA",
    description: `
Un dúo compuesto por Elisa Malén (voz) y Mauricio Pérez Mondadori (piano) con una propuesta innovadora: recorrer la música del mundo con canciones en varios idiomas y originales adaptaciones de tango al inglés, creando una experiencia íntima y renovadora donde se encuentran tradición y nuevos sonidos. | Entrada libre aporte consciente.
`,
    slug: "pasaporte-tangonova",
    category: "eventos",
    tags: ["Música", "Tango", "Canción", "Acústico"],
  },
  {
    id: 38,
    image: "/agenda/marzo/eter-andy.webp",
    date: "2026-03-14",
    startDate: "2026-03-14",
    endDate: "2026-03-14",
    time: "21:00",
    title: "Éter & Andy Watson y Nano",
    description: `
Éter es un proyecto musical que busca representar a través del sonido aquello intangible y espiritual: una presentación etérea, íntima y profunda de la mano de Franco Venezuela (voz y guitarra), Roberto Fuentes (guitarra, trompeta y sintetizador), Amparo Olmedo (bajo) y Justina Olmedo (batería y percusión). | Entradas en boletería y ticketera.

Andy Watson y Nano presentan una propuesta de música de autor con tintes de canciones del mundo y una fusión de estilos que crean un show con identidad, energía y sonido propio. | Entradas en boletería y ticketera.
`,
    slug: "eter-andy-watson-y-nano",
    category: "eventos",
    tags: ["Música", "Autor", "Fusión", "En vivo"],
    ticketeraUrl: "https://survivo.com.ar/evento/eter-andy-watson-y-nano/",
  },
   {
     id: 39,
     image: "/agenda/marzo/feria-expo-viajera.webp",
     date: "2026-03-15",
     startDate: "2026-03-15",
     endDate: "2026-03-15",
     time: "15:00",
     title: "Feria Expo Viajera",
     description: `
 Un paseo de emprendedores y artesanos de la comunidad con una gran variedad de productos, desde deco y arte hasta moda y diseño. ¡Encontrá lo que buscás en este espacio! | Entrada libre.
 `,
     slug: "feria-expo-viajera",
     category: "eventos",
     tags: ["Comunidad", "Feria", "Emprendedores"],
   },
  {
    id: 40,
    image: "/agenda/abril/milena-salamanca.webp",
    date: "2026-04-08",
    startDate: "2026-04-08",
    endDate: "2026-04-08",
    time: "22:00",
    title: "Milena Salamanca",
    description: `
Milena Salamanca es una cantautora, bailarina y gestora cultural nacida en La Plata. Su propuesta artística combina los sonidos urbanos de su ciudad con la identidad musical de su infancia, dando forma a una obra sensible y contemporánea dentro del folclore argentino.

Fue reconocida como Revelación en el Festival Nacional de Folklore de Cosquín en 2012, y desde entonces ha construido una destacada trayectoria dentro de la nueva escena de la música de raíz. En 2016 lanzó su primer disco, K’arallanta, producido junto a Charly Palermo y Pablo Vignati. Más tarde editó su segundo álbum, Milena, con producción de Raly Barrionuevo.

Actualmente, tras su participación en La Voz Argentina, presenta su nuevo EP Crónicas Vol. 2, ya disponible en todas las plataformas digitales.

Milena Salamanca es hoy una de las voces más representativas de la nueva generación de la música de raíz argentina y latinoamericana. | Entradas en boletería y ticketera.
`,
    slug: "milena-salamanca",
    category: "eventos",
    tags: ["Música", "Folklore", "En vivo"],
    ticketeraUrl: "https://survivo.com.ar/evento/milena-salamanca/",
  },
  {
    id: 41,
    image: "/agenda/abril/mentiras-sobre-el-amor.webp",
    date: "2026-04-11",
    startDate: "2026-04-11",
    endDate: "2026-04-11",
    time: "21:00",
    title: "Nico Serna en Mentiras sobre el Amor",
    description: `
Una obra que te hace reír, recordar y mirarte de otra manera.

Mentiras sobre el Amor es una experiencia teatral que combina humor, emoción y reflexión para explorar uno de los temas que más nos atraviesa: el amor.

A través de situaciones cotidianas, escenas profundas y momentos llenos de humor inteligente, la obra recorre esos vínculos y experiencias que todos hemos vivido alguna vez: los primeros enredos del corazón, los amores que idealizamos, las historias que nos marcaron y aquellas que nos enseñaron a volver a intentar.

Con una narrativa dinámica que integra momentos audiovisuales, música y escenas que conectan directamente con el público, la propuesta invita a reír, emocionarse y reconocerse en cada historia.

Una obra cercana, honesta y entretenida que recuerda algo simple y poderoso: amar —y amarnos— es parte esencial de la vida. | Entradas en boletería y ticketera.
`,
    slug: "mentiras-sobre-el-amor-nico-serna",
    category: "eventos",
    tags: ["Teatro", "Humor", "Escénicas"],
    ticketeraUrl: "https://survivo.com.ar/evento/mentiras-sobre-el-amor/",
  },
  {
    id: 42,
    image: "/agenda/abril/pirulo-en-el-aire.webp",
    date: "2026-04-17",
    startDate: "2026-04-17",
    endDate: "2026-04-17",
    time: "21:00",
    title: "Pirulo en el Aire",
    description: `
Una desopilante comedia familiar sobre la fama, la televisión y el amor fraternal.

El querido personaje Pirulo Valmaceda, ganador de tres Premios Carlos de la Gente, llega con un nuevo espectáculo lleno de humor, situaciones absurdas y mucha interacción con el público.

En Pirulo en el Aire, el protagonista cumple su sueño de convertirse en estrella de televisión. Sin embargo, lo que parecía el gran salto a la fama pronto se transforma en un caos cómico entre sets de grabación, egos mediáticos y situaciones completamente inesperadas.

El regreso de su inseparable hermano Segundo desata aún más enredos cuando aparece una misteriosa figura femenina que pondrá a prueba el vínculo entre ambos, generando una disparatada competencia de seducción que los llevará a momentos tan ridículos como entrañables.

Con el humor sano y la espontaneidad que caracterizan al personaje, Pirulo comparte escenario con Mauro Villaverde y Gerardo Coniglio en una comedia que satiriza el detrás de escena de la televisión y promete carcajadas para toda la familia.

Elenco: Pirulo Valmaceda, Mauro Villaverde, Gerardo Coniglio, Mariano Garnero, Segundo Valmaceda y figura femenina. | Entradas en boletería y ticketera.
`,
    slug: "pirulo-en-el-aire",
    category: "eventos",
    tags: ["Teatro", "Comedia", "Familia"],
    ticketeraUrl: "https://survivo.com.ar/evento/pirulo-en-el-aire/",
  },
  {
    id: 43,
    image: "/agenda/abril/hernan-piquin.webp",
    date: "2026-04-21",
    startDate: "2026-04-21",
    endDate: "2026-04-21",
    time: "21:00",
    title: "Hernán Piquín presenta: Me verás volver",
    description: `
Un espectáculo de danza inspirado en la música de Soda Stereo.

El reconocido bailarín y coreógrafo Hernán Piquín, reciente ganador del Martín Fierro a la Trayectoria Artística en la Danza, regresa a los escenarios con Me verás volver, un espectáculo emotivo que rinde homenaje a una de las bandas más influyentes del rock en español: Soda Stereo.

Con diez bailarines en escena, una cuidada puesta coreográfica y una narrativa profundamente humana, la obra propone un recorrido sensible a través de la música del grupo, interpretada desde el lenguaje de la danza.

La historia sigue a Juan y Ana, quienes se conocen en un concierto de Soda Stereo. Lo que comienza como un encuentro casual se transforma en un amor profundo construido entre gestos, miradas y silencios. Cuando la enfermedad atraviesa sus vidas, ambos eligen sostenerse en el amor y la esperanza. Tras la partida de Ana, queda en brazos de Juan no solo el recuerdo, sino también una hija que representa la continuidad de ese amor.

El espectáculo cuenta con un elenco de bailarines cordobeses y propone una experiencia escénica que va más allá del tributo musical: una interpretación poética y emotiva de la música de Soda Stereo a través de la danza. | Entradas en boletería y ticketera.
`,
    slug: "hernan-piquin-me-veras-volver",
    category: "eventos",
    tags: ["Danza", "Música", "Rock", "Escénicas"],
    ticketeraUrl: "https://survivo.com.ar/evento/hernan-piquin/",
  },
  {
    id: 44,
    image: "/agenda/marzo/cineclub-septimo-jurado.webp",
    date: "2026-03-17",
    startDate: "2026-03-17",
    endDate: "2026-03-17",
    time: "21:00",
    title: "Cineclub TYÖ – Ciclo Las películas de juicios: El séptimo jurado",
    description: `
Más allá del estrado existe un tribunal invisible: la conciencia. Cineclub TYÖ presenta “El séptimo jurado” (Le septième juré), dir. Georges Lautner.

Con una atmósfera existencialista, la película explora cómo construimos la verdad interior cuando quien cometió un crimen debe juzgar a un inocente. | Entradas en boletería.
`,
    slug: "cineclub-tyo-el-septimo-jurado",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },
  {
    id: 45,
    image: "/agenda/marzo/pena-8m.webp",
    date: "2026-03-18",
    startDate: "2026-03-18",
    endDate: "2026-03-18",
    time: "21:30",
    title: "Mujeres y disidencias en trama | Peña en conmemoración del 8M",
    description: `
Música, danza y palabra para celebrar la creación y el trabajo de mujeres y personas disidentes. 

Participan Auka Folk (grupo folclórico del Valle integrado por cinco mujeres), Latidos de Mujeres (compañía de danza) y lecturas de la Secretaría de Derechos Humanos, Género e Igualdad de Oportunidades de Unter.

Se solicita colaboración con un alimento no perecedero para compañerxs afectadxs por recortes de puestos. | Entradas en boletería y ticketera.
`,
    slug: "mujeres-y-disidencias-en-trama-pena-8m",
    category: "eventos",
    tags: ["Música", "Folklore", "Danza", "Comunidad"],
    ticketeraUrl: "https://survivo.com.ar/evento/pena-en-conmemoracion-del-8m/",
  },
  {
    id: 46,
    image: "/agenda/marzo/pausa-escucha.webp",
    date: "2026-03-19",
    startDate: "2026-03-19",
    endDate: "2026-03-19",
    time: "19:30",
    title: "Pausa | Sesión de escucha activa",
    description: `
Experiencia inmersiva de escucha profunda. Incluye recepción, asanas suaves guiadas por Florencia Garro para liberar tensiones y una inmersión sonora en vivo a cargo de NoLugar.

Un set ambient con grabaciones de paisajes marinos y texturas de sintetizador para aquietar la mente y conectar con el cuerpo. | Entradas en boletería y ticketera.
`,
    slug: "pausa-sesion-de-escucha-activa",
    category: "eventos",
    tags: ["Comunidad", "Bienestar", "Música"],
    ticketeraUrl: "https://survivo.com.ar/evento/pausa-sesion-de-escucha-activa/", // Nota: Se usó el link provisto
  },
  {
    id: 47,
    image: "/agenda/marzo/habia-un-cuento.webp",
    date: "2026-03-21",
    startDate: "2026-03-21",
    endDate: "2026-03-21",
    time: "20:30",
    title: "Había un cuento",
    description: `
Ciclo de cuentacuentos para niñes de 2 a 10 años. Historias originales de la actriz Paula La Sala, acompañadas por canciones propias y clásicos de María Elena Walsh. 

Una propuesta de narración con guitarra, voz y chelo para viajar a mundos mágicos en familia. | Entradas en boletería y ticketera.
`,
    slug: "habia-un-cuento-infancias",
    category: "eventos",
    tags: ["Infancias", "Teatro", "Música"],
    ticketeraUrl: "https://survivo.com.ar/evento/habia-un-cuento/",
  },
  {
    id: 48,
    image: "/agenda/marzo/guerreras-kpop.webp",
    date: "2026-03-22",
    startDate: "2026-03-22",
    endDate: "2026-03-22",
    time: "17:00",
    title: "Guerreras K-pop",
    description: `
Las Guerreras Doradas del K-POP presentan un show inmersivo y teatral que traslada la energía de la pantalla al escenario. 

Coreografías, efectos especiales y música en una aventura interactiva donde el público puede convertirse en el cuarto miembro de la banda. ¡Ideal para fans del género! | Entradas en boletería y ticketera.
`,
    slug: "guerreras-k-pop-show",
    category: "eventos",
    tags: ["Infancias", "Música", "K-pop", "Teatro"],
    ticketeraUrl: "https://www.tuentrada.com",
  },
  {
    id: 49,
    image: "/agenda/marzo/se-dice-culturas-radio.webp",
    date: "2026-03-24",
    startDate: "2026-03-24",
    endDate: "2026-03-24",
    time: "20:00",
    title: "Se Dice Culturas – Especial radio en vivo: A 50 años del último golpe militar",
    description: `
Después de la marcha, te esperamos para conversar sobre la construcción de la memoria con un programa de radio en vivo y abierto al público con el acompañamiento de artistas locales cantando a la justicia y a la verdad. | Entrada a colaboración.
`,
    slug: "se-dice-culturas-especial-radio-golpe-militar",
    category: "eventos",
    tags: ["Comunidad", "Radio", "Memoria"],
  },

  {
    id: 50,
    image: "/agenda/marzo/noche-de-pena-fernando-carmona.webp",
    date: "2026-03-25",
    startDate: "2026-03-25",
    endDate: "2026-03-25",
    time: "21:30",
    title: "Noche de Peña – Fernando Carmona & amigos",
    description: `
El encuentro de cada semana que nos trae música, raíces y comunidad.

En esta ocasión nos acompaña Fernando Carmona y artistas invitadxs para disfrutar de una noche de puro baile y folklore. | Entrada popular en boletería y anticipadas.
`,
    slug: "noche-de-pena-fernando-carmona-miercoles-25",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
  },

  {
    id: 51,
    image: "/agenda/marzo/sampler-club-collage.webp",
    date: "2026-03-26",
    startDate: "2026-03-26",
    endDate: "2026-03-26",
    time: "20:30",
    title: "Sampler Club Collage",
    description: `
Un espacio creativo dedicado a la exploración y reinterpretación a través de la experimentación con el collage. | Inscripción vía formulario, incluye una bebida.
`,
    slug: "sampler-club-collage-jueves-26",
    category: "eventos",
    tags: ["Comunidad", "Arte", "Taller"],
    ticketeraUrl: "https://forms.gle/mHbvSJwifN9g3S547",
  },

  {
    id: 52,
    image: "/agenda/marzo/charly-fabrica-alfajores.webp",
    date: "2026-03-27",
    startDate: "2026-03-27",
    endDate: "2026-03-27",
    time: "21:00",
    title: "Charly y la fábrica de alfajores",
    description: `
Un show de rock nacional que rinde homenaje a la obra de Charly García, recorriendo sus distintas etapas musicales.

Con una propuesta que combina clásicos infaltables y guiños para fans, la banda logra unir generaciones en un mismo viaje sonoro. | Entradas en boletería y ticketera.
`,
    slug: "charly-y-la-fabrica-de-alfajores-viernes-27",
    category: "eventos",
    tags: ["Música", "Rock Nacional", "En vivo"],
    ticketeraUrl: "https://survivo.com.ar/evento/charly-y-la-fabrica-de-alfajores/",
  },

  {
    id: 53,
    image: "/agenda/marzo/soulsticie-jazz-bossa.webp",
    date: "2026-03-28",
    startDate: "2026-03-28",
    endDate: "2026-03-28",
    time: "17:00",
    title: "Soulsticie Jazz & Bossa",
    description: `
Un dúo musical que recorre clásicos del jazz, bossa, blues y bolero con arreglos propios y un estilo íntimo y elegante. Guitarra fingerstyle y voz cálida se unen en un sonido orgánico, sofisticado y lleno de emoción, con composiciones originales incluidas. | Entradas en boletería y ticketera.
`,
    slug: "soulsticie-jazz-bossa-sabado-28",
    category: "eventos",
    tags: ["Música", "Jazz", "Bossa Nova", "Acústico"],
    ticketeraUrl: "https://survivo.com.ar/evento/soulstice-jazz-bossa/",
  },

  {
    id: 54,
    image: "/agenda/mayo/julieta-laso.webp",
    date: "2026-05-16",
    startDate: "2026-05-16",
    endDate: "2026-05-16",
    time: "20:30",
    title: "Julieta Laso",
    description: `
La cantora argentina Julieta Laso se presenta en vivo junto al guitarrista Leandro Ángeli, con un repertorio que recorre tangos, valses, boleros y canciones de su último disco Pata de Perra, además de clásicos de su carrera.

Reconocida por su estilo intenso y por su trayectoria en el tango —incluyendo su paso por la Orquesta Fernández Fierro—, Laso ha lanzado cinco discos, obtuvo premios como los Premios Gardel y fue distinguida como Personalidad Destacada de la Cultura.

Su propuesta combina lo tradicional y lo contemporáneo, con una voz profunda que atraviesa distintos géneros latinoamericanos. | Entradas en boletería y ticketera.
`,
    slug: "julieta-laso-abril-16",
    category: "eventos",
    tags: ["Música", "Tango", "En vivo", "Canción"],
    ticketeraUrl: "https://survivo.com.ar/evento/julieta-laso/",
  },
  {
    id: 55,
    image: "/agenda/marzo/cineclub-justicia-para-todos.webp",
    date: "2026-03-31",
    startDate: "2026-03-31",
    endDate: "2026-03-31",
    time: "21:00",
    title:
      "Cineclub TYÖ – Ciclo Las películas de juicios: Justicia para todos",
    description: `
  Cineclub TYÖ continúa el ciclo de películas de juicios con la proyección de “Justicia para todos” (…And Justice for All), dir. Norman Jewison.
  
  Un íntegro abogado que detesta la corrupción se ve obligado a defender en juicio a un juez que desprecia, bajo amenaza de ser inhabilitado. Un film que se posiciona desde la rabia política para denunciar el cinismo y la burocracia que enturbian el acceso a la justicia. | Entradas en boletería.
  `,
    slug: "cineclub-tyo-justicia-para-todos",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },
  
  {
    id: 56,
    image: "/agenda/abril/taller-bebes-amar-la-mar.webp",
    date: "2026-04-01",
    startDate: "2026-04-01",
    endDate: "2026-04-01",
    time: "18:00",
    title: "Taller para Bebés: Amar la Mar – Las Magdalenas",
    description: `
  Sumergite en un vaivén de paisajes sonoros creado para fortalecer el vínculo con tu pequeño a través del arte.
  
  Un taller de música, juegos y colores pensado para bebés y niñxs de 0 a 3 años junto a uno o dos adultos acompañantes. | Entrada en entradaweb.com. Asociados de UNTER cuentan con un 15% de descuento.
  `,
    slug: "taller-bebes-amar-la-mar-las-magdalenas",
    category: "eventos",
    tags: ["Infancias", "Taller", "Música"],
    ticketeraUrl: "https://www.entradaweb.com.ar/",
  },
  
  {
    id: 57,
    image: "/agenda/abril/pena-fer-vazquez-victor-gonzalez.webp",
    date: "2026-04-01",
    startDate: "2026-04-01",
    endDate: "2026-04-01",
    time: "21:30",
    title: "Noche de Peña: Fer Vázquez y Víctor González",
    description: `
  El encuentro de cada semana que nos trae música, raíces y comunidad.
  
  En esta ocasión celebramos la música junto a Fer Vázquez y Víctor González, en una noche cargada de tradición, emoción y buena energía. | Entrada popular en boletería y anticipadas.
  `,
    slug: "noche-de-pena-fer-vazquez-victor-gonzalez",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
  },
  
  {
    id: 58,
    image: "/agenda/abril/las-magdalenas-canciones-para-jugar.webp",
    date: "2026-04-02",
    startDate: "2026-04-02",
    endDate: "2026-04-02",
    time: "18:00",
    title: "Las Magdalenas – Canciones para jugar",
    description: `
  Las Magdalenas presentan “Canciones para Jugar”, un viaje musical por el mundo de las emociones y la imaginación.
  
  Un espectáculo lleno de ternura, juego y música pensado para toda la familia, especialmente para niñxs desde los 2 años. | Entrada en entradaweb.com. Asociados de UNTER cuentan con un 15% de descuento.
  `,
    slug: "las-magdalenas-canciones-para-jugar",
    category: "eventos",
    tags: ["Infancias", "Música", "Teatro"],
    ticketeraUrl: "https://www.entradaweb.com.ar/evento/25ea60b1/stop/1",
  },
  
  {
    id: 59,
    image: "/agenda/abril/muestra-madres-malvinas.webp",
    date: "2026-04-02",
    startDate: "2026-04-02",
    endDate: "2026-04-02",
    time: "20:30",
    title: "Muestra Fotográfica: Madres de Malvinas",
    description: `
  Una propuesta del Observatorio de Malvinas Argentinas de la Legislatura de Río Negro y la Dirección Provincial de Veteranos de Guerra que invita a reflexionar y emocionar.
  
  A través de esta exposición se visibiliza el profundo dolor, la lucha y la memoria de las Madres de Malvinas, quienes durante más de 40 años han sostenido una historia muchas veces silenciada.
  
  Coordinan Sonia Almada y Rubén Pablos junto a los veteranos Ricardo Flores y Jorge Torres. | Entrada libre.
  `,
    slug: "muestra-fotografica-madres-de-malvinas",
    category: "eventos",
    tags: ["Comunidad", "Muestra", "Memoria"],
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