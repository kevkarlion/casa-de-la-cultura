export interface Novedad {
  id: number
  title: string
  date: string
  excerpt: string
  summary: string
  image: string
  slug: string
  featured?: boolean
  tags?: string[]
}