//utils/eventsComplet.mock.ts
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
    id: 25,
    image: "/agenda/abril/taller-bebes-amar-la-mar.webp",
    date: "2026-04-01",
    startDate: "2026-04-01",
    endDate: "2026-04-01",
    time: "18:00",
    title: "Taller para Bebés: Amar la Mar",
    description:
      "Paisajes sonoros para fortalecer el vínculo a través del arte. Para niñxs de 0 a 3 años. | Entrada en entradaweb.com.",
    slug: "taller-bebes-amar-la-mar-las-magdalenas",
    category: "eventos",
    tags: ["Infancias", "Taller", "Música"],
    ticketeraUrl: "https://www.entradaweb.com.ar/",
  },

  // NUEVOS
  {
    id: 100,
    image: "/agenda/abril/breaker-morant.webp",
    date: "2026-04-14",
    startDate: "2026-04-14",
    endDate: "2026-04-14",
    time: "21:00",
    title:
      "Cineclub TYÖ: Después de la emboscada (Breaker Morant)",
    description:
      "En el vasto y polvoriento Veld sudafricano, tres soldados australianos enfrentan las reglas ocultas de la guerra. | Entradas en boletería.",
    slug: "cineclub-tyo-breaker-morant",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },
  {
    id: 101,
    image: "/agenda/abril/pena-semanal.webp",
    date: "2026-04-15",
    startDate: "2026-04-15",
    endDate: "2026-04-15",
    time: "21:30",
    title: "Noche de Peña",
    description:
      "El encuentro semanal que reúne música, raíces y comunidad. | Entrada en boletería.",
    slug: "noche-de-pena-semanal-abril-15",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
  },
  {
    id: 102,
    image: "/agenda/abril/expediente-culebra.webp",
    date: "2026-04-17",
    startDate: "2026-04-17",
    endDate: "2026-04-17",
    time: "22:00",
    title: "Expediente Culebra",
    description:
      "Trío que fusiona rock, hip hop y trap para crear un sonido único y potente. | Entradas en boletería y ticketera.",
    slug: "expediente-culebra",
    category: "eventos",
    tags: ["Música", "Rock"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/expediente-culebra/",
  },
  {
    id: 103,
    image: "/agenda/abril/memorias-latinoamericanas.webp",
    date: "2026-04-18",
    startDate: "2026-04-18",
    endDate: "2026-04-18",
    time: "21:00",
    title: "Memorias Latinoamericanas",
    description:
      "Obra teatral bilingüe inspirada en Eduardo Galeano que recorre el siglo XX latinoamericano. | Entradas en boletería y ticketera.",
    slug: "memorias-latinoamericanas",
    category: "eventos",
    tags: ["Teatro", "Escénicas"],
  },

  {
    id: 26,
    image: "/agenda/abril/pena-fer-vazquez-victor-gonzalez.webp",
    date: "2026-04-01",
    startDate: "2026-04-01",
    endDate: "2026-04-01",
    time: "21:30",
    title: "Noche de Peña: Fer Vázquez y Víctor González",
    description:
      "Celebramos la música y las raíces en una noche cargada de tradición y buena energía. | Entrada popular.",
    slug: "noche-de-pena-fer-vazquez-victor-gonzalez",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
  },

  {
    id: 27,
    image: "/agenda/abril/las-magdalenas-canciones-para-jugar.webp",
    date: "2026-04-02",
    startDate: "2026-04-02",
    endDate: "2026-04-02",
    time: "18:00",
    title: "Las Magdalenas – Canciones para jugar",
    description:
      "Espectáculo lleno de ternura y música para toda la familia. | Entrada en entradaweb.com.",
    slug: "las-magdalenas-canciones-para-jugar",
    category: "eventos",
    tags: ["Infancias", "Música", "Teatro"],
    ticketeraUrl:
      "https://www.entradaweb.com.ar/evento/25ea60b1/stop/1",
  },

  {
    id: 28,
    image: "/agenda/abril/muestra-madres-malvinas.webp",
    date: "2026-04-02",
    time: "20:30",
    title: "Muestra Fotográfica: Madres de Malvinas",
    description:
      "Visibilización del dolor y la lucha de las Madres de Malvinas. | Entrada libre.",
    slug: "muestra-fotografica-madres-de-malvinas",
    category: "eventos",
    tags: ["Comunidad", "Muestra", "Memoria"],
  },

  {
    id: 60,
    image: "/agenda/abril/testigo-cargo.webp",
    date: "2026-04-07",
    time: "21:00",
    title: "Cineclub TYÖ: Testigo de cargo",
    description:
      "Un abogado enfermo vuelve a los tribunales en un caso insólito. | Entradas en boletería.",
    slug: "cineclub-tyo-testigo-de-cargo",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },

  {
    id: 40,
    image: "/agenda/abril/milena-salamanca.webp",
    date: "2026-04-08",
    time: "22:00",
    title: "Noche de peña: Milena Salamanca",
    slug: "noche-de-pena-milena-salamanca-abril",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
    description: "",
    ticketeraUrl:
      "https://survivo.com.ar/evento/milena-salamanca/",
  },

  {
    id: 62,
    image: "/agenda/abril/madre-mia.webp",
    date: "2026-04-09",
    time: "21:00",
    title: "Mery Ceballos: Madre Mía",
    description: "",
    slug: "madre-mia-mery-ceballos",
    category: "eventos",
    tags: ["Música", "Teatro"],
  },

  {
    id: 64,
    image: "/agenda/abril/coronadas-de-gloria.webp",
    date: "2026-04-10",
    time: "21:00",
    title: "Coronadas de Gloria",
    description: "",
    slug: "coronadas-de-gloria",
    category: "eventos",
    tags: ["Humor"],
  },

  {
    id: 41,
    image: "/agenda/abril/mentiras-sobre-el-amor.webp",
    date: "2026-04-11",
    time: "23:00",
    title: "Nico Serna: Mentiras sobre el Amor",
    description: "",
    slug: "mentiras-sobre-el-amor-nico-serna",
    category: "eventos",
    tags: ["Teatro", "Humor"],
  },

  {
    id: 68,
    image: "/agenda/abril/feria-expo-viajera-domingo.webp",
    date: "2026-04-12",
    time: "16:00",
    title: "Feria Expo Viajera",
    description: "",
    slug: "feria-expo-viajera-abril",
    category: "eventos",
    tags: ["Comunidad"],
  },

  {
    id: 31,
    image: "/agenda/abril/pirulo-en-el-aire.webp",
    date: "2026-04-17",
    time: "21:00",
    title: "Pirulo en el Aire",
    description: "",
    slug: "pirulo-en-el-aire",
    category: "eventos",
    tags: ["Teatro", "Comedia"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/pirulo-en-el-aire/",
  },

  {
    id: 32,
    image: "/agenda/abril/hernan-piquin-agotadas.webp",
    date: "2026-04-21",
    time: "21:00",
    title: "Hernán Piquín presenta: Me verás volver",
    description:
      "Un emotivo espectáculo de danza tributo a Soda Stereo que recorre grandes éxitos de la banda con 10 bailarines en escena y una narrativa sobre el amor y la tragedia. | *Entradas agotadas*",
    slug: "hernan-piquin-me-veras-volver",
    category: "eventos",
    tags: ["Danza", "Música"],
    ticketeraUrl: "https://survivo.com.ar/evento/hernan-piquin-segunda-funcion/",
  },

  // EXTRAS
  
  
  {
    id: 201,
    image: "/agenda/abril/por-siempre-fosse.webp",
    date: "2026-04-25",
    time: "20:00",
    title: "Por Siempre Fosse",
    description:
      "Espectáculo que homenajea el estilo del legendario coreógrafo Bob Fosse.",
    slug: "por-siempre-fosse",
    category: "eventos",
    tags: ["Danza", "Teatro"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/por-siempre-fosse/",
  },
  {
    id: 202,
    image: "/agenda/mayo/cervantes-se-muestra.webp",
    date: "2026-05-10",
    time: "20:00",
    title: "Cervantes se muestra",
    description:
      "Festival de danzas con artistas de todas las edades.",
    slug: "cervantes-se-muestra",
    category: "eventos",
    tags: ["Danza"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/cervantes-se-muestra/",
  },
  {
    id: 203,
    image: "/agenda/mayo/julieta-laso.webp",
    date: "2026-05-16",
    time: "20:30",
    title: "Julieta Laso",
    description:
      "Cantora con un estilo profundo que interpreta tangos, valses y boleros.",
    slug: "julieta-laso",
    category: "eventos",
    tags: ["Música", "Tango"],
    ticketeraUrl:
      "https://survivo.com.ar/evento/julieta-laso/",
  },
  {
    id: 204,
    image: "/agenda/junio/leo-maiello.webp",
    date: "2026-06-06",
    time: "21:00",
    title: "Leo Maiello – Yo, sin culpa",
    description:
      '“YO, sin culpa” es una charla en vivo que mezcla psicología, música, humor y reflexión en una experiencia íntima y honesta. Un encuentro para cuestionar las culpas que cargamos, reconocernos en nuestras historias y salir un poco más livianos.',
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

  // NUEVOS ABRIL 2026 - SEMANA 21-26
  {
    id: 33,
    image: "/agenda/abril/hernan-piquin-agotadas.webp",
    date: "2026-04-21",
    time: "23:00",
    title: "Hernán Piquín: Me verás volver - 2da función",
    description:
      "Un emotivo espectáculo de danza tributo a Soda Stereo que recorre grandes éxitos de la banda con 10 bailarines en escena y una narrativa sobre el amor y la tragedia. | Entradas en boletería y ticketera.",
    slug: "hernan-piquin-me-veras-volver-segunda-funcion",
    category: "eventos",
    tags: ["Danza", "Música"],
    ticketeraUrl: "https://survivo.com.ar/evento/hernan-piquin-segunda-funcion/",
  },
  {
    id: 34,
    image: "/agenda/abril/noche-pena-colo-parra.webp",
    date: "2026-04-22",
    time: "21:30",
    title: "Noche de Peña: Colo Parra, Lito Riquelme y Fabián Mora",
    description:
      "El reconocido Colo Parra llega junto a Lito Riquelme (artista y compositor de Villa Regina) y Fabián Mora (saxofonista y acordeonista) para traernos un repertorio bien bailable de nuestro folklore argentino. | Entradas en boletería.",
    slug: "noche-de-pena-colo-parra-lito-riquelme-fabian-mora",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
  },
  {
    id: 35,
    image: "/agenda/abril/mari-mendieta.webp",
    date: "2026-04-23",
    time: "21:30",
    title: "Mari de Mendieta y Gastón Cinquegrani: Clásicos de Jazz y Lentos Internacionales",
    description:
      "Mari de Mendieta y Gastón Cinquegrani recorren el jazz y clásicos internacionales con una voz expresiva y una guitarra llena de matices que crean un clima cercano donde la improvisación y la conexión con el público son protagonistas. | Colaboración consciente.",
    slug: "mari-de-mendieta-gaston-cinquegrani-clasicos-jazz",
    category: "eventos",
    tags: ["Música", "Jazz"],
  },
  {
    id: 36,
    image: "/agenda/abril/feria-cultural-agroecologica.webp",
    date: "2026-04-25",
    time: "10:00",
    title: "Feria Cultural / Agroecológica",
    description:
      "Un espacio para productores locales y regionales, emprendedores, y artesanxs que laboren desde la conciencia, el respeto por el territorio y la economía social y solidaria. | Entrada libre.",
    slug: "feria-cultural-agroecologica-abril",
    category: "eventos",
    tags: ["Comunidad", "Feria"],
  },
  {
    id: 200,
    image: "/agenda/abril/festival-danza.webp",
    date: "2026-04-25",
    time: "9:30",
    title: "Festival cultural por la danza: Día mundial de la danza",
    description:
      "Durante el sábado 25 de abril, el espacio se transforma en un punto de encuentro para bailarinas, bailarines y amantes de la danza, con clases en simultáneo a cargo de docentes de la región en una amplia variedad de lenguajes: folklore, urbano, flamenco, árabe, contemporáneo, reggaetón, dancehall y propuestas para infancias.| Encontrá más info acá.",
    slug: "festival-danza-intercambio-cultural",
    category: "eventos",
    tags: ["Danza", "Festival"],
    documentUrl: 'https://res.cloudinary.com/dfli0n64m/raw/upload/v1776454958/INTERCAMBIO_CULTURAL_CDC.pdf',
    documentName: 'Festival de Danza: Intercambio Cultural',
  },
  {
    id: 37,
    image: "/agenda/abril/feria-arte-sano.webp",
    date: "2026-04-25",
    time: "15:00",
    title: "Feria de Arte Sano + Donación e Intercambio de Plantas y Semillas: Proyecto Bosque",
    description:
      "Un espacio para encontrar productos artesanales, naturales y con conciencia. Te invitamos a darte una vuelta por los stands y a acercarte con una planta para intercambiar con otrxs o ayudarnos a decorate el hall de CDC. | Entrada libre.",
    slug: "feria-arte-sano-proyecto-bosque",
    category: "eventos",
    tags: ["Comunidad", "Feria"],
  },
  {
    id: 38,
    image: "/agenda/abril/festival-danza.webp",
    date: "2026-04-26",
    time: "19:00",
    title: "Festival cultural por la danza: Día mundial de la danza",
    description:
      "El intercambio culmina con un festival artístico, donde la escena se llena de energía, diversidad y expresión, compartiendo todo lo vivido a lo largo de la jornada formativa. | Entradas en boletería o en ticketera.",
    slug: "festival-cultural-por-la-danza",
    category: "eventos",
    tags: ["Danza", "Festival"],
    documentUrl: 'https://res.cloudinary.com/dfli0n64m/raw/upload/v1776454958/INTERCAMBIO_CULTURAL_CDC.pdf',
    documentName: 'Festival de Danza: Intercambio Cultural',
    ticketeraUrl: "https://survivo.com.ar/evento/festival-cultural-por-la-danza/",
  },

  // NUEVOS ABRIL 2026 - SEMANA 28-03
  {
    id: 39,
    image: "/agenda/abril/cineclub-what-happened-was.webp",
    date: "2026-04-28",
    time: "21:00",
    title: "Cineclub TYÖ: “What Happened Was...”",
    description:
      "Una película que no pertenece a ningún lugar, como sus dos personajes. Un apartamento de Manhattan, una cena de viernes, dos almas del mismo bufete que ensayan el arte torpe y aterrador de dejarse conocer. | Entradas en boletería",
    slug: "cineclub-tyo-what-happened-was",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },
  {
    id: 40,
    image: "/agenda/abril/hermanos-sombra-pena.webp",
    date: "2026-04-29",
    time: "21:30",
    title: "Noche de Peña – Hermanos Sombra",
    description:
      "Familia de raíces folclóricas dentro y fuera del escenario tocando juntos desde siempre un repertorio festivalero y tradicional, recorriendo distintos estilos de nuestro cancionero popular | Entradas en boletería",
    slug: "noche-de-pena-hermanos-sombra",
    category: "eventos",
    tags: ["Música", "Folklore", "Peña"],
  },
  // MAYO 2026 - Eventos nuevos
  {
    id: 42,
    image: "/agenda/mayo/2026-05-05-very-important-perros.webp",
    date: "2026-05-05",
    time: "20:30",
    title: "Cineclub TYÖ – “Very Important Perros”",
    description:
      "Cinco perros y sus dueños van en camino a un concurso canino en Filadelfia, los perros son impecables, sus dueños, un desastre. Christopher Guest retrata con humor quirúrgico las neurosis, obsesiones de clase y deseos de reconocimiento de sus protagonistas. | Entradas en boletería",
    slug: "cineclub-tyo-very-important-perros",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },
  {
    id: 43,
    image: "/agenda/mayo/2026-05-08-llegar-a-una-fiesta.webp",
    date: "2026-05-08",
    time: "20:00",
    title: "Llegar a una fiesta – Por Marina Barbera",
    description:
      "Una criatura emerge de su escondite para recordar quién es… y decidir si vuelve a la fiesta. Un unipersonal de clown poético que explora, con humor y sensibilidad, la contradicción de pertenecer… y querer escapar. | Entradas en boletería y en ticketera",
    slug: "llegar-a-una-fiesta-marina-barbera",
    category: "eventos",
    tags: ["Teatro", "Escénicas"],
    ticketeraUrl: "https://survivo.com.ar/evento/llegar-a-una-fiesta/",
  },
  {
    id: 44,
    image: "/agenda/mayo/2026-05-08-la-maquina-de-hacer-humo.webp",
    date: "2026-05-08",
    time: "22:30",
    title: "La máquina de hacer humo – La música que nos gusta",
    description:
      "Clásicos musicales de Rock y pop nacional e internacional. La Máquina de Humo está integrada por: Nando Coronel en voz, Matías Gioscio en guitarra, Julián Cabaza en batería, Juan Giarizzo en bajo. | Entradas en boletería y ticketera",
    slug: "la-maquina-de-hacer-humo",
    category: "eventos",
    tags: ["Música", "Rock"],
    ticketeraUrl: "https://survivo.com.ar/evento/la-maquina-de-hacer-humo/",
  },
  {
    id: 45,
    image: "/agenda/mayo/2026-05-09-feria-cultural-agroecologica.webp",
    date: "2026-05-09",
    time: "10:00",
    title: "Feria cultural / Agroecológica",
    description:
      "Un espacio para productores locales y regionales, emprendedores, y artesanxs que laboren desde la conciencia por el territorio y la economía social y solidaria. | Entrada libre",
    slug: "feria-cultural-agroecologica-mayo",
    category: "eventos",
    tags: ["Comunidad", "Feria"],
  },
  {
    id: 46,
    image: "/agenda/mayo/2026-05-09-celebracion-54-anos-cdc.webp",
    date: "2026-05-09",
    time: "21:30",
    title: "Celebración 54 Años de CDC",
    description:
      "Celebramos el cumple de nuestra Casa con un brindis conmemorativo, la presentación de nuestro nuevo espacio gastronómico, anuncios, ¡y mucho más! | Entrada libre",
    slug: "celebracion-54-anos-cdc",
    category: "eventos",
    tags: ["Celebración", "Comunidad"],
  },
{
    id: 47,
    image: "/agenda/mayo/2026-05-10-cervantes-se-muestra-danza.webp",
    date: "2026-05-10",
    time: "18:30",
    title: "Cervantes se muestra – Danza",
    description:
      "La Escuela de Danzas de Paola Gomez presenta un festival que reúne danzas clásicas, españolas y urbanas, donde bailarinos de todas las edades brillan en el escenario. | Entradas en boletería y ticketera",
    slug: "cervantes-se-muestra-danza",
    category: "eventos",
    tags: ["Danza", "Festival"],
    ticketeraUrl: "https://survivo.com.ar/evento/cervantes-se-muestra/",
  },

  // CATALEJO - Festival de Literatura Infantil y Juvenil
  {
    id: 48,
    image: "/agenda/mayo/catalejo1.webp",
    date: "2026-05-15",
    time: "09:00",
    title: "CATALEJO – Festival de Literatura Infantil y Juvenil",
    description:
      "Llega CATALEJO, el primer festival de literatura infantil y juvenil, una iniciativa del área de literatura de CDC.\n\nDesde una feria de libros, presentaciones y narraciones en vivo, hasta talleres de literatura y juego, Catalejo es un espacio para compartir lecturas, conversar, aprender y divertirse.\n\nInformes e inscripción a talleres: cdcliterario@gmail.com\n2984 653721 - 2984 351387",
    slug: "catalejo-festival-literatura-infantil-juvenil",
    category: "eventos",
    tags: ["Infancias", "Literatura", "Festival", "Taller"],
    images: [
      { src: "/agenda/mayo/catalejo1.webp", alt: "Catalejo - Festival de Literatura Infantil y Juvenil" },
      { src: "/agenda/mayo/catalejo2.webp", alt: "Catalejo - Feria de libros" },
      { src: "/agenda/mayo/catalejo3.webp", alt: "Catalejo - Presentaciones" },
      { src: "/agenda/mayo/catalejo4.webp", alt: "Catalejo - Narraciones en vivo" },
      { src: "/agenda/mayo/catalejo5.webp", alt: "Catalejo - Talleres de literatura" },
      { src: "/agenda/mayo/catalejo6.webp", alt: "Catalejo - Juegos" },
      { src: "/agenda/mayo/catalejo7.webp", alt: "Catalejo - Espacio literario" },
    ],
  },
  {
    id: 49,
    image: "/agenda/mayo/catalejo1.webp",
    date: "2026-05-16",
    time: "10:30",
    title: "CATALEJO – Festival de Literatura Infantil y Juvenil (Sábado)",
    description:
      "Llega CATALEJO, el primer festival de literatura infantil y juvenil, una iniciativa del área de literatura de CDC.\n\nDesde una feria de libros, presentaciones y narraciones en vivo, hasta talleres de literatura y juego, Catalejo es un espacio para compartir lecturas, conversar, aprender y divertirse.\n\nInformes e inscripción a talleres: cdcliterario@gmail.com\n2984 653721 - 2984 351387",
    slug: "catalejo-festival-literatura-infantil-juvenil-sabado",
    category: "eventos",
    tags: ["Infancias", "Literatura", "Festival", "Taller"],
    images: [
      { src: "/agenda/mayo/catalejo1.webp", alt: "Catalejo - Festival de Literatura Infantil y Juvenil" },
      { src: "/agenda/mayo/catalejo2.webp", alt: "Catalejo - Feria de libros" },
      { src: "/agenda/mayo/catalejo3.webp", alt: "Catalejo - Presentaciones" },
      { src: "/agenda/mayo/catalejo4.webp", alt: "Catalejo - Narraciones en vivo" },
      { src: "/agenda/mayo/catalejo5.webp", alt: "Catalejo - Talleres de literatura" },
      { src: "/agenda/mayo/catalejo6.webp", alt: "Catalejo - Juegos" },
      { src: "/agenda/mayo/catalejo7.webp", alt: "Catalejo - Espacio literario" },
    ],
  },
  {
    id: 50,
    image: "/agenda/mayo/catalejo1.webp",
    date: "2026-05-17",
    time: "11:00",
    title: "CATALEJO – Festival de Literatura Infantil y Juvenil (Domingo)",
    description:
      "Llega CATALEJO, el primer festival de literatura infantil y juvenil, una iniciativa del área de literatura de CDC.\n\nDesde una feria de libros, presentaciones y narraciones en vivo, hasta talleres de literatura y juego, Catalejo es un espacio para compartir lecturas, conversar, aprender y divertirse.\n\nInformes e inscripción a talleres: cdcliterario@gmail.com\n2984 653721 - 2984 351387",
    slug: "catalejo-festival-literatura-infantil-juvenil-domingo",
    category: "eventos",
    tags: ["Infancias", "Literatura", "Festival", "Taller"],
    images: [
      { src: "/agenda/mayo/catalejo1.webp", alt: "Catalejo - Festival de Literatura Infantil y Juvenil" },
      { src: "/agenda/mayo/catalejo2.webp", alt: "Catalejo - Feria de libros" },
      { src: "/agenda/mayo/catalejo3.webp", alt: "Catalejo - Presentaciones" },
      { src: "/agenda/mayo/catalejo4.webp", alt: "Catalejo - Narraciones en vivo" },
      { src: "/agenda/mayo/catalejo5.webp", alt: "Catalejo - Talleres de literatura" },
      { src: "/agenda/mayo/catalejo6.webp", alt: "Catalejo - Juegos" },
      { src: "/agenda/mayo/catalejo7.webp", alt: "Catalejo - Espacio literario" },
    ],
  },

  // MAYO 2026 - Semana 19-23
  {
    id: 51,
    image: "/agenda/mayo/callejeros-cineclub-19mayo.webp",
    date: "2026-05-19",
    time: "20:30",
    title: "Cineclub TYÖ – “Callejeros” - Elizabeth Lo",
    description:
      "Tres perros sin dueño deambulan por las calles de Estambul. Elizabeth Lo los sigue con una cámara que renuncia al punto de vista humano: la ciudad aparece desde abajo, a ras del suelo. | Entradas en boletería",
    slug: "cineclub-tyo-callejeros",
    category: "eventos",
    tags: ["Cine", "Proyección", "Cineclub"],
  },
  {
    id: 52,
    image: "/agenda/mayo/divorcio-del-ano-21mayo.webp",
    date: "2026-05-21",
    time: "19:30",
    title: "El divorcio del año – Funciones",
    description:
      "Una pareja que se separa, pero se sigue amando. Una hija que sufre, pero también se ríe. Abogados capaces de todo. Y una familia expuesta al juicio de los medios y las redes.\n\nUna comedia explosiva sobre cómo las relaciones de pareja pueden afectar nuestra salud mental. Con el impressive elenco de Fabián Vena, Juan Palomino, Ernestina Pais, Romina Gaetani y Rochi Igarzábal y la escritura de Mariela Asensio y José María Muscari. | *ENTRADAS AGOTADAS*",
    slug: "el-divorcio-del-ano",
    category: "eventos",
    tags: ["Teatro", "Escénicas"],
  },
  {
    id: 53,
    image: "/agenda/mayo/divorcio-del-ano-21mayo.webp",
    date: "2026-05-21",
    time: "21:30",
    title: "El divorcio del año – Función noche",
    description:
      "Una pareja que se separa, pero se sigue amando. Una hija que sufre, pero también se ríe. Abogados capaces de todo. Y una familia expuesta al juicio de los medios y las redes.\n\nUna comedia explosiva sobre cómo las relaciones de pareja pueden afectar nuestra salud mental. Con el impressive elenco de Fabián Vena, Juan Palomino, Ernestina Pais, Romina Gaetani y Rochi Igarzábal y la escritura de Mariela Asensio y José María Muscari. | *ENTRADAS AGOTADAS*",
    slug: "el-divorcio-del-ano-21-30",
    category: "eventos",
    tags: ["Teatro", "Escénicas"],
  },
  {
    id: 54,
    image: "/agenda/mayo/psicolyrics-22mayo.webp",
    date: "2026-05-22",
    time: "21:00",
    title: "Psicolyrics: El show",
    description:
      "A través de canciones y comentarios en vivo y con un enfoque accesible y cercano, la propuesta apunta tanto a quienes tienen formación en psicología como a quienes simplemente disfrutan de la buena música y buscan una experiencia distinta. | Entradas en boletería y ticketera",
    slug: "psicolyrics-el-show",
    category: "eventos",
    tags: ["Música", "Show"],
    ticketeraUrl: "https://www.survivo.com.ar/evento/psicolyrics-el-show/",
  },
  {
    id: 55,
    image: "/agenda/mayo/mercado-ceramistas-23mayo.webp",
    date: "2026-05-23",
    startDate: "2026-05-23",
    endDate: "2026-05-23",
    time: "10:00",
    title: "Mercado Artesanal – Encuentro de ceramistas",
    description:
      "Un encuentro de ceramistas con productos únicos y artesanales. | Entrada libre",
    slug: "mercado-ceramistas-encuentro",
    category: "eventos",
    tags: ["Comunidad", "Feria", "Artesanal"],
  },

  // JUNIO 2026 - Eventos nuevos
  {
    id: 206,
    image: "/agenda/junio/festival-rock-pro-y-fusion.webp",
    date: "2026-05-29",
    startDate: "2026-05-29",
    endDate: "2026-05-30",
    time: "18:30",
    title: "Festival de rock progresivo y jazz fusión",
    description:
      "Casa de la Cultura será escenario de dos días repletos de música en vivo, poesía, clínicas, arte y experiencias únicas. Con pioneros del género, bandas emergentes, profesores locales, artistas plásticos y vinilos clásicos, el festival celebra el crecimiento de la escena progresiva y del jazz fusión en la ciudad. | Entradas en boletería de CDC y en kiosco Caramelo loco - Av Roca y Mitre - Gral Roca.",
    slug: "festival-rock-progresivo-jazz-fusion",
    category: "eventos",
    tags: ["Música", "Festival", "Rock"],
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

  // JUNIO 2026 - Semana 1
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
  // JUNIO 2026 - Sábado 13 y Domingo 14
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

  // JUNIO 2026 - Semana 22-27
  // Lunes 22
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
  // Martes 23
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
  // Miércoles 24
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
  // Viernes 26
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
  // Sábado 27
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
  return eventosCompletMock
    .filter((evento) => evento.slug !== currentSlug && evento.tags.some((tag) => tags.includes(tag)))
    .slice(0, limit);
}
