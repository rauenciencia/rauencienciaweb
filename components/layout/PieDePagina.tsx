import Link from "next/link";

import { perfil } from "@/content/perfil";
import { Rotulo } from "@/components/cartel/Rotulo";
import { navegacion } from "@/lib/sitio";

/**
 * El pie del pliego: dónde encontrarlo y quién lo imprimió. Las redes se
 * dicen con palabras en la voz del cartel, no con logotipos: un cartel
 * serigrafiado escribe el nombre, no pega el ícono.
 */
export function PieDePagina() {
  const anio = new Date().getFullYear();

  return (
    <footer className="campo-oscuro bg-tinta px-5 py-pliego text-papel sm:px-8">
      <div className="mx-auto flex w-full max-w-[78rem] flex-col gap-12">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Rotulo>Dónde encontrarme</Rotulo>
            <ul className="flex flex-col gap-1">
              {perfil.redes.map((red) => (
                <li key={red.nombre}>
                  <a
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cartel text-[clamp(1.6rem,5vw,2.4rem)] leading-tight text-papel no-underline transition-colors hover:text-durazno"
                  >
                    {red.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <Rotulo>Secciones</Rotulo>
            <ul className="flex flex-col gap-2">
              {navegacion.map((seccion) => (
                <li key={seccion.href}>
                  <Link href={seccion.href} className="text-papel/80 hover:text-papel">
                    {seccion.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <Rotulo>Escríbeme</Rotulo>
            <a
              href={`mailto:${perfil.correo}`}
              className="break-all text-papel/80 hover:text-papel"
            >
              {perfil.correo}
            </a>
          </div>
        </div>

        <p className="rotulo border-t-[3px] border-papel/30 pt-6 text-xs text-papel/60">
          {perfil.nombre} · {perfil.handle} · Lima, Perú · {anio}
        </p>
      </div>
    </footer>
  );
}
