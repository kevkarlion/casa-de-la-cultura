import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import NavbarWithSearch from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const neueHaas = localFont({
  src: [
    {
      path: '/fonts/NeueHaasDisplay-Mediu.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NeueHaasDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-haas',
});

export const metadata: Metadata = {
  verification: {
    google: "PDHOV4hCndaQI0QDvohCsJ0clFQIsJQ5k71708wIFbs",
  },
  title: {
    default: 'Casa de la Cultura | Arte, Música y Eventos',
    template: '%s | Casa de la Cultura',
  },
  description:
    'La Casa de la Cultura es un espacio dedicado al arte, la música, el teatro y la expresión cultural. Conocé nuestra programación y actividades.',

  keywords: [
    'casa de la cultura',
    'eventos culturales',
    'arte',
    'música',
    'teatro',
    'cultura local',
  ],

  metadataBase: new URL('https://cdcroca.com'),

  openGraph: {
    title: 'Casa de la Cultura',
    description:
      'Un espacio para el arte, la música y la cultura. Enterate de eventos, talleres y actividades.',
    url: 'https://cdcroca.com',
    siteName: 'Casa de la Cultura',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Casa de la Cultura',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${neueHaas.variable}`}>
      <body className={`${inter.variable} antialiased bg-white`}>
        <NavbarWithSearch />
        {children}
        <Footer />
      </body>
    </html>
  );
}
