import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import NavbarWithSearch from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";

/* ------------------ Fonts ------------------ */

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const neueHaas = localFont({
  src: [
    {
      path: "/fonts/NeueHaasDisplay-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/NeueHaasDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas",
});

/* ------------------ Metadata ------------------ */

export const metadata: Metadata = {
  metadataBase: new URL("https://cdcroca.com"),

  verification: {
    google: "PDHOV4hCndaQI0QDvohCsJ0clFQIsJQ5k71708wIFbs",
  },

  title: {
    default: "Casa de la Cultura | Arte, Música y Eventos",
    template: "%s | Casa de la Cultura",
  },

  description:
    "La Casa de la Cultura es un espacio dedicado al arte, la música, el teatro y la expresión cultural. Conocé nuestra programación y actividades.",

  keywords: [
    "casa de la cultura",
    "eventos culturales",
    "arte",
    "música",
    "teatro",
    "cultura local",
  ],

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Casa de la Cultura",
    description:
      "Un espacio para el arte, la música y la cultura. Enterate de eventos, talleres y actividades.",
    url: "https://cdcroca.com",
    siteName: "Casa de la Cultura",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casa de la Cultura",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ------------------ Layout ------------------ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={neueHaas.variable}>
      <body className={`${inter.variable} antialiased bg-white`}>
        {/* Structured Data para Google (saca el 🌍) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Casa de la Cultura",
              url: "https://cdcroca.com",
              logo: "https://cdcroca.com/logo.png",
            }),
          }}
        />

        <NavbarWithSearch />
        {children}
        <Footer />
      </body>
    </html>
  );
}
