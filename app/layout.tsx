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
  title: "CDC - Casa de la Cultura",
  description: "Sitio oficial de la Casa de la Cultura. Talleres, eventos y actividades culturales desde 1973.",
};

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
