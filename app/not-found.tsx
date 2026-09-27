import Link from "next/link";

import { CampoDeTinta } from "@/components/cartel/CampoDeTinta";
import { FranjaDeAccion } from "@/components/cartel/FranjaDeAccion";
import { Rotulo } from "@/components/cartel/Rotulo";
import { urlPlataforma } from "@/lib/sitio";

export default function NoEncontrado() {
  return (
    <CampoDeTinta tinta="durazno" trama className="min-h-[70dvh] pt-14">
      <div className="flex flex-col gap-8">
        <h1 className="cartel text-titular max-w-[12ch]">Esta convocatoria ya cerró</h1>
        <Rotulo>Error 404</Rotulo>
        <p className="prosa text-lg leading-snug font-medium sm:text-2xl">
          La página que buscabas no existe o cambió de dirección. Las que sí siguen abiertas están
          acá abajo.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <FranjaDeAccion href={urlPlataforma} tinta="tinta" externo className="sm:w-auto">
            Buscar becas
          </FranjaDeAccion>
          <Link
            href="/"
            className="rotulo text-sm underline decoration-[3px] underline-offset-[6px] hover:no-underline"
          >
            Volver a la portada
          </Link>
        </div>
      </div>
    </CampoDeTinta>
  );
}
