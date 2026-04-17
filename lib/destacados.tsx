import { DestacadoItem } from "@/types/DestacadoItem";

// Filtrar solo eventos futuros (no han estrado todavía)
function isFutureEvent(dateStr: string): boolean {
  const eventDate = new Date(dateStr)
  const today = new Date()
  // Comparar solo fecha, no hora
  return eventDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0)
}

export function getDestacadosByTag(
  items: DestacadoItem[],
  tags: string[],
  limit = 6
) {
  return items
    .filter(item => 
      item.tags.some(tag => tags.includes(tag)) && 
      isFutureEvent(item.date)
    )
    .sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    )
    .slice(0, limit)
}

