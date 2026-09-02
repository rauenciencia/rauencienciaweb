import type { Cobertura } from "@/content/tipos";
import { Flecha } from "@/components/cartel/Flecha";

/**
 * La prensa, impresa como una lista de renglones, no como una fila de
 * logotipos en gris. Lo que convence no es la marca del medio: es el titular
 * que escribieron.
 */
export function ListaPrensa({ coberturas }: { coberturas: readonly Cobertura[] }) {
  return (
    <ul className="flex flex-col">
      {coberturas.map((cobertura) => (
        <li key={cobertura.url} className="border-t-[3px] border-current last:border-b-[3px]">
          <a
            href={cobertura.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 py-6 no-underline sm:flex-row sm:items-baseline sm:gap-8"
          >
            <span className="cartel shrink-0 text-[clamp(1.4rem,4vw,2rem)] leading-none sm:w-56">
              {cobertura.medio}
            </span>
            <span className="flex-1 text-base leading-snug group-hover:underline sm:text-lg">
              {cobertura.titular}
            </span>
            <span className="rotulo flex shrink-0 items-center gap-2 text-xs opacity-90">
              {cobertura.fecha}
              <Flecha direccion="arriba-derecha" className="h-4 w-4" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
