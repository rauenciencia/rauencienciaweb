import type { ReactNode } from "react";

/**
 * El rótulo que la serigrafía imprime al borde del campo: pequeño, en
 * versalitas, separado por una regla gruesa. Marca de qué trata la banda.
 *
 * No es un "eyebrow" sobre un titular: es el rótulo del campo, y va solo.
 */
export function Rotulo({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`rotulo flex items-center gap-3 text-sm sm:text-base ${className}`}>
      <span className="inline-block h-[3px] w-8 bg-current sm:w-12" aria-hidden="true" />
      {children}
    </p>
  );
}
