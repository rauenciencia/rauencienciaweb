import { fechaLarga, prensa as notas } from "@/lib/contenido";
import type { Cobertura } from "./tipos";

/**
 * LEGADO. La fuente de verdad de la prensa ahora es content/prensa.json.
 * Esto solo adapta los datos para las páginas que todavía no se rehacen.
 */
export const prensa: Cobertura[] = notas.map((nota) => ({
  medio: nota.medio,
  titular: nota.titular,
  url: nota.url,
  fecha: fechaLarga(nota.fecha) ?? "",
}));
