// types/AgendaItem.d.ts
interface AgendaItem {
  id: string | number
  date: string // YYYY-MM-DD
  title: string
  time?: string
  category?: string
  slug: string // para detalle
}
