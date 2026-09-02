import type { Cifra } from "@/content/tipos";

/**
 * La tira de cifras del pie del cartel: los flecos que alguien arranca para
 * llevarse el dato. Cada número trae su fuente impresa debajo, porque una
 * cifra sin fuente en este sitio no se publica.
 */
export function TiraDeCifras({ cifras }: { cifras: readonly Cifra[] }) {
  if (cifras.length === 0) return null;

  return (
    <ul className="grid w-full grid-cols-1 border-t-[3px] border-current sm:grid-cols-3">
      {cifras.map((cifra, indice) => (
        <li
          key={cifra.concepto}
          className={[
            "flex flex-col gap-1 py-6 pr-4",
            indice > 0 ? "border-t-[3px] border-current sm:border-t-0 sm:border-l-[3px] sm:pl-6" : "",
          ].join(" ")}
        >
          <span className="cifra text-cifra">{cifra.numero}</span>
          <span className="text-base leading-snug font-medium sm:text-lg">{cifra.concepto}</span>
          <span className="rotulo text-[0.7rem] opacity-90">Fuente: {cifra.fuente}</span>
        </li>
      ))}
    </ul>
  );
}
