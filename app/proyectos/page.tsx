import Link from "next/link";

import { CampoDeTinta } from "@/components/cartel/CampoDeTinta";
import { Flecha } from "@/components/cartel/Flecha";
import { Rotulo } from "@/components/cartel/Rotulo";
import { proyectos } from "@/content/proyectos";
import { metadatos } from "@/lib/seo";

export const metadata = metadatos({
  titulo: "Proyectos",
  descripcion:
    "Las cosas que he construido: Becas para Migajear y el simulador de decisiones para ferias.",
  ruta: "/proyectos",
});

export default function Proyectos() {
  return (
    <>
      <CampoDeTinta className="pt-10 sm:pt-14">
        <div className="flex flex-col gap-8">
          <h1 className="cartel text-titular max-w-[10ch]">Lo que he construido</h1>
          <p className="prosa text-lg leading-snug font-medium sm:text-2xl">
            Herramientas que existen porque me hicieron falta a mí primero.
          </p>
        </div>
      </CampoDeTinta>

      {/* Cada proyecto es un campo entero, con su propia tinta. No hay grilla
          de tarjetas iguales: un proyecto ocupa el ancho del pliego. */}
      {proyectos.map((proyecto) => (
        <CampoDeTinta key={proyecto.slug} tinta={proyecto.tinta} trama={proyecto.tinta !== "tinta"}>
          <Link
            href={`/proyectos/${proyecto.slug}`}
            className="group grid gap-6 no-underline lg:grid-cols-[1.3fr_1fr] lg:gap-14"
          >
            <div className="flex flex-col gap-5">
              <h2 className="cartel text-rotulo max-w-[14ch] group-hover:underline decoration-[5px] underline-offset-[8px]">
                {proyecto.nombre}
              </h2>
              <Rotulo>
                {proyecto.anio} · {proyecto.estado}
              </Rotulo>
              <p className="prosa text-lg leading-snug font-medium sm:text-xl">{proyecto.resumen}</p>
              <span className="rotulo mt-2 flex items-center gap-3 text-sm">
                Ver el proyecto
                <Flecha className="h-4 w-4" />
              </span>
            </div>

            {proyecto.cifras.length > 0 ? (
              <ul className="flex flex-col self-end">
                {proyecto.cifras.map((cifra) => (
                  <li
                    key={cifra.concepto}
                    className="flex items-baseline justify-between gap-4 border-t-[3px] border-current py-3 last:border-b-[3px]"
                  >
                    <span className="cifra text-[clamp(1.8rem,5vw,2.6rem)] leading-none">
                      {cifra.numero}
                    </span>
                    <span className="text-right text-sm leading-snug sm:text-base">
                      {cifra.concepto}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </Link>
        </CampoDeTinta>
      ))}
    </>
  );
}
