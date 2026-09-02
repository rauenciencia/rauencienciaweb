import Image from "next/image";

import { perfil } from "@/content/perfil";

/**
 * El retrato.
 *
 * Mientras el archivo no exista, no se inventa una silueta ni se pone un
 * marcador de posición gris: se imprime el recuadro con la instrucción de qué
 * archivo falta. Es honesto en pantalla y es imposible de olvidar antes de
 * publicar.
 */
export function Retrato({ className = "" }: { className?: string }) {
  if (perfil.retrato.porConfirmar) {
    return (
      <div
        className={`campo-azul trama flex aspect-[4/5] w-full flex-col justify-between border-[3px] border-tinta bg-papel-hueco p-6 ${className}`}
      >
        <p className="rotulo text-xs">Falta el retrato</p>
        <p className="cartel text-[clamp(1.5rem,4vw,2.25rem)] leading-none">
          Deja tu foto en <br />
          public/retrato.jpg
        </p>
        <p className="text-sm leading-snug">
          Vertical, mínimo 1200 px de alto. Después quita <code>porConfirmar</code> en{" "}
          <code>content/perfil.ts</code> y esta caja desaparece sola.
        </p>
      </div>
    );
  }

  return (
    <Image
      src={perfil.retrato.src}
      alt={perfil.retrato.alt}
      width={1000}
      height={1250}
      priority
      className={`aspect-[4/5] w-full border-[3px] border-tinta object-cover ${className}`}
    />
  );
}
