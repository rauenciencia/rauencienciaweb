import type { MetadataRoute } from "next";

import { proyectos } from "@/content/proyectos";
import { urlSitio } from "@/lib/sitio";

/**
 * Solo rutas que ya existen. Cada fase del rediseño suma las suyas aquí
 * (agenda, asesorías, escuelita, recursos, causas, en) cuando se publiquen.
 */
const RUTAS = ["/sobre-mi", "/charlas", "/prensa", "/contacto", "/proyectos"];

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();
  return [
    { url: urlSitio, lastModified: ahora, priority: 1 },
    ...RUTAS.map((ruta) => ({ url: `${urlSitio}${ruta}`, lastModified: ahora, priority: 0.8 })),
    ...proyectos.map((proyecto) => ({
      url: `${urlSitio}/proyectos/${proyecto.slug}`,
      lastModified: ahora,
      priority: 0.6,
    })),
  ];
}
