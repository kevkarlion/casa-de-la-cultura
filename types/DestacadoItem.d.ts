export interface DestacadoItem {
  id: number
  title: string
  summary: string
  image: string
  date: string
  slug: string
  tags: string[]
  type: "evento" | "novedad",
   ticketeraUrl?: string // link de compra de ticket
   documentUrl?: string // link a documento descargable (PDF, imagen)
   documentName?: string // nombre personalizado para el documento
}
