import { Event } from "@/utils/eventsComplet.mock"
import { DestacadoItem } from "@/types/DestacadoItem"

export function mapEventoToDestacado(evento: Event): DestacadoItem {
  return {
    id: evento.id,
    title: evento.title,
    summary: evento.description.slice(0, 140) + "…",
    image: evento.image,
    date: evento.date,
    slug: `/programacion/${evento.slug}`,
    tags: evento.tags,
    type: "evento",
  }
}
