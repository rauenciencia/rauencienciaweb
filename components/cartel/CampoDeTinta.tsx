import type { ReactNode } from "react";

import type { Tinta } from "@/content/tipos";
import { tintas } from "./tintas";

type Props = {
  tinta?: Tinta;
  /** El semitono de la prensa. Solo sobre tinta, nunca sobre papel limpio. */
  trama?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Un campo de tinta: una banda de color que ocupa todo el ancho del pliego.
 * Es la unidad de composición del sitio. No hay tarjetas; hay campos.
 */
export function CampoDeTinta({ tinta, trama = false, id, className = "", children }: Props) {
  const paleta = tinta ? tintas[tinta] : null;

  return (
    <section
      id={id}
      className={[
        "relative w-full px-5 py-pliego sm:px-8",
        paleta ? `${paleta.fondo} ${paleta.texto}` : "bg-papel text-tinta",
        tinta === "azul" || tinta === "tinta" ? "campo-azul" : "",
        trama ? "trama" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full max-w-[78rem]">{children}</div>
    </section>
  );
}
