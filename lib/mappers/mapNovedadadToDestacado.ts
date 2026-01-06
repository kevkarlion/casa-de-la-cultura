import { Novedad } from "@/interfaces/novedades.interface"
import { DestacadoItem } from "@/types/DestacadoItem"

export function mapNovedadToDestacado(novedad: Novedad): DestacadoItem {
  return {
    id: novedad.id,
    title: novedad.title,
    summary: novedad.summary,
    image: novedad.image,
    date: novedad.date,
    slug: `/novedades/${novedad.slug}`,
    tags: novedad.tags ?? [],
    type: "novedad",
  }
}
