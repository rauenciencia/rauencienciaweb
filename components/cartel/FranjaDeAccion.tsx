import Link from "next/link";

import type { Tinta } from "@/content/tipos";
import { Flecha } from "./Flecha";
import { tintas } from "./tintas";

type Props = {
  href: string;
  children: React.ReactNode;
  /** Segunda línea, más chica: el detalle que quita la duda antes del clic. */
  nota?: string;
  tinta?: Tinta;
  externo?: boolean;
  className?: string;
};

/**
 * La acción principal, impresa como una franja de tinta.
 *
 * La capa de tinta vive detrás del texto y es la que se sale de registro al
 * pasar el cursor o al enfocar con teclado: lo que se mueve es la plancha,
 * nunca las letras que alguien está leyendo.
 */
export function FranjaDeAccion({
  href,
  children,
  nota,
  tinta = "tinta",
  externo = false,
  className = "",
}: Props) {
  const paleta = tintas[tinta];
  const Etiqueta = externo ? "a" : Link;
  const props = externo ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };

  return (
    <Etiqueta
      {...(props as { href: string })}
      className={`grupo-tinta relative isolate inline-flex w-full max-w-[34rem] flex-col gap-1 px-6 py-5 no-underline sm:px-8 sm:py-6 ${paleta.texto} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`desfase absolute inset-0 -z-10 ${paleta.fondo}`}
      />
      <span className="cartel flex items-center justify-between gap-4 text-[clamp(1.75rem,6vw,2.75rem)] leading-none">
        {children}
        <Flecha className="h-[0.7em] w-[0.7em] shrink-0" />
      </span>
      {nota ? <span className={`text-sm sm:text-base ${paleta.tenue}`}>{nota}</span> : null}
    </Etiqueta>
  );
}
