"use client";

import { WhatsApp } from "@/components/ui/IconosRedes";
import { MigoImagen } from "@/components/ui/MigoImagen";

/**
 * Botón flotante de WhatsApp (brief M11): late suave cada 2 s y, al pasar el
 * cursor, MIGO se asoma por detrás. Mientras no haya número en site.json,
 * lleva a /contacto y lo dice, en vez de abrir un WhatsApp sin destinatario.
 */
export function BotonWhatsApp({ numero }: { numero: string | null }) {
  const href = numero
    ? `https://wa.me/${numero}?text=${encodeURIComponent("¡Hola Raúl! 💚 Te escribo desde tu web.")}`
    : "/contacto";

  return (
    <div className="no-imprimir group/wa fixed right-4 bottom-4 z-30 sm:right-6 sm:bottom-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1 bottom-10 translate-y-6 opacity-0 transition-[transform,opacity] duration-300 ease-[var(--ease-suave)] group-hover/wa:translate-y-0 group-hover/wa:opacity-100 group-focus-within/wa:translate-y-0 group-focus-within/wa:opacity-100"
      >
        <MigoImagen pose="code-celular" ancho={64} />
      </div>
      <a
        href={href}
        target={numero ? "_blank" : undefined}
        rel={numero ? "noopener noreferrer" : undefined}
        aria-label={numero ? "Escríbeme por WhatsApp" : "Escríbeme (el número de WhatsApp está pendiente)"}
        className="pulso-suave relative grid size-14 place-items-center rounded-full border-2 border-tinta bg-beca text-bosque shadow-[3px_3px_0_var(--color-tinta)]"
      >
        <WhatsApp className="size-7" />
      </a>
    </div>
  );
}
