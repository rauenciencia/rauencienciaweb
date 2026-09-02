import type { MetadataRoute } from "next";

import { proyectos } from "@/content/proyectos";
import { navegacion, urlSitio } from "@/lib/sitio";

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  return [
    { url: urlSitio, lastModified: ahora, priority: 1 },
    ...navegacion.map((seccion) => ({
      url: `${urlSitio}${seccion.href}`,
      lastModified: ahora,
      priority: 0.8,
    })),
    ...proyectos.map((proyecto) => ({
      url: `${urlSitio}/proyectos/${proyecto.slug}`,
      lastModified: ahora,
      priority: 0.7,
    })),
  ];
}
