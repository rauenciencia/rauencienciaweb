"use client";

import { Megaphone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { CLAVE_ANUNCIO } from "@/lib/sitio";

type Props = { texto: string; textoLink: string; link: string | null; id: string };

/**
 * Barra de anuncio sobre el header (brief 5). Se cierra con la X y recuerda
 * el cierre para ESE anuncio: si Raúl cambia el texto, vuelve a aparecer.
 *
 * Para que un anuncio ya cerrado no parpadee al cargar, el layout corre un
 * script mínimo antes de pintar que marca <html data-anuncio-cerrado> y el
 * CSS la oculta desde el primer cuadro.
 */
export function BarraAnuncio({ texto, textoLink, link, id }: Props) {
  const [cerrada, setCerrada] = useState(false);

  if (cerrada) return null;

  const cerrar = () => {
    setCerrada(true);
    try {
      window.localStorage.setItem(CLAVE_ANUNCIO, id);
    } catch {
      // Sin almacenamiento, se cierra solo por esta visita.
    }
  };

  return (
    <div className="barra-anuncio no-imprimir bg-beca text-bosque">
      <div className="mx-auto flex max-w-[78rem] items-center gap-3 px-4 py-2 sm:px-6">
        <Megaphone aria-hidden="true" className="hidden size-4 shrink-0 sm:block" />
        <p className="versalitas flex-1 text-center text-[0.72rem] leading-snug sm:text-xs">
          {texto}{" "}
          {link ? (
            link.startsWith("/") ? (
              <Link href={link} className="whitespace-nowrap underline decoration-2">
                {textoLink} ›
              </Link>
            ) : (
              <a href={link} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap underline decoration-2">
                {textoLink} ›
              </a>
            )
          ) : (
            <span className="whitespace-nowrap opacity-80">{textoLink} (link pendiente)</span>
          )}
        </p>
        <button type="button" onClick={cerrar} aria-label="Cerrar el anuncio" className="grid size-8 shrink-0 place-items-center rounded-full hover:bg-bosque/10">
          <X aria-hidden="true" className="size-4" />
        </button>
      </div>
    </div>
  );
}
