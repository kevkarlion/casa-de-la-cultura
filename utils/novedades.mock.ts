// /mocks/mockNovedades.ts
import {  Novedad } from '@/interfaces/novedades.interface'



export const novedades: Novedad[] = [
  {
    id: 1,
    title: 'Convocatoria abierta a artistas visuales',
    date: '2026-01-03',
    excerpt:
      'La Casa de la Cultura abre una nueva convocatoria destinada a artistas visuales de la región.',
    image: '/imagenes/novedades/convocatoria.jpg',
    slug: 'convocatoria-artistas-visuales',
    featured: true,
    tags: ['convocatoria', 'artes visuales'],
  },
  {
    id: 2,
    title: 'Inauguración de la muestra de arte contemporáneo',
    date: '2026-01-05',
    excerpt:
      'Vení a descubrir obras de artistas locales en nuestra nueva exposición de arte contemporáneo.',
    image: '/imagenes/novedades/arte1.jpg',
    slug: 'inauguracion-muestra-arte',
    tags: ['exposición', 'artes visuales'],
  },
  {
    id: 3,
    title: 'Taller de música para jóvenes',
    date: '2026-01-10',
    excerpt:
      'Aprendé técnicas musicales con profesionales y participá en jam sessions semanales.',
    image: '/imagenes/novedades/musica1.jpg',
    slug: 'taller-musica-jovenes',
    tags: ['taller', 'música'],
  },
  {
    id: 4,
    title: 'Ciclo de cine independiente',
    date: '2026-01-15',
    excerpt:
      'Proyecciones semanales de cine independiente con debate posterior sobre cada película.',
    image: '/imagenes/novedades/cine1.jpg',
    slug: 'ciclo-cine-independiente',
    tags: ['cine', 'proyección'],
  },
  {
    id: 5,
    title: 'Clases abiertas de danza',
    date: '2026-01-20',
    excerpt:
      'Sumate a nuestras clases de danza para todas las edades y niveles, abiertas y gratuitas.',
    image: '/imagenes/novedades/danza1.jpg',
    slug: 'clases-abiertas-danza',
    tags: ['danza', 'actividad permanente'],
  },
]
