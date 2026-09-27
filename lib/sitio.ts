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

/**
 * Navegación principal (brief 5). "Becas" apunta a la plataforma mientras
 * no esté montada en /becas; cuando lo esté, basta con cambiar
 * NEXT_PUBLIC_URL_PLATAFORMA a "/becas".
 */
export const navegacion = [
  { rotulo: "Becas", href: urlPlataforma },
  { rotulo: "Charlas", href: "/charlas" },
  { rotulo: "Agenda", href: "/agenda" },
  { rotulo: "Asesorías", href: "/asesorias" },
] as const;

export const aprende = [
  { rotulo: "Escuelita Migajera", href: "/escuelita", detalle: "Talleres para ganar becas desde cero" },
  { rotulo: "Recursos gratis", href: "/recursos", detalle: "Roadmap, guías y plantillas" },
  { rotulo: "Tienda", href: "/recursos#tienda", detalle: "CV y Carta Migajera" },
  { rotulo: "Causas que promuevo", href: "/causas", detalle: "Educación, ciencia, IA e inclusión" },
] as const;

export const navegacionFinal = { rotulo: "Sobre mí", href: "/sobre-mi" } as const;

export const sitio = {
  nombre: perfil.nombre,
  titulo: `${perfil.nombre} · ${perfil.alias}`,
  descripcion: perfil.bioCorta,
  idioma: "es-PE",
} as const;

/**
 * Clave con la que se recuerda el anuncio cerrado. Vive aquí, en un módulo
 * común, porque la usan el servidor (el guion previo al pintado) y el cliente
 * (el botón de cerrar). Exportada desde un archivo "use client" le llegaría
 * al servidor como referencia y no como texto.
 */
export const CLAVE_ANUNCIO = "rau_anuncio_cerrado";
