import { Novedad } from "@/interfaces/novedades.interface";

export const novedades: Novedad[] = [

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
    featured: false,
    tags: ["institucional", "obras", "cdc"],
  },
  {
  id: 5,
  title: "Convocatoria abierta: Talleres, Seminarios y Workshops 2026",
  date: "2026-02-11",
  summary:
    "El Área de Desarrollo Artístico de CDC invita a talleristas, docentes y artistas a presentar sus propuestas educativas y culturales para el ciclo 2026.",
  excerpt: `
Desde el Área de Desarrollo Artístico de CDC abrimos una convocatoria para la presentación de propuestas de talleres regulares, seminarios y workshops, destinada a personas con saberes y trayectorias en diversas disciplinas.

La búsqueda está orientada a proyectos que aporten al desarrollo artístico, cultural y social, con un enfoque inclusivo y comunitario que dialogue con el proyecto institucional de Casa de la Cultura.

A través del formulario de inscripción, los interesados podrán detallar su trayectoria, objetivos, metodología y necesidades técnicas. También se solicita adjuntar CV y material visual de trabajos previos.

Las propuestas recibidas serán evaluadas para su posible incorporación a la programación anual.
  `,
  image: "/imagenes/convocatoria-talleres.webp",
  imageOrientation: "horizontal",
  slug: "convocatoria-propuestas-talleres-2026",
  featured: true,
  tags: ["convocatoria", "talleres", "formación", "institucional"],
  links: [
    {
      label: "Completar Formulario de Inscripción",
      url: "https://forms.gle/gfgoGSsSUFQacctj6"
    },
    {
      label: "Consultas por Email",
      url: "mailto:desarrolloartisticocdc@gmail.com"
    }
  ]
}
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
