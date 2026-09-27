import { perfil } from "@/content/perfil";

const RESPALDO = "https://rauenciencia.com";

/**
 * Lee una URL de una variable de entorno sin dejar que un valor mal escrito
 * tumbe el build. Es fácil escribir `rauenciencia.com` en el panel de Vercel
 * en vez de `https://rauenciencia.com`, o dejar la variable creada pero
 * vacía: en el primer caso se completa el protocolo, en el segundo se usa el
 * respaldo. Las rutas internas (`/becas`) se respetan tal cual si se permiten.
 */
export function leerUrl(
  valor: string | undefined,
  respaldo: string,
  { permitirRuta = false }: { permitirRuta?: boolean } = {},
): string {
  const limpio = valor?.trim().replace(/\/+$/, "") ?? "";
  if (!limpio) return respaldo;
  if (permitirRuta && limpio.startsWith("/")) return limpio;

  const conProtocolo = /^https?:\/\//i.test(limpio) ? limpio : `https://${limpio}`;
  try {
    return new URL(conProtocolo).toString().replace(/\/+$/, "");
  } catch {
    return respaldo;
  }
}

/** URL pública del sitio, absoluta y sin barra final. */
export const urlSitio = leerUrl(process.env.NEXT_PUBLIC_URL_SITIO, RESPALDO);

/**
 * A dónde manda el botón principal. Se separa de `urlSitio` porque hoy el
 * dominio ya sirve la plataforma: mientras se decide si el sitio personal va
 * en la raíz o en un subdominio, esta variable es lo único que hay que mover.
 * Acepta una ruta interna como `/becas` para cuando la plataforma viva dentro.
 */
export const urlPlataforma = leerUrl(process.env.NEXT_PUBLIC_URL_PLATAFORMA, RESPALDO, {
  permitirRuta: true,
});

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
