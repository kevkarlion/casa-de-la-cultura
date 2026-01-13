import { Novedad } from "@/interfaces/novedades.interface";

export const novedades: Novedad[] = [
  {
    id: 1,
    title: "Convocatoria abierta 2026 para artistas regionales",
    date: "2026-01-01",
    summary:
      "Convocatoria abierta a artistas y proyectos de música, teatro, danza y expresiones interdisciplinarias para formar parte de la programación 2026.",
    excerpt: `
 Convocatoria abierta 2026

Destinada a artistas regionales y proyectos de música, teatro, danza y expresiones interdisciplinarias que quieran formar parte de la programación de CDC – Casa de la Cultura.

Si tenés un proyecto y te interesa participar, completá el formulario de inscripción y revisá las bases y condiciones.

 CDC – Casa de la Cultura  
9 de Julio 1043 · Roca / Fiske

Forma parte de CDC – Casa de la Cultura.
    `,
    image: "/imagenes/noche-musica.webp",
    slug: "convocatoria-artistas-2026",
    
    tags: ["convocatoria", "artistas", "programación"],

    // 👇 LINKS
    links: [
      {
        label: "Bases y condiciones",
        url: "https://tr.ee/BQnhtJaUE9",
      },
      {
        label: "Formulario de inscripción",
        url: "https://tr.ee/BGszcItfaM",
      },
    ],
  },

  {
    id: 2,
    title: "Cineclub de Verano · 7° Ciclo TYÖ",
    date: "2026-01-05",
    summary:
      "Durante enero, febrero y principios de marzo, el patio de CDC vuelve a ser un espacio de cine al aire libre junto al Cineclub TYÖ.",
    excerpt: `
Recibimos al Cineclub TYÖ en su 7° Ciclo de Verano.

Durante enero, febrero y principios de marzo, el patio de nuestra Casa vuelve a transformarse en un espacio de encuentro para compartir cine al aire libre, las noches de verano y la experiencia colectiva de ver películas juntxs.

Las funciones se realizan en el patio de CDC. En caso de mal clima, la proyección se traslada a la Sala 2.

Las entradas se consiguen en puerta.
    `,
    image: "/imagenes/cine-club.webp",
    slug: "cineclub-verano-tyo",
    tags: ["cine", "cineclub", "verano"],
  },

  {
    id: 3,
    title: "Nueva Comisión Directiva 2026–2027",
    date: "2026-01-10",
    summary:
      "CDC presenta a la nueva Comisión Directiva que acompañará el rumbo institucional durante los próximos dos años.",
    excerpt: `
La nueva Comisión Directiva de CDC – Casa de la Cultura asumió el 22 de diciembre, por unanimidad de votos, durante la asamblea realizada.

Está integrada por hacedoras y hacedores culturales que forman parte del día a día de CDC y conocen profundamente su historia y su valor para la comunidad.

La propuesta de gestión está enfocada en el fortalecimiento institucional, la modernización, la transparencia y la sostenibilidad, con una mirada colectiva y a largo plazo.
    `,
    image: "/imagenes/comision.webp",
    slug: "comision-directiva-2026-2027",
    tags: ["institucional", "comisión directiva"],
  },

  {
    id: 4,
    title: "Nuevas reformas edilicias en CDC",
    date: "2026-01-15",
    summary:
      "Durante el receso se realizaron reformas y mejoras edilicias para seguir poniendo en valor los espacios de la Casa.",
    excerpt: `
Durante los días de receso, la Comisión Directiva junto a compañeras y compañeros de CDC trabajó en la reorganización y puesta en valor de distintos espacios de la Casa.

Se avanzó en la reconstrucción del bar del hall superior, la recuperación de camarines y el traslado del archivo histórico de CDC.

Seguimos construyendo CDC incluso en pausa, con compromiso y trabajo colectivo.
  `,
    image: "/imagenes/pausa-en-movi/reforma1.webp",

    // 👉 GALERÍA EDITORIAL
    images: [
      {
        src: "/imagenes/pausa-en-movi/reforma1.webp",
        alt: "Trabajos de remodelación en el hall superior",
      },
      {
        src: "/imagenes/pausa-en-movi/reforma2.webp",
        alt: "Trabajos de remodelación en el hall superior",
      },
      {
        src: "/imagenes/pausa-en-movi/reforma3.webp",
        alt: "Reconstrucción del bar del hall",
      },
      {
        src: "/imagenes/pausa-en-movi/reforma4.webp",
        alt: "Recuperación de camarines",
      },
      {
        src: "/imagenes/pausa-en-movi/reforma5.webp",
        alt: "Reorganización del archivo histórico de CDC",
      },
    ],

    slug: "reformas-edilicias-cdc",
    featured: true,
    tags: ["institucional", "obras", "cdc"],
  },
];

// helpers (sin cambios)
export function getNovedades() {
  return novedades;
}

export function getNovedadBySlug(slug: string) {
  return novedades.find((n) => n.slug === slug);
}

export function getNovedadesByTag(tag: string) {
  return novedades.filter((n) => n.tags?.includes(tag));
}

export function getRelatedNovedades(
  currentSlug: string,
  tags: string[],
  limit = 3
) {
  return novedades
    .filter(
      (n) => n.slug !== currentSlug && n.tags?.some((tag) => tags.includes(tag))
    )
    .slice(0, limit);
}
