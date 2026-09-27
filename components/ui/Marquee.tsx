import type { ReactNode } from "react";

/**
 * Cinta que corre en loop (brief M5): 30 s lineal, se pausa al pasar el
 * cursor o al enfocar un link adentro, y se funde en los bordes. El contenido
 * se duplica una vez para que el loop no tenga corte; la copia está oculta
 * para lectores de pantalla. Con movimiento reducido se queda quieta.
 */
export function Marquee({
  items,
  duracion = 30,
  etiqueta,
  className = "",
}: {
  items: ReactNode[];
  duracion?: number;
  /** Nombre de la lista para lectores de pantalla ("Medios donde salí"). */
  etiqueta: string;
  className?: string;
}) {
  const fila = (copia: boolean) => (
    // La copia va `inert`: ni el lector de pantalla ni el tabulador la visitan dos veces.
    <ul className="flex shrink-0 items-center gap-12 pr-12" inert={copia || undefined} aria-hidden={copia || undefined} aria-label={copia ? undefined : etiqueta}>
      {items.map((item, indice) => (
        <li key={indice} className="shrink-0">
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className}`}
    >
      <div className="marquee-pista flex w-max" style={{ "--marquee-duracion": `${duracion}s` } as React.CSSProperties}>
        {fila(false)}
        {fila(true)}
      </div>
    </div>
  );
}
