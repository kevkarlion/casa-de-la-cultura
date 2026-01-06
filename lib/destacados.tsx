import { DestacadoItem } from "@/types/DestacadoItem";

export function getDestacadosByTag(
  items: DestacadoItem[],
  tags: string[],
  limit = 6
) {
  return items
    .filter(item => item.tags.some(tag => tags.includes(tag)))
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, limit)
}

