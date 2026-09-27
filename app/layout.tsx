import type { Metadata, Viewport } from "next";
import { Archivo, Big_Shoulders } from "next/font/google";

import { ContratoDeDireccion } from "./contrato";
import { Aviso } from "@/components/cartel/Aviso";
import { Encabezado } from "@/components/layout/Encabezado";
import { PieDePagina } from "@/components/layout/PieDePagina";
import { personaJsonLd } from "@/lib/jsonld";
import { metadatos } from "@/lib/seo";
import { sitio, urlPlataforma } from "@/lib/sitio";
import "./globals.css";

/** La voz del cartel: condensada, de alto contraste, pensada para gritar. */
const fuenteCartel = Big_Shoulders({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--fuente-cartel",
  display: "swap",
});

/** El texto de lectura: grotesca de imprenta, sobria y sin adornos. */
const fuenteTexto = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--fuente-texto",
  display: "swap",
});

export const metadata: Metadata = {
  ...metadatos(),
  metadataBase: new URL(
    (process.env.NEXT_PUBLIC_URL_SITIO ?? "https://rauenciencia.com").replace(/\/$/, ""),
  ),
  authors: [{ name: sitio.nombre }],
  creator: sitio.nombre,
};

export const viewport: Viewport = {
  themeColor: "#ece7df",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={sitio.idioma} className={`${fuenteCartel.variable} ${fuenteTexto.variable}`}>
      <body className="min-h-dvh overflow-x-hidden">
        <ContratoDeDireccion />
        <a
          href="#contenido"
          className="rotulo sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-tinta focus:px-4 focus:py-3 focus:text-papel"
        >
          Saltar al contenido
        </a>
        <Encabezado />
        <main id="contenido">{children}</main>
        <PieDePagina />
        <Aviso urlPlataforma={urlPlataforma} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personaJsonLd()) }}
        />
      </body>
    </html>
  );
}
