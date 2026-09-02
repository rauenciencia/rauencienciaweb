import type { Hito } from "@/content/tipos";
import { tintas } from "@/components/cartel/tintas";

/**
 * La trayectoria, impresa como una columna de renglones con la marca de tinta
 * al margen. No es una línea con puntitos: es el registro de una prensa, una
 * marca de color por cada pasada.
 */
export function LineaDeTiempo({ hitos }: { hitos: readonly Hito[] }) {
  return (
    <ol className="flex flex-col">
      {hitos.map((hito) => {
        const paleta = tintas[hito.tinta ?? "tinta"];
        return (
          <li
            key={hito.titulo}
            className="grid gap-3 border-t-[3px] border-tinta py-7 last:border-b-[3px] sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <div className="flex items-start gap-3">
              <span
                className={`mt-[0.35em] inline-block h-4 w-4 shrink-0 ${paleta.fondo}`}
                aria-hidden="true"
              />
              <span className="cartel text-[clamp(1.5rem,4vw,2.1rem)] leading-none">
                {hito.anio}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="cartel text-[clamp(1.4rem,3.5vw,1.9rem)] leading-none">
                {hito.titulo}
              </h3>
              <p className="prosa leading-relaxed">{hito.detalle}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
