import Link from "next/link";

import { perfil } from "@/content/perfil";
import { navegacion } from "@/lib/sitio";

/**
 * La franja superior del pliego. En un cartel no hay menú desplegable: las
 * secciones están impresas, todas visibles, y en pantallas angostas se leen
 * desplazando el dedo en horizontal.
 */
export function Encabezado() {
  return (
    <header className="campo-azul no-imprimir bg-tinta text-papel">
      <div className="mx-auto flex w-full max-w-[78rem] flex-col gap-3 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:px-8">
        <Link href="/" className="flex flex-col gap-1 no-underline sm:gap-0.5">
          <span className="cartel text-2xl leading-none sm:text-3xl">{perfil.nombre}</span>
          <span className="rotulo text-[0.62rem] text-papel/90 sm:text-[0.68rem]">
            {perfil.oficio}
          </span>
        </Link>

        <nav aria-label="Secciones del sitio" className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <ul className="rotulo flex items-center gap-5 text-sm whitespace-nowrap sm:gap-7">
            {navegacion.map((seccion) => (
              <li key={seccion.href}>
                <Link
                  href={seccion.href}
                  className="text-papel/75 decoration-naranja decoration-[3px] underline-offset-[6px] transition-colors hover:text-papel hover:underline"
                >
                  {seccion.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
