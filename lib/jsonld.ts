import { perfil } from "@/content/perfil";
import { proyectos } from "@/content/proyectos";
import { urlSitio } from "./sitio";

/**
 * Datos estructurados. Sirven para que Google, y sobre todo los buscadores de
 * periodistas, entiendan quién es la persona detrás del sitio.
 * Solo se declaran hechos verificados.
 */
export function personaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: perfil.nombre,
    alternateName: perfil.alias,
    url: urlSitio,
    description: perfil.bioCorta,
    nationality: { "@type": "Country", name: "Perú" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Peruana Cayetano Heredia",
    },
    knowsAbout: [
      "Becas",
      "Movilidad académica",
      "Divulgación científica",
      "Ingeniería ambiental",
    ],
    sameAs: perfil.redes.map((red) => red.url),
  };
}

export function proyectosJsonLd() {
  return proyectos.map((proyecto) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: proyecto.nombre,
    alternateName: proyecto.apodo,
    abstract: proyecto.resumen,
    url: `${urlSitio}/proyectos/${proyecto.slug}`,
    creator: { "@type": "Person", name: perfil.nombre },
    dateCreated: proyecto.anio,
  }));
}
