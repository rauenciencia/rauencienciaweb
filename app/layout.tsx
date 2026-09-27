import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Bricolage_Grotesque, Caveat, DM_Sans } from "next/font/google";

import { ContratoDeDireccion } from "./contrato";
import { Aviso } from "@/components/cartel/Aviso";
import { BarraAnuncio } from "@/components/layout/BarraAnuncio";
import { BotonWhatsApp } from "@/components/layout/BotonWhatsApp";
import { NavPildora } from "@/components/layout/NavPildora";
import { Pie } from "@/components/layout/Pie";
import { anuncio, site } from "@/lib/contenido";
import { personaJsonLd } from "@/lib/jsonld";
import { metadatos } from "@/lib/seo";
import { CLAVE_ANUNCIO, sitio, urlPlataforma, urlSitio } from "@/lib/sitio";
import "./globals.css";

/** Titulares: cálida, con personalidad, variable (brief 9.3). */
const fuenteTitular = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--fuente-titular",
  display: "swap",
});

/** Carteles, fechas, cifras y stickers. Siempre en mayúsculas. */
const fuenteCartel = Big_Shoulders({
  subsets: ["latin"],
  // Variable con eje óptico: en .cartel se fija opsz 72, que es el corte Display.
  axes: ["opsz"],
  variable: "--fuente-cartel",
  display: "swap",
});

/** Texto de lectura. Ya es parte de la identidad migajera. */
const fuenteTexto = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--fuente-texto",
  display: "swap",
});

/** Notas a mano junto a las fotos. Poco y con intención. */
const fuenteMano = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--fuente-mano",
  display: "swap",
});

export const metadata: Metadata = {
  ...metadatos(),
  metadataBase: new URL(urlSitio),
  authors: [{ name: sitio.nombre }],
  creator: sitio.nombre,
};

export const viewport: Viewport = {
  themeColor: "#0f3d2e",
  colorScheme: "light",
};

/** Un id por texto: si el anuncio cambia, vuelve a mostrarse aunque se haya cerrado el anterior. */
const idAnuncio = `a${Array.from(anuncio.texto).reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7)}`;
const anuncioVigente = anuncio.activo && (!anuncio.fechaFin || anuncio.fechaFin >= new Date().toISOString().slice(0, 10));

/** Corre antes de pintar: si este anuncio ya se cerró, se oculta desde el primer cuadro. */
const guionAnuncio = `try{if(localStorage.getItem(${JSON.stringify(CLAVE_ANUNCIO)})===${JSON.stringify(idAnuncio)})document.documentElement.dataset.anuncioCerrado="1"}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={sitio.idioma} suppressHydrationWarning className={`${fuenteTitular.variable} ${fuenteCartel.variable} ${fuenteTexto.variable} ${fuenteMano.variable}`}>
      <body className="min-h-dvh overflow-x-clip">
        <ContratoDeDireccion />
        <script dangerouslySetInnerHTML={{ __html: guionAnuncio }} />
        <a
          href="#contenido"
          className="sr-only rounded-full focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-bosque focus:px-5 focus:py-3 focus:font-bold focus:text-crema"
        >
          Saltar al contenido
        </a>
        {anuncioVigente ? (
          <BarraAnuncio id={idAnuncio} texto={anuncio.texto} textoLink={anuncio.textoLink} link={anuncio.link} />
        ) : null}
        <NavPildora />
        <main id="contenido">{children}</main>
        <Pie />
        <BotonWhatsApp numero={site.whatsapp} />
        <Aviso urlPlataforma={urlPlataforma} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personaJsonLd()) }}
        />
      </body>
    </html>
  );
}
