import type { Metadata } from "next";
import { sitio, urlSitio } from "./sitio";

type Opciones = {
  titulo?: string;
  descripcion?: string;
  ruta?: string;
};

/**
 * Metadatos de una página. Devuelve siempre canónica absoluta y tarjeta de
 * compartir, que es como el 90 % del tráfico va a ver este sitio por primera
 * vez: pegado en un chat.
 */
export function metadatos({ titulo, descripcion, ruta = "/" }: Opciones = {}): Metadata {
  const tituloFinal = titulo ? `${titulo} | ${sitio.nombre}` : sitio.titulo;
  const descripcionFinal = descripcion ?? sitio.descripcion;
  const url = `${urlSitio}${ruta === "/" ? "" : ruta}`;

  return {
    title: tituloFinal,
    description: descripcionFinal,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_PE",
      url,
      siteName: sitio.nombre,
      title: tituloFinal,
      description: descripcionFinal,
    },
    twitter: {
      card: "summary_large_image",
      title: tituloFinal,
      description: descripcionFinal,
    },
  };
}
