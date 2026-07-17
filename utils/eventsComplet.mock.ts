export interface EventImage {
  src: string;
  alt?: string;
}

export interface EventDocument {
  url: string;
  name?: string;
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
  documentUrl?: string;
  documentName?: string;
}

export const eventosCompletMock: Event[] = [
  {
    id: 204,
    image: "/agenda/junio/leo-maiello.webp",
    date: "2026-06-06",
    time: "21:00",
    title: "Leo Maiello – Yo, sin culpa",
    description:
      '“YO, sin culpa” es una charla en vivo que mezcla psicología, música, humor y reflexión en una experiencia íntima y honesta. Un encuentro para cuestionar las culpas que cargamos, reconocernos en nuestras historias and salir un poco más livianos.',
    slug: "leo-maiello-yo-sin-culpa",
    category: "eventos",
    tags: ["Charla", "Humor"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/maeillo-yo-sin-culpa/",
  },
  {
    id: 205,
    image: "/agenda/junio/cuarto-de-soda.webp",
    date: "2026-06-09",
    time: "21:00",
    title: "El Cuarto de Soda",
    description:
      "Llega EL CUARTO SODA, el homenaje que revive la esencia, el sonido y la estética de una de las bandas más importantes del rock en español. Un recorrido por todas las etapas de su historia musical, recreando en vivo la magia y evolución de sus canciones más emblemáticas. | Entradas en boletería y ticketera.",
    slug: "el-cuarto-de-soda",
    category: "eventos",
    tags: ["Música", "Rock"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/el-cuarto-soda/",
  },
  {
    id: 207,
    image: "/agenda/junio/el-explorador.webp",
    date: "2026-06-11",
    time: "18:30",
    title: "El Explorador",
    description:
      "Llega El Explorador con una nueva aventura para despertar el niño interior. Un espectáculo lleno de música, humor, emoción y canciones súper conocidas para cantar, bailar y disfrutar en familia. | Entradas en boletería y ticketera.",
    slug: "el-explorador",
    category: "eventos",
    tags: ["Infancias", "Música", "Show"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/el-explorador/",
  },
  {
    id: 208,
    image: "/agenda/junio/gira-sur.webp",
    date: "2026-06-12",
    time: "21:00",
    title: "José Luis Aguirre – Gira Sur",
    description:
      "La Patagonia recibe el canto del poeta y cantor cordobés. Llega con su GIRA SUR 26, trayendo su universo de canciones y el sentir popular a cada rincón del sur argentino. | Entradas en ticketera.",
    slug: "jose-luis-aguirre-gira-sur",
    category: "eventos",
    tags: ["Música", "Folklore"],
    ticketeraUrl:
      "https://www.entradaweb.com.ar/eventos?group=378",
  },
  {
    id: 209,
    image: "/agenda/junio/deseo-en-crisis.webp",
    date: "2026-06-18",
    time: "21:00",
    title: "Sol Despeinada – El deseo en crisis",
    description:
      "Qué pasó con el deseo en tiempos de apps, ansiedad, vínculos descartables y placer inmediato? Un encuentro para reflexionar, cuestionar y reírnos de esta paradoja moderna: todo parece estar al alcance, pero cada vez nos sentimos más desconectadxs del deseo. Con humor, información y sin tabúes, una invitación a pensar cómo deseamos, cómo nos vinculamos y qué lugar ocupa hoy el placer en nuestras vidas. | Entradas en ticketera.",
    slug: "sol-despeinada-el-deseo-en-crisis",
    category: "eventos",
    tags: ["Charla", "Humor"],
    ticketeraUrl:
      "https://innova-ticket.net",
  },
  {
    id: 210,
    image: "/agenda/junio/heroe.webp",
    date: "2026-06-20",
    time: "21:00",
    title: "Héroe – Lírico Pop",
    description:
      "Un espectáculo único que combina la potencia del Lírico Pop con la emoción del cine, transportando al público a los momentos más icónicos del Séptimo Arte. En esta nueva propuesta podrán disfrutar de temas e imágenes de Casablanca, Cinema Paradiso, El Padrino, Mujer Bonita, El Fantasma de la Ópera, Titanic y muchos éxitos más. | Entradas en boletería y ticketera.",
    slug: "heroe-lirico-pop",
    category: "eventos",
    tags: ["Música", "Show"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/heroe/",
  },
  {
    id: 211,
    image: "/agenda/julio/sinjiao.webp",
    date: "2026-07-31",
    time: "20:30",
    title: "Fernando Sanjiao – Quemado",
    description:
      "El reconocido comediante llega con \"Quemado\", su show más nuevo y potente. Una mirada hilarante sobre el caos cotidiano, el cansancio de seguirle el ritmo a la vida y esas situaciones que nos atraviesan a todos. Con su humor filoso y cercano, Sanjiao transforma la realidad en una hora y cuarto de risas aseguradas. | Entradas en boletería y ticketera.",
    slug: "fernando-sanjiao-quemado",
    category: "eventos",
    tags: ["Humor", "Show"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/fernando-sanjiao/",
  },
  {
    id: 212,
    image: "/agenda/junio/el-soñador.webp",
    date: "2026-06-19",
    time: "21:30",
    title: 'José Guajardo, "El Soñador" – Folclore Patagónico',
    description:
      "Cantautor roquense con más de 400 canciones escritas, José Guajardo lleva dos décadas creando música con profundo compromiso social y raíces patagónicas. Autor de temas como \"La bronca de Painefil\", \"Piqueteros del sur\" y \"Cuando se marchan los hijos\", su obra ha sido interpretada por artistas de todo el país y reconocida en escenarios nacionales e internacionales. Con su voz y su guitarra, Guajardo comparte historias que emocionan, reivindican y nos conectan con lo más genuino del sur. | Entradas en boletería.",
    slug: "jose-guajardo-el-sonador-folclore-patagonico",
    category: "eventos",
    tags: ["Música", "Folklore"],
  },
  {
    id: 213,
    image: "/agenda/junio/cazadores-de-trufas.webp",
    date: "2026-06-02",
    time: "20:30",
    title:
      'Cineclub TYÖ – Ciclo películas de perros: "Cazadores de trufas"',
    description:
      'En los bosques del Piamonte, un grupo de ancianos busca con la ayuda de sus perros uno de los ingredientes más caros del mundo: La trufa blanca del alba. Los hombres guardan sus secretos — los recorridos, las técnicas, los trucos de cada animal — como si fueran los últimos del mundo. Dir. Michael Dweck & Gregory Kershaw. | Entradas en boletería.',
    slug: "cineclub-tyo-cazadores-de-trufas",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },
  {
    id: 214,
    image: "/agenda/junio/iris-eskracovia-psicodelia-simio.webp",
    date: "2026-06-05",
    time: "21:30",
    title: "IRIS + Eskracovia + La Psicodelia del Simio",
    description:
      "Una noche para celebrar la música en todas sus formas. Latin Jazz, Rock Progresivo, Jazz Funk, Rock Psicodélico y muchos más cruces sonoros se unen en una propuesta única de la mano de tres bandas de la ciudad. | Entradas en las redes de las bandas o al 2984152725.",
    slug: "iris-eskracovia-psicodelia-simio",
    category: "eventos",
    tags: ["Música", "Rock"],
  },
  {
    id: 215,
    image: "/agenda/junio/feria-agroecologica-cultural-junio.webp",
    date: "2026-06-06",
    startDate: "2026-06-06",
    endDate: "2026-06-06",
    time: "10:00",
    title: "Feria agroecológica cultural",
    description: "Un espacio para productores locales y regionales, emprendedores, y artesanxs que laboren desde la conciencia, el respeto por el territorio y la economía social y solidaria. | Entrada libre.",
    slug: "feria-agroecologica-cultural-junio",
    category: "eventos",
    tags: ["Comunidad", "Feria"],
  },
  {
    id: 216,
    image: "/agenda/junio/nidoteca-avion.webp",
    date: "2026-06-06",
    time: "10:30",
    title:
      '2do encuentro "Nidoteca" – Avión que va, avión que viene. Poesía para volar.',
    description:
      "Un espacio para compartir la palabra poética, despertar la imaginación y disfrutar en familia. Un encuentro pensado para bebés, niñxs y sus acompañantes, donde los cuentos, los juegos y la poesía invitan a volar juntos. | Facilita: Marlys Fernandez. Inscripción en boletería o al 2984 760708 - 2984 351387.",
    slug: "nidoteca-avion-que-va-avion-que-viene",
    category: "eventos",
    tags: ["Infancias", "Taller", "Literatura"],
  },
  {
    id: 217,
    image: "/agenda/junio/feria-agroecologica.webp",
    date: "2026-06-13",
    startDate: "2026-06-13",
    endDate: "2026-06-13",
    time: "10:00",
    title: "Feria agroecológica cultural",
    description:
      "Un espacio para productores locales y regionales, emprendedores, y artesanxs que laboren desde la conciencia, el respeto por el territorio y la economía social y solidaria. | Entrada libre.",
    slug: "feria-agroecologica-cultural-junio-13",
    category: "eventos",
    tags: ["Comunidad", "Feria"],
  },
  {
    id: 218,
    image: "/agenda/junio/entre-pañuelos.webp",
    date: "2026-06-13",
    startDate: "2026-06-13",
    endDate: "2026-06-13",
    time: "22:00",
    title: "Entre pañuelos: Elementos + Aldea Eluney – Música folclórica",
    description:
      "Elementos propone un recorrido por el folklore argentino desde una mirada contemporánea, donde paisaje, tradición y nuevas sonoridades se unen en cada canción. Aldea Eluney Dúo llega con una propuesta de canciones propias que fusionan ritmos andinos, folklore y géneros populares, inspiradas en la naturaleza, la cultura y las historias de nuestra tierra. Dos proyectos que invitan a encontrarse con la música de raíz folclórica que nos identifica. | Entradas en boletería, en las redes de los artistas @Elementosdelvalle - @Aldeaeluney y a través de los números 2915 265412 o al 2984 253280.",
    slug: "entre-panuelos-elementos-aldea-eluney",
    category: "eventos",
    tags: ["Música", "Folklore"],
  },
  {
    id: 219,
    image: "/agenda/junio/expo-viajera.webp",
    date: "2026-06-14",
    startDate: "2026-06-14",
    endDate: "2026-06-14",
    time: "16:00",
    title: "Feria Expo Viajera",
    description: "",
    slug: "feria-expo-viajera-junio",
    category: "eventos",
    tags: ["Comunidad", "Feria"],
  },
  {
    id: 220,
    image: "/agenda/junio/arg-vs-jordania.webp",
    date: "2026-06-22",
    startDate: "2026-06-22",
    endDate: "2026-06-22",
    time: "14:00",
    title: "Partido de Argentina vs Jordania",
    description:
      "Vení a ver cada partido de Argentina en pantalla gigante y compartí la emoción del fútbol junto a otros hinchas con comida rica, bebida fresquita y pantalla gigante. | Entrada libre",
    slug: "argentina-vs-jordania-22-junio",
    category: "eventos",
    tags: ["Deportes", "Pantalla gigante"],
  },
  {
    id: 221,
    image: "/agenda/junio/peliculas-de-perros.webp",
    date: "2026-06-23",
    startDate: "2026-06-23",
    endDate: "2026-06-23",
    time: "20:30",
    title:
      'Cineclub TYÖ – Corto + Peli: "Perro Blanco" y "L\'Empire de Médor"',
    description:
      '“L\'Empire de Médor” un corto documental satírico que explora el mundo de los amantes de los perros y critica, con humor, el consumismo y la industria creada alrededor de las mascotas y “Perro Blanco” una película que explora lo que hace un perro con aquello que le es inculcado por el humano. | Entradas en boletería',
    slug: "cineclub-tyo-perro-blanco-empire-medor",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },
  {
    id: 222,
    image: "/agenda/junio/karaoke-con-juanfer.webp",
    date: "2026-06-24",
    startDate: "2026-06-24",
    endDate: "2026-06-24",
    time: "21:30",
    title: "Karaoke con Juanfer San Nicolas – Premios en efectivo",
    description:
      "Una noche para animarse a cantar, compartir buena música y competir por premios en efectivo. La lista de participantes se realizará al ingresar al lugar. | Entradas en puerta",
    slug: "karaoke-juanfer-san-nicolas",
    category: "eventos",
    tags: ["Música", "Karaoke"],
  },
  {
    id: 223,
    image: "/agenda/junio/retratos-musicales.webp",
    date: "2026-06-26",
    startDate: "2026-06-26",
    endDate: "2026-06-26",
    time: "20:00",
    title:
      "Retratos Musicales | Cuerdas Patagónicas - Filarmónica de Río Negro",
    description:
      "El ensamble Cuerdas Patagónicas de la Orquesta filarmónica de Río Negro se presenta con un recorrido por distintas estéticas y épocas a través de obras emblemáticas con composiciones de João Ripper, Benjamin Britten, Luigi Boccherini, Giacomo Puccini y Antonio Vivaldi. | Colaboración voluntaria",
    slug: "retratos-musicales-cuerdas-patagonicas",
    category: "eventos",
    tags: ["Música", "Clásica"],
  },
  {
    id: 224,
    image: "/agenda/junio/arg-vs-jordania.webp",
    date: "2026-06-27",
    startDate: "2026-06-27",
    endDate: "2026-06-27",
    time: "23:00",
    title: "Partido de Argentina vs Jordania",
    description:
      "Vení a ver cada partido de Argentina en pantalla gigante y compartí la emoción del fútbol junto a otros hinchas con comida rica, bebida fresquita y pantalla gigante. | Entrada libre",
    slug: "argentina-vs-jordania-27-junio",
    category: "eventos",
    tags: ["Deportes", "Pantalla gigante"],
  },
  {
    id: 225,
    image: "/agenda/junio/cine-cub-la-noche.webp",
    date: "2026-06-30",
    startDate: "2026-06-30",
    endDate: "2026-06-30",
    time: "20:30",
    title:
      'Cineclub TYÖ: "La Noche Está Marchándose Ya"',
    description:
      'Pelu es un treintañero que a duras penas sobrevive con su salario de proyectorista de un cineclub municipal. Tras perder su trabajo, acepta quedarse como sereno nocturno y, por una serie de giros desafortunados, termina viviendo en secreto dentro del cine acompañado por las películas que revisa cada noche. Dir. Ezequiel Salinas y Ramiro Sonzini. | Entradas en boletería',
    slug: "cineclub-tyo-la-noche-esta-marchandose-ya",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },
  {
    id: 226,
    image: "/agenda/julio/fer-vaszquez.webp",
    date: "2026-07-01",
    startDate: "2026-07-01",
    endDate: "2026-07-01",
    time: "21:30",
    title: "Ciclo de peñas CDC: Fer Vazquez",
    description:
      "Desde Comallo hasta cada escenario, el cantautor patagónico Fer Vazquez comparte el canto sureño y las raíces de su tierra. Una noche para disfrutar de la música, las historias y la esencia de nuestra Patagonia. | Entradas en boletería",
    slug: "ciclo-penas-cdc-fer-vazquez",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
  },
  {
    id: 227,
    image: "/agenda/julio/arg-vs-cpv.webp",
    date: "2026-07-03",
    startDate: "2026-07-03",
    endDate: "2026-07-03",
    time: "19:00",
    title: "Partido de Argentina vs Cabo Verde",
    description:
      "Vení a ver cada partido de Argentina en pantalla gigante y compartí la emoción del fútbol junto a otros hinchas con comida rica, bebida fresquita y pantalla gigante. | Entrada libre",
    slug: "argentina-vs-cabo-verde-03-julio",
    category: "eventos",
    tags: ["Deportes", "Pantalla gigante"],
  },
  {
    id: 228,
    image: "/agenda/julio/iti-del-impulso.webp",
    date: "2026-07-04",
    startDate: "2026-07-04",
    endDate: "2026-07-04",
    time: "20:00",
    title: "Itinerario del pulso – Poesía y Música",
    description:
      "Una propuesta que reúne poesía y música en una muestra de los procesos creativos de Habitar Poesía. Habrá lecturas en vivo, música y un micrófono abierto. Referente del taller: Valeria Resenite. | Entrada libre",
    slug: "itinerario-del-pulso-poesia-musica",
    category: "eventos",
    tags: ["Música", "Literatura", "Poesía"],
  },
  {
    id: 229,
    image: "/agenda/julio/animal-o.webp",
    date: "2026-07-05",
    startDate: "2026-07-05",
    endDate: "2026-07-05",
    time: "20:00",
    title: "Animal o la Salida Humana – Luis Sartor",
    description:
      'Una de las obras más impactantes de la temporada llega a escena en un formato íntimo y potente que no deja indiferente a nadie.\n\nLuis A. Sartor protagoniza este extraordinario unipersonal dirigido por Víctor Laplace, inspirado en "Informe para una Academia" de Franz Kafka.\n\nLa historia de Pedro, el Rojo —un simio capturado que aprende a comportarse como humano para sobrevivir— se transforma en una reflexión tan profunda como actual sobre la libertad, la identidad y las jaulas que habitamos cada día.\n\nCon una actuación conmovedora, momentos de humor e ironía y una puesta que atrapa de principio a fin, esta obra invita al espectador a mirar(se) desde otro lugar.\n\nUna experiencia teatral intensa, inteligente y emocionante. | Entradas en boletería y ticketera',
    slug: "luis-sartor-animal-o-la-salida-humana",
    category: "eventos",
    tags: ["Teatro", "Escénicas"],
    ticketeraUrl: "https://survivo.com.ar/evento/animal-o-la-salida-humana/",
  },
  {
    id: 230,
    image: "/agenda/julio/a-todo-ritmo.webp",
    date: "2026-07-06",
    startDate: "2026-07-06",
    endDate: "2026-07-06",
    time: "21:00",
    title: "A Todo Ritmo – Just Dance Free",
    description:
      'El grupo de danzas urbanas Just Dance Free de la ciudad de General Roca, a cargo de la profesora Amira Pinolli, nos trae la muestra de mitad de año "A TODO RITMO".\n\nEste grupo está compuesto por participantes de 3 a 13 años, en donde se baila Hip Hop, Reggaeton, Dancehall y Acrobacia de piso. Actualmente sus clases son en Casa de la Cultura y sus inscripciones están abiertas todo el año. Búscalos en Instagram como @justdancefree.\n\nEn esta ocasión se mostrarán coreografías con temáticas diferentes que se han desarrollado esta primera mitad de año. También contaremos con grupos invitados de diferentes estilos como Folklore, Dancehall, Teatro y mucho más. | Entradas en ticketera',
    slug: "a-todo-ritmo-just-dance-free",
    category: "eventos",
    tags: ["Danza", "Muestra"],
    ticketeraUrl: "https://survivo.com.ar/evento/a-todo-ritmo-just-dance-free/",
  },
  {
    id: 231,
    image: "/agenda/julio/de-ruben.webp",
    date: "2026-07-10",
    startDate: "2026-07-10",
    endDate: "2026-07-10",
    time: "20:00",
    title: "Pacientes en Espera",
    description:
      "Una sala de espera médica se convierte en el escenario de encuentros tan cotidianos como absurdos. Mientras un grupo de pacientes aguarda la llegada de un médico que parece no llegar nunca, comienzan a aparecer historias personales, dolores, ansiedades, secretos y situaciones inesperadas.\n\nCada personaje trae consigo una forma particular de transitar la espera y, entre discusiones, confesiones y malentendidos, el tiempo se transforma en una sucesión de escenas cargadas de humor.\n\nSobre la propuesta Pacientes en espera, trabaja desde el humor de situaciones y la construcción de personajes reconocibles. Propone una experiencia teatral ágil y cercana donde el público puede identificarse con escenas de la vida cotidiana.\n\nDirección: Gabriela Dolinsky. | Entradas en ticketera",
    slug: "pacientes-en-espera",
    category: "eventos",
    tags: ["Teatro", "Escénicas"],
    ticketeraUrl: "https://survivo.com.ar/evento/pacientes-en-espera/",
  },
  {
    id: 234,
    image: "/agenda/julio/feed_25-07.png",
    date: "2026-07-25",
    startDate: "2026-07-25",
    endDate: "2026-07-25",
    time: "21:00",
    title: 'Adán y Eva "Un amor de aquellos"',
    description:
      "Una propuesta cálida y emotiva que invita a reflexionar sobre el amor, el paso del tiempo y las segundas oportunidades. Con humor, ternura e ironía, esta obra nos muestra que tanto pudo haber cambiado la relación entre los primeros habitantes del paraíso y la pareja actual.\n\nProtagonistas: Patricia Palmer y Mario Pasik.\nDirección: Diego Ramos. | Entradas en ticketera",
    slug: "adan-y-eva-un-amor-de-aquellos",
    category: "eventos",
    tags: ["Teatro", "Escénicas"],
    ticketeraUrl: "https://survivo.com.ar/evento/adan-y-eva-un-amor-de-aquellos/",
  },
  {
    id: 235,
    image: "/agenda/agosto/cirko-marisko.jpg",
    date: "2026-08-13",
    startDate: "2026-08-13",
    endDate: "2026-08-13",
    time: "21:00",
    title: 'Cirko Marisko – "Monoargentum"',
    description:
      'El espectáculo ganador del Premio Carlos 2026 a "Mejor Espectáculo de Humor" sale de gira nacional e internacional.\n\nCirko Marisko, el dúo cómico argentino que se consolidó como una de las grandes surprises de la última temporada teatral en Villa Carlos Paz, se prepara para recorrer el país con su aclamado show "Monoargentum".\n\nLa propuesta, protagonizada por Lucas "Crazy Waves" y Martín "Konga", logró una inmediata conexión con el público y la crítica, coronando su paso por la cartelera veraniega con el prestigioso Premio Carlos 2026 a Mejor Espectáculo de Humor.\n\nEn un contexto de alta competencia y una programación diversa, Cirko Marisko se destacó por su originalidad, su ritmo escénico y una propuesta que se sostuvo función tras función gracias al boca en boca y a la excelente respuesta del público.\n\nSobre el espectáculo: Comedia Urbana en su máxima expresión. El show fusiona humor, stand up, baile, música, street dance, improvisación y una fuerte participación del público en un formato único: la Comedia Urbana. Dinámico y apto para todo público: combina humor físico, picardía, absurdo y teatro en una experiencia ágil y directa desde el escenario. | Entradas en ticketera',
    slug: "cirko-marisko-monoargentum",
    category: "eventos",
    tags: ["Humor", "Show"],
    ticketeraUrl: "https://survivo.com.ar/evento/cirko-marisko-monoargentum/",
  },
  {
    id: 236,
    image: "/agenda/agosto/no-me-calmo.png",
    date: "2026-08-22",
    startDate: "2026-08-22",
    endDate: "2026-08-22",
    time: "21:00",
    title: 'Experiencia Dalia Gutmann – "No me calmo nada"',
    description:
      '"Experiencia Dalia Gutmann, No me calmo nada" es un show unipersonal que convierte la vida cotidiana en un show de comedia.\n\nFiel a su estilo verborrágico y alocado, la comediante cuenta las vivencias de una señora que está llegando a los 50, madre de dos adolescentes, en pareja hace mil aunque ya no se use. ¿Su especialidad? Transformar varios de esos temas que nos complican la vida, en risas.\n\nHace más de 20 años que Dalia Gutmann se dedica a la comedia, y se ha convertido en una voz clave para reflejar el universo de las mujeres a través del humor. Los hombres que asisten a sus espectáculos se divierten escuchando confesiones que solo pueden hacerse cuando hay risas.\n\nEs un show, pero también es una celebración a la imperfección. Es comedia, pero también catarsis. | Entradas en ticketera',
    slug: "experiencia-dalia-gutmann-no-me-calmo-nada",
    category: "eventos",
    tags: ["Humor", "Show"],
    ticketeraUrl: "https://survivo.com.ar/evento/experiencia-dalia-gutmann/",
  },
  {
    id: 237,
    image: "/agenda/septiembre/chaplin-como-nunca.png",
    date: "2026-09-26",
    startDate: "2026-09-26",
    endDate: "2026-09-26",
    time: "20:00",
    title: "Chaplin como nunca lo viste – Cineclub TYÖ + Ensamble XX-XXI",
    description:
      'CHAPLIN VUELVE A LA PANTALLA GRANDE CON MÚSICA EN VIVO: UNA EXPERIENCIA ÚNICA ENTRE CINE Y CONCIERTO.\n\nEl Cineclub TYÖ presentará en Casa de la Cultura de General Roca una función especial de "El niño" (The Kid), la emblemática película de Charles Chaplin, acompañada por música en vivo interpretada por el Ensamble XX-XXI, bajo la dirección de Anderson Perea da Silva.\n\nEstrenada en 1921, El niño constituye una de las obras más importantes de la historia del cine. En ella, Chaplin combina con maestría el humor característico de su personaje Charlot con una profunda sensibilidad social y humana. La historia narra el vínculo entre un humilde vagabundo y un niño abandonado, construyendo un relato que alterna momentos de ternura, risas y emoción, y que continúa conmoviendo a espectadores de todas las edades más de cien años después de su estreno.\n\nEn 1971, con motivo del reestreno y el 50 aniversario de la película, Chaplin compuso una banda sonora junto a otros músicos colaboradores. El Ensamble XX-XXI interpretará una adaptación de esta banda sonora con arreglos especialmente concebidos para la formación instrumental del ensamble. Esta adaptación busca preservar el espíritu musical que acompaña la obra de Chaplin, respetando sus principales temas, climas y recursos expresivos, al tiempo que explora las posibilidades tímbricas y sonoras de un conjunto contemporáneo.\n\nLejos de funcionar como un mero acompañamiento, la música se convierte en un elemento fundamental de la narración. Cada gesto, cada escena de humor, cada momento de emoción encuentra en la interpretación en vivo una resonancia particular, potenciando el vínculo entre la pantalla y el público.\n\nLa propuesta invita a disfrutar del cine de Charles Chaplin y su música desde una perspectiva diferente, reuniendo estos lenguajes artísticos en una experiencia inmersiva e irrepetible.\n\nUna película con una sonrisa y, tal vez, una lágrima… | Entradas en ticketera',
    slug: "chaplin-como-nunca-lo-viste",
    category: "eventos",
    tags: ["Cine", "Música", "Cineclub"],
  },
  {
    id: 238,
    image: "/agenda/octubre/OVEJA NEGRA FEED-08.png",
    date: "2026-10-24",
    startDate: "2026-10-24",
    endDate: "2026-10-24",
    time: "22:00",
    title: 'Juanpi González – "Oveja Negra"',
    description:
      'Juampi González presenta Oveja Negra, su cuarto unipersonal de humor, una propuesta tan filosa como cercana donde se anima a explorar su identidad, sus contradicciones y el vértigo de acercarse a los 40 sin haber cumplido ninguno de los casilleros que "había que cumplir".\n\nCon un estilo honesto, incómodo y profundamente gracioso, Juampi se confiesa sobre ese momento extraño de la vida en el que parece que todos tienen un plan… menos uno. A través de anécdotas, reflexiones y observaciones cotidianas, el show invita a reírse de los mandatos, de sentirse raro, distinto o directamente perdido.\n\nOveja Negra es una experiencia de humor identificable y actual, que conecta con quienes alguna vez se sintieron fuera de lugar. Un espectáculo que demuestra que no estamos solos y que, en el fondo, somos muchos más de lo que creemos. Porque todos fuimos la oveja negra alguna vez… | Entradas en ticketera',
    slug: "juanpi-gonzalez-oveja-negra",
    category: "eventos",
    tags: ["Humor", "Show"],
  },
  {
    id: 239,
    image: "/agenda/julio/arg-vs-egp.webp",
    date: "2026-07-07",
    startDate: "2026-07-07",
    endDate: "2026-07-07",
    time: "13:00",
    title: "Partido de Argentina vs Egipto",
    description:
      "Viví el partido de octavos de final con comida rica, bebida fresquita, buena compañía y una pantalla gigante en CDC. | Entrada libre",
    slug: "argentina-vs-egipto-07-julio",
    category: "eventos",
    tags: ["Deportes", "Pantalla gigante"],
  },
  {
    id: 240,
    image: "/agenda/julio/rey-orlando.webp",
    date: "2026-07-08",
    startDate: "2026-07-08",
    endDate: "2026-07-08",
    time: "21:30",
    title: "Ciclo de peñas CDC – Roy Orlando con Emilio Salas y Facundo Galarza",
    description:
      "Una noche de puro folklore para disfrutar con el músico, guitarrista y compositor de folclore argentino Roy Macaya junto a Emilio Salas y Facundo Galarza, con la participación especial del taller de danzas folklóricas Nueva Esperanza, «La Retama» y los bailarines Mayra y Matías. | Entradas en boletería",
    slug: "ciclo-penas-roy-orlando-emilio-salas-facundo-galarza",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
  },
  {
    id: 241,
    image: "/agenda/julio/las-rondas-primera.webp",
    date: "2026-07-09",
    startDate: "2026-07-09",
    endDate: "2026-07-09",
    time: "21:00",
    title: "Las Rondas de Ley Primera 1ra edición – Con la participación de Aukiñ",
    description:
      "Ley Primera compartirá un repertorio de folclore argentino cargado de emoción y sentimiento, mientras que Aukiñ aportará una propuesta de ritmos folklóricos latinoamericanos desde la percusión, las voces y el trabajo colectivo en una noche para celebrar nuestras raíces a través de la música. | Entradas en boletería y con los artistas",
    slug: "las-rondas-ley-primera-aukin",
    category: "eventos",
    tags: ["Música", "Folklore"],
  },
  {
    id: 242,
    image: "/agenda/julio/dehors-20hs.png",
    date: "2026-07-11",
    startDate: "2026-07-11",
    endDate: "2026-07-11",
    time: "20:00",
    title: 'Estudio En Dehors presenta "Esto lo resolvemos entre todos"',
    description:
      'En la aldea de "Esto lo resolvemos entre todos", niños, adolescentes y adultos enfrentan un imprevisto que pondrá a prueba la convivencia, la responsabilidad y el valor del diálogo. Una muestra de danza clásica que, con humor y sensibilidad, invita a reflexionar sobre el crecimiento, los errores y la importancia de encontrar soluciones entre todos. | Entradas a través de la profesora @andrebasconcelo',
    slug: "estudio-en-dehors-esto-lo-resolvemos",
    category: "eventos",
    tags: ["Danza", "Muestra"],
  },
  {
    id: 244,
    image: "/agenda/julio/expo-viajera.webp",
    date: "2026-07-12",
    startDate: "2026-07-12",
    endDate: "2026-07-12",
    time: "16:00",
    title: "Feria Expo Viajera",
    description:
      "Paseo de expositores, arte, moda, deco y diseño. ¡Encontrá lo que buscas! | Entrada libre",
    slug: "feria-expo-viajera-julio-12",
    category: "eventos",
    tags: ["Comunidad", "Feria"],
  },
  {
    id: 245,
    image: "/agenda/julio/rio-con-historias.webp",
    date: "2026-07-13",
    startDate: "2026-07-13",
    endDate: "2026-07-13",
    time: "17:00",
    title: "Río con Historias – Títeres",
    description:
      "Una tarde de títeres para disfrutar en familia, con mucho humor, historias entrañables, enseñanzas y participación del público. | Entradas en boletería y ticketera www.survivo.com.ar/evento/ojitos-curiosos/",
    slug: "rio-con-historias-titeres",
    category: "eventos",
    tags: ["Títeres", "Infancias", "Festival"],
    ticketeraUrl: "https://survivo.com.ar/evento/ojitos-curiosos/",
  },
  {
    id: 246,
    image: "/agenda/julio/pistacho.webp",
    date: "2026-07-14",
    startDate: "2026-07-14",
    endDate: "2026-07-14",
    time: "17:00",
    title: "Pistacho en Viaje – Circo Teatro Clown",
    description:
      "Malabares, acrobatics y un show en monociclo en una historia sobre la perseverancia, los encuentros y el valor de ser uno mismo. | Entradas en boletería y ticketera www.survivo.com.ar/evento/pistacho-en-viaje/",
    slug: "pistacho-en-viaje",
    category: "eventos",
    tags: ["Circo", "Clown", "Infancias", "Festival"],
    ticketeraUrl: "https://survivo.com.ar/evento/pistacho-en-viaje/",
  },
  {
    id: 259,
    image: "/agenda/julio/arg-vs-eng.webp",
    date: "2026-07-15",
    startDate: "2026-07-15",
    endDate: "2026-07-15",
    time: "16:00",
    title: "Partido de Argentina vs Inglaterra",
    description:
      "Viví la semifinal con comida rica, bebida fresquita, buena compañía y una pantalla gigante en CDC. | Entrada libre",
    slug: "argentina-vs-inglaterra-15-julio",
    category: "eventos",
    tags: ["Deportes", "Pantalla gigante"],
  },
  {
    id: 260,
    image: "/agenda/julio/fer-vaszquez.webp",
    date: "2026-07-15",
    startDate: "2026-07-15",
    endDate: "2026-07-15",
    time: "21:30",
    title: "Ciclo de peñas CDC – Romina Pino",
    description:
      "Romina Pino, referente del folklore rionegrino, llega con más de 27 años de trayectoria y una propuesta que combina tradición, emoción y la fuerza de la música popular argentina. | Entradas en boletería",
    slug: "ciclo-penas-romina-pino",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
  },
  {
    id: 247,
    image: "https://res.cloudinary.com/dfli0n64m/image/upload/agenda/julio/duo-upa.webp",
    date: "2026-07-15",
    startDate: "2026-07-15",
    endDate: "2026-07-15",
    time: "18:00",
    title: "Dúo a Upa: El Gran Engaño de la Selva – Teatro Musical",
    description:
      "Un misterioso concurso ha revolucionado la selva y ningún animal quiere quedarse afuera. Entre canciones, desafíos inesperados, divertidos enredos y mucho humor, un simpático mono hará todo lo posible por cumplir su gran sueño. Pero no todo es lo que parece... El Gran Engaño de la Selva es una divertida aventura teatral y musical que invita a niños y niñas a sumergirse en una historia llena de sorpresas, personajes entrañables y de momentos de participación. A través de la amistad, la perseverancia y la imaginación, descubrirán que la verdad y el trabajo en equipo pueden ser mucho más valiosos que cualquier premio. | Entradas en ticketera",
    slug: "duo-a-upa-el-gran-engano-de-la-selva",
    category: "eventos",
    tags: ["Teatro Musical", "Infancias"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/duo-a-upa-el-gran-engano-de-la-selva/",
  },
  {
    id: 248,
    image: "https://res.cloudinary.com/dfli0n64m/image/upload/agenda/julio/cuento-sol.webp",
    date: "2026-07-16",
    startDate: "2026-07-16",
    endDate: "2026-07-16",
    title: "Cuentos de Sol y Tierra – Teatro",
    description:
      "El Tiempo, encarnado en una hechicera, revela el origen del cosmos a través de objetos de cerámica que cobran vida sobre el escenario. Es una cosmogonía atravesada por los cuatro elementos —fuego, agua, aire y tierra—, donde el barro se transforma en memoria viva y en un puente entre lo ancestral y el presente. Esta obra interdisciplinaria integra teatro físico, cerámica sonora y música en vivo para crear una experiencia poética y sensorial destinada a todo público. A través de imágenes, sonidos y movimiento, invita a reflexionar sobre nuestra relación con la naturaleza y el impacto de nuestras acciones en el ecosistema. | Entradas en ticketera",
    slug: "cuentos-de-sol-y-tierra",
    category: "eventos",
    tags: ["Teatro", "Escénicas"],
    ticketeraUrl: "https://survivo.com.ar/evento/cuento-de-sol-y-tierra/",
  },
  {
    id: 249,
    image: "/agenda/julio/circo-del-valle.webp",
    date: "2026-07-17",
    startDate: "2026-07-17",
    endDate: "2026-07-17",
    time: "17:00",
    title: "Circo del Valle – Circo",
    description:
      "Un espectáculo de circo, color y humor que transforma lo cotidiano en una experiencia llena de juego e imaginación. | Entradas en boletería y ticketera www.survivo.com.ar/evento/circo-del-valle/",
    slug: "circo-del-valle",
    category: "eventos",
    tags: ["Circo", "Infancias", "Festival"],
    ticketeraUrl: "https://survivo.com.ar/evento/circo-del-valle/",
  },
  {
    id: 261,
    image: "/agenda/julio/kitapena.webp",
    date: "2026-07-17",
    startDate: "2026-07-17",
    endDate: "2026-07-17",
    time: "19:00",
    title: "Kitapena – Degustación, Arte y Música",
    description:
      "Degustaciones de vinos, espumantes, cervezas, whiskies y una coctelería artesanal fina con el acompañamiento de buen arte y música para llenar el ambiente. | Entradas en boletería y con RRPP autorizados",
    slug: "kitapena-degustacion-arte-y-musica",
    category: "eventos",
    tags: ["Gastronomía", "Música", "Degustación"],
  },
  {
    id: 250,
    image: "/agenda/julio/poder-kpop.webp",
    date: "2026-07-18",
    startDate: "2026-07-18",
    endDate: "2026-07-18",
    time: "15:00",
    title: "Poder K-Pop – Guerreras y Demonios",
    description:
      "La oscuridad se expande y amenaza con apoderarse del mundo… pero tres chicas muy especiales fueron enviadas para protegernos. | Entradas en boletería y ticketera www.survivo.com.ar/evento/poder-kpop/",
    slug: "poder-kpop-guerreras-y-demonios",
    category: "eventos",
    tags: ["Infancias", "Música", "Show", "Festival"],
    ticketeraUrl: "https://survivo.com.ar/evento/poder-kpop/",
  },
  {
    id: 251,
    image: "/agenda/julio/escuadron-al-rescate.webp",
    date: "2026-07-18",
    startDate: "2026-07-18",
    endDate: "2026-07-18",
    time: "17:00",
    title: "Escuadrón al Rescate",
    description:
      "Cuando una emergencia pone en riesgo a la comunidad, Ryder y la Patrulla entran en acción para demostrar que, con trabajo en equipo, no hay misión imposible. | Entradas en boletería y ticketera www.survivo.com.ar/evento/escuadronal-rescate/",
    slug: "escuadron-al-rescate",
    category: "eventos",
    tags: ["Infancias", "Teatro", "Show", "Festival"],
    ticketeraUrl: "https://survivo.com.ar/evento/escuadronal-rescate/",
  },
  {
    id: 262,
    image: "/agenda/julio/voragine.webp",
    date: "2026-07-18",
    startDate: "2026-07-18",
    endDate: "2026-07-18",
    time: "22:00",
    title: "Vorágine – Tributo a Airbag",
    description:
      "Reviví los temas clásicos y nuevos de Airbag en una noche llena de energía, guitarras y puro rock nacional. | Entradas con los artistas",
    slug: "voragine-tributo-airbag",
    category: "eventos",
    tags: ["Música", "Rock", "Tributo"],
  },
  {
    id: 252,
    image: "https://res.cloudinary.com/dfli0n64m/image/upload/agenda/julio/pochoclo.webp",
    date: "2026-07-20",
    startDate: "2026-07-20",
    endDate: "2026-07-20",
    title: "Pochoclo y sus Malabares – Teatro Clown",
    description:
      "Un actor que presenta un payaso que luego presenta otro payaso... con una gran incógnita que promete revelar al final del show. ¿Qué es lo que hay debajo de la nariz del payaso? Este simpático personaje nos muestra trucos con diferentes elementos de malabares, mientras juega con el público y los hace reír. | Entradas en ticketera",
    slug: "pochoclo-y-sus-malabares",
    category: "eventos",
    tags: ["Clown", "Infancias"],
    ticketeraUrl: "https://survivo.com.ar/evento/pochoclo-y-sus-malabares/",
  },
  {
    id: 253,
    image: "https://res.cloudinary.com/dfli0n64m/image/upload/agenda/julio/pan-gomitas.webp",
    date: "2026-07-21",
    startDate: "2026-07-21",
    endDate: "2026-07-21",
    title: "Me Mandaron a Comprar Pan y Traje Gomitas – Títeres",
    description:
      "\"Me mandaron a comprar pan y traje gomitas\" es una obra de títeres que recorre, con humor, ternura y poesía, las distintas etapas de la infancia. A través de personajes entrañables, juegos, descubrimientos y pequeñas aventuras cotidianas, la obra invita a viajar por esos territorios donde la imaginación transforma lo simple en extraordinario. Entre risas, preguntas y travesuras, los títeres evocan la curiosidad, los miedos, la alegría de crecer y la capacidad infinita de asombro que habita en las niñas y los niños. La historia celebra la infancia como un tiempo de exploración, creatividad y libertad. | Entradas en ticketera",
    slug: "me-mandaron-a-comprar-pan-y-traje-gomitas",
    category: "eventos",
    tags: ["Títeres", "Infancias"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/me-mandaron-a-comprar-pan-y-traje-gomitas/",
  },
  {
    id: 254,
    image: "https://res.cloudinary.com/dfli0n64m/image/upload/agenda/julio/juegos-teatrales.webp",
    date: "2026-07-22",
    startDate: "2026-07-22",
    endDate: "2026-07-22",
    title: "Juegos Teatrales – Creá Tu Propio Personaje",
    description:
      "¿Te imaginás convertirte en alguien completamente diferente por un rato? En este encuentro teatral, niños y niñas de 8 a 12 años exploran el mundo de la actuación a través del juego, la imaginación y la creatividad. Durante 2 hs los participantes jugarán con el cuerpo, la voz, las emociones y distintos desafíos teatrales para descubrir personajes únicos y divertidos. Una propuesta lúdica para desarrollar la confianza, expresión, creatividad y trabajo en equipo. No hace falta experiencia previa, solo ganas de jugar. Cupo Mín 6 / Máx 24. | Entradas en ticketera",
    slug: "juegos-teatrales-crea-tu-propio-personaje",
    category: "eventos",
    tags: ["Taller", "Infancias", "Teatro"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/juegos-teatrales-crea-tu-propio-personaje/",
  },
  {
    id: 255,
    image: "https://res.cloudinary.com/dfli0n64m/image/upload/agenda/julio/marionetas.webp",
    date: "2026-07-23",
    startDate: "2026-07-23",
    endDate: "2026-07-23",
    title: "Hilado de Marionetas – Teatro de Marionetas",
    description:
      "Desde una puesta de pulpería de época, los personajes presentan un recorrido breve de música latinoamericana y europea, con danzas típicas, interpretando así cada género musical. | Entradas en ticketera",
    slug: "hilado-de-marionetas",
    category: "eventos",
    tags: ["Teatro de Marionetas", "Música"],
    ticketeraUrl: "https://survivo.com.ar/evento/hilado-de-marionetas/",
  },
  {
    id: 256,
    image: "https://res.cloudinary.com/dfli0n64m/image/upload/agenda/julio/detras-gajo.webp",
    date: "2026-07-24",
    startDate: "2026-07-24",
    endDate: "2026-07-24",
    title: "Detrás de un Gajo – Teatro de Marionetas",
    description:
      "Historia, adaptación del cuento \"El gajo del viento\". En un bosque que a veces se parece a un monte, las vidas que lo habitan, un día de primavera, se sienten amenazadas por otras vidas que arrasan con todo en su camino. La obra aborda la temática ambiental y el reciclado. | Entradas en ticketera",
    slug: "detras-de-un-gajo",
    category: "eventos",
    tags: ["Teatro de Marionetas", "Infancias"],
    ticketeraUrl: "https://survivo.com.ar/evento/detras-de-un-gajo/",
  },
  {
    id: 257,
    image: "https://res.cloudinary.com/dfli0n64m/image/upload/agenda/julio/cerdi%C3%B1a.webp",
    date: "2026-07-25",
    startDate: "2026-07-25",
    endDate: "2026-07-25",
    title: "Cerdiña: La Niña y el Jabalí – Teatro",
    description:
      "El encuentro entre una niña perdida y un jabalí herido en la estepa patagónica da inicio a una transformación inesperada. Malén se separa de su grupo durante un paseo escolar por el monte y, en medio de la incertidumbre y el temor que trae la llegada de la noche, encuentra a un jabalí herido. A partir de este hecho, ambos emprenden un recorrido lleno de desafíos, encuentros e interacciones con el entorno y con el vasto universo que propone la Patagonia. En este viaje transformador, Malén se convierte en una heroína que dialoga y convive con animales, presencias mágicas y fuerzas sagradas. A través de estas experiencias de conexión espiritual, la historia pone de manifiesto la importancia del cuidado de la naturaleza y la necesidad de fortalecer nuestro vínculo con ella. | Entradas en ticketera",
    slug: "cerdina-la-nina-y-el-jabali",
    category: "eventos",
    tags: ["Teatro", "Infancias"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/cerdina-la-nina-y-el-jabali/",
  },
  {
    id: 258,
    image: "https://res.cloudinary.com/dfli0n64m/image/upload/agenda/julio/carrito-magico.webp",
    date: "2026-07-25",
    startDate: "2026-07-25",
    endDate: "2026-07-25",
    title: "El Carrito Mágico – Títeres",
    description:
      "El Carrito Mágico llega con sus valijas cargadas de ilusión para presentar dos propuestas encantadoras: \"Armonía, burbujas y melodías\" y \"Muñestre, pintor de sueños\". Un espectáculo participativo que combina teatro de títeres de varilla, música, juego e imaginación. A través de personajes entrañables y situaciones poéticas, la propuesta invita a niñas y niños a sumergirse en un universo donde los objetos cobran vida, la fantasía transforma la realidad y cada encuentro se convierte en una aventura compartida. Pensada para toda la familia, esta propuesta promueve la expresión artística, el juego colectivo y la creatividad, generando un espacio cálido, inclusivo y lleno de magia. | Entradas en ticketera",
    slug: "el-carrito-magico",
    category: "eventos",
    tags: ["Títeres", "Infancias"],
    ticketeraUrl: "https://survivo.com.ar/evento/el-carrito-magico/",
  },
];

export function getEventoBySlug(slug: string) {
  return eventosCompletMock.find((evento) => evento.slug === slug);
}

// Normaliza hora a formato HH:MM (con ceros adelante)
function normalizeTime(time: string | undefined): string {
  if (!time) return "00:00";
  const [hours, minutes] = time.split(":");
  return `${hours.padStart(2, "0")}:${(minutes || "0").padStart(2, "0")}`;
}

// Ordena eventos por fecha y hora cronológicamente
export function getEventosOrdenados(): Event[] {
  return [...eventosCompletMock].sort((a, b) => {
    const fechaA = a.date || a.startDate || "";
    const fechaB = b.date || b.startDate || "";
    const horaA = normalizeTime(a.time);
    const horaB = normalizeTime(b.time);

    // Primero por fecha, luego por hora
    if (fechaA !== fechaB) {
      return fechaA.localeCompare(fechaB);
    }
    return horaA.localeCompare(horaB);
  });
}

export function getRelatedEventos(currentSlug: string, tags: string[], limit = 3) {
  const hoy = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  return eventosCompletMock
    .filter(
      (evento) =>
        evento.slug !== currentSlug &&
        (evento.date || evento.startDate || "") >= hoy &&
        evento.tags.some((tag) => tags.includes(tag)),
    )
    .slice(0, limit);
}