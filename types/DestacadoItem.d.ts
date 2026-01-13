export interface DestacadoItem {
  id: number
  title: string
  summary: string
  image: string
  date: string
  slug: string
  tags: string[]
  type: "evento" | "novedad",
   ticketeraUrl?: string // NUEVO: link de compra de ticket
}
