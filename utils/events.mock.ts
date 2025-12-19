// Mock de eventos destacados – Casa de la Cultura
// Este archivo simula datos que luego pueden venir de una API o CMS

export interface Event {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
}

export const eventsMock: Event[] = [
  {
    id: 1,
    image: "/events/muestra-arte.jpg",
    date: "12 OCT",
    title: "Muestra de Arte Contemporáneo",
    description:
      "Artistas locales presentan obras que dialogan con la identidad cultural y el territorio.",
  },
  {
    id: 2,
    image: "/events/teatro-independiente.jpg",
    date: "18 OCT",
    title: "Teatro Independiente",
    description:
      "Una obra íntima que cruza humor, drama y relatos cotidianos del barrio.",
  },
  {
    id: 3,
    image: "/events/musica-vivo.jpg",
    date: "25 OCT",
    title: "Noche de Música en Vivo",
    description:
      "Bandas emergentes y sonidos experimentales se encuentran en una noche única.",
  },
  {
    id: 4,
    image: "/events/taller-ceramica.jpg",
    date: "02 NOV",
    title: "Taller Abierto de Cerámica",
    description:
      "Un espacio participativo para explorar técnicas cerámicas y procesos creativos.",
  },
  {
    id: 5,
    image: "/events/cine-debate.jpg",
    date: "09 NOV",
    title: "Cine Debate",
    description:
      "Proyección y charla colectiva en torno al cine como expresión cultural y social.",
  },
];
