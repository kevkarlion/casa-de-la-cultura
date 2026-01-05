import { Novedad } from "@/interfaces/novedades.interface";

export const novedades: Novedad[] = [
  {
    id: 1,
    title: "Convocatoria abierta a artistas visuales",
    date: "2026-01-03",
    summary:
      "La Casa de la Cultura abre una convocatoria destinada a artistas visuales de la región para integrar una muestra colectiva.",
    excerpt: `
La Casa de la Cultura abre una nueva convocatoria destinada a artistas visuales de la región, con el objetivo de promover la producción, difusión y circulación de obras contemporáneas en distintos formatos y lenguajes.

La iniciativa está dirigida a artistas emergentes y con trayectoria que trabajen disciplinas como pintura, dibujo, grabado, fotografía, escultura, arte digital, instalaciones y propuestas interdisciplinarias. Se busca fomentar el intercambio cultural y generar un espacio de visibilidad para la creación local.

Las obras seleccionadas formarán parte de una muestra colectiva que será inaugurada durante el primer trimestre del año, acompañada por instancias de encuentro con el público, charlas abiertas y actividades educativas.

La convocatoria permanecerá abierta hasta el cierre del mes y la inscripción es gratuita. Las bases y condiciones pueden consultarse en los canales oficiales de la Casa de la Cultura.
    `,
    image: "/imagenes/convocatoria.png",
    slug: "convocatoria-artistas-visuales",
    featured: true,
    tags: ["convocatoria", "artes visuales"],
  },

  {
    id: 2,
    title: "Inauguración de la muestra de arte contemporáneo",
    date: "2026-01-05",
    summary:
      "Se inaugura una nueva muestra de arte contemporáneo con obras de artistas locales y regionales.",
    excerpt: `
La Casa de la Cultura invita a la inauguración de una nueva muestra de arte contemporáneo que reúne obras de artistas locales y regionales, proponiendo un recorrido diverso por distintas miradas, técnicas y poéticas visuales.

La exposición plantea un diálogo entre lo individual y lo colectivo, abordando temáticas actuales como la identidad, el territorio, la memoria y los procesos sociales desde lenguajes contemporáneos.

La apertura contará con la presencia de los artistas participantes y un espacio de intercambio con el público, pensado como una instancia de reflexión y encuentro en torno al arte y la cultura.

La muestra podrá visitarse durante todo el mes, con entrada libre y gratuita, en los horarios habituales de la Casa de la Cultura.
    `,
    image: "/imagenes/expo.png",
    slug: "inauguracion-muestra-arte",
    tags: ["exposición", "artes visuales"],
  },

  {
    id: 3,
    title: "Taller de música para jóvenes",
    date: "2026-01-10",
    summary:
      "Abre la inscripción a un taller de música para jóvenes con encuentros semanales y actividades grupales.",
    excerpt: `
Se abre la inscripción al taller de música destinado a jóvenes interesados en explorar distintos lenguajes sonoros y desarrollar herramientas de expresión musical de manera colectiva.

El espacio propone un abordaje práctico y participativo, donde se trabajarán nociones de ritmo, armonía, composición e improvisación, combinando teoría y práctica instrumental.

El taller estará coordinado por músicos con experiencia en formación artística y contará con encuentros semanales que incluirán ensambles, ejercicios grupales y jam sessions abiertas.

La actividad es gratuita y no requiere conocimientos previos. Los cupos son limitados y la inscripción se realiza de manera presencial.
    `,
    image: "/imagenes/novedades/musica1.jpg",
    slug: "taller-musica-jovenes",
    tags: ["taller", "música"],
  },

  {
    id: 4,
    title: "Ciclo de cine independiente",
    date: "2026-01-15",
    summary:
      "Comienza un nuevo ciclo de cine independiente con proyecciones semanales y debates posteriores.",
    excerpt: `
La Casa de la Cultura presenta un nuevo ciclo de cine independiente con proyecciones semanales que invitan a descubrir producciones alternativas, óperas primas y cine de autor.

Cada función estará acompañada por un espacio de debate posterior, coordinado por especialistas, donde se analizarán los aspectos narrativos, estéticos y contextuales de las películas proyectadas.

El ciclo busca promover el pensamiento crítico, el acceso al cine no comercial y el encuentro entre realizadores, espectadores y la comunidad.

Las funciones se realizarán una vez por semana con entrada libre y gratuita, hasta completar la capacidad de la sala.
    `,
    image: "/imagenes/novedades/cine1.jpg",
    slug: "ciclo-cine-independiente",
    tags: ["cine", "proyección"],
  },

  {
    id: 5,
    title: "Clases abiertas de danza",
    date: "2026-01-20",
    summary:
      "Clases abiertas de danza para todas las edades y niveles, pensadas como un espacio de encuentro y movimiento.",
    excerpt: `
Durante el mes se desarrollarán clases abiertas de danza destinadas a personas de todas las edades y niveles, con el objetivo de acercar el movimiento y la expresión corporal a la comunidad.

Las clases estarán orientadas a distintos estilos y técnicas, priorizando el disfrute, la exploración del cuerpo y el trabajo colectivo en un ambiente inclusivo y participativo.

No es necesario contar con experiencia previa ni vestimenta específica. La propuesta está pensada como un espacio de encuentro, aprendizaje y bienestar a través del movimiento.

La actividad es gratuita y se realiza en los espacios habituales de la Casa de la Cultura.
    `,
    image: "/imagenes/novedades/danza1.jpg",
    slug: "clases-abiertas-danza",
    tags: ["danza", "actividad permanente"],
  },
];

// 👉 obtener todas
export function getNovedades() {
  return novedades;
}

// 👉 obtener una por slug (detalle)
export function getNovedadBySlug(slug: string) {
  return novedades.find((n) => n.slug === slug);
}

// 👉 filtrar por tag
export function getNovedadesByTag(tag: string) {
  return novedades.filter((n) => n.tags?.includes(tag));
}

// utils/novedades.mock.ts

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
