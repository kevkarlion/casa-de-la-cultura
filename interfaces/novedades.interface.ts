export interface Novedad {
  id: number
  title: string
  date: string
  excerpt: string
  summary: string
  image: string
  /** Galería opcional */
  images?: {
    src: string
    alt?: string
  }[]
  slug: string
  featured?: boolean
  tags?: string[]

  // 👉 NUEVO
  imageOrientation?: 'horizontal' | 'vertical'

  // 👉 ya lo estabas usando
  links?: {
    label: string
    url: string
  }[]
}
