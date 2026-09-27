import { perfil } from "@/content/perfil";

/** URL pública del sitio, sin barra final. */
export const urlSitio = (
  process.env.NEXT_PUBLIC_URL_SITIO ?? "https://rauenciencia.com"
).replace(/\/$/, "");

/**
 * A dónde manda el botón principal. Se separa de `urlSitio` porque hoy el
 * dominio ya sirve la plataforma: mientras se decide si el sitio personal va
 * en la raíz o en un subdominio, esta variable es lo único que hay que mover.
 */
export const urlPlataforma =
  process.env.NEXT_PUBLIC_URL_PLATAFORMA ?? "https://rauenciencia.com";

export const navegacion = [
  { rotulo: "Charlas", href: "/charlas" },
  { rotulo: "Sobre mí", href: "/sobre-mi" },
  { rotulo: "Proyectos", href: "/proyectos" },
  { rotulo: "Prensa", href: "/prensa" },
  { rotulo: "Contacto", href: "/contacto" },
] as const;

export const sitio = {
  nombre: perfil.nombre,
  titulo: `${perfil.nombre} — ${perfil.alias}`,
  descripcion: perfil.bioCorta,
  idioma: "es-PE",
} as const;
